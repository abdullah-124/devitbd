
import Approch from "./Componants/Home/Approch";
import Hero from "./Componants/Home/Hero";
import Leading_slogan from "./Componants/Home/Leading_slogan";
import Service from "./Componants/Home/Service";
import WhyChooseUs from "./aboutus/Componants/OurValues";
import TechStack from "./Componants/TechStack/TechStack";
import OurMission from "./aboutus/Componants/OurMission";
import OurValues from "./aboutus/Componants/OurValues";
import AboutStates from "./aboutus/Componants/AboutStates";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Service />
      <OurMission />
      <AboutStates />
      <Approch />
      <TechStack />
      <OurValues />
      <Leading_slogan />
    </main>
  );
}
