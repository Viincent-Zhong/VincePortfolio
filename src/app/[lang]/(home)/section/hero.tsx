import Image from "next/image";
import CvButton from "../../components/cvButton";

interface Props {
    dictionary: any;
}

export default async function HeroSection({ dictionary }: Props) {
    return (
        <>
            {/* Welcome I'm ... */}
            <div className="mt-48 grid grid-cols-1 lg:grid-cols-5 font-osans">
                <div className="col-span-1 lg:col-start-2 lg:col-span-2 p-4">
                    {/* Welcome */}
                    <p className="text-5xl text-main">
                        {dictionary.welcome} <br/><br/>
                    </p>
                    {/* I'm */}
                    <p className="lg:ml-12">
                        <a className="text-5xl text-main">
                            {dictionary.me + "  "}
                        </a>
                        <a className="text-6xl text-main highlight font-semibold">
                            {dictionary.me_name} <br/><br/>
                        </a>
                    </p>
                    {/* Engineer */}
                    <p>
                        <a className="text-5xl text-main">
                            {dictionary.me_2 + "  "}
                        </a>
                        <a className="text-5xl text-main highlight font-semibold">
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
            <p className="mt-40 text-6xl text-center text-main font-bold">{dictionary.intro_title} 😃 </p>
            <div className="lg:ml-56 mt-20 grid grid-cols-1 lg:grid-cols-4">
                <p className="lg:col-span-2 text-2xl p-4 pr-10">
                    <a className="text-main">
                        {/* Intro */}
                        {dictionary.intro}
                        <br/><br/>
                        {/* Diplomas */}
                        {dictionary.intro_diploma + "  "}
                    </a>
                    <a className="text-main highlight italic font-bold">
                        {dictionary.intro_diploma_name}
                        <br/><br/>
                    </a>
                    <a className="text-main">
                    {/* Skills */}
                    {dictionary.intro_skills + "  "}
                    </a>
                    <a className="text-main highlight italic font-bold">
                        C, C++, JavaScript, Python, Haskell.
                    </a>
                    <br/><br/>
                    {/* Frameworks */}
                    <a className="text-main">
                    {dictionary.intro_frameworks + "  "}
                    </a>
                    <a className="text-main highlight italic font-bold">
                        ReactJS, NextJS, VueJS, NuxtJS.
                    </a>
                    {/* Soft skills 1*/}
                    <a className="text-main">
                        <br/><br/>
                        {dictionary.intro_soft_skills_part1 + "  "}
                    </a>
                    <a className="text-main font-semibold">
                        {dictionary.intro_soft_skills_bold + "  "}
                    </a>
                    <a className="text-main">
                        {dictionary.intro_soft_skills_part2}
                        <br/>
                    </a>
                    {/* Soft skills 2 */}
                    <a className="text-main">
                        {dictionary.intro_soft_skills_2_part1 + "  "}
                    </a>
                    <a className="text-main font-semibold">
                        {dictionary.intro_soft_skills_2_bold + ""}
                    </a>
                    <a className="text-main">
                        {dictionary.intro_soft_skills_2_part2}
                    </a>
                </p>
                <div className="mt-12 relative lg:col-start-3 col-span-1 h-96">
                  <Image src="/images/chill-coding.jpg" alt="pic" fill={true} sizes="w-full h-full"/>
                </div>
            </div>
            {/* Download CV */}
            <CvButton dictionary={dictionary}/>
        </>
    )
}