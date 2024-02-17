import React from 'react'
import ToDo from '../assets/to-do-carousel.png';
import Break from '../assets/breakwebsite-top.jpeg';
import Tictac from '../assets/tictac-carousel.png';
import ComingSoon from '../assets/cs-carousel.png';
import WorkImg from '../assets/workImg.jpeg';
import LD from '../assets/LDlogo.png';
import Portfolio from '../assets/portfolio.png';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ff66c4]'>Work</p>
                    <p className='py-6'>// Check out some of my latest projects</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Break})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                Website Development - Break Website
                                </span>
                                <div className='pt-8 text-center '>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Tictac})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                Java Application - TicTacToe Game
                                </span>
                                <div className='pt-8 text-center '>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${ToDo})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Java Application - ToDo List
                                </span>
                                <div className='pt-8 text-center '>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${Portfolio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                Website Development - Portfolio Website
                                </span>
                                <div className='pt-8 text-center '>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${ComingSoon})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Coming Soon
                                </span>
                                <div className='pt-8 text-center '>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${ComingSoon})` }} className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Coming Soon
                                </span>
                                <div className='pt-8 text-center '>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work