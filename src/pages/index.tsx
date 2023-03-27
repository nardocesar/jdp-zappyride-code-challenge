import type { PageConfigType } from "types";

import { HomeComponent } from "features/home";

interface HomeProps {
  data: PageConfigType;
}

const Home = ({ data }: HomeProps) => {
  return <HomeComponent />;
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/configuration`);
  const data = await res.json();

  return { props: { data } };
}

export default Home;
