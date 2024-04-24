export async function GET() {
  // The routes that should be included in the sitemap, along with their priority
  const routes = [
    {
      loc: '/',
      priority: 1.0,
    },
    // ... more routes
  ];

  const xmlInsert = routes.map(
    (route) => `
      <url>
        <loc>${__SITE_URL__}${route.loc}</loc>
        <priority>${route.priority.toFixed(1)}</priority>
        <lastmod>${__BUILD_TIMESTAMP__}</lastmod>
      </url>
    `,
  );

  return new Response(
    `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
      >
        ${xmlInsert.join('')}
      </urlset>
    `.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    },
  );
}
