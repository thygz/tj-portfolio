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
            description: 'Translate visual designs into functional code',
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
            description: 'Creates, develops and manages databases',
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
            description:
                'Coordinates the tasks and activities to maximize work efficiency',
        },
        {
            icon: `${communication}`,
            title: 'Communication',
            description: 'Capable of listening, speaking and observing',
        },
        {
            icon: `${collaboration}`,
            title: 'Collaboration',
            description: 'Capable of working well with others',
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
            <div className="max-w-7xl mx-auto px-8 md:px-9 lg:px-5 xl:px-10">
                <h1 className="text-6xl sm:text-7xl font-extrabold text-[#333333] tracking-tighter">
                    services<span className="text-[#80beef]">.</span>
                </h1>
                <div className="flex gap-3 mt-10">
                    {skillsOptions.map((skills, index) => (
                        <button
                            key={index}
                            className={`font-medium text-lg lg:text-base ${
                                skills === services
                                    ? 'text-[#ffffff] bg-[#363636] py-1 w-[8.5rem] lg:w-32 rounded-md'
                                    : 'text-[#ffffff] bg-[#959595] rounded-md hover:text-[#ffffff] hover:bg-[#363636] py-1 w-[8.5rem] lg:w-32'
                            }`}
                            onClick={() => setServices(skills)}
                        >
                            {skills}
                        </button>
                    ))}
                </div>
                {services === 'Coding Skills' && (
                    <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-3 min-[410px]:gap-y-10 min-[410px]:gap-x-6 lg:gap-y-16 lg:gap-x-6 xl:gap-x-14 mt-10">
                        {codingSkillsContent.map((skills, index) => (
                            <div
                                key={index}
                                className="relative group w-full sm:w-auto"
                            >
                                <div className="flex flex-col justify-between p-3 min-[520px]:p-4 shadow-[1px_1px_3px_1px_rgba(0,0,0,0.1)] bg-[#ffffff] rounded-xl w-full sm:w-[17rem] md:w-[21rem] lg:w-[19rem] xl:w-[22rem] h-40 relative z-10">
                                    <img
                                        src={skills.icon}
                                        alt="icon"
                                        className="w-8 min-[520px]:w-8 xl:w-9"
                                    />
                                    <div>
                                        <h1 className="text-xl lg:text-lg font-medium text-[#333333]">
                                            {skills.title}
                                        </h1>
                                        <p className="mt-2 lg:mt-1 text-lg lg:text-base text-[#333333] font-light leading-6 lg:leading-5">
                                            {skills.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {services === 'Soft Skills' && (
                    <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-3 min-[410px]:gap-y-10 min-[410px]:gap-x-6 lg:gap-y-16 lg:gap-x-6 xl:gap-x-14 mt-10">
                        {softSkillsContent.map((skills, index) => (
                            <div
                                key={index}
                                className="relative group w-full sm:w-auto"
                            >
                                <div className="flex flex-col justify-between p-3 min-[520px]:p-4 shadow-[1px_1px_3px_1px_rgba(0,0,0,0.1)] bg-[#ffffff] rounded-xl w-full sm:w-[17rem] md:w-[21rem] lg:w-[19rem] xl:w-[22rem] h-40 relative z-10">
                                    <img
                                        src={skills.icon}
                                        alt="icon"
                                        className="w-8 min-[520px]:w-8 xl:w-9"
                                    />
                                    <div>
                                        <h1 className="text-xl lg:text-lg font-medium text-[#333333]">
                                            {skills.title}
                                        </h1>
                                        <p className="mt-2 lg:mt-1 text-lg lg:text-base text-[#333333] font-light leading-6 lg:leading-5">
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
