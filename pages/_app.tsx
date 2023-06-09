import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </ParallaxProvider>
  );
}
