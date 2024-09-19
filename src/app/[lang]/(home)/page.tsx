import { Locale } from "../../../i18n-config";
import { getDictionary } from "../../../get-dictionary";
import Interface from "../components/interface/interface";
import Footer from "../components/footer";
import HeroSection from "./section/hero";
import ProjectSection from "./section/projects";
import ExperiencesSection from "./section/experiences";
import SkillSection from "./section/skills";

export default async function Home({ params: { lang }}: { params: { lang: Locale }}) {
  const dictionary = await getDictionary(lang);

  return (
    <div id="section-about" className="bg-main min-h-screen min-w-screen">
      <Interface dictionary={dictionary["interface"]}/>
      <div className="pt-40">
        <HeroSection dictionary={dictionary["hero"]}/>
        <ExperiencesSection dictionary={dictionary["experiences"]}/>
        <ProjectSection dictionary={dictionary["projects"]}/>
        <SkillSection dictionary={dictionary["skills"]}/>
        <Footer dictionary={dictionary["footer"]}/>
      </div>
    </div>
  );
}
