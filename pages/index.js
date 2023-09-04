import Head from "next/head";
import HomePage from "@/src/Screens/HomePage";
// import HomePage from "@/src/old-screens/Home/index";
export default function Home() {
  return (
    <section>
      <Head>
        <title>Blinds</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </section>
  );
}