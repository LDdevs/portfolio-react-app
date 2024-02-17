import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Lisa from '../assets/lisa2.png';
import lisapic from '../assets/lisapretty.png';

const Home = () => {
    return (

          <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* Colors
                background - #0a192f
                logo - #ff66c4
                social icons - #ff66c4
                text - text-gray-300
            */}

            {/* Container */}
            <div className='flex flex-row max-w-[2000px] mx-auto px-8 justify-center h-full'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>

                <p className='text-[#ff66c4] '>Hey, My name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lisa Downie</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front End Developer.</h2>

                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a passionate front-end developer with a flair for crafting engaging and user-friendly digital experiences. Welcome to my online showcase, where innovation meets design.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff66c4] hover:border-[#ff66c4] '><Link to="work" smooth={true} duration={500} >
                        View Work
                    </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full hidden lg:flex'>
                <img className='rounded-full max-w-[500px] hover:scale-150 hover:rotate-6' src={lisapic} alt="" />
            </div>
</div>
        </div>
    )
}

export default Home