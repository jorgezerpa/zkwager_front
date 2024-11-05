'use client'
import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ArgentXIcon from "@/assets/svg/ArgentXIcon"
import MetamaskIcon from "@/assets/svg/MetamaskIcon"
import BraavosIcon from "@/assets/svg/BraavosIcon"
import ContracShakeHandsIcon from "@/assets/svg/contractShakeHandsIcon"
import PrizesIcon from "@/assets/svg/PrizesIcon"
import ControlIcon from "@/assets/svg/GameControlIcon"


export function HowDoesItWorkTabs() {

  const [selectedItem, setSelectedItem] = useState<number>(0)

  const tabsContent:{
    [index: number]: {
      number: string;
      title: string;
      description: string;
    }} = {
    0: {
      number: "01.", 
      title: "Connect Wallets",
      description: "Ask your players to login or connect their wallets to your game, so they can interact with the blockchain."
    },
    1: {
      number: "02.", 
      title: "bet agreement",
      description: "Set the conditions of the bet. This can be pre-programmed or customized by the players. Then all players accept the bet."
    },
    2: {
      number: "03.", 
      title: "Play time!",
      description: "Once the bet is accepted, players can play the game as they normally do. Here you have to implement the contract calls following the logic of your game."
    },
    3: {
      number: "04.", 
      title: "Prizes distribution",
      description: "Once the game is done, The prizes are distributed to the wallets exactly as agreed in the contract before starting the game."
    },
  }

  return (
      <div className="bg-gradient-to-br from-purple-700 to-purple-950 pt-1">
        <div className="relative mx-auto my-14 flex gap-10 w-full justify-center items-center px-3 max-w-[500px]">
          <div className="absolute left-2" onClick={()=>setSelectedItem(selectedItem>0 ? selectedItem-1 : selectedItem)}>
            <MdArrowBackIos />
          </div>
          <div className="w-full flex justify-center items-end">
            <div className="font-bold text-lg xs:text-2xl lg:text-4xl text-gray-200">{ tabsContent[selectedItem].number }</div><div className="text-white font-bold text-base xs:text-xl lg:text-3xl">{ tabsContent[selectedItem].title }</div>
          </div>
          <div className="absolute right-2" onClick={()=>setSelectedItem(selectedItem<3 ? selectedItem+1 : selectedItem)}>
            <MdArrowForwardIos />
          </div>
        </div>
        
        <div className="mx-auto my-14 flex gap-10 w-full justify-center items-center px-3 max-w-[500px]">
          <div className="w-full text-center text-gray-200">
            { tabsContent[selectedItem].description }
          </div>
        </div>

        


        <div className="mt-5 mx-auto flex justify-center px-3 max-w-[900px]">
          <div onClick={()=>setSelectedItem(0)} style={{ transition:".5s all", width:selectedItem===0?"50%":"16.66%", height:250 }}>
            <div className={`h-full flex flex-col items-center justify-center gap-4 bg-white ${selectedItem===0?"bg-opacity-10":"bg-opacity-0"} rounded-lg`}>
              <div className="rounded-full w-[50%] md:w-[15%]">
                <ArgentXIcon />
              </div>
              <div className="rounded-full w-[50%] md:w-[15%]">
                <BraavosIcon />
              </div>
              <div className="rounded-full w-[50%] md:w-[15%]">
                <MetamaskIcon />
              </div>
            </div>
          </div>
          <div onClick={()=>setSelectedItem(1)} className="flex justify-center items-center" style={{ transition:".5s all", width:selectedItem===1?"50%":"16.66%", height:250 }}>
            <div className={`h-full flex flex-col items-center justify-center gap-4 bg-white ${selectedItem===1?"bg-opacity-10":"bg-opacity-0"} rounded-lg`}>
              <ContracShakeHandsIcon />
            </div>
          </div>
          <div onClick={()=>setSelectedItem(2)} className="flex justify-center items-center" style={{ transition:".5s all", width:selectedItem===2?"50%":"16.66%", height:250 }}>
            <div className={`h-full flex flex-col items-center justify-center gap-4 bg-white ${selectedItem===2?"bg-opacity-10":"bg-opacity-0"} rounded-lg`}>
              <ControlIcon />
            </div>
          </div>
          <div onClick={()=>setSelectedItem(3)} className="flex justify-center items-center" style={{ transition:".5s all", width:selectedItem===3?"50%":"16.66%", height:250 }}>
            <div className={`h-full flex flex-col items-center justify-center gap-4 bg-white ${selectedItem===3?"bg-opacity-10":"bg-opacity-0"} rounded-lg`}>
              <PrizesIcon />
            </div>
          </div>
        </div>

        <div className="py-10" />
        

      </div>

  );
}
