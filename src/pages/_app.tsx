import {
  HeaderComponent,
  PageBackground,
  PageContent,
  PageWrapper,
} from "components";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import "styles/globals.css";
import { customTheme } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <PageWrapper>
        <Head>
          <title>JD Power ZappyRide</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderComponent />
        <PageBackground>
          <PageContent>
            <Component {...pageProps} />
          </PageContent>
        </PageBackground>
      </PageWrapper>
    </ThemeProvider>
  );
}
