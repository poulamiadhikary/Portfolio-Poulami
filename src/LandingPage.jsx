import React, { useEffect, useState } from 'react'
import image from '../src/assets/image.png';
import { SiPolestar } from "react-icons/si";
import Marquee from "react-fast-marquee";
import CountUp from 'react-countup';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { FaHeart } from "react-icons/fa";

function LandingPage() {

    const [isCounting, setIsCounting] = useState(true);

    const handleCounting = () => {
        setTimeout(() => {
            setIsCounting(false);
        }, 5000);
    }

    useEffect(() => {

        handleCounting();
    }, []);

    const openLinkedin = (link) => {
        window.open(link, '_blank');
    }

    const openGithub = (link) => {
        window.open(link, '_blank');
    }

    const openMail = (mail) => {
        window.location.href = `mailto: ${mail}`;
    }

    return (
        <>
            <div className='w-full h-auto overflow-hidden '>
                <div className={`h-screen w-full z-50 bg-blue-600 text-white flex justify-center transition-opacity duration-500 ease-in-out items-center ${isCounting === true ? "opacity-100" : "opacity-0 hidden"}`}>
                    <div className='flex justify-center items-center w-[70%] md:w-[40%] py-5 rounded-full border-2 border-white'>
                        <p className='text-xl font-Sinosans'>Loading ... </p>
                        <CountUp
                            className='text-xl font-Sinosans'
                            delay={0.5}
                            start={0}
                            end={100}
                            duration={5}
                            suffix='%' />
                    </div>
                </div>

                <div className={`w-full h-auto flex flex-col justify-start items-center relative transition-transform duration-300 ease-in-out ${isCounting === false ? "block" : "hidden"}`}>
                    <div className='w-full h-20 z-40 bg-white flex justify-center items-center fixed top-0 backdrop-blur-lg bg-white/50'></div>

                    <div className='w-full flex motion-preset-shrink motion-duration-1500 justify-center items-center relative overflow-hidden h-auto px-5 mt-24 rounded-lg'>
                        <p className='absolute text-4xl sm:text-7xl lg:text-9xl top-12 sm:top-20 md:top-28 font-Sinosans'>Poulami Adhikary</p>
                        <img src={image} className=' w-1/2 h-1/2 lg:h-1/3 lg:w-1/3 object-cover saturate-0' />
                        <div className='absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-white to-transparent'></div>
                    </div>

                    <div className='w-full py-3 sm:py-8 flex justify-center items-center font-CsReplika text-sm sm:text-lg lg:text-2xl motion-preset-pop motion-duration-1000'>
                        DevOps Enthusiast | Digital Designer
                    </div>

                    <div className='flex flex-col md:flex-row bg-zinc-800 text-white motion-preset-shrink text-center motion-duration-700 h-auto w-full justify-start items-start'>
                        {/* <h1 className='font-bold font-CsReplika text-xl sm:text-2xl lg:text-3xl cursor-pointer bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent'>About me</h1> */}

                        <div className='md:w-[35%] group w-full h-24 md:h-52 bg-blue-400 flex justify-center items-center font-Montserrat font-bold text-2xl lg:text-5xl relative overflow-hidden'>
                            <div className='h-[80%] w-[5px] rounded-xl bg-white hidden md:block absolute top-0 right-10 group-hover:-translate-y-full transition-transform duration-500 ease-in-out'></div>
                            <div className='w-[80%] h-[5px] rounded-xl bg-white hidden md:block absolute left-0 bottom-8 group-hover:-translate-x-full transition-transform duration-500 ease-in-out'></div>
                            About Me
                        </div>

                        <div className='md:w-[65%] bg-blue-700 h-52 flex flex-col justify-evenly items-center px-5 sm:px-10 lg:px-15'>
                            <p className='font-Montserrat text-[10px] sm:text-[12px] lg:text-sm'>Hi geeks, I'm Poulami Adhikary, a 2nd-year student at Sister Nivedita University, aspiring to make a mark in the tech world. I am a DevOps enthusiast, continuously exploring tools and cloud technologies to streamline and optimize workflows.</p>
                            <p className='font-Montserrat text-[10px] sm:text-[12px] lg:text-sm'> I specialize in creating user-friendly and visually striking interfaces using Figma. In addition to this my web development expertise spans HTML, CSS, Tailwind CSS, JavaScript, React, and programming language include C++, enabling me to build responsive, interactive, and high-performing applications.</p>
                        </div>
                    </div>

                    {/* <div className='flex flex-col motion-preset-shrink sm:px-5 lg:px-24 text-center motion-duration-700 py-2 md:py-5 lg:py-10 gap-3 h-auto w-full justify-center items-center'>
                    <h1 className='font-bold font-CsReplika text-xl sm:text-2xl lg:text-3xl cursor-pointer bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent'>Tech Stack Used Till Date</h1>
                    <div className='flex flex-wrap justify-center items-center gap-5 w-full h-auto py-5'>

                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-orange-500 rounded-full blur-xl'></div>
                            <p className='z-30'>HTML</p>
                        </div>
                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-blue-700 rounded-full blur-xl'></div>
                            <p className='z-30'>CSS</p>
                        </div>
                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-yellow-500 rounded-full blur-xl'></div>
                            <p className='z-30'>JS</p>
                        </div>
                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-blue-300 rounded-full blur-xl'></div>
                            <p className='z-30'>Tailwind</p>
                        </div>
                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-blue-600 rounded-full blur-xl'></div>
                            <p className='z-30'>React</p>
                        </div>
                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-pink-500 rounded-full blur-xl'></div>
                            <p className='z-30'>Figma</p>
                        </div>
                        <div className='group duration-300 ease-in-out h-20 w-20 lg:w-28 lg:font-bold bg-gray-300 text-black flex justify-center overflow-hidden items-center font-Montserrat text-sm cursor-pointer relative rounded-md'>
                            <div className='absolute z-10 w-full h-full -bottom-5 opacity-0 group-hover:opacity-100 duration-300 ease-in-out -right-8 bg-blue-800 rounded-full blur-xl'></div>
                            <p className='z-30'>C++</p>
                        </div>
                    </div>
                </div> */}

                    {/* <div className='flex flex-col motion-preset-shrink sm:px-5 lg:px-10 text-center motion-duration-700 py-5 md:py-5 lg:py-10 gap-3 h-auto w-full justify-center items-center'>
                    <h1 className='font-bold font-CsReplika text-xl sm:text-2xl lg:text-3xl cursor-pointer bg-gradient-to-r from-blue-500 to-teal-600 bg-clip-text text-transparent'>Achievements</h1>
                    <div className='h-auto w-full flex flex-col md:flex-row justify-evenly items-center gap-5 py-10'>
                        <div className='w-[80%] h-44 relative sm:h-52 lg:h-60 overflow-hidden bg-gradient-to-br from-black to-blue-500 rounded-lg flex flex-col justify-start items-start px-5 py-5'>
                            <p className='text-white tracking-widest text-lg lg:text-3xl flex justify-center items-center gap-2'>Events <MdOutlineEmojiEvents /></p>
                            <div className='flex text-white text-sm py-2 lg:py-5 justify-start items-start gap-3 w-full h-auto'>
                               <SiPolestar className='text-xl'/>
                                <div className='w-full break-words h-auto text-start'>
                                    Organized several events in SNU.
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] h-44 relative sm:h-52 lg:h-60 overflow-hidden bg-gradient-to-br from-black to-emerald-500 rounded-lg flex flex-col justify-start items-start px-5 py-5'>
                            <p className='text-white tracking-widest text-lg lg:text-3xl flex justify-center items-center gap-4'>Hackathons <FaCode /></p>
                            <div className='flex text-white text-sm py-2 lg:py-5 justify-start items-start gap-3 w-full h-auto'>
                               <SiPolestar className='text-xl'/>
                                <div className='w-full break-words h-auto text-start'>
                                    I had been a part of Smart India Hackathon 2024 and contributed 
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}

                    <div className='w-full h-32 bg-zinc-900 relative flex justify-center items-center'>
                        <Marquee className='text-white' pauseOnHover="true" speed={100} loop={0} >
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>C++ </p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'><SiPolestar /></p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>HTML</p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'><SiPolestar /></p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>CSS</p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'><SiPolestar /></p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>JavaScript</p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'><SiPolestar /></p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>Tailwind</p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'><SiPolestar /></p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>Figma</p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'><SiPolestar /></p>
                            <p className='font-bold font-Montserrat text-2xl md:text-4xl mr-10'>ReactJs</p>
                        </Marquee>

                    </div>

                    <div className='h-auto w-full flex flex-col justify-start items-center py-5 pt-14 lg:pt-24 px-5 md:px-10 md:py-10'>
                        <div className='h-full py-4 md:py-12 sm:pb-10 px-5 lg:px-16 w-[80%] border-4 border-blue-500 rounded-xl duration-200 ease-in-out shadow-md hover:shadow-2xl'>
                            <h1 className='text-2xl font-Montserrat text-center md:text-3xl lg:text-5xl font-bold py-5 border-b-2 border-gray-300'>Achievements</h1>

                            <div className='w-full flex flex-col justify-center items-start mt-7'>
                                <div className='h-auto w-full flex justify-start items-center gap-3 font-semibold font-Montserrat text-sm md:text-lg lg:text-2xl'><SiPolestar className='motion-preset-spin motion-duration-2000' />Smart India Hackathon 2024</div>
                                <p className='text-[8px] md:text-[10px] lg:text-[15px]'>Contributed significantly to the team's success by designing intuitive UI layouts, creating interactive prototypes, and developing robust frontend code to bring ideas to life.</p>
                            </div>

                            <div className='w-full flex flex-col justify-center items-start mt-7'>
                                <div className='h-auto w-full flex justify-start items-center gap-3 font-semibold font-Montserrat text-sm md:text-lg lg:text-2xl'><SiPolestar className='motion-preset-spin motion-duration-2000' />FrostHack Hackathon</div>
                                <p className='text-[8px] md:text-[10px] lg:text-[15px]'>Collaborated with a team to innovative blockchain-based project, leveraging cutting-edge technology to deliver a secure and efficient software. </p>
                            </div>

                            <div className='w-full flex flex-col justify-center items-start mt-7'>
                                <div className='h-auto w-full flex justify-start items-center gap-3 font-semibold font-Montserrat text-sm md:text-lg lg:text-2xl'><SiPolestar className='motion-preset-spin motion-duration-2000' />SNU Event Organising</div>
                                <p className='text-[8px] md:text-[10px] lg:text-[15px]'>Successfully hosted a college event featuring renowned fashion influencer Rohit Bose as the guest. Managed the event flow and ensured an engaging experience for the audience.</p>
                            </div>
                        </div>

                    </div>

                    <div className='w-full h-auto px-5 py-11 lg:py-16 flex justify-center items-center'>
                        <div className='w-[80%] lg:h-16 bg-transparent lg:bg-black rounded-full px-2 py-2 flex flex-col gap-3 lg:flex-row justify-center lg:justify-evenly items-center'>
                            <div className='w-full md:w-1/2 py-3 bg-blue-500 rounded-full cursor-pointer text-white flex justify-center items-center gap-2 hover:bg-blue-600 duration-200 ease-in-out' onClick={() => openLinkedin('https://www.linkedin.com/in/poulami-adhikary-b9154b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}><FaLinkedin /> Connect on LinkedIn</div>
                            <div className='w-full md:w-1/2 py-3 bg-black rounded-full hover:bg-zinc-800 duration-200 ease-in-out text-white flex justify-center items-center gap-2 cursor-pointer' onClick={() => openGithub('https://github.com/poulamiadhikary')}><FaGithub />Visit my github <MdOutlineArrowForward className='-rotate-45' /></div>
                            <div className='w-full md:w-1/2 py-3 bg-red-500 rounded-full cursor-pointer text-white flex justify-center items-center gap-2 hover:bg-red-600 duration-200 ease-in-out' onClick={() => openMail('poulamiadhikary18@gmail.com')}><SiGmail /> Mail me here</div>
                        </div>
                    </div>

                    <div className=' text-xl w-full h-20 flex justify-center items-center'>
                        <p className='flex justify-center items-center gap-2 text-center group italic opacity-60 cursor-pointer'>Made with <FaHeart className='group-hover:text-pink-700 duration-200 ease-in-out group-hover:opacity-100' /></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPage
