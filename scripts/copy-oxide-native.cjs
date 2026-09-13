// Copies the platform-specific native binary into @tailwindcss/oxide's directory
// so that index.js's first require('./tailwindcss-oxide.linux-x64-gnu.node') succeeds.
// On some deployment servers (e.g. bun install), the optional native binary packages
// are installed but the .node file isn't found in the oxide directory itself.
const fs = require("fs");
const path = require("path");

const candidates = [
  "@tailwindcss/oxide-linux-x64-gnu",
  "@tailwindcss/oxide-linux-x64-musl",
];

for (const pkg of candidates) {
  try {
    const pkgDir = path.dirname(require.resolve(pkg + "/package.json"));
    const main = require(pkg + "/package.json").main;
    if (!main) continue;
    const src = path.join(pkgDir, main);
    if (!fs.existsSync(src)) continue;
    const oxideDir = path.dirname(require.resolve("@tailwindcss/oxide/package.json"));
    const dest = path.join(oxideDir, main);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
      console.log("[copy-oxide-native] Copied " + main + " into @tailwindcss/oxide");
    }
  } catch {
    // package not installed on this platform — skip
  }
}
