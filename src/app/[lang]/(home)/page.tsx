import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import Interface from "../components/interface/interface";
import HeroSection from "./hero";
import ProjectSection from "./projects";
import ExperiencesSection from "./experiences";
import SkillSection from "./skills";

export default async function Home({ params: { lang }}: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-gradient-to-tr from-zinc-900 to-indigo-900 min-h-screen min-w-screen">
      <Interface/>
      <div className="pt-40">
        <HeroSection dictionary={dictionary["hero"]}/>
        <ProjectSection dictionary={dictionary["projects"]}/>
        <ExperiencesSection dictionary={dictionary["experiences"]}/>
        <SkillSection dictionary={dictionary["skills"]}/>
      </div>

      {/* Github */}

      {/* Footer social medias */}
    </div>
  );
}
