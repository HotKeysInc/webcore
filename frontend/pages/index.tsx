/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { Image } from "@mantine/core";

import { useWallet } from "@solana/wallet-adapter-react";

import Head from "next/head";
import { Header } from "../components/Header";
import { Sdkdiv } from "../components/sdkdiv";
import { Footer } from "../components/Footer";

const Home: NextPage = (props) => {
  const { publicKey } = useWallet();

  const [words, setWords] = useState([
    "professionals.",
    "creators.",
    "owners.",
    "developers.",
    "artists.",
    "gamers.",
    "designers.",
  ]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [words]);

  return (
    <>
      <Head>
        <title>Hotkeys</title>
        <meta
          name="description"
          content="software key solution for professionals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iconhk.png" />
      </Head>

      <Header />

      <div className="flex flex-col h-screen w-screen justify-center px-10">
        <img
          src="grad.png"
          className="w-full h-full absolute top-0 left-0 z-4"
          alt="no"
        />
        <h1 className=" text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins text-center z-10 pb-24 md:pb-48  lg:pb-48  xl:pb-48 font-light font-poppins">
          One step software key solution
          <br /> for{" "}
          <span
            style={{
              color: "#42FFC9",
              textDecoration: "underline",
              textAlign: "start",
            }}
          >
            {words[currentWordIndex]}
          </span>
        </h1>
      </div>

      <div className="h-screen flex flex-col ">
        <h2 className="text-white px-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  font-poppins text-left py-10">
          Typescript{" "}
          <span style={{ color: "#42FFC9", fontWeight: "bold" }}>SDK</span>
        </h2>
        <Sdkdiv />
      </div>

      {/* <h3 className="font-poppins text-2xl  md:text-2xl lg:text-3xl xl:text-4xl font-extralight text-center text-[#42FFC9] pt-36 italic">
        companies onboarded
      </h3>
      <Image src="fake.png" alt="no" className="pt-16"></Image>
      <br></br> */}

      <Footer></Footer>
      <div className="h-70 bg-[#42FFC9] flex justify-center items-center text-black font-bold">
        HotKeys
      </div>
    </>
  );
};

export default Home;
