import type { PageConfigType } from "types";

import { HomeComponent } from "features/home";

interface HomeProps {
  data: PageConfigType;
}

export default function Home({ data }: HomeProps) {
  console.log(data);

  return <HomeComponent />;
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/configuration`);
  const data = await res.json();

  return { props: { data } };
}
