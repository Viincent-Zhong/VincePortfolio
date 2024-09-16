'use client'

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
    const projects : ProjectsData = Object.entries(require("../../../constants/projects.json"));
    const categories = projects.map(([key, _]) => key);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <div id="section-projects" className="w-full mt-24 flex flex-col items-center">
            <div className="h-24 p-4 w-[60%] bg-gradient-to-r from-zinc-900 via-indigo-950 to-purple-950 rounded-xl text-center"> 
                <h1 className="text-6xl font-bold bg-gradient-to-r to-indigo-900 from-purple-900 text-transparent inline-block bg-clip-text">{dictionary.title}</h1>
            </div>
            {/* Categories button */}
            <div className="mt-10 flex flex-row justify-center">
                {categories.map((category, index) => (
                    <div key={index} className="text-white font-mono text-4xl p-4 underline cursor-pointer hover:text-indigo-800" onClick={() => {setSelectedCategory(category)}}>
                        {category.toUpperCase()}
                    </div>
                ))}
            </div>
            {/* Projects */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 w-full px-24 lg:px-96 gap-6">
                {(projects.find(([category, _]) => category === selectedCategory)?.at(1) as Project[]).map((project, index) => {return (
                    <div key={index} className={`order-${index + 1} col-span-1 w-full h-96 flex flex-row justify-center bg-transparent neon-border hover:zoom ease-in-out duration-300`}>
                        {project.name}
                        <p className="whitespace-pre">
                            {dictionary[project.description]}
                        </p>
                    </div>
                )})}
            </div>
        </div>
    )
}