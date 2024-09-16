'use client'

import Image from "next/image"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";

export default function Header() {
    const pathName = usePathname();
    const redirectedPathName = (locale: Locale) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };

    return (
      <div className="pointer-events-auto w-full h-24 bg-slate-700 opacity-50 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 grid-rows-1">
        {/* Logo */}
        <div className="relative col-start-1 col-span-1 row-start-1 row-span-1">
          <Image src="/images/logo.png" alt="Logo" fill={true} sizes="w-full h-full" className="p-4"/>
        </div>
        {/* Translation */}
        <div className="row-start-1 row-span-1 col-start-4 md:col-start-6 lg:col-start-10 col-span-1">
            <ul className="text-5xl text-white">
            {i18n.locales.map((locale) => {
              return (
                <li key={locale}>
                  <Link href={redirectedPathName(locale)}>{locale}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
}