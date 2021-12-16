import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      {/* <main className="wrapper"> */}
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
