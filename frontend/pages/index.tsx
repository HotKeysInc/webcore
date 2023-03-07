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


const Home: NextPage = (props) => {
  const { publicKey } = useWallet();

  const [words, setWords] = useState(["professionals", "creators", "gamers"]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [words]);

  async function Airdropifbroke( // just a way of defining parameters
    signer: Web3.PublicKey,
    connection: Web3.Connection
  ) {
    const balance = await connection.getBalance(signer);
    console.log("Balance: ", balance / Web3.LAMPORTS_PER_SOL, "SOL");
    showNotification({
      id: "load-data",
      loading: true,
      title: "Initiating drop WAGMI 🚀",
      message: "Checking your balance, talking to them solana nodes🤔",
      autoClose: false,
      disallowClose: true,
    });
    //balance check krega

    if (balance / Web3.LAMPORTS_PER_SOL < 1) {
      console.log("Airdropping SOL to account 🚀");

      setTimeout(() => {
        updateNotification({
          id: "load-data",
          color: "teal",
          title: `BALANCE is ${balance / Web3.LAMPORTS_PER_SOL} SOL`,
          message: "Airdropping SOL to account 🚀",
          icon: <IconCheck size={16} />,
          autoClose: 2000,
        });
      }, 3000);

      //this is the sig, which requests the airsrop
      const airdropSignature = await connection.requestAirdrop(
        signer,
        1 * Web3.LAMPORTS_PER_SOL
      );

      //this here gets latest
      const latestblockhash = await connection.getLatestBlockhash();

      //this here confirms the transaction
      await connection.confirmTransaction({
        blockhash: latestblockhash.blockhash,
        lastValidBlockHeight: latestblockhash.lastValidBlockHeight,
        signature: airdropSignature,
      });

      const newBalance = await connection.getBalance(signer);
      console.log(
        "New balance is 🎉",
        newBalance / Web3.LAMPORTS_PER_SOL,
        "SOL"
      );

      return "Airdropping SOL to account 🚀";
    } else {
      setTimeout(() => {
        updateNotification({
          id: "load-data",
          color: "teal",
          title: `BALANCE is ${balance / Web3.LAMPORTS_PER_SOL} SOL`,
          message: "Account already has SOL 💰, dont be greedy, GO BUIDL 🛠️",
          icon: <IconCheck size={16} />,
          autoClose: 5000,
        });
      }, 3000);

      console.log("Account already has SOL 💰, bich dont be greedy");
      return "Account already has SOL 💰, bich dont be greedy";
    }
  }
  

  


  return (
    <>
      <Head>
        <title>🔑Hotkeys</title>
        <meta name="description" content="cross-chain investments made easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/nflogo.png" />
      </Head>
<Header></Header>

      <div className="content-center justify-center w-screen h-screen pt-48">
        <Stack align="center">
          <h1 className="text-white text-2xl md:text-5xl lg:text-6xl xl:text-7xl  font-poppins text-center pb-44 font-light">
            One step software key solution
            <br /> for{" "}
            <span style={{ color: "#42FFC9", textDecoration: "underline", textAlign: "start" }}> 
            {words[currentWordIndex]}
            </span>
          </h1>
          <Image className="pt-32 animate-slide-left" src="/graphic.png" alt="no" />
        </Stack>
      </div>
      <h2 className="text-white px-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  font-poppins text-left py-10">Typescript  <span style={{ color: "#42FFC9", fontWeight: "bold" }}> 
            SDK
            </span></h2>
      <Flex
      mih={50}
      
      gap="xs"
      // mantine mein issue kholna hai
      justify="center"
      align="center"
      direction="row"
      
    >
      <Image src="/code.png" width={600} alt="no" >
      </Image>
      <Stack justify="center" h={497} >
        <div className="bg-[#121212] h-[220px] w-[550px] rounded-md" >
          <h1 className="text-white text-center">syed toh smarty hai</h1>
        </div>
        <div className="bg-[#121212] h-[220px] w-[550px] rounded-md" >
          <h1 className="text-white text-center">syed toh smarty hai</h1>
        </div>
      </Stack>
    </Flex>


    <h3 className="text-white font-poppins text-2xl  md:text-2xl lg:text-3xl xl:text-4xl font-extralight pt-16 text-center text-[#42FFC9] ">companies onboarded</h3>
    <Image src="fake.png"></Image>


    </>
  );
};

export default Home;
