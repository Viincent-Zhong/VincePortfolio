'use client'

import Image from "next/image";
import { useState } from "react";

interface Props {
    dictionary: any;
}

type Project = {
    name: string;
    description: string;
    image: string;
    link: string;
};

type ProjectsData = [string, Project[]][];

export default function Projects({ dictionary } : Props) {
    const projects : ProjectsData = Object.entries(require("../../../../constants/projects.json"));
    const categories = projects.map(([key, _]) => key);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div id="section-projects" className="w-full flex flex-col items-center projects-main pb-32 font-osans">
            <div className="mt-40 h-24 p-4 w-[60%] text-center"> 
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-main section">{dictionary.title}</h1>
                    <div className="w-24 separator rounded-xl"/>
                </div>
                <h2 className="mt-2 text-2xl text-main">{dictionary.exhaustive}</h2>
            </div>
            {/* Categories button */}
            <div className="mt-10 flex flex-row justify-center">
                {categories.map((category, index) => (
                    <div key={index} className="text-main highlight text-4xl p-4 underline cursor-pointer hover:font-semibold" onClick={() => {setSelectedCategory(category)}}>
                        {category.toUpperCase()}
                    </div>
                ))}
            </div>
            {/* Projects */}
            <div id="anim-projects" className="pop-from-bottom mt-10 grid grid-cols-1 lg:grid-cols-3 w-full px-24 lg:px-52 gap-10">
                {(projects.find(([category, _]) => category === selectedCategory)?.at(1) as Project[]).map((project, index) => {return (
                    <div key={index} className={`order-${index + 1} col-span-1 w-full h-[60rem] flex flex-row justify-center bg-transparent neon-border hover:zoom ease-in-out duration-300`}>
                        {/* Image */}
                        <div className="w-full h-full flex flex-col overflow-y-auto">
                            <div className="relative w-full h-[20rem]">
                                <Image src={project.image} alt={project.name} fill={true} sizes="w-full h-full" className="p-6" />
                            </div>
                            {/* Name */}
                            <h1 className="text-center text-4xl lg:text-5xl text-main highlight font-bold break-words">
                                {project.name}
                            </h1>
                            {/* Text */}
                            <p className="mt-10 whitespace-pre text-wrap px-8 text-sm lg:text-xl text-main h-[30rem] overflow-y-auto">
                                {dictionary[project.description]}
                            </p>
                            {/* Link */}
                            { project.link &&
                            <div className="w-full flex flex-row justify-center">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                <div className="w-40 h-14 button-main flex flex-row justify-center items-center cursor-pointer rounded-md">
                                    <h1 className="text-xl text-center">{dictionary.redirection}</h1>
                                </div>
                                </a>
                            </div>
                            }
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}