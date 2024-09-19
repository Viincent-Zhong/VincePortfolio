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
    const experiences : Experiences[]= require("../../../../constants/experiences.json");

    return (
        <div id="section-experiences" className="mt-44 w-full experiences-main flex flex-col items-center pb-32 font-osans">
            <div className="mt-40 h-24 p-4 w-[60%] text-center section-separator"> 
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl lg:text-6xl font-bold text-main section">{dictionary.title}</h1>
                    <div className="w-28 separator rounded-xl"/>
                </div>
            </div>
            <div id="anim-experiences" className="pop-from-bottom mt-24 grid grid-cols-1 lg:grid-cols-2 w-full px-24 lg:px-56 gap-16">
                { experiences.map((experience, index) => {return (
                    <div key={index} className={`order-${index + 1} col-span-1 w-full h-[60rem] flex flex-row justify-center bg-transparent neon-border hover:zoom ease-in-out duration-300`}>
                        {/* Image */}
                        <div className="w-full h-full flex flex-col overflow-y-auto">
                            <div className="relative w-full h-[20rem]">
                                <Image src={experience.image} alt={experience.name} fill={true} sizes="w-full h-full" className="p-6" />
                            </div>
                            {/* Name */}
                            <h1 className="text-center text-4xl lg:text-5xl text-main highlight font-bold break-words">
                                {experience.name}
                            </h1>
                            {/* Text */}
                            <p className="mt-10 whitespace-pre px-8 text-sm lg:text-xl text-main h-[30rem] text-wrap overflow-y-auto">
                                {dictionary[experience.description]}
                            </p>
                            {/* Link */}
                            { experience.link &&
                            <div className="w-full flex flex-row justify-center">
                                <a href={experience.link} target="_blank" rel="noreferrer">
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