import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Spacer from "@/components/Space";

import "../styles/globals.scss";
import { DefaultSeo, NextSeo } from "next-seo";
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <DefaultSeo
          titleTemplate="%s - Next Page"
          defaultTitle="Next Page"
          description="A simple website with Next.js"
          openGraph={{
            site_name: "ninest",
            type: "website",
          }}
          twitter={{
            handle: "@nn9st",
            site: "@nn9st",
            cardType: "summary_large_image",
          }}
        ></DefaultSeo>
        <Navbar />
        {/* <main className="wrapper"> */}
        <main className="">
          <Component {...pageProps} />

          {/* TODO: footer */}
          <Spacer size="xl"></Spacer>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
