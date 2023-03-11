import type { NextPage } from "next";
import Head from "next/head";
import ProfileImage from "../public/images/profile.png";
import Hero from "../components/Hero";
import About from "../components/About";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-primary justify-center ">
      <Head>
        <title>Arshad yaseen</title>
        <link rel="icon" href={ProfileImage.src} /> 
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Home;
