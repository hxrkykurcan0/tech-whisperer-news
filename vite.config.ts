// Set NAPI_RS_NATIVE_LIBRARY_PATH before importing the TanStack Start config,
// which transitively imports @tailwindcss/oxide. On some deployment servers the
// native binary auto-detection fails and falls back to the WebAssembly path,
// which tries to allocate ~1GB of WASM memory and crashes.
// Using dynamic import + top-level await ensures the env var is set first.
import { join, dirname } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

function setNativeLibPath() {
  if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH) return;
  const candidates = [
    "@tailwindcss/oxide-linux-x64-gnu",
    "@tailwindcss/oxide-linux-x64-musl",
  ];
  for (const pkg of candidates) {
    try {
      const pkgJson = require.resolve(`${pkg}/package.json`);
      const main = require(pkg).main || "tailwindcss-oxide.linux-x64-gnu.node";
      process.env.NAPI_RS_NATIVE_LIBRARY_PATH = join(dirname(pkgJson), main);
      return;
    } catch {
      // try next
    }
  }
}

setNativeLibPath();

const { defineConfig } = await import("@lovable.dev/vite-tanstack-config");

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
