import Image from "next/image";

interface Props {
    dictionary: any;
}

export default function Footer({ dictionary }: Props) {
    return (
        <footer id="section-contacts" className="w-full contacts-main flex flex-col lg:flex-row items-center gap-2 font-osans">
            <div className="ml-6 text-xl text-main">
                {dictionary.made_by}
            </div>
            <div className="w-full flex flex-row justify-center">
                <a href="mailto:vincent.zhong@epitech.eu">
                    <div className="text-2xl underline text-main font-semibold link">
                        {dictionary.mailto}
                    </div>
                </a>
            </div>
            <div className="lg:ml-auto flex flex-row lg:mr-24">
                <a href="https://github.com/Viincent-Zhong" target="_blank" rel="noreferrer">
                    <div className="relative h-24 w-24">
                        <Image src="/images/github.png" alt="Github" fill={true} sizes="w-full h-full" className="p-4"/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/vincent-zhong-262302209/" target="_blank" rel="noreferrer">
                    <div className="relative h-24 w-24">
                        <Image src="/images/linkedin.png" alt="Linkedin" fill={true} sizes="w-full h-full" className="p-4"/>
                    </div>
                </a>
            </div>
        </footer>
    );

}