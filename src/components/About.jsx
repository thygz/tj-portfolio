import tjImage5 from '../assets/tjImage3.png';
import techImage from '../assets/techBackground.png';
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
import { SiExpress } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { IoLogoFirebase } from 'react-icons/io5';
import { FaFigma } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';
import resume from '../assets/resume.pdf';

const About = () => {
    const frontendContent = [
        { icon: <FaHtml5 className="text-[#e34c26]" />, title: 'HTML' },
        { icon: <FaCss3Alt className="text-[#264de4]" />, title: 'CSS' },
        {
            icon: <IoLogoJavascript className="text-[#f0db4f]" />,
            title: 'JavaScript',
        },
        {
            icon: <BiLogoTypescript className="text-[#3178c6]" />,
            title: 'TypeScript',
        },
        {
            icon: <FaBootstrap className="text-[#563d7c]" />,
            title: 'Bootstrap',
        },
        {
            icon: <RiTailwindCssFill className="text-[#4c1d95]" />,
            title: 'Tailwind CSS',
        },
        { icon: <FaReact className="text-[#61dbfb]" />, title: 'React' },
    ];

    const backendContent = [
        { icon: <IoLogoNodejs className="text-[#3c873a]" />, title: 'Node.js' },
        { icon: <SiExpress className="text-[#050708]" />, title: 'Express.js' },
        { icon: <FaLaravel className="text-[#f05340]" />, title: 'Laravel' },
        { icon: <FaPhp className="text-[#777BB3]" />, title: 'PHP' },
        { icon: <SiMongodb className="text-[#4db33d]" />, title: 'MongoDB' },
        { icon: <SiMysql className="text-[#00758f]" />, title: 'MySQL' },
        {
            icon: <IoLogoFirebase className="text-[#ffa611]" />,
            title: 'Firebase',
        },
    ];

    const otherToolsContent = [
        { icon: <FaGitAlt className="text-[#F1502F]" />, title: 'Git' },
        {
            icon: <VscVscode className="text-[#0078d7]" />,
            title: 'Visual Studio Code',
        },
        { icon: <SiVite className="text-[#9b6bf6]" />, title: 'Vite' },
        { icon: <SiPostman className="text-[#ef5b25]" />, title: 'Postman' },
        { icon: <SiInsomnia className="text-[#73177e]" />, title: 'Insomnia' },
        { icon: <FaFigma className="text-[#000000]" />, title: 'Figma' },
    ];

    return (
        <section id="about">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-5 xl:px-10 flex flex-col-reverse lg:flex-row justify-center items-center gap-5 lg:gap-14 xl:gap-24 py-[4.5rem] lg:py-20 xl:py-16">
                <img
                    src={tjImage5}
                    alt="image"
                    className="w-full sm:w-[29rem] lg:w-[28rem] xl:w-[30rem] bg-inherit"
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
            <div className="relative overflow-hidden w-full py-[4.5rem] md:py-20 lg:py-[5.5rem] bg-[#333333] border-y-[3px] border-[#dddddd]">
                <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-5 xl:px-10 flex flex-col lg:flex-row gap-[4.5rem] min-[500px]:gap-20 md:gap-16 lg:gap-10 xl:gap-20 lg:justify-center lg:items-center">
                    <div className="flex flex-col flex-1 z-10">
                        <h1 className="text-white text-[1.9rem] sm:text-[2rem] font-light tracking-normal">
                            Tech Stacks
                        </h1>
                        <p className="text-lg min-[500px]:text-xl lg:text-lg text-white font-light text-opacity-80 mt-2 min-[500px]:mt-3">
                            These are the tools that I'm currenty using in
                            building your desired websites. I am also in the
                            process of learning other technology stacks.
                        </p>
                        <p className="text-lg min-[500px]:text-xl lg:text-lg text-white font-light text-opacity-80 mt-3">
                            I keep on enhancing and developing my skills to be
                            able to provide the best websites for you.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-8 z-10">
                        <div>
                            <h1 className="text-lg min-[500px]:text-xl lg:text-lg font-light text-white">
                                Front end
                            </h1>
                            <div className="flex flex-wrap gap-3 items-center mt-3">
                                {frontendContent.map((skills, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 justify-center items-center py-1 px-3 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] rounded-full bg-white"
                                    >
                                        <span className="text-xl">
                                            {skills.icon}
                                        </span>
                                        <p className="text-base min-[500px]:text-lg lg:text-base text-[#333333] font-light">
                                            {skills.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg min-[500px]:text-xl lg:text-lg font-light text-white">
                                Back-end
                            </h1>
                            <div className="flex flex-wrap gap-3 items-center mt-3">
                                {backendContent.map((skills, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 justify-center items-center py-1 px-3 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] rounded-full bg-white"
                                    >
                                        <span className="text-xl">
                                            {skills.icon}
                                        </span>
                                        <p className="text-base min-[500px]:text-lg lg:text-base text-[#333333] font-light">
                                            {skills.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h1 className="text-lg min-[500px]:text-xl lg:text-lg font-light text-white">
                                Other tools
                            </h1>
                            <div className="flex flex-wrap gap-3 items-center mt-3">
                                {otherToolsContent.map((skills, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 justify-center items-center py-1 px-3 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] rounded-full bg-white"
                                    >
                                        <span className="text-xl">
                                            {skills.icon}
                                        </span>
                                        <p className="text-base min-[500px]:text-lg lg:text-base text-[#333333] font-light">
                                            {skills.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 bottom-0">
                    <img
                        src={techImage}
                        alt="tech-image"
                        className="opacity-[0.03]"
                    />
                </div>
            </div>
        </section>
    );
};
export default About;
