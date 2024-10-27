import logo from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import { IoMenu } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
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

    return (
        <header
            className={`top-0 z-40 transition-all min-[900px]:transition-none duration-200 ease-in ${
                scrolled
                    ? 'sticky bg-[#111111] py-[0.55rem] sm:py-[0.45rem] lg:py-3'
                    : 'static py-3 lg:py-3'
            } ${toggleMenu && 'bg-[#111111]'}`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-9 lg:px-5 z-50">
                <img
                    src={logo}
                    alt="logo"
                    className={`w-[3rem] sm:w-[3.3rem] lg:w-[4.6rem] cursor-pointer ${
                        toggleMenu ? 'hidden' : 'visible'
                    } ${scrolled ? 'hidden' : 'visible'}`}
                    onClick={() => scrollToTop()}
                />
                <img
                    src={logo2}
                    alt="logo"
                    className={`w-[3.1rem] sm:w-[3.4rem] lg:w-[4.6rem] cursor-pointer ${
                        toggleMenu ? 'opacity-100' : 'opacity-0'
                    } ${scrolled ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => scrollToTop()}
                />
                <div
                    className={`flex flex-col min-[900px]:flex-row gap-5 min-[900px]:gap-16 pb-[1rem] min-[900px]:pb-0 w-full min-[900px]:w-auto bg-[#222222] min-[900px]:bg-transparent fixed left-0 right-0 min-[900px]:static cursor-pointer z-[100] transition-all duration-500 ease-in-out ${
                        toggleMenu
                            ? `${scrolled ? 'top-[3.9rem]' : 'top-[4.3rem]'}`
                            : '-top-full'
                    }`}
                >
                    <ul
                        className={`flex text-2xl min-[900px]:text-lg min-[900px]:gap-7 lg:gap-9 flex-col min-[900px]:flex-row justify-center items-center ${
                            scrolled ? 'font-extralight' : 'font-light'
                        }`}
                    >
                        <li
                            onClick={() => {
                                scrollToSection('hero');
                                scrollToTop();
                                setToggleMenu(false);
                            }}
                            className={`py-4 min-[900px]:py-0 border-t-2 border-b border-opacity-40 border-[#363636] min-[900px]:border-0 w-full min-[900px]:w-auto text-center ${
                                activeLink === 'hero'
                                    ? 'text-[#ffffff] min-[900px]:text-[#858585] bg-[#292929] min-[900px]:bg-transparent'
                                    : `${
                                          scrolled
                                              ? 'text-[#ffffff] min-[900px]:hover:text-[#858585]'
                                              : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                      }`
                            }`}
                        >
                            <Link to="/">home</Link>
                        </li>
                        <li
                            onClick={() => {
                                scrollToSection('skills');
                                setToggleMenu(false);
                            }}
                            className={`py-4 min-[900px]:py-0 border-t border-b border-opacity-40 border-[#363636] min-[900px]:border-0 w-full min-[900px]:w-auto text-center ${
                                activeLink === 'skills'
                                    ? 'text-[#ffffff] min-[900px]:text-[#858585] bg-[#292929] min-[900px]:bg-transparent'
                                    : `${
                                          scrolled
                                              ? 'text-[#ffffff] min-[900px]:hover:text-[#858585]'
                                              : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                      }`
                            }`}
                        >
                            <Link to="/">services</Link>
                        </li>
                        <li
                            onClick={() => {
                                scrollToSection('about');
                                setToggleMenu(false);
                            }}
                            className={`py-4 min-[900px]:py-0 border-t border-b border-opacity-40 border-[#363636] min-[900px]:border-0 w-full min-[900px]:w-auto text-center ${
                                activeLink === 'about'
                                    ? 'text-[#ffffff] min-[900px]:text-[#858585] bg-[#292929] min-[900px]:bg-transparent'
                                    : `${
                                          scrolled
                                              ? 'text-[#ffffff] min-[900px]:hover:text-[#858585]'
                                              : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                      }`
                            }`}
                        >
                            <Link to="/">about</Link>
                        </li>
                        <li
                            onClick={() => {
                                scrollToSection('projects');
                                setToggleMenu(false);
                            }}
                            className={`py-4 min-[900px]:py-0 border-t border-b border-opacity-40 border-[#363636] min-[900px]:border-0 w-full min-[900px]:w-auto text-center ${
                                activeLink === 'projects'
                                    ? 'text-[#ffffff] min-[900px]:text-[#858585] bg-[#292929] min-[900px]:bg-transparent'
                                    : `${
                                          scrolled
                                              ? 'text-[#ffffff] min-[900px]:hover:text-[#858585]'
                                              : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                      }`
                            }`}
                        >
                            <Link to="/">projects</Link>
                        </li>
                        <li
                            onClick={() => {
                                scrollToSection('contact');
                                setToggleMenu(false);
                            }}
                            className={`py-4 min-[900px]:py-0 border-t border-b-2 border-opacity-40 border-[#363636] min-[900px]:border-0 w-full min-[900px]:w-auto text-center ${
                                activeLink === 'contact'
                                    ? 'text-[#ffffff] min-[900px]:text-[#858585] bg-[#292929] min-[900px]:bg-transparent'
                                    : `${
                                          scrolled
                                              ? 'text-[#ffffff] min-[900px]:hover:text-[#858585]'
                                              : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                      }`
                            }`}
                        >
                            <Link to="/">contact</Link>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center gap-9">
                        <a
                            href="https://www.facebook.com/tj.villaluz.3/"
                            target="_blank"
                            onClick={() => setToggleMenu(false)}
                        >
                            <FaFacebookF
                                className={`text-3xl cursor-pointer ${
                                    scrolled
                                        ? 'text-[#ffffff] hover:text-[#757575]'
                                        : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                }`}
                            />
                        </a>
                        <a
                            href="https://github.com/thygz"
                            target="_blank"
                            onClick={() => setToggleMenu(false)}
                        >
                            <FaGithub
                                className={`text-3xl cursor-pointer ${
                                    scrolled
                                        ? 'text-[#ffffff] hover:text-[#757575]'
                                        : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                }`}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/teejay-villaluz-1a3248328/"
                            target="_blank"
                            onClick={() => setToggleMenu(false)}
                        >
                            <FaLinkedinIn
                                className={`text-3xl cursor-pointer ${
                                    scrolled
                                        ? 'text-[#ffffff] hover:text-[#757575]'
                                        : 'text-[#ffffff] min-[900px]:text-[#333333] min-[900px]:hover:text-[#757575]'
                                }`}
                            />
                        </a>
                    </div>
                </div>
                <IoMenu
                    className={`text-[2.2rem] sm:text-[2.4rem] z-10 cursor-pointer min-[900px]:hidden ${
                        toggleMenu ? 'opacity-0' : 'opacity-100'
                    } ${scrolled ? 'text-[#ffffff]' : 'text-[#333333]'}`}
                    onClick={() => setToggleMenu(true)}
                />
                <IoIosClose
                    className={`text-[2.2rem] sm:text-[2.3rem] text-[#ffffff] z-[100] cursor-pointer min-[900px]:hidden ${
                        toggleMenu ? 'visible' : 'hidden'
                    }`}
                    onClick={() => setToggleMenu(false)}
                />
            </div>
            <div
                onClick={() => setToggleMenu(false)}
                className={`fixed bg-transparent z-50 top-0 left-0 right-0 bottom-0 ${
                    toggleMenu
                        ? 'opacity-1 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                }`}
            ></div>
            <div className="hidden">
                {toggleMenu
                    ? (document.body.style.overflow = 'hidden')
                    : (document.body.style.overflow = 'visible')}
            </div>
        </header>
    );
};
export default Headers;
