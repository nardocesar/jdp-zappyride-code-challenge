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
import { mockTheme, pageConfigMock } from "utils/mocks";
import { useBuildTheme as buildTheme } from "providers/hooks";
import { useEffect, useState } from "react";
import { PageTheme } from "providers/hooks/useBuildTheme";
import { PageConfigProvider } from "providers/contexts";
import { PageConfigType } from "types";

type CustomAppProps = { theme: PageTheme; config: PageConfigType };

const MyApp = ({
  Component,
  pageProps,
  theme,
  config,
}: AppProps & CustomAppProps) => {
  const [customTheme, setCustomTheme] = useState<Partial<PageTheme> | null>(
    null
  );
  const [customConfig, setCustomConfig] = useState<PageConfigType | null>(null);

  useEffect(() => {
    setCustomTheme(buildTheme(theme));
    setCustomConfig(config);
  }, [theme, config]);

  return (
    customTheme && (
      <ThemeProvider theme={customTheme}>
        <PageConfigProvider config={customConfig}>
          <PageWrapper>
            <Head>
              <title>JD Power ZappyRide</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderComponent />
            <PageBackground>
              <PageContent>
                <Component {...pageProps} />
              </PageContent>
            </PageBackground>
          </PageWrapper>
        </PageConfigProvider>
      </ThemeProvider>
    )
  );
};

MyApp.getInitialProps = async (
  context: AppContext
): Promise<CustomAppProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx, theme: mockTheme, config: pageConfigMock };
};

export default MyApp;
