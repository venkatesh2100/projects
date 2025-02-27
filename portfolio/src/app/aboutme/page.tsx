"use client";
import Particles from "../../../components/aboutme/particles";
import Hero from "../../../components/aboutme/Hero"
import Projects from "../../../components/aboutme/Projects";
import { FloatingNav } from "../../../components/aboutme/ui/FloatingNavbar";
import { navItems } from "../../../components/aboutme/data";
import Githubchartdemo from "../../../components/aboutme/gtihub/chartdemo";
export default function Home() {
  return (
    <main className="relative bg-black-100 text-text-color flex justify-center items-center flex-col min-h-screen overflow-hidden ">
      <div className=" w-full">
        {/* <Navbar/> */}
        {/* <ModeToggle /> */}
        <Particles/>
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Skills /> */}
        <Projects />
        <Githubchartdemo/>
      {/* <GradientCircle/> */}
        {/* <Education /> */}
        {/* <Contact />  */}
      </div>
    </main>
  );
}
