export async function GET() {
  return new Response(
    `
      User-agent: *
      Allow: /
      Disallow: /cdn-cgi/

      Sitemap: ${__SITE_URL__}/sitemap.xml
    `
      .trim()
      .replace(/^ {6}/gm, ''),
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    },
  );
}
