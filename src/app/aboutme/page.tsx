"use client";
// import { Me } from "../../../components/aboutme/aboutme";
import Particles from "../../../components/aboutme/particles";





import Hero from "../../../components/aboutme/Hero"
import Projects from "../../../components/aboutme/Projects";
// import Skills from "../../../components/aboutme/particles";
import { FloatingNav } from "../../../components/aboutme/ui/FloatingNavbar";
import { navItems } from "../../../components/aboutme/data";
// import { title } from "process";
// import { Timeline } from "../../../components/aboutme/ui/Timeline";
// import Education from "../../../components/aboutme/Education";
// import Links from "./componens/Links";
// import Contact from "../../../components/aboutme/Contact";
// import Navbar from "../../../components/navbar";
// import { ModeToggle } from "./components/ui/ModeToggle";

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
        {/* <Education /> */}
        {/* <Contact />  */}
      </div>
    </main>
  );
}
