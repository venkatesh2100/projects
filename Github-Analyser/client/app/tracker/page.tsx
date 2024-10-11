import Footer from "@/components/tracker/footer";
import Mainbody from "@/components/tracker/mainBody";
import Topbar from "@/components/tracker/topbar";

export default function Layout() {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow">
                <Topbar />
                <Mainbody />
            </div>
            <Footer />
        </div>
    );
}
