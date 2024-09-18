import Image from "next/image"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "../../../../i18n-config";

export default function Header() {
    const pathName = usePathname();
    const currentLocale = (() => {
      const segments = pathName.split("/");
      if (segments.length < 2) return i18n.defaultLocale;
      return segments[1] as Locale;
    })();

    const redirectedPathName = (locale: Locale) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };

    return (
      <div className="pointer-events-auto w-full h-24 bg-[rgb(51,65,85,0.5)] flex flex-row items-center">
        {/* Logo */}
        <div className="relative ml-4 lg:ml-20 w-36 h-24">
          <Image src="/images/logo.png" alt="Logo" fill={true} sizes="w-full h-full" className="p-4"/>
        </div>
        {/* Translation */}
          <ul className="flex flex-row ml-auto mr-4 lg:mr-14 gap-4">
          {i18n.locales.map((locale) => {
            return (
              <li key={locale} className="relative w-24 h-24">
                <Link href={redirectedPathName(locale)}>
                    <Image src={`/images/${locale}.png`} fill={true} sizes="w-full h-full" alt={locale} className={locale == currentLocale ? '' : 'opacity-50'}/>
                </Link>
              </li>
            );
          })}
          </ul>
      </div>
    )
}