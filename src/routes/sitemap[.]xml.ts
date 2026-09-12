import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import { sitemapStaticPaths, sitemapXML, type SitemapEntry } from "@/lib/sitemap";
import { ARTICLES, CATEGORIES } from "@/lib/articles";
import { listDbArticleSlugs } from "@/lib/db-articles.functions";

const BASE_URL = "https://tech-whisperer-news.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        if (!BASE_URL) {
          return new Response("Sitemap domain not configured", {
            status: 503,
            headers: { "Cache-Control": "no-store" },
          });
        }
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));
        for (const category of CATEGORIES) {
          entries.push({ path: `/kategori/${category.slug}` });
        }
        for (const article of ARTICLES) {
          entries.push({ path: `/haber/${article.slug}` });
        }
        for (const row of await listDbArticleSlugs()) {
          entries.push({
            path: `/haber/${row.slug}`,
            lastmod: new Date(row.published_at).toISOString().slice(0, 10),
          });
        }
        if (entries.length === 0) return new Response(null, { status: 404, headers: { "Cache-Control": "no-store" } });
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
