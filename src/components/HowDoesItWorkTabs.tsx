'use client'
import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

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
      description: "Implement transparent and provable web3 bets in your multiplayer videogames. Without knowing blockchain development."
    },
    1: {
      number: "02.", 
      title: "bet agreement",
      description: "Implement transparent and provable web3 bets in your multiplayer videogames. Without knowing blockchain development."
    },
    2: {
      number: "03.", 
      title: "Play time!",
      description: "Implement transparent and provable web3 bets in your multiplayer videogames. Without knowing blockchain development."
    },
    3: {
      number: "04.", 
      title: "Prizes distribution",
      description: "Implement transparent and provable web3 bets in your multiplayer videogames. Without knowing blockchain development."
    },
  }

  return (
      <div className="bg-[#eee]">
        <div className="relative mx-auto my-14 flex gap-10 w-full justify-center items-center px-3 max-w-[500px]">
          <div className="absolute left-2" onClick={()=>setSelectedItem(selectedItem>0 ? selectedItem-1 : selectedItem)}>
            <MdArrowBackIos />
          </div>
          <div className="w-full flex justify-center items-end">
            <div className="font-bold text-lg xs:text-2xl lg:text-4xl">{ tabsContent[selectedItem].number }</div><div className="font-bold text-base xs:text-xl lg:text-3xl">{ tabsContent[selectedItem].title }</div>
          </div>
          <div className="absolute right-2" onClick={()=>setSelectedItem(selectedItem<3 ? selectedItem+1 : selectedItem)}>
            <MdArrowForwardIos />
          </div>
        </div>
        
        <div className="mx-auto my-14 flex gap-10 w-full justify-center items-center px-3 max-w-[500px]">
          <div className="w-full text-center">
            Implement transparent and provable web3 bets in your multiplayer videogames. Without knowing blockchain development.
          </div>
        </div>

        


        <div className="mt-5 mx-auto flex justify-center px-3 max-w-[900px]">
          <div onClick={()=>setSelectedItem(0)} style={{ transition:".5s all", width:selectedItem===0?"50%":"16.66%", height:250 }}>
            <div className="h-full flex flex-col items-center justify-between">
              <div className="rounded-full w-8 h-8 bg-purple-500"></div>
              <div className="rounded-full w-8 h-8 bg-purple-500"></div>
              <div className="rounded-full w-8 h-8 bg-purple-500"></div>
              <div className="rounded-full w-8 h-8 bg-purple-500"></div>
              <div className="rounded-full w-8 h-8 bg-purple-500"></div>
            </div>
          </div>
          <div onClick={()=>setSelectedItem(1)} className="flex justify-center items-center" style={{ transition:".5s all", width:selectedItem===1?"50%":"16.66%", height:250 }}>
            <div className="w-[50%] h-full bg-orange-700"></div>
          </div>
          <div onClick={()=>setSelectedItem(2)} className="flex justify-center items-center" style={{ transition:".5s all", width:selectedItem===2?"50%":"16.66%", height:250 }}>
            <div className="w-[50%] h-full bg-orange-700"></div>
          </div>
          <div onClick={()=>setSelectedItem(3)} className="flex justify-center items-center" style={{ transition:".5s all", width:selectedItem===3?"50%":"16.66%", height:250 }}>
            <div className="w-[50%] h-full bg-orange-700"></div>
          </div>
        </div>

        <div className="py-10" />

      </div>

  );
}
