/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { NextPage } from "next";
import { useState, useEffect } from "react";
import { Stack, Image, Flex } from "@mantine/core";
import * as Web3 from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { showNotification, updateNotification } from "@mantine/notifications";
import { IconAlertCircle, IconCheck } from "@tabler/icons";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function Sdkdiv() {
  const { publicKey } = useWallet();

  async function Airdropifbroke( // just a way of defining parameters
    signer: Web3.PublicKey,
    connection: Web3.Connection
  ) {
    const balance = await connection.getBalance(signer);
    console.log("Balance: ", balance / Web3.LAMPORTS_PER_SOL, "SOL");
    showNotification({
      id: "load-data",
      loading: true,
      title: "Initiating drop",
      message: "Checking your balance, talking to them solana nodes๐ค",
      autoClose: false,
      disallowClose: true,
    });
    //balance check krega

    if (balance / Web3.LAMPORTS_PER_SOL < 1) {
      console.log("Airdropping SOL to account ๐");

      setTimeout(() => {
        updateNotification({
          id: "load-data",
          color: "grey",
          title: `BALANCE is ${balance / Web3.LAMPORTS_PER_SOL} SOL`,
          message: "Airdropping SOL to account ๐",
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
        "New balance is ๐",
        newBalance / Web3.LAMPORTS_PER_SOL,
        "SOL"
      );

      return "Airdropping SOL to account ๐";
    } else {
      setTimeout(() => {
        updateNotification({
          id: "load-data",
          color: "grey",
          title: `BALANCE is ${balance / Web3.LAMPORTS_PER_SOL} SOL`,
          message: "Account already has SOL ๐ฐ",
          icon: <IconCheck size={16} />,
          autoClose: 5000,
        });
      }, 3000);

      console.log("Account already has SOL ๐ฐ, bich dont be greedy");
      return "Account already has SOL ๐ฐ, bich dont be greedy";
    }
  }

  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      className="flex-col md:flex-row lg:flex-row xl:flex-row "
    >
      {/* ahdbadkj */}
      <div className="rounded-xl w-4/5 md:w-5/12 lg:w-5/12 xl:w-5/12 h-full bg-[#121212] ">
        <Image src="/code2.png " alt="code"></Image>
      </div>
      <div className="rounded-xl w-4/5 md:w-5/12 lg:w-5/12 xl:w-5/12 h-full bg-[#121212] ">
        <Stack justify="space-around" align="center">
          <h1 className="text-white text-center text-poppins pt-10 text-2xl md:text-4xl lg:text-4xl xl:text-5xl pb-6  font-semibold opacity-90  ">
            Try it out yourself โ๏ธ
          </h1>

          <WalletMultiButton className="![background:linear-gradient(180deg,_#38e7b0_47.4%,_#177656)] !bg-opacity-80 !text-black justify-center content-center items-center text-poppins !font-bold pb-5">
            {/* <span className="text-black font-poppins font-semibold content-center justify-center">Connect Wallet</span> */}
          </WalletMultiButton>

          <h1 className="text-white text-center text-poppins font-normal pt-10  pb-6 opacity-80 text-xl md:text-2xl lg:text-4xl xl:text-4xl ">
            no devnet funds?
            <span className="text-white text-center text-poppins font-semibold pt-10 opacity-90 text-xl md:text-2xl lg:text-4xl xl:text-4xl pb-6  px-1 md:px-3   ">
              get  <br/> some airdropped.
            </span>
            ๐?๏ธ
          </h1>
          <Stack align="center" className="pb-6">
            <span>
              <button
                className="[background:linear-gradient(180deg,_#38e7b0_47.4%,_#177656)]  opacity-[0.8] border-[1px] border-solid border-black text-black font-poppins 
             py-2 px-4 rounded-xl font-bold  mr-5 text-xs md:text-lg lg:text-xl xl:text-xl"
                onClick={async () => {
                  const connection2 = await new Web3.Connection(
                    Web3.clusterApiUrl("devnet")
                  );
                  Airdropifbroke(publicKey, connection2);
                }}
              >
                airdrop โ
              </button>

              <button onClick={()=> {
                window.location.href = 'https://codesandbox.io/p/github/HotKeysInc/sdksandbox'
              }}
                className="bg-white  opacity-[0.8] border-[1px] border-solid border-black text-black font-poppins
             py-2 px-5 rounded-xl font-bold text-xs md:text-lg lg:text-xl xl:text-xl hover:cursor-pointer "
              >
                try out
              </button>
            </span>
          </Stack>
          {/* <WalletMultiButton className="[background:linear-gradient(180deg,_#38e7b0_47.4%,_#177656)]  opacity-[0.8] border-[1px] border-solid border-black text-black font-poppins rounded-xl"></WalletMultiButton> */}
        </Stack>
      </div>
    </Flex>
  );
}
