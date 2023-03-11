/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";
import { useState, useEffect } from "react";
import {
  AppShell,
  BackgroundImage,
  Button,
  Stack,
  Title,
  Image,
  Alert,
  Container,
  Flex,
} from "@mantine/core";
import * as Web3 from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconAlertCircle, IconCheck } from "@tabler/icons";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
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
      <Header></Header>

      <div className="content-center justify-center w-screen h-screen pt-24 md:pt-48 lg:pt-48 xl:pt-48">
        <Stack align="center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl  font-poppins text-center pb-36 font-light">
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
          <Image
            className=" pt-16 md:pt-32 animate-slide-left  !object-cover sm:h-full  "
            src="/graphic.png"
            alt="no"
            
          />
        </Stack>
      </div>
      <h2 className="text-white px-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  font-poppins text-left py-10">
        Typescript{" "}
        <span style={{ color: "#42FFC9", fontWeight: "bold" }}>SDK</span>
      </h2>
      <Sdkdiv />

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
