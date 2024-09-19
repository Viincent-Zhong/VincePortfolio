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
      <div className="pointer-events-auto w-full h-24 header-main flex flex-row items-center">
        {/* Logo */}
        <div className="relative ml-4 lg:ml-20">
          <Image src="/images/logo.png" alt="Logo" width={144} height={96} className="p-4"/>
        </div>
        {/* Translation */}
          <ul className="flex flex-row ml-auto mr-4 lg:mr-14 gap-4">
          {i18n.locales.map((locale) => {
            return (
              <Link key={locale} href={redirectedPathName(locale)}>
                  <Image src={`/images/${locale}.png`} width={96} height={96} alt={locale} className={locale == currentLocale ? '' : 'opacity-50'}/>
              </Link>
            );
          })}
          </ul>
      </div>
    )
}