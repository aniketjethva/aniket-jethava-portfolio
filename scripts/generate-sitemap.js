// Generates public/sitemap.xml and public/robots.txt for the portfolio.
import { writeFileSync } from 'node:fs';

const site = 'https://aniketjethva.github.io/aniket-jethava-portfolio/';
const today = new Date().toISOString().slice(0, 10);

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site}</loc><lastmod>${today}</lastmod></url>
</urlset>
`,
);
writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${site}sitemap.xml\n`);
console.log('sitemap.xml and robots.txt generated');
