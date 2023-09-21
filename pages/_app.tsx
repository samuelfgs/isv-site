import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <PlasmicRootProvider Head={Head}>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ6C4078E6"></script>
          <script dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CZ6C4078E6');
          `}} />
        </Head>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </ParallaxProvider>
  );
}
