import tjImage5 from '../assets/tjImage3.png';
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
        <section className="" id="about">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-5 xl:px-14 flex flex-col-reverse lg:flex-row justify-center items-center gap-5 lg:gap-14 xl:gap-36 py-[4.5rem] lg:py-20 xl:py-16">
                <img
                    src={tjImage5}
                    alt="image"
                    className="w-full sm:w-[29rem] lg:w-[28rem] xl:w-[32rem] bg-inherit"
                />
                <div className="flex flex-col">
                    <h1 className="font-extrabold text-[3.4rem] min-[500px]:text-6xl sm:text-7xl text-[#333333] tracking-tighter">
                        about<span className="text-[#80beef]">.</span>
                    </h1>
                    <p className="font-light mt-5 xl:mt-7 text-[#333333] text-lg min-[500px]:text-xl lg:text-lg">
                        Web development is quite new to me since I am a career
                        shifter. I worked as an equipment and process engineer
                        for the past 10 years. But web development has always
                        been of great interest to me. I was trained by the{' '}
                        <a
                            href="https://www.facebook.com/groups/685104802630658"
                            target="_blank"
                            className="underline underline-offset-2 font-semibold"
                        >
                            KodeGo
                        </a>{' '}
                        team to be a professional full stack developer and had
                        an internship at{' '}
                        <a
                            href="https://realboss.ai/"
                            target="_blank"
                            className="underline underline-offset-2 font-semibold"
                        >
                            Realboss.ai
                        </a>
                        . Aside from cars and playing guitar, looking out for
                        challenging projects to work on excites me.
                    </p>
                    <p className="font-light mt-5 lg:mt-5 text-[#333333] italic text-lg min-[500px]:text-xl lg:text-lg">
                        My Mission: Make your products/services attractive to
                        clients and present your business in the most creative
                        way.
                    </p>
                    <button className="w-full min-[550px]:w-44 lg:w-40 py-3 rounded-full border border-[#333333] bg-[#333333] text-[#ffffff] text-base min-[500px]:text-lg lg:text-base font-bold hover:bg-opacity-90 duration-300 active:-translate-y-5 mt-8">
                        <a href={resume} download="TJ_Resume">
                            Download CV
                        </a>
                    </button>
                </div>
            </div>
            <div className="w-full py-[4.5rem] md:py-20 lg:py-[5.5rem] bg-[#fafafa] border-y-[3px] border-[#dddddd]">
                <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-10 xl:px-20 flex flex-col lg:flex-row gap-[4.5rem] min-[500px]:gap-20 md:gap-16 lg:gap-24 xl:gap-24 lg:justify-center lg:items-center">
                    <div className="flex flex-col flex-1">
                        <h1 className="font-medium text-[2.1rem] sm:text-3xl text-[#333333] tracking-tight">
                            Tech Stacks
                        </h1>
                        <p className="text-lg min-[500px]:text-xl lg:text-lg text-[#333333] font-normal text-opacity-80 mt-2 min-[500px]:mt-3 lg:mt-1">
                            These are the tools that I'm currenty using in
                            building your desired websites. But I am also in the
                            process of learning other technology stacks like
                            PHP, Laravel, Python etc.
                        </p>
                        <p className="text-lg min-[500px]:text-xl lg:text-lg text-[#333333] font-normal text-opacity-80 mt-2">
                            I keep on enhancing and developing my skills to be
                            able to provide the best websites for you.
                        </p>
                    </div>
                    <div className="flex flex-1 justify-center items-center flex-wrap gap-x-[4.5rem] min-[410px]:gap-x-20 md:gap-x-14 lg:gap-x-8 xl:gap-x-10 gap-y-7 md:gap-y-8 lg:gap-y-16 xl:gap-y-16 text-5xl lg:pl-20">
                        <FaHtml5 className="text-[#e34c26] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <FaCss3Alt className="text-[#264de4] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <IoLogoJavascript className="text-[#f0db4f] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <FaBootstrap className="text-[#563d7c] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiMongodb className="text-[#4db33d] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <FaReact className="text-[#61dbfb] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <IoLogoNodejs className="text-[#3c873a] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <RiTailwindCssFill className="text-[#4c1d95] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <BiLogoTypescript className="text-[#3178c6] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiPostman className="text-[#ef5b25] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiInsomnia className="text-[#73177e] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                        <SiMysql className="text-[#00758f] shadow-[1px_1px_3px_1px_rgba(0,0,0,0.3)] bg-[#ffffff] w-14 xl:w-16 h-14 xl:h-16 p-2 rounded-md" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
