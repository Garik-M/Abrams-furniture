import fs from "fs";
import path from "path";

const DOMAIN = "https://abramsfurniture.com";

const routes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/calculator", priority: 0.7, changefreq: "monthly" },
  { path: "/how-it-works", priority: 0.8, changefreq: "monthly" },
  { path: "/materials", priority: 0.8, changefreq: "monthly" },
  { path: "/contact", priority: 0.6, changefreq: "yearly" },
];

function generateSitemap() {
  const urls = routes
    .map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${DOMAIN}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap.trim());

  console.log("✅ sitemap.xml generated");
}

generateSitemap();
