import { Locale } from "../../../i18n-config";
import Interface from "../components/interface/interface";
import HeroSection from "./hero";
import { getDictionary } from "../../../get-dictionary";

export default async function Home({ params: { lang }}: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-gradient-to-tr from-zinc-900 to-indigo-900 min-h-screen min-w-screen">
      <Interface/>
      {/* Introduction */}
      <div className="pt-40 pb-40">
        <HeroSection dictionary={dictionary["hero"]}/>
        <div id="section-test" className="h-[50rem] bg-slate-200"></div>
      </div>

      {/* Experiences */}
      {/* Projects */}
      {/* Skills */}
      {/* Tools */}
      {/* Soft skills */}

      {/* Github */}

      {/* Footer social medias */}
    </div>
  );
}
