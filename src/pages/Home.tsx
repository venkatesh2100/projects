import Header from "../components/Header";
import FeatureCircle from "../components/Section2";
import { SectionHero } from "../components/SectionHero";
import { SectionProducts } from "../components/Section3";
import { Footer } from "../components/Footer";
import { Farm } from "../components/Section4";
import { SectionReviews } from "../components/SectionReviews";

export function Home() {

  return (
    <div>
      <Header/>
      <SectionHero/>
      <FeatureCircle/>
      <SectionProducts/>
      <Farm/>
      <SectionReviews/>
      <Footer/>
    </div>
  )
}
