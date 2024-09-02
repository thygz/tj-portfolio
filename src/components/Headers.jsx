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
                scrolled
                    ? 'sticky bg-gradient-to-b from-[#A7C7E7] to-slate-50 bg-opacity-90 shadow-md'
                    : 'static'
            }`}
        >
            <div
                className={`max-w-7xl mx-auto flex justify-between items-center py-1.5 xl:py-2 px-5 z-50`}
            >
                <img
                    src={logo}
                    alt="logo"
                    className="w-[5.5rem] sm:w-[6rem] cursor-pointer"
                    onClick={() => scrollToTop()}
                />
                <ul
                    className={`flex gap-1 md:gap-7 lg:gap-10 flex-col md:flex-row justify-center items-center fixed right-3 md:static cursor-pointer z-[100] transition-all duration-300 ease-in-out ${
                        toggleMenu ? 'top-14' : 'top-[-50%]'
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
                                className={`text-3xl w-12 md:w-10 h-12 md:h-10 p-[0.55rem] md:p-2 border-2 border-sky-950 md:border-none rounded-xl md:rounded-full ${
                                    activeLink === 'hero'
                                        ? 'text-white bg-sky-950'
                                        : 'text-sky-950 bg-slate-100 md:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('skills')}>
                        <Link to="/">
                            <SiSkillshare
                                className={`text-4xl w-12 md:w-10 h-12 md:h-10 p-2 md:p-1.5 border-2 border-sky-950 md:border-none rounded-xl md:rounded-full ${
                                    activeLink === 'skills'
                                        ? 'text-white bg-sky-950'
                                        : 'text-sky-950 bg-slate-100 md:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('about')}>
                        <Link to="/">
                            <SiAboutdotme
                                className={`text-3xl w-12 md:w-10 h-12 md:h-10 p-[0.65rem] md:p-2 border-2 border-sky-950 md:border-none rounded-xl md:rounded-full ${
                                    activeLink === 'about'
                                        ? 'text-white bg-sky-950'
                                        : 'text-sky-950 bg-slate-100 md:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('projects')}>
                        <Link to="/">
                            <LiaProjectDiagramSolid
                                className={`text-lg w-12 md:w-10 h-12 md:h-10 p-[0.9rem] md:p-2.5 border-2 border-sky-950 md:border-none rounded-xl md:rounded-full ${
                                    activeLink === 'projects'
                                        ? 'text-white bg-sky-950'
                                        : 'text-sky-950 bg-slate-100 md:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                    <li onClick={() => scrollToSection('contact')}>
                        <Link to="/">
                            <MdEmail
                                className={`text-2xl w-12 md:w-10 h-12 md:h-10 p-3 md:p-2.5 border-2 border-sky-950 md:border-none rounded-xl md:rounded-full ${
                                    activeLink === 'contact'
                                        ? 'text-white bg-sky-950'
                                        : 'text-sky-950 bg-slate-100 md:bg-transparent hover:bg-slate-300 duration-300'
                                }`}
                                onClick={() => setToggleMenu(false)}
                            />
                        </Link>
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <button
                        className="hidden md:flex justify-center items-center bg-sky-950 shadow-md px-4 py-3 rounded-full text-white text-sm sm:text-base font-semibold hover:bg-opacity-85 duration-300 active:-translate-y-5 cursor-pointer z-10"
                        onClick={() => scrollToContact()}
                    >
                        Contact Me
                    </button>
                    {toggleMenu ? (
                        <IoIosClose
                            className="text-4xl text-sky-950 z-10 cursor-pointer md:hidden"
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <CgMenuGridO
                            className="text-4xl text-sky-950 z-10 cursor-pointer md:hidden"
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                </div>
            </div>
            <div
                onClick={() => setToggleMenu(false)}
                className={`fixed bg-transparent z-50 top-0 left-0 right-0 bottom-0 ${
                    toggleMenu
                        ? 'opacity-1 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            ></div>
            {/* <div className="hidden">
                {toggleMenu
                    ? (document.body.style.overflow = 'hidden')
                    : (document.body.style.overflow = 'visible')}
            </div> */}
        </header>
    );
};
export default Headers;
