import * as AOS from 'aos';
import Header from "../components/Header";
import FeatureCircle from "../components/Section2";
import { SectionHero } from "../components/SectionHero";
import { SectionProducts } from "../components/Section3";
import { Footer } from "../components/Footer";
import { Farm } from "../components/Section4";
import { SectionReviews } from "../components/SectionReviews";
import { Section5 } from "../components/Section5";
import { useEffect } from "react";
import FAQ from "../components/SectionFaq";

export function Home() {
useEffect(()=>{
  AOS.init({
    duration:1000,
    easing:'ease-in-out',
    once:true
  })
},[])
  return (
    <div>
      <Header/>
      <SectionHero/>
      <FeatureCircle/>
      <SectionProducts/>
      <Farm/>
      <SectionReviews/>
      <Section5/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
