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
        <section className="pb-56 lg:pb-56" id="skills">
            <div className="max-w-7xl mx-auto px-5">
                <h1 className="text-center text-4xl font-bold bg-gradient-to-b from-sky-700 to-sky-400 text-transparent bg-clip-text">
                    My Services
                </h1>
                <div className="flex justify-center items-center gap-5 mt-8">
                    {skillsOptions.map((skills, index) => (
                        <button
                            key={index}
                            className={`font-medium w-28 xl:w-32 py-1 rounded-full text-sm xl:text-base  ${
                                skills === services
                                    ? 'bg-sky-500 text-white border border-sky-500'
                                    : 'border text-slate-700 border-slate-500 bg-white'
                            }`}
                            onClick={() => setServices(skills)}
                        >
                            {skills}
                        </button>
                    ))}
                </div>
                {services === 'Coding Skills' && (
                    <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-3 min-[410px]:gap-y-10 min-[410px]:gap-x-6 lg:gap-y-16 lg:gap-x-14 mt-10 px-1 sm:px-5 xl:px-20">
                        {codingSkillsContent.map((skills, index) => (
                            <div key={index} className="relative group">
                                <div className="flex flex-col justify-between p-3 min-[520px]:p-5 bg-white border border-slate-500 hover:border-slate-700 duration-300 rounded-xl w-[10.3rem] min-[520px]:w-52 xl:w-64 h-[9.3rem] min-[520px]:h-48 xl:h-60 relative z-10">
                                    <img
                                        src={skills.icon}
                                        alt="icon"
                                        className="w-6 min-[520px]:w-8 xl:w-9"
                                    />
                                    <div>
                                        <h1 className="text-sm min-[520px]:text-base xl:text-lg font-bold text-slate-600">
                                            {skills.title}
                                        </h1>
                                        <p className="mt-2 lg:mt-3 text-[0.6rem] min-[520px]:text-xs xl:text-sm text-slate-600">
                                            {skills.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-[10.5rem] min-[520px]:w-52 xl:w-64 h-[9.5rem] min-[520px]:h-48 xl:h-60 bg-sky-400 rounded-xl rotate-6 bottom-0 left-0 z-0 group-hover:rotate-0 duration-300"></div>
                            </div>
                        ))}
                    </div>
                )}
                {services === 'Soft Skills' && (
                    <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-3 min-[410px]:gap-y-10 min-[410px]:gap-x-6 lg:gap-y-16 lg:gap-x-14 mt-10 px-1 sm:px-5 xl:px-20">
                        {softSkillsContent.map((skills, index) => (
                            <div key={index} className="relative group">
                                <div className="flex flex-col justify-between p-3 min-[520px]:p-5 bg-white border border-slate-500 hover:border-slate-700 duration-300 rounded-xl w-[10.3rem] min-[520px]:w-52 xl:w-64 h-[9.3rem] min-[520px]:h-48 xl:h-60 relative z-10">
                                    <img
                                        src={skills.icon}
                                        alt="icon"
                                        className="w-6 min-[520px]:w-8 xl:w-9"
                                    />
                                    <div>
                                        <h1 className="text-sm min-[520px]:text-base xl:text-lg font-bold text-slate-600">
                                            {skills.title}
                                        </h1>
                                        <p className="mt-2 lg:mt-3 text-[0.6rem] min-[520px]:text-xs xl:text-sm text-slate-600">
                                            {skills.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute w-[10.5rem] min-[520px]:w-52 xl:w-64 h-[9.5rem] min-[520px]:h-48 xl:h-60 bg-sky-400 rounded-xl rotate-6 bottom-0 left-0 z-0 group-hover:rotate-0 duration-300"></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
export default Skills;
