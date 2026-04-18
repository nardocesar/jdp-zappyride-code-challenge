import Head from "next/head";
import { ThemeProvider } from "styled-components";

import {
  HeaderComponent,
  PageBackground,
  PageContent,
  PageWrapper,
} from "components";

import "styles/globals.css";

import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { mockTheme } from "utils/mocks";
import { useBuildTheme as buildTheme } from "providers/hooks";
import { useEffect, useState } from "react";
import { PageTheme } from "providers/hooks/useBuildTheme";

type CustomAppProps = { config: PageTheme };

const MyApp = ({ Component, pageProps, config }: AppProps & CustomAppProps) => {
  const [theme, setTheme] = useState<Partial<PageTheme>>(mockTheme);

  useEffect(() => {
    const tmptheme = buildTheme(config);
    setTheme(tmptheme);
  }, [setTheme, config]);

  return (
    <ThemeProvider theme={theme}>
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
};

MyApp.getInitialProps = async (
  context: AppContext
): Promise<CustomAppProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, config: mockTheme };
};

export default MyApp;
