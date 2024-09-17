'use client'

import { useEffect, useState, useRef } from "react";

export default function Scroller() {
    const sections = useRef<HTMLElement[]>([]);
    const lastScroll = useRef(0);
    const [hightLight, setHighLight] = useState('');

    const handleScroll = () => {
        const scrollValue = Math.abs(window?.pageYOffset - lastScroll.current);

        // Compute highlight every 50 pixels
        if (scrollValue < 50)
            return;
        lastScroll.current = window.pageYOffset;
        let current = '';
        for (let i = 0; i < sections.current.length; i++) {
            // 6rem 96px (header height)
            if (window.pageYOffset + 96 >= sections.current[i].offsetTop) {
                current = sections.current[i].id;
            }
        }
        if (current)
            setHighLight(current);
    }

    useEffect(() => {
        const section = document.querySelectorAll('[id^="section-"]');
        if (section) {
            sections.current = Array.from(section).map((section) => section as HTMLElement);
            setHighLight(sections.current[0].id);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className="pointer-events-auto visible h-[70%] w-[10%] ml-auto mt-36 rounded-l-md opacity-50">
            <ul className="space-y-4 text-4xl font-mono break-words">
                {sections.current.map((section) => {
                    const sectionId = section.id.split('-')[1];
                    return (
                        <li key={sectionId}>
                            <a href={`#${section.id}`} className={section.id === hightLight ? 'text-cyan-300': 'text-white'}>{(sectionId.charAt(0).toUpperCase() + sectionId.slice(1))}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}