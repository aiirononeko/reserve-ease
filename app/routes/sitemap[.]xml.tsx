import { LoaderFunctionArgs } from '@remix-run/cloudflare'
import { createClient } from 'microcms-js-sdk'

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const client = createClient({
    serviceDomain: context.cloudflare.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: context.cloudflare.env.MICROCMS_API_KEY,
  })

  const { contents: blogs } = await client.getList<Blog>({
    endpoint: 'articles',
    queries: {
      fields: ['id', 'updatedAt'],
    },
  })

  const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.reserve-ease.com/</loc>
        <lastmod>2024-08-26</lastmod>
        <priority>1.0</priority>
        <changefreq>daily</changefreq>
      </url>
  ${blogs.map((blog) => {
    return `
      <url>
        <loc>https://www.reserve-ease.com/articles/${blog.id}</loc>
        <lastmod>${blog.updatedAt}</lastmod>
        <priority>1.0</priority>
        <changefreq>daily</changefreq>
      </url>
    `
  })}
    </urlset>
    `

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  })
}
