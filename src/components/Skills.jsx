import frontend from '../assets/icons/frontend.png';
import backend from '../assets/icons/backend.png';
import deployment from '../assets/icons/deployment.png';
import database from '../assets/icons/database.png';
import git from '../assets/icons/git.png';
import testing from '../assets/icons/testing.png';
import time_management from '../assets/icons/time_management.png';
import communication from '../assets/icons/communication.png';
import collaboration from '../assets/icons/collaboration.png';
import adaptation from '../assets/icons/adaptation.png';
import problem_solving from '../assets/icons/problem_solving.png';
import creativity from '../assets/icons/creativity.png';
import { useState } from 'react';

const Skills = () => {
    const [services, setServices] = useState('Coding Skills');

    const skillsOptions = ['Coding Skills', 'Soft Skills'];

    const codingSkillsContent = [
        {
            icon: `${frontend}`,
            title: 'Frontend Development',
            description:
                'Translate visual designs into functional and clean code',
        },
        {
            icon: `${backend}`,
            title: 'Backend Development',
            description: 'Creates code that forms the backbone of a website',
        },
        {
            icon: `${deployment}`,
            title: 'Deployments and Hosting',
            description: 'Makes the website operational and accessible',
        },
        {
            icon: `${database}`,
            title: 'Database Management',
            description: 'Creates, develops, optimize and manages databases',
        },
        {
            icon: `${git}`,
            title: 'Git Version Control',
            description: 'Can manage and track changes to source code',
        },
        {
            icon: `${testing}`,
            title: 'Testing',
            description: 'Checks the website to uncover mistakes and problems',
        },
    ];

    const softSkillsContent = [
        {
            icon: `${time_management}`,
            title: 'Time Management',
            description: 'Coordinates the tasks to maximize work efficiency',
        },
        {
            icon: `${communication}`,
            title: 'Communication',
            description:
                'Capable of listening, speaking, observing and suggesting',
        },
        {
            icon: `${collaboration}`,
            title: 'Collaboration',
            description:
                'Capable of working with others to produce quality work',
        },
        {
            icon: `${adaptation}`,
            title: 'Adaptability',
            description:
                'Can adjust to new situations and change actions as needed',
        },
        {
            icon: `${problem_solving}`,
            title: 'Problem Solving',
            description:
                'Determines the cause of the problem and identify solutions',
        },
        {
            icon: `${creativity}`,
            title: 'Creativity',
            description: 'Capable of using imagination to generate new ideas',
        },
    ];

    return (
        <section
            className="py-20 lg:py-24 bg-[#fafafa] border-y-[3px] border-[#dddddd]"
            id="skills"
        >
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-5 xl:px-10">
                <h1 className="text-[3.4rem] min-[500px]:text-6xl sm:text-7xl font-extrabold text-[#333333] tracking-tighter">
                    services<span className="text-[#80beef]">.</span>
                </h1>
                <div className="flex flex-wrap gap-3 mt-6 min-[500px]:mt-12 sm:mt-14 lg:mt-10">
                    {skillsOptions.map((skills, index) => (
                        <button
                            key={index}
                            className={`font-medium text-base min-[500px]:text-lg lg:text-base ${
                                skills === services
                                    ? 'text-[#333333] bg-[#ffffff] border border-[#757575] py-1 w-[8.8rem] lg:w-32 rounded-full'
                                    : 'text-[#757575] bg-[#dddddd] rounded-full hover:text-[#ffffff] hover:bg-[#959595] py-1 w-[8.8rem] lg:w-32'
                            }`}
                            onClick={() => setServices(skills)}
                        >
                            {skills}
                        </button>
                    ))}
                </div>
                {services === 'Coding Skills' && (
                    <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-3 sm:gap-y-16 min-[410px]:gap-x-6 lg:gap-y-12 lg:gap-x-6 xl:gap-x-10 mt-10 sm:mt-14 lg:mt-10">
                        {codingSkillsContent.map((skills, index) => (
                            <div
                                key={index}
                                className="relative group w-full sm:w-auto"
                            >
                                <div className="flex flex-col p-4 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] bg-[#ffffff] rounded-xl w-full sm:w-[17rem] md:w-[20rem] lg:w-[19rem] xl:w-[20rem] relative z-10">
                                    <img
                                        src={skills.icon}
                                        alt="icon"
                                        className="w-9 min-[520px]:w-10 lg:w-9"
                                    />
                                    <div>
                                        <h1 className="text-lg min-[500px]:text-xl lg:text-lg font-normal text-[#333333] mt-4 sm:mt-7 lg:mt-6">
                                            {skills.title}
                                        </h1>
                                        <p className="mt-1 sm:mt-2 text-base min-[500px]:text-lg lg:text-base text-[#333333] font-light">
                                            {skills.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {services === 'Soft Skills' && (
                    <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-3 sm:gap-y-16 min-[410px]:gap-x-6 lg:gap-y-12 lg:gap-x-6 xl:gap-x-10 mt-10 sm:mt-14 lg:mt-10">
                        {softSkillsContent.map((skills, index) => (
                            <div
                                key={index}
                                className="relative group w-full sm:w-auto"
                            >
                                <div className="flex flex-col p-4 shadow-[0px_1px_4px_0px_rgba(0,0,0,0.2)] bg-[#ffffff] rounded-xl w-full sm:w-[17rem] md:w-[20rem] lg:w-[19rem] xl:w-[20rem] relative z-10">
                                    <img
                                        src={skills.icon}
                                        alt="icon"
                                        className="w-9 min-[520px]:w-10 lg:w-9"
                                    />
                                    <div>
                                        <h1 className="text-lg min-[500px]:text-xl lg:text-lg font-normal text-[#333333] mt-4 sm:mt-7 lg:mt-6">
                                            {skills.title}
                                        </h1>
                                        <p className="mt-1 sm:mt-2 text-base min-[500px]:text-lg lg:text-base text-[#333333] font-light">
                                            {skills.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
export default Skills;
