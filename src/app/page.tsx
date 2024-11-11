'use client'
import React, { useState } from "react";
import { HowDoesItWorkTabs } from "@/components/HowDoesItWorkTabs";

import { FaGithub } from "react-icons/fa";

export default function Home() {

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showUnderConstruction, setShowUnderConstruction] = useState(false)

  return (
    <div>
      <div className="bg-[#000]">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">ZKWager</span>
                <div className="text-white font-bold text-xl sm:text-3xl">ZKwager</div>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button onClick={()=>setShowMobileMenu(true)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm/6 font-semibold text-gray-300">How it works</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-300">Features</a>
              <a href="#" className="text-sm/6 font-semibold text-gray-300">Start building</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {/* <a href="#" className="text-sm/6 font-semibold text-gray-300">Log in <span aria-hidden="true">&rarr;</span></a> */}
            </div>
          </nav>
          {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
          {
            showMobileMenu &&
              <div className="lg:hidden" role="dialog" aria-modal="true">
                {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
                  <div className="fixed inset-0 z-50"></div>
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                      <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                          <span className="sr-only">Your Company</span>
                          <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                        <button onClick={()=>{setShowMobileMenu(false)}} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-300">
                          <span className="sr-only">Close menu</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                          <div className="space-y-2 py-6">
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-50">How it works</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-50">Features</a>
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-50">Start building</a>
                          </div>
                          <div className="py-6">
                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-300 hover:bg-gray-50">Log in</a>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
          }
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath:"clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-300 ring-1 ring-gray-100 hover:ring-gray-100">
                We're an open source project. You can <a href="https://github.com/jorgezerpa/zkwager" target="_blank" className="font-semibold text-purple-500"><span className="absolute inset-0" aria-hidden="true"></span>Contribute here<span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold  text-gray-300 sm:text-7xl">Web3 bets for your videogames</h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">Implement transparent and provable blockchain wagers in your games, with no need to write your own smart contracts</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
                <a href="#" className="text-sm/6 font-semibold text-gray-300">Developer docs <span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath:"clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>
      </div>





      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
            <div className=" sm:text-lg text-gray-400">
                <h2 className="mb-4 text-5xl  font-bold text-white max-w-screen-xl mx-auto">How does it works?</h2>
                <div className="max-w-screen-xl mx-auto">
                  <p className="mb-4 font-light max-w-screen-md text-gray-200">The idea of ZKwager it to work as a SCaaS (Smart Contract as a Service) so you can take your game and just "plug-in" the betting functionalities that you need. Here is a quick fly of the basic implementation flow:</p>
                </div>
                <HowDoesItWorkTabs />
            </div>
        </div>
      </section>




      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mb-8 lg:mb-16">
                <h2 className="mb-4 text-5xl  font-bold text-white text-center">Features</h2>
                {/* <p className="mb-4 mx-auto font-light max-w-screen-md text-center">The idea of ZKwager it to work as an SCaaS (Smart Contract as a Service) so you can take your game and just "plug-in" the betting functionalities that you need. Here is a quick fly of the basic implementation flow:</p> */}
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                    </div> */}
                    <h3 className="mb-2 text-xl font-bold text-white">Allow multiple types of digital assets</h3>
                    <p className="text-gray-400">You can bet criptocurrencies like STRK or ETH. Also NFTs and custom tokens created for game's economy.</p>
                </div>
                <div>
                    {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                    </div> */}
                    <h3 className="mb-2 text-xl font-bold text-white">Multiple winners and custom prizes distribution</h3>
                    <p className="text-gray-400">You can set the number of winners of a bet, and assign the percentage of the prizes each one will take.</p>
                </div>
                <div>
                    {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                    </div> */}
                    <h3 className="mb-2 text-xl font-bold text-white">Can be used everywhere!</h3>
                    <p className="text-gray-400">Just like an API. Since we provided just the contracts, you can implement them in any platform (Web, PCs, mobile...) and any game engine you want using any library that allows web3 interaction.</p>
                </div>
                <div>
                    {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                    </div> */}
                    <h3 className="mb-2 text-xl font-bold text-white">Register not just the winners, but any other game data that verifies bet validity</h3>
                    <p className=" text-gray-400">You can make multiple calls in real time to the contracts, to prove any game-related parameters. For example register the number of coins recolected, number of kills, number of matches won, survival time, etc. And finally use such counts to assign the winners.</p>
                </div>
                <div>
                    {/* <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                    </div> */}
                    <h3 className="mb-2 text-xl font-bold text-white">Tournaments mode</h3>
                    <p className="text-gray-400">Aside of players bettings with their own money, you can make use of the validity and provability of our contracts to organize competitions where you, as the house, provide prizes to the winners.</p>
                </div>
            </div>
        </div>
      </section>


      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
            <div className=" sm:text-lg text-gray-400">
                <h2 className="mb-4 text-5xl  font-bold text-white max-w-screen-xl mx-auto">Learn with examples</h2>
                <div className="max-w-screen-xl mx-auto">
                  <p className="mb-4 font-light max-w-screen-md text-gray-200">Aside developer docs, we have a couple of real life (or "real game") examples you can test and follow along their implementation:</p>
                </div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto">
                    <div className="hover:scale-95 transition-all" onClick={()=>setShowUnderConstruction(true)}>
                      <div className="relative w-full h-52 border-gray-300 border-2 rounded-md overflow-hidden">
                        <img src={"/images/tic-tac-toe.png"} style={{ objectFit:"cover", width:"100%", height:"100%" }} />
                      </div>
                      <div >
                        <div className="text-gray-200 font-bold">Tic tac toe</div>
                        <div className="text-gray-300 text-sm">We introduce ZKwager power with one of the simpler games in the world.</div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 hover:scale-95 transition-all" onClick={()=>setShowUnderConstruction(true)}>
                      <div className="relative w-full h-52 bg-gray-300 border-gray-300 border-2 rounded-md overflow-hidden">
                        <img src={"/images/tic-tac-toe-multi.png"} style={{ objectFit:"cover", width:"100%", height:"100%" }} />
                      </div>
                      <div >
                        <div className="text-gray-200 font-bold">Tic tac toe (Best of 3)</div>
                        <div className="text-gray-300 text-sm">Now we implement the basics of counter contract to set the winner in function of more games won.</div>
                      </div>
                    </div>
                    <div className="hover:scale-95 transition-all" onClick={()=>setShowUnderConstruction(true)}>
                      <div className="relative w-full h-52 bg-gray-300 border-gray-300 border-2 rounded-md overflow-hidden">
                        <img src={"/images/coins-collection-platformer.png"} style={{ objectFit:"cover", width:"100%", height:"100%" }} />
                      </div>
                      <div >
                        <div className="text-gray-200 font-bold">Platformer coins collection</div>
                        <div className="text-gray-300 text-sm">here we'll see the real power of Starknet with a high number of contract calls (1 coin taken, one contract call to register it).</div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 hover:scale-95 transition-all" onClick={()=>setShowUnderConstruction(true)}>
                      <div className="relative w-full h-52 bg-gray-300 border-gray-300 border-2 rounded-md overflow-hidden">
                        <img src={"/images/race-game.png"} style={{ objectFit:"cover", width:"100%", height:"100%" }} />
                      </div>
                      <div >
                        <div className="text-gray-200 font-bold">Race game with multiple winners</div>
                        <div className="text-gray-300 text-sm">We will learn how to share the prizes in games with multiple winners, and how to set the percentage each one takes.</div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 hover:scale-95 transition-all" onClick={()=>setShowUnderConstruction(true)}>
                      <div className="relative w-full h-52 bg-gray-300 border-gray-300 border-2 rounded-md overflow-hidden">
                        <img src={"/images/items-collection.png"} style={{ objectFit:"cover", width:"100%", height:"100%" }} />
                      </div>
                      <div >
                        <div className="text-gray-200 font-bold">Object collection 2.0</div>
                        <div className="text-gray-300 text-sm">We can create multiple counters for each object type, and assing a certain weight of each counter on the end result calculation.</div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </section>


      <section className="bg-gray-900">
        <div className="flex justify-center items-center h-screen">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                  <h2 className="mb-4 text-4xl font-bold text-white">Want to contribute?</h2>
                  <FaGithub color="white" className="mx-auto" size={30} />
                  <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Check or Github</a>
              </div>
          </div>
        </div>
      </section>

      
      {
        showUnderConstruction && (
        <div onClick={()=>setShowUnderConstruction(false)} className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-md shadow-md flex flex-col justify-center">
              <div className="h-[150px] relative flex justify-center">
                <img src={"/images/forky-under-construction.png"} style={{ objectFit:"cover", height:"100%" }} />
              </div>
              <div className="text-center text-2xl font-bold">Under construction</div>
              <div className="text-center">We are currently working on this. Stay tunned!</div>
              <div onClick={()=>setShowUnderConstruction(false)} className="mt-3 mx-auto rounded-md bg-purple-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-block">Ok</div>
          </div>
        </div>
        )
      }



    </div>
  );
}
