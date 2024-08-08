import { IoMdHome } from 'react-icons/io';
import { SiAboutdotme } from 'react-icons/si';
import { SiSkillshare } from 'react-icons/si';
import { GrProjects } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/logo.png';
import { CgMenuGridO } from 'react-icons/cg';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';

const Headers = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="mb-5 lg:mb-0">
            <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-5 z-30">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[6rem] cursor-pointer"
                />
                <ul
                    className={`flex gap-1 md:gap-12 lg:gap-16 flex-col md:flex-row justify-center items-center fixed right-3 md:static text-sky-500 cursor-pointer z-30 transition-all duration-300 ease-in-out ${
                        toggleMenu ? 'top-16' : 'top-[-50%]'
                    }`}
                >
                    <li>
                        <IoMdHome className="text-3xl bg-white md:bg-transparent w-12 md:w-auto h-12 md:h-auto p-[0.55rem] md:p-0 border-2 border-slate-400 md:border-none rounded-xl md:rounded-none" />
                    </li>
                    <li>
                        <SiSkillshare className="text-4xl bg-white md:bg-transparent w-12 md:w-auto h-12 md:h-auto p-2 md:p-0 border-2 border-slate-400 md:border-none rounded-xl md:rounded-none" />
                    </li>
                    <li>
                        <SiAboutdotme className="text-3xl bg-white md:bg-transparent w-12 md:w-auto h-12 md:h-auto p-[0.65rem] md:p-0 border-2 border-slate-400 md:border-none rounded-xl md:rounded-none" />
                    </li>
                    <li>
                        <GrProjects className="text-lg bg-white md:bg-transparent w-12 md:w-auto h-12 md:h-auto p-[0.9rem] md:p-0 border-2 border-slate-400 md:border-none rounded-xl md:rounded-none" />
                    </li>
                    <li>
                        <MdEmail className="text-2xl bg-white md:bg-transparent w-12 md:w-auto h-12 md:h-auto p-3 md:p-0 border-2 border-slate-400 md:border-none rounded-xl md:rounded-none" />
                    </li>
                </ul>
                <div className="flex justify-center items-center gap-3">
                    <div className="flex justify-center items-center bg-sky-500 px-4 py-2 rounded-full text-white text-sm sm:text-base xl:text-lg font-semibold hover:bg-white hover:text-sky-500 hover:border hover:border-slate-700 duration-300 cursor-pointer">
                        Resume
                    </div>
                    {toggleMenu ? (
                        <IoIosClose
                            className="text-4xl text-slate-600 cursor-pointer md:hidden"
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <CgMenuGridO
                            className="text-4xl text-sky-500 cursor-pointer md:hidden"
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                </div>
            </div>
            <div
                onClick={() => setToggleMenu(false)}
                className={`fixed bg-transparent z-20 top-0 left-0 right-0 bottom-0 ${
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
