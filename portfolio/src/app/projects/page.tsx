import { ProjectComponent } from "../../../components/projects/projects";
import TimerContainer from "../countdown/page";

export default function Projectspage() {
  return (
    <div className="min-h-screen md:mx-60">
      <ProjectComponent />
      <div className="mt-102">
      <TimerContainer />

      </div>
    </div>
  );
}
export const metadata={
  title:'Venky | Projects'
}