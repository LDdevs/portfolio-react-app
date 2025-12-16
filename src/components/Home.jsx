/* 
NOTE - THIS IS MY MAIN REPO FOR MY WEBSITE!
*/


import React from "react";
import { ChevronDown } from "lucide-react";
import LisaTransparent from "../assets/lisatransglasses.png"; // Background-removed image

const Home = () => {
    return (
        <section
            id="home"
            className="relative w-screen min-h-screen overflow-hidden bg-[#0a192f] text-white pt-24 px-6 lg:px-16"
        >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90 z-0" />

            {/* Content container */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full">

                {/* Left: Text Content */}
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center w-full lg:w-1/2 gap-6">

                    {/* Vertical on desktop, horizontal on mobile */}
                    <div className="text-blue-400 tracking-widest text-xl lg:text-2xl uppercase whitespace-nowrap lg:transform lg:-rotate-90">
                        WEB DEVELOPER
                    </div>

                    {/* Name Text */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-white">
                            <span className="block">LISA</span>
                            <span className="block text-cyan-400 tracking-tight">DOWNIE</span>
                        </h1>
                    </div>
                </div>

                {/* Right: Full-height Image */}
                <div className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
                    <img
                        src={LisaTransparent}
                        alt="Lisa Downie portrait"
                        className="h-[60vh] sm:h-[70vh] lg:h-[80vh] object-contain drop-shadow-[0_0_60px_rgba(0,255,255,0.3)]"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
                <span className="text-xs tracking-widest uppercase mb-1">Scroll</span>
                <ChevronDown className="animate-bounce" size={28} />
            </div>
        </section>
    );
};


export default Home;