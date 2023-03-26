import { HeaderComponent } from "components";
import Head from "next/head";
import { FC } from "react";

export const HomeComponent: FC = () => {
  return (
    <>
      <Head>
        <title>JD Power ZappyRide</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
    </>
  );
};
