import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Lexend } from "@next/font/google";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${lexend.variable}`}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
export default MyApp;
