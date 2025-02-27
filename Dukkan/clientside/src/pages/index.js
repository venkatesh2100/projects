import { Inter } from "next/font/google";
import TopBar from "./components/topbar";
import MainBody from "./components/mainBody";
import SideBar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex bg-gray-50">
      <SideBar />

      <div className="md:ml-52 w-full">
        <TopBar />
        <div className="mt-5">
        <MainBody /></div>
      </div>
    </main>
  );
}
