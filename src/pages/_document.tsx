import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Header />
        <Main />
        <Footer />
        <NextScript />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQKGKP1NZT"></script>

      </body>
    </Html>
  );
}
