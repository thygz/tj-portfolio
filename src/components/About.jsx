import tjImage5 from '../assets/tjImage7.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaBootstrap } from 'react-icons/fa6';
import { FaSass } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiPostman } from 'react-icons/si';
import { SiInsomnia } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';

const About = () => {
    return (
        <section className="pb-56" id="about">
            <h1 className="font-bold text-4xl xl:text-[2.5rem] text-center bg-gradient-to-b from-sky-700 to-sky-400 text-transparent bg-clip-text">
                About Me
            </h1>
            <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-1 mt-14">
                <img
                    src={tjImage5}
                    alt="image"
                    className="w-96 xl:w-[30rem] bg-inherit"
                />
                <div className="flex flex-col lg:flex-row max-w-xl lg:max-w-none lg:mt-0 gap-2 lg:gap-14 xl:gap-24">
                    <div className="flex flex-row lg:flex-col justify-center items-center gap-7">
                        <FaFacebookF className="text-[1.3rem] bg-gradient-to-b lg:bg-gradient-to-r from-amber-400 to-sky-500 text-white p-[0.35rem] w-9 h-9 rounded-md cursor-pointer" />
                        <FaGithub className="text-2xl bg-gradient-to-b lg:bg-gradient-to-r from-amber-400 to-sky-500 text-white p-[0.35rem] w-9 h-9 rounded-md cursor-pointer" />
                        <FaLinkedinIn className="text-2xl bg-gradient-to-b lg:bg-gradient-to-r from-amber-400 to-sky-500 text-white p-[0.35rem] w-9 h-9 rounded-md cursor-pointer" />
                    </div>
                    <div className="flex flex-col justify-center items-center lg:items-start">
                        <p className="text-center lg:text-start font-normal mt-8 text-sky-600 text-lg xl:text-xl">
                            Web developing is quite new to me since I am a
                            career shifter. I worked as an Equipment and Process
                            Engineer for the past 10 years. But web development
                            has always been a great interest to me. I was
                            trained by{' '}
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
                                realboss.ai
                            </a>
                            . Aside from cars and playing guitar, looking out
                            for challenging projects to work on excites me.
                        </p>
                        <p className="text-center lg:text-start font-semibold mt-8 text-sky-600 text-lg xl:text-xl">
                            My MISSION: Make your product/services attractive to
                            clients and present your business in the most
                            creative way.
                        </p>
                        <button className="w-32 py-2 rounded-full border border-sky-500 bg-sky-500 text-white text-lg font-semibold hover:bg-white hover:text-sky-500 hover:border-slate-700 hover:border duration-300 mt-8">
                            Resume
                        </button>
                        {/* <div>
                            <h1 className="text-slate-600 font-bold text-xl mt-10">
                                Tech Stack
                            </h1>
                            <div className="flex flex-wrap gap-5 text-5xl mt-5">
                                <FaHtml5 className="text-[#e34c26]" />
                                <FaCss3Alt className="text-[#264de4]" />
                                <IoLogoJavascript className="text-[#f0db4f]" />
                                <FaBootstrap className="text-[#563d7c]" />
                                <FaSass className="text-[#cd6799]" />
                                <FaReact className="text-[#61dbfb]" />
                                <SiMongodb className="text-[#4db33d]" />
                                <IoLogoNodejs className="text-[#3c873a]" />
                                <RiTailwindCssFill className="text-[#4c1d95]" />
                                <SiPostman className="text-[#ef5b25]" />
                                <SiInsomnia className="text-[#73177e]" />
                                <TbBrandNextjs className="text-slate-700" />
                                <SiMysql className="text-[#00758f]" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-5 flex flex-col gap-10 justify-center items-center mt-24">
                <h1 className="font-bold text-3xl bg-gradient-to-b from-slate-700 to-sky-400 text-transparent bg-clip-text">
                    Tech Stacks
                </h1>
                <div className="flex justify-center items-center flex-wrap gap-10 text-5xl">
                    <FaHtml5 className="text-[#e34c26] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <FaCss3Alt className="text-[#264de4] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <IoLogoJavascript className="text-[#f0db4f] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <FaBootstrap className="text-[#563d7c] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <FaSass className="text-[#cd6799] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <SiMongodb className="text-[#4db33d] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <FaReact className="text-[#61dbfb] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <IoLogoNodejs className="text-[#3c873a] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <RiTailwindCssFill className="text-[#4c1d95] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <SiPostman className="text-[#ef5b25] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <SiInsomnia className="text-[#73177e] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <TbBrandNextjs className="text-slate-700 bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    <SiMysql className="text-[#00758f] bg-white shadow-md shadow-slate-400 w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                </div>
            </div>
        </section>
    );
};
export default About;
