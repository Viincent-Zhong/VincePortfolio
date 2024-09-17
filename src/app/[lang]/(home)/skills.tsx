import Image from "next/image";

interface Props {
    dictionary: any;
}

type Skill = {
    name: string;
    image: string;
};

type SkillsData = [string, Skill[]][];

export default function Skills({ dictionary }: Props) {
    const skills : SkillsData = Object.entries(require("../../../constants/skills.json"));

    return (
        <div id="section-skills" className="w-full flex flex-col bg-gradient-to-r from-gray-900 via-gray-950 to-zinc-950 pb-32">
            {skills.map(([category, skills]) => {
                return (
                    <div key={category} className="w-full mt-52 flex flex-col items-center">
                        <h1 className="font-bold text-5xl bg-gradient-to-r from-indigo-600 to-indigo-400 text-transparent inline-block bg-clip-text">{dictionary[category]}</h1>
                        {/* Skills */}
                        <div className="mt-10 w-full grid grid-cols-2 lg:grid-cols-5 gap-10 px-10 lg:px-64">
                        {skills.map((skill, index) => { return (
                            <div key={index} className="col-span-1 h-52 bg-transparent border-2 neon-border flex flex-col items-center justify-center">
                                <div className="relative h-32 w-32">
                                    <Image src={skill.image} alt={skill.name} fill={true} sizes="w-full h-full"/>
                                </div>
                                <h1 className="mt-2 text-white text-xl font-mono break-words">{skill.name}</h1>
                            </div>
                        )})}
                        </div>
                    </div>
            )})}
        </div>
    )
}