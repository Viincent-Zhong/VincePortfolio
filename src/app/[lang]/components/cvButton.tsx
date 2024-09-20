'use client'

import { usePathname } from "next/navigation";
import { i18n, type Locale } from "../../../i18n-config";

interface Props {
    dictionary: any;
}

export default function CvButton({dictionary}: Props) {
    const pathName = usePathname();
    const currentLocale = (() => {
        const segments = pathName.split("/");
        if (segments.length < 2) return i18n.defaultLocale;
        return segments[1] as Locale;
    })();

    return (
        <div className="mt-10 w-full flex flex-row justify-center">
            <a href={`/images/Vincent's CV (${currentLocale} ver.).pdf`} target="_blank" className="h-24 w-40 font-semibold rounded-xl button-main flex flex-row items-center justify-center text-xl">
                {dictionary.cv}
            </a>
        </div>
    )
}