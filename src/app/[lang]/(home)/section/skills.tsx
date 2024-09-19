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
    const skills : SkillsData = Object.entries(require("../../../../constants/skills.json"));

    return (
        <div id="section-skills" className="w-full flex flex-col skills-main pb-32 font-osans">
            {skills.map(([category, skills]) => {
                return (
                    <div key={category} className="w-full mt-52 flex flex-col items-center">
                        <h1 className="font-bold text-5xl text-main section">{dictionary[category]}</h1>
                        {/* Skills */}
                        <div id={`anim-${category}`} className="pop-from-left mt-10 w-full grid grid-cols-2 lg:grid-cols-5 gap-10 px-10 lg:px-64">
                        {skills.map((skill, index) => { return (
                            <div key={index} className="col-span-1 h-52 bg-transparent border-2 neon-border flex flex-col items-center justify-center hover:zoom ease-in-out duration-300">
                                <div className="relative h-32 w-32">
                                    <Image src={skill.image} alt={skill.name} fill={true} sizes="w-full h-full"/>
                                </div>
                                <h1 className="mt-2 text-main highlight text-xl break-words">{skill.name}</h1>
                            </div>
                        )})}
                        </div>
                    </div>
            )})}
        </div>
    )
}