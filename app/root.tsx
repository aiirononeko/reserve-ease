import { LoaderFunctionArgs } from '@remix-run/cloudflare'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import { useEffect } from 'react'
import * as gtag from '~/utils/gtags.client'

import { Footer } from './components/footer'
import { Header } from './components/header'
import './tailwind.css'

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return json({
    gaTrackingId:
      context.cloudflare.env.ENV === 'production'
        ? context.cloudflare.env.GA_TRACKING_ID
        : null,
  })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const { gaTrackingId } = useLoaderData<typeof loader>()

  useEffect(() => {
    if (gaTrackingId?.length) {
      gtag.pageview(location.pathname, gaTrackingId)
    }
  }, [location, gaTrackingId])

  return (
    <html lang='ja'>
      <head>
        {gaTrackingId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id='gtag-init'
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='min-h-screen relative tracking-wider'>
        <Header />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function links() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preload',
      as: 'font',
      href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap',
      crossOrigin: 'anonymous',
    },
    // { rel: "alternate", type: "application/rss+xml", href: "/blog/rss.xml" },
  ]
}
