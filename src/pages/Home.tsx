import { Footer } from "../components/Footer";
import Header from "../components/Header";
import FeatureCircle from "../components/SectionFeatureCircle";
import { SectionHero } from "../components/SectionHero";

export function Home() {

  return (
    <div>
      <Header/>
      <SectionHero/>
      <FeatureCircle/>
      <Footer/>
    </div>
  )
}
