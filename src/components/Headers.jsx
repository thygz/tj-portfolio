import { BiSolidUser } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { SiSkillshare } from 'react-icons/si';
import { LiaProjectDiagramSolid } from 'react-icons/lia';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo1.png';
import { CgMenuGridO } from 'react-icons/cg';
import { IoIosClose } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Headers = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('hero');
    const [scrolled, setScrolled] = useState(false);

    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            activeSection();
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', () => setToggleMenu(false));
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const marginTop = 0;
            const scrollToY =
                element.getBoundingClientRect().top +
                window.scrollY -
                marginTop;
            window.scrollTo({ top: scrollToY, behavior: 'smooth' });
        }
    };

    const activeSection = () => {
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActiveLink(sections[i]);
                }
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <header
            className={`top-0 z-40 ${
                scrolled ? 'sticky bg-slate-50 shadow-md' : 'static'
            }`}
        >
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-7xl mx-auto flex justify-between items-center py-2 xl:py-2.5 px-5 md:px-9 lg:px-5 z-50"
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-12 xl:w-14 cursor-pointer"
                    onClick={() => scrollToTop()}
                />
                <ul
                    className={`flex gap-1 min-[900px]:gap-7 lg:gap-10 flex-col min-[900px]:flex-row justify-center items-center fixed top-20 min-[900px]:static cursor-pointer z-[100] transition-all duration-300 ease-in-out ${
                        toggleMenu ? 'right-3 md:right-7' : '-right-20'
                    }`}
                >
                    <li
                        onClick={() => {
                            scrollToSection('hero');
                            scrollToTop();
                        }}
                    >
                        <Link to="/">
                            <BiSolidUser
                                className={`text-3xl w-14 min-[900px]:w-10 h-14 min-[900px]:h-10 p-[0.55rem] min-[900px]:p-2 border-2 border-slate-700 min-[900px]:border-none rounded-xl min-[900px]:rounded-full ${
                                    activeLink === 'hero'
                                        ? 'text-white bg-slate-700'
                                        : 'text-slate-700 bg-slate-50 min-[900px]:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('skills')}>
                        <Link to="/">
                            <SiSkillshare
                                className={`text-4xl w-14 min-[900px]:w-10 h-14 min-[900px]:h-10 p-2 min-[900px]:p-1.5 border-2 border-slate-700 min-[900px]:border-none rounded-xl min-[900px]:rounded-full ${
                                    activeLink === 'skills'
                                        ? 'text-white bg-slate-700'
                                        : 'text-slate-700 bg-slate-50 min-[900px]:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('about')}>
                        <Link to="/">
                            <SiAboutdotme
                                className={`text-3xl w-14 min-[900px]:w-10 h-14 min-[900px]:h-10 p-[0.65rem] min-[900px]:p-2 border-2 border-slate-700 min-[900px]:border-none rounded-xl min-[900px]:rounded-full ${
                                    activeLink === 'about'
                                        ? 'text-white bg-slate-700'
                                        : 'text-slate-700 bg-slate-50 min-[900px]:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('projects')}>
                        <Link to="/">
                            <LiaProjectDiagramSolid
                                className={`text-lg w-14 min-[900px]:w-10 h-14 min-[900px]:h-10 p-[0.9rem] min-[900px]:p-2.5 border-2 border-slate-700 min-[900px]:border-none rounded-xl min-[900px]:rounded-full ${
                                    activeLink === 'projects'
                                        ? 'text-white bg-slate-700'
                                        : 'text-slate-700 bg-slate-50 min-[900px]:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('contact')}>
                        <Link to="/">
                            <MdEmail
                                className={`text-2xl w-14 min-[900px]:w-10 h-14 min-[900px]:h-10 p-3 min-[900px]:p-2.5 border-2 border-slate-700 min-[900px]:border-none rounded-xl min-[900px]:rounded-full ${
                                    activeLink === 'contact'
                                        ? 'text-white bg-slate-700'
                                        : 'text-slate-700 bg-slate-50 min-[900px]:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <button
                        className="hidden min-[900px]:flex justify-center items-center bg-slate-700 shadow-md px-4 py-3 rounded-full text-white text-sm sm:text-base font-semibold hover:bg-opacity-85 duration-300 active:-translate-y-5 cursor-pointer z-10"
                        onClick={() => scrollToContact()}
                    >
                        Contact Me
                    </button>
                    {toggleMenu ? (
                        <IoIosClose
                            className="text-4xl text-slate-700 z-10 cursor-pointer min-[900px]:hidden"
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <CgMenuGridO
                            className="text-[2.6rem] text-slate-700 z-10 cursor-pointer min-[900px]:hidden"
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                </div>
            </motion.div>
            <div
                onClick={() => setToggleMenu(false)}
                className={`fixed bg-transparent z-50 top-0 left-0 right-0 bottom-0 ${
                    toggleMenu
                        ? 'opacity-1 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            ></div>
        </header>
    );
};
export default Headers;
