import Image from "next/image";

interface Props {
    dictionary: any;
}

type Experiences = {
    name: string;
    description: string;
    image: string;
    link: string;
};


export default function Experiences({ dictionary } : Props) {
    const experiences : Experiences[]= require("../../../constants/experiences.json");

    return (
        <div id="section-experiences" className="w-full bg-gradient-to-r to-zinc-900 via-indigo-950 from-purple-950 flex flex-col items-center pb-32">
            <div className="mt-24 h-24 p-4 w-[60%] rounded-xl text-center"> 
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-900 to-purple-900 text-transparent inline-block bg-clip-text">{dictionary.title}</h1>
            </div>
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 w-full px-24 lg:px-56 gap-16">
                { experiences.map((experience, index) => {return (
                    <div key={index} className={`order-${index + 1} col-span-1 w-full h-[60rem] flex flex-row justify-center bg-transparent neon-border hover:zoom ease-in-out duration-300`}>
                        {/* Image */}
                        <div className="w-full h-full flex flex-col overflow-y-auto">
                            <div className="relative w-full h-[20rem]">
                                <Image src={experience.image} alt={experience.name} fill={true} sizes="w-full h-full" className="p-6" />
                            </div>
                            {/* Name */}
                            <h1 className="text-center text-4xl lg:text-5xl text-white font-bold break-words">
                                {experience.name}
                            </h1>
                            {/* Text */}
                            <p className="mt-10 whitespace-pre px-8 text-sm lg:text-xl text-white font-mono h-[30rem] overflow-y-auto">
                                {dictionary[experience.description]}
                            </p>
                            {/* Link */}
                            <div className="w-full flex flex-row justify-center">
                                <a href={experience.link} target="_blank" rel="noreferrer">
                                    <div className="w-40 h-14 bg-gradient-to-r to-indigo-900 from-indigo-950 flex flex-row justify-center items-center cursor-pointer rounded-md">
                                    {/* onClick={() => {window.open(experience.link, "_blank")}}> */}
                                        <h1 className="text-white text-xl text-center">{dictionary.redirection}</h1>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}