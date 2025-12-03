import AboutStates from "./Componants/AboutStates";
import AboutUsHeader from "./Componants/AboutUsHeader";
import OurMission from "./Componants/OurMission";
import OurValues from "./Componants/OurValues";
import WhoWeAre from "./Componants/WhoWeAre";

export default function AboutPage() {
  return (
    <main className="container">
      <AboutUsHeader />
      <OurMission />
      <AboutStates />
      <WhoWeAre />
      <OurValues />
      
    </main>
  );
}
