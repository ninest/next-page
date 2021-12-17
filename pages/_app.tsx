import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Spacer from "../components/Space";

import "../styles/globals.scss";
// import "../styles/utilities.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <main className="wrapper"> */}
      <main className="">
        <Component {...pageProps} />

        {/* TODO: footer */}
        <Spacer size="xl"></Spacer>
      </main>
    </>
  );
}

export default App;
