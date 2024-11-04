'use client'
import React, { useState } from "react";
import { HowDoesItWorkTabs } from "@/components/HowDoesItWorkTabs";

export default function Home() {

  const [selectedItem, setSelectedItem] = useState<null|number>(null)

  return (
    <div>
      
      <div className="pb-5 flex flex-col-reverse lg:flex-row pt-10 lg:pt-0 justify-start lg:justify-center items-center min-h-screen w-full bg-[#111]">
        <div className="w-full lg:w-2/5 h-full flex flex-col justify-center items-start pl-5 md:pl-32 pr-5 lg:pr-0">
          <div className="font-bold text-[#eee] text-5xl sm:text-7xl">Your Game,</div>
          {/* <div className="font-bold text-[#eee] text-5xl sm:text-7xl">Game,</div> */}
          <div className="font-bold text-[#eee] text-5xl sm:text-7xl">your Wager</div>
          <div className="h-10" />
          <div className="text-[#ddd] text-xl">Implement transparent and provable web3 bets in your multiplayer videogames. Without knowing blockchain development.</div>
          <div className="h-10" />
          <div className="flex gap-5  flex-wrap">
            <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-lg text-sm sm:text-base font-semibold px-5 py-2.5 text-center me-2 mb-2">Getting started</button>
            <button type="button" className="text-white focus:ring-4 focus:outline-none focus:ring-transparent dark:focus:ring-transparent text-sm sm:text-base">developer docs</button>
            {/* <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 rounded-lg text-sm sm:text-lg font-semibold px-5 py-2.5 text-center me-2 mb-2">developer docs</button> */}
            {/* <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-lg font-semibold px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button> */}
            {/* <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-lg font-semibold px-5 py-2.5 text-center me-2 mb-2">Cyan to Blue</button> */}
            {/* <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-lg font-semibold px-5 py-2.5 text-center me-2 mb-2">Purple to Pink</button> */}
            {/* <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-lg font-semibold px-5 py-2.5 text-center me-2 mb-2">Teal to Lime</button> */}
            {/* <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-lg font-semibold px-5 py-2.5 text-center me-2 mb-2">Red to Yellow</button> */}
          </div>
        </div>
        <div className="w-3/5 h-full">
          <div className="flex justify-center items-center h-full">
            <div className="w-52 h-52 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-[#eee]">
        <div className=" pt-20 pl-3 lg:pl-20 pr-3 font-bold text-[#444] text-3xl sm:text-5xl">how does it works?</div>
        <div className="pl-3 lg:pl-20 pr-3 pt-5 text-[#555] text-xl w-full md:w-3/5 ">
          The main idea of Bet3 it's to abstract the major part of the logic needed to implement web3 transactions in your game.
          You simply have to configure and create a new bet, then call the provided functionalities as it's needed. 
        </div>
        <HowDoesItWorkTabs />

      </div>

    </div>
  );
}
