import traxxRecipe1 from '../assets/projectImage/TraxxRecipe1.jpg';
import traxxRecipe2 from '../assets/projectImage/TraxxRecipe2.png';
import traxxRecipe3 from '../assets/projectImage/TraxxRecipe3.png';
import traxxRecipe4 from '../assets/projectImage/TraxxRecipe4.png';
import traxxDeploy1 from '../assets/projectImage/TraxxDeploy1.png';
import traxxDeploy2 from '../assets/projectImage/TraxxDeploy2.png';
import traxxDeploy3 from '../assets/projectImage/TraxxDeploy3.png';
import traxxDeploy4 from '../assets/projectImage/TraxxDeploy4.png';
import UsedCarsTraxx1 from '../assets/projectImage/UsedCarsTraxx1.png';
import UsedCarsTraxx2 from '../assets/projectImage/UsedCarsTraxx2.png';
import UsedCarsTraxx3 from '../assets/projectImage/UsedCarsTraxx3.png';
import UsedCarsTraxx4 from '../assets/projectImage/UsedCarsTraxx4.png';
import { FaArrowRight } from 'react-icons/fa6';

const Project = () => {
    return (
        <section className="pt-28" id="projects">
            <h1 className="font-bold text-3xl text-center text-sky-950 mb-10">
                My Works
            </h1>
            {/* <div className="overflow-x-hidden w-0 h-0 border-r-[100vw] border-solid border-r-[#a2d0c0] border-t-[5vw] border-t-transparent my-[-1px]"></div> */}
            <div
                className="border-t-2 border-b border-[#eaf2fa]"
                // style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-0 md:gap-5 items-center">
                    <div className="flex flex-col gap-3 lg:gap-5 flex-1 px-5 xl:px-10 pb-12 md:pb-0">
                        <h1 className="text-sky-950 text-2xl font-extrabold">
                            TraxxRecipe
                        </h1>
                        <p className="text-sky-950 text-base md:text-sm lg:text-base font-normal">
                            A recipe website which you can search recipes by
                            ingredients, save your favorite meal, see random
                            recipes, etc. Not only you can read the direction
                            but there is also available video so you can watch
                            it while you cook.
                        </p>
                        <p className="text-sky-950 text-base md:text-sm lg:text-base font-normal">
                            In this project, I learned how to use API and
                            integrate it on a website. I used async await and
                            sometimes .then when fetching data.
                        </p>
                        <h5 className="text-sky-950 text-base md:text-sm lg:text-base font-semibold">
                            HTML, CSS & Javascript with API
                        </h5>
                        <a
                            href=""
                            className="flex justify-start items-center gap-2 font-extrabold text-sky-950 text-lg md:text-base lg:text-lg"
                        >
                            Live <FaArrowRight />
                        </a>
                    </div>
                    <div className="flex relative w-full md:w-[50%] overflow-hidden md:rounded-tr-2xl md:rounded-br-2xl h-[28rem] md:h-[22rem] lg:h-[29rem]">
                        <img
                            src={traxxRecipe1}
                            alt="project image"
                            className="absolute w-60 md:w-52 lg:w-64 xl:w-[17rem] inset-0 mx-auto my-auto border-2 border-teal-500 shadow-lg rounded z-30 hover:scale-105 duration-500"
                        />
                        {/* <img
                            src={traxxRecipe2}
                            alt="image"
                            className="absolute w-20 md:w-28 lg:w-32 top-28 right-3 min-[500px]:right-16 md:-right-3 border-4 border-teal-500 shadow-2xl rounded-xl z-10 lg:hover:bottom-0 duration-500"
                        /> */}
                        <img
                            src={traxxRecipe3}
                            alt="image"
                            className="absolute w-[17rem] md:w-64 lg:w-[20rem] xl:w-[22rem] top-[7.5rem] md:top-[4.9rem] lg:top-[6.9rem] xl:top-[6.1rem] right-5 xl:right-12 border-2 border-teal-500 shadow-2xl rounded z-0 hover:scale-105 duration-500"
                        />
                        <img
                            src={traxxRecipe4}
                            alt="image"
                            className="absolute w-44 md:w-40 lg:w-52 xl:w-56 inset-0 ml-5 xl:ml-12 my-auto border-2 border-teal-500 shadow-2xl rounded z-0 hover:scale-105 duration-500"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="w-0 h-0 border-r-[100vw] border-solid border-r-[#a2d0c0] border-b-[5vw] border-b-[#a4b6dd] my-[-1px]"></div> */}
            <div
                className="border-t border-b border-[#eaf2fa]"
                // style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-0 md:gap-5 items-center">
                    <div className="flex relative w-full md:w-[50%] overflow-hidden md:rounded-tl-2xl md:rounded-bl-2xl h-[28rem] md:h-[22rem] lg:h-[29rem]">
                        <img
                            src={traxxDeploy1}
                            alt="project image"
                            className="absolute w-[17.5rem] md:w-[17rem] lg:w-[22rem] xl:w-[23rem] top-[7.4rem] md:top-[4.8rem] lg:top-[6.3rem] xl:top-[6rem] right-5 xl:right-12 border border-blue-500 shadow-2xl rounded z-0 hover:scale-105 duration-500"
                        />
                        {/* <img
                            src={traxxDeploy2}
                            alt="image"
                            className="absolute w-20 md:w-28 lg:w-32 xl:w-36 bottom-16 right-6 border-4 border-blue-500 rounded-xl z-0 md:hover:top-[-1rem] lg:hover:top-5 xl:hover:-top-10 duration-500"
                        /> */}
                        <img
                            src={traxxDeploy3}
                            alt="image"
                            className="absolute w-60 md:w-52 lg:w-64 xl:w-[17rem] inset-0 mx-auto my-auto border border-blue-500 shadow-lg rounded z-10 hover:scale-105 duration-500"
                        />
                        <img
                            src={traxxDeploy4}
                            alt="image"
                            className="absolute w-52 md:w-52 lg:w-[16rem] xl:w-[17rem] inset-0 ml-5 md:ml-5 xl:ml-12 my-auto border border-blue-500 shadow-2xl rounded z-0 hover:scale-105 duration-500"
                        />
                    </div>
                    <div className="flex flex-col gap-3 lg:gap-5 flex-1 px-5 xl:px-10 pb-12 md:pb-0">
                        <h1 className="text-sky-950 text-2xl font-extrabold">
                            TraxxDeploy
                        </h1>
                        <p className="text-sky-950 text-base md:text-sm lg:text-base font-normal">
                            This website is about a web apps deployment platform
                            from large scale enterprise API's to static websites
                            for individuals.
                        </p>
                        <p className="text-sky-950 text-base md:text-sm lg:text-base font-normal">
                            Originally this website made using HTML, CSS and JS.
                            I try to convert the code to practice ReactJS and
                            this is the result. This is my first encounter on
                            React JS and I'm amaze on JSX and how single page
                            application works.
                        </p>
                        <h5 className="text-sky-950 text-base md:text-sm lg:text-base font-semibold">
                            ReactJS
                        </h5>
                        <a
                            href=""
                            className="flex justify-start items-center gap-2 font-extrabold text-sky-950 text-lg md:text-base lg:text-lg"
                        >
                            Live <FaArrowRight />
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className="w-0 h-0 border-r-[100vw] border-solid border-r-[#A7C7E7] border-t-[5vw] border-t-[#a4b6dd] my-[-1px]"></div> */}
            <div
                className="border-t border-b-2 border-[#eaf2fa]"
                // style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
            >
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-0 md:gap-5 items-center">
                    <div className="flex flex-col gap-3 lg:gap-5 flex-1 px-5 xl:px-10 pb-12 md:pb-0">
                        <h1 className="text-sky-950 text-2xl font-extrabold">
                            UsedCarsTraxx
                        </h1>
                        <p className="text-sky-950 text-base md:text-sm lg:text-base font-normal">
                            Car buy and sell website. User should be Log-in, to
                            use all features including buying and selling a car,
                            pick favorite, edit profile and vehicle for sale,
                            search and filter cars etc.
                        </p>
                        <p className="text-sky-950 text-base md:text-sm lg:text-base font-normal">
                            I learned many things while doing this project. How
                            to make and manipulate database. How to authenticate
                            users and form validations, handle errors, loading
                            and success. The magic of react hooks etc.
                        </p>
                        <h5 className="text-sky-950 text-base md:text-sm lg:text-base font-semibold">
                            ReactJS, MongoDB, Express, NodeJS, Tailwind,
                            Firebase
                        </h5>
                        <a
                            href=""
                            className="flex justify-start items-center gap-2 font-extrabold text-sky-950 text-lg md:text-base lg:text-lg"
                        >
                            Live <FaArrowRight />
                        </a>
                    </div>
                    <div className="flex relative w-full md:w-[50%] overflow-hidden md:rounded-tr-2xl md:rounded-br-2xl h-[28rem] md:h-[22rem] lg:h-[29rem]">
                        <img
                            src={UsedCarsTraxx1}
                            alt="project image"
                            className="absolute w-56 md:w-52 lg:w-[18rem] xl:w-[19rem] top-[7.5rem] md:top-[4.8rem] lg:top-[5.8rem] xl:top-[5.6rem] right-5 xl:right-12 border border-cyan-500 shadow-2xl rounded z-0 hover:scale-105 duration-500"
                        />
                        {/* <img
                            src={UsedCarsTraxx2}
                            alt="image"
                            className="absolute w-20 md:w-28 lg:w-32 xl:w-36 -top-10 right-5 border-4 border-cyan-500 rounded-xl z-10 hover:-bottom-16 md:hover:left-0 lg:hover:-left-3 xl:hover:left-24 duration-500"
                        /> */}
                        <img
                            src={UsedCarsTraxx3}
                            alt="image"
                            className="absolute w-60 md:w-52 lg:w-64 xl:w-[17rem] inset-0 mx-auto my-auto border border-cyan-500 shadow-lg rounded z-10 hover:scale-105 duration-500"
                        />
                        <img
                            src={UsedCarsTraxx4}
                            alt="image"
                            className="absolute w-40 md:w-36 lg:w-48 xl:w-52 inset-0 ml-5 xl:ml-12 my-auto border border-cyan-500 shadow-2xl rounded z-0 hover:scale-105 duration-500"
                        />
                    </div>
                </div>
            </div>
            {/* <div className="w-0 h-0 border-r-[100vw] border-solid border-r-[#A7C7E7] border-b-[5vw] border-b-transparent my-[-1px]"></div> */}
        </section>
    );
};
export default Project;
