import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Work from "../components/Work";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prateek Soni</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <Header />
        <About />
        <Work />
      </main>
    </>
  );
};

export default Home;