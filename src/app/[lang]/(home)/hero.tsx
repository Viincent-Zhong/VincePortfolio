import Image from "next/image";

interface Props {
    dictionary: any;
}

export default async function HeroSection({ dictionary }: Props) {
    return (
        <>
            {/* Welcome I'm ... */}
            <div id="section-about" className="mt-48 grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-1 lg:col-start-2 lg:col-span-2 p-4">
                    {/* Welcome */}
                    <p className="text-5xl text-white font-mono">
                        {dictionary.welcome} <br/><br/>
                    </p>
                    {/* I'm */}
                    <p className="lg:ml-12">
                        <a className="text-5xl text-white font-mono">
                            {dictionary.me + "  "}
                        </a>
                        <a className="text-6xl text-indigo-500 font-mono">
                            {dictionary.me_name} <br/><br/>
                        </a>
                    </p>
                    {/* Engineer */}
                    <p>
                        <a className="text-5xl text-white font-mono">
                            {dictionary.me_2 + "  "}
                        </a>
                        <a className="text-5xl text-indigo-600 font-mono">
                            {dictionary.me_2_title} <br/><br/><br/>
                        </a>
                    </p>
                </div>
                {/* Picture */}
                <div className="relative lg:col-start-4 col-span-1 h-96">
                    {/*  */}
                  <Image src="/images/portfolio-pic.jpg" alt="pic" fill={true} sizes="w-full h-full"/>
                </div>
            </div>

            {/* Introduction */}
            <p className="mt-40 text-6xl text-center text-white font-mono font-bold">{dictionary.intro_title} 😃 </p>
            <div className="lg:ml-56 mt-20 grid grid-cols-1 lg:grid-cols-4">
                <p className="lg:col-span-2 text-2xl p-4 pr-10">
                    <a className="text-white">
                        {/* Intro */}
                        {dictionary.intro}
                        <br/><br/>
                        {/* Diplomas */}
                        {dictionary.intro_diploma + "  "}
                    </a>
                    <a className="text-indigo-300 font-bold">
                        {dictionary.intro_diploma_name}
                        <br/><br/>
                    </a>
                    <a className="text-white">
                    {/* Skills */}
                    {dictionary.intro_skills + "  "}
                    </a>
                    <a className="text-indigo-300 font-bold">
                        C, C++, JavaScript, Python, Haskell.
                    </a>
                    <br/><br/>
                    {/* Frameworks */}
                    <a className="text-white">
                    {dictionary.intro_frameworks + "  "}
                    </a>
                    <a className="text-indigo-300 font-bold">
                        ReactJS, NextJS, VueJS, NuxtJS.
                    </a>
                    {/* Soft skills 1*/}
                    <a className="text-white">
                        <br/><br/>
                        {dictionary.intro_soft_skills_part1 + "  "}
                    </a>
                    <a className="text-white font-bold">
                        {dictionary.intro_soft_skills_bold + "  "}
                    </a>
                    <a className="text-white">
                        {dictionary.intro_soft_skills_part2}
                        <br/>
                    </a>
                    {/* Soft skills 2 */}
                    <a className="text-white">
                        {dictionary.intro_soft_skills_2_part1 + "  "}
                    </a>
                    <a className="text-white font-bold">
                        {dictionary.intro_soft_skills_2_bold + ""}
                    </a>
                    <a className="text-white">
                        {dictionary.intro_soft_skills_2_part2}
                    </a>
                </p>
                <div className="mt-12 relative lg:col-start-3 col-span-1 h-96">
                  <Image src="/images/chill-coding.jpg" alt="pic" fill={true} sizes="w-full h-full"/>
                </div>
            </div>
        </>
    )
}