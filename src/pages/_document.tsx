import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="NRN News - Latest Updates" />
        <meta property="og:description" content="Get the latest news and updates from NRN News." />
        <meta property="og:image" content="https://nrn.news/about.png" /> 
        <meta property="og:type" content="website" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQKGKP1NZT"></script>

      </body>
    </Html>
  );
}
