import { type NextRequest } from 'next/server'

export const dynamic = 'force-static'

export async function GET(request: NextRequest) {
  const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml
`.trim()

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}