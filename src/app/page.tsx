// import Image from "next/image";

import { HomeIntro } from "../../components/Homepage/homeintro"

// import Navbar from "../../components/ui/navbar";

export default function Home() {
  return (
    <div className="md:mx-60 min-h-screen  overflow-x-hidden text-textcolor  flex-grow ">

      <HomeIntro/>

    </div>
  );
}
