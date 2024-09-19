'use client'

import { useEffect, useState, useRef } from "react";

const elementIsVisibleInViewport = (el: any) => {
    if (el.getBoundingClientRect().top < window.innerHeight)
        return true;
    return false;
};

interface Props {
    dictionary: any;
}

export default function Scroller({dictionary}: Props) {
    const sections = useRef<HTMLElement[]>([]);
    const anims = useRef<HTMLElement[]>([]);
    const lastScroll = useRef(0);
    const [hightLight, setHighLight] = useState('');

    const handleScroll = () => {
        const scrollValue = Math.abs(window?.pageYOffset - lastScroll.current);

        // Compute highlight every 50 pixels
        if (scrollValue < 50)
            return;
        lastScroll.current = window.pageYOffset;

        for (let i = 0; i < sections.current.length; i++) {
            if (elementIsVisibleInViewport(sections.current[i])) {
                setHighLight(sections.current[i].id);
            }
        }

        for (let i = 0; i < anims.current.length; i++) {
            if (elementIsVisibleInViewport(anims.current[i])) {
                anims.current[i].classList.add('show');
            } else {
                anims.current[i].classList.remove('show');
            }
        }
    }

    useEffect(() => {
        const section = document.querySelectorAll('[id^="section-"]');
        if (section) {
            sections.current = Array.from(section).map((section) => section as HTMLElement);
            setHighLight(sections.current[0].id);
        }
        const anim = document.querySelectorAll('[id^="anim-"]');
        if (anim) {
            anims.current = Array.from(anim).map((anim) => anim as HTMLElement);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className="pointer-events-auto h-[70%] w-[10%] ml-auto mt-52 rounded-l-md font-sans">
            <ul className="select-none space-y-4 text-3xl break-words rounded-l-xl header-main px-4 py-8 shadow-2xl">
                {sections.current.map((section) => {
                    const sectionId = section.id.split('-')[1];
                    return (
                        <li key={sectionId}>
                            <a href={`#${section.id}`} className={section.id === hightLight ? 'underline': 'text-white'}>{dictionary[sectionId]}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}