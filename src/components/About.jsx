import tjImage5 from '../assets/tjImage4.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaBootstrap } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiMongodb } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiPostman } from 'react-icons/si';
import { SiInsomnia } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import resume from '../assets/resume.pdf';

const About = () => {
    return (
        <section className="pt-16" id="about">
            <div className="max-w-7xl mx-auto px-8 md:px-9 lg:px-5 xl:px-14 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-5 mt-5 xl:mt-10">
                <img
                    src={tjImage5}
                    alt="image"
                    className="w-96 sm:w-[26rem] lg:w-[27rem] bg-inherit"
                />
                <div className="flex flex-col lg:flex-row lg:mt-0 gap-14 lg:gap-12 xl:gap-28">
                    <div className="flex flex-row lg:flex-col justify-center items-center gap-7">
                        <a
                            href="https://www.facebook.com/tj.villaluz.3/"
                            target="_blank"
                        >
                            <FaFacebookF className="text-[1.3rem] bg-gradient-to-b lg:bg-gradient-to-r from-[#A7C7E7] to-slate-700 text-white p-[0.35rem] w-10 h-10 rounded-md cursor-pointer" />
                        </a>
                        <a href="https://github.com/thygz" target="_blank">
                            <FaGithub className="text-2xl bg-gradient-to-b lg:bg-gradient-to-r from-[#A7C7E7] to-slate-700 text-white p-[0.35rem] w-10 h-10 rounded-md cursor-pointer" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/teejay-villaluz-1a3248328/"
                            target="_blank"
                        >
                            <FaLinkedinIn className="text-2xl bg-gradient-to-b lg:bg-gradient-to-r from-[#A7C7E7] to-slate-700 text-white p-[0.35rem] w-10 h-10 rounded-md cursor-pointer" />
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-extrabold text-6xl sm:text-7xl text-slate-700 tracking-tighter">
                            about.
                        </h1>
                        <p className="font-light mt-5 xl:mt-7 text-slate-500 text-[1.25rem] lg:text-lg">
                            Web development is quite new to me since I am a
                            career shifter. I worked as an equipment and process
                            engineer for the past 10 years. But web development
                            has always been of great interest to me. I was
                            trained by the{' '}
                            <a
                                href="https://www.facebook.com/groups/685104802630658"
                                target="_blank"
                                className="underline underline-offset-2 font-semibold"
                            >
                                KodeGo
                            </a>{' '}
                            team to be a professional full stack developer and
                            had an internship at{' '}
                            <a
                                href="https://realboss.ai/"
                                target="_blank"
                                className="underline underline-offset-2 font-semibold"
                            >
                                Realboss.ai
                            </a>
                            . Aside from cars and playing guitar, looking out
                            for challenging projects to work on excites me.
                        </p>
                        <p className="font-light mt-8 lg:mt-7 text-slate-600 text-[1.25rem] lg:text-lg">
                            My Mission: Make your products/services attractive
                            to clients and present your business in the most
                            creative way.
                        </p>
                        <button className="w-full min-[550px]:w-44 lg:w-40 py-3 rounded-full border border-slate-700 bg-slate-700 text-white text-lg lg:text-base font-semibold hover:bg-opacity-85 duration-300 active:-translate-y-5 mt-8">
                            <a href={resume} download="TJ_Resume">
                                Download CV
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#A7C7E7] bg-opacity-60 mt-[4.5rem] py-16 md:py-8 lg:py-16">
                <div className="max-w-7xl mx-auto px-8 md:px-9 lg:px-5 xl:px-14 flex flex-col md:flex-row gap-10 md:gap-28 lg:gap-44 xl:gap-56 md:justify-center md:items-center">
                    <div className="flex flex-col gap-3 flex-1">
                        <h1 className="font-bold text-4xl sm:text-3xl lg:text-4xl text-slate-700 tracking-tighter">
                            Tech Stacks
                        </h1>
                        <p className="text-xl sm:text-lg lg:text-xl text-slate-700 font-normal text-opacity-80">
                            Tools that I used when creating your desired website
                        </p>
                    </div>
                    <div className="flex flex-1 justify-center items-center flex-wrap gap-x-[4.5rem] min-[410px]:gap-x-20 md:gap-x-14 lg:gap-x-8 xl:gap-x-10 gap-y-7 md:gap-y-4 lg:gap-y-16 xl:gap-y-16 text-5xl">
                        <FaHtml5 className="text-[#e34c26] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <FaCss3Alt className="text-[#264de4] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <IoLogoJavascript className="text-[#f0db4f] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <FaBootstrap className="text-[#563d7c] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiMongodb className="text-[#4db33d] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <FaReact className="text-[#61dbfb] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <IoLogoNodejs className="text-[#3c873a] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <RiTailwindCssFill className="text-[#4c1d95] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <BiLogoTypescript className="text-[#3178c6] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiPostman className="text-[#ef5b25] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiInsomnia className="text-[#73177e] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiMysql className="text-[#00758f] bg-[#eaf2fa] shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
