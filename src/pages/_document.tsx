import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* <meta property='og:title' content='NRN News - Latest Updates' />
        <meta property='og:description' content='Get the latest news and updates from NRN News.' />
        <meta property='og:image' content='https://nrn.news/about.png' />
        <meta property='og:type' content='website' /> */}
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-EQKGKP1NZT'
          strategy='afterInteractive'
        />
        <Script id='ga-init' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EQKGKP1NZT');
          `}
        </Script>
      </body>
    </Html>
  )
}
