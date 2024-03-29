import React from 'react'
import Lisa from '../assets/lisa2.png';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#ff66c4]'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div  className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>

                        <p id='scroll-reveal'>hello, I'm Lisa, nice to meet you. Please take a look around.</p></div>
                        <div className='font-2xl'>
                            <p>With a strong foundation in HTML, CSS, and JavaScript,
                                I specialize in transforming ideas into responsive and intuitive web applications.
                                My dedication to staying current with the latest trends and technologies ensures that every project
                                I undertake is not just functional but also cutting-edge.</p>
                        </div>
                    {/* <div className='rounded-8xl mx-auto  md:w-full'>
                        <img src={Lisa} alt="Lisa Downie" />
                    </div> */}

                </div>
            </div>
        </div>


    )
}

export default About