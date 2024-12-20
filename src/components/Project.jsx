import traxxRecipe1 from '../assets/projectImage/TraxxRecipe1.png';
import traxxDeploy1 from '../assets/projectImage/TraxxDeploy1.png';
import jhSereno from '../assets/projectImage/JhSereno.png';
import usedCarsTraxx1 from '../assets/projectImage/UsedCarsTraxx1.png';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Project = () => {
    const projectDetails = [
        {
            image: `${traxxRecipe1}`,
            link: 'https://traxxrecipe.vercel.app/',
            title: 'TraxxRecipe',
            description1:
                'A recipe website where you may see random recipes, search recipes by ingredients, save your favorite meal and more. In addition to reading the instructions, you can view the provided video while cooking.',
            description2:
                'In this project, I learned how to use API and integrate it on a website. I used async await and sometimes .then when fetching data.',
            technologies: 'HTML | CSS | Javascript | API',
        },
        {
            image: `${traxxDeploy1}`,
            link: 'https://traxx-deploy.vercel.app/',
            title: 'TraxxDeploy',
            description1:
                'A static website about webb apps deployment platforms from large scale enterprise APIs to static websites for individuals.',
            description2: `Originally this website was coded using HTML, CSS and JS. I converted the code to practice ReactJS, and this is the result. This is my first encounter with React JS and I'm amazed at JSX and how single-page application works.`,
            technologies: 'ReactJS',
        },
        {
            image: `${jhSereno}`,
            link: 'https://luxury-assignment.vercel.app/',
            title: 'JHSereno',
            description1: 'A service page for real estate business website.',
            description2: `This project is focused on designing a simple and elegant website using Tailwind CSS. I'm thrilled with the outcome of the header/navbar animation when scrolling the page.`,
            technologies: 'ReactJS | Tailwind CSS',
        },
        {
            image: `${usedCarsTraxx1}`,
            link: 'https://usedcarstraxx-mern.onrender.com',
            title: 'UsedCarsTraxx',
            description1:
                'Car buy and sell website. The user should be logged-in, to be able to use all features, including buying and selling a car, picking favorites, editing profiles and vehicles for sale, searching and filtering cars etc.',
            description2:
                'I learned many things while doing this project. How to make and manipulate databases. How to authenticate users and form validations, handle errors, loading and success. The magic of react hooks etc.',
            technologies:
                'ReactJS | Redux | MongoDB | Express | NodeJS | Tailwind CSS | Firebase',
        },
    ];

    return (
        <section className="" id="projects">
            <h1 className="max-w-6xl mx-auto pt-20 md:pt-24 lg:pt-28 -mb-8 sm:-mb-5 px-8 sm:px-12 lg:px-5 xl:px-10 font-extrabold text-[3.4rem] min-[500px]:text-6xl sm:text-7xl text-[#333333] tracking-tighter">
                projects<span className="text-[#80beef]">.</span>
            </h1>
            <div className="">
                {projectDetails.map((details, index) => (
                    <div
                        key={index}
                        className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-16 lg:gap-5 xl:gap-10 items-center px-8 sm:px-12 lg:px-5 xl:px-10 py-14 md:py-14 lg:py-20 border-b-4 border-[#fafafa]"
                    >
                        <Link to={details.link} target="_blank">
                            <img
                                src={details.image}
                                alt="project image"
                                className="w-full sm:w-[36rem] md:w-[39rem] lg:w-[32rem] xl:w-[36rem]"
                            />
                        </Link>
                        <div className="flex flex-col flex-1 pb-0">
                            <h1 className="text-[#333333] text-[1.9rem] sm:text-[2rem] font-light tracking-normal">
                                {details.title}
                            </h1>
                            <div className="mt-2 sm:mt-4 lg:mt-2">
                                <p className="text-[#333333] text-lg min-[500px]:text-xl lg:text-lg font-light">
                                    {details.description1}
                                </p>
                                <p className="text-[#333333] text-lg min-[500px]:text-xl lg:text-lg font-light mt-2">
                                    {details.description2}
                                </p>
                            </div>
                            <h5 className="text-[#333333] text-lg min-[500px]:text-xl lg:text-lg font-light mt-5 lg:mt-4 italic">
                                {details.technologies}
                            </h5>
                            <Link
                                to={details.link}
                                target="_blank"
                                className="flex justify-start items-center gap-2 w-24 group mt-4"
                            >
                                <p className="font-normal text-[#333333] text-xl lg:text-xl underline">
                                    Live
                                </p>
                                <div className="flex justify-center items-center w-8 h-8 rounded-full bg-gradient-to-b group-hover:bg-gradient-to-t duration-500 from-[#80beef] to-[#333333]">
                                    <FaArrowUpRightFromSquare className="text-white text-sm" />
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Project;
