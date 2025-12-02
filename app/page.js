
import Approch from "./Componants/Home/Approch";
import Hero from "./Componants/Home/Hero";
import Leading_slogan from "./Componants/Home/Leading_slogan";
import Service from "./Componants/Home/Service";
import TechStack from "./Componants/TechStack/TechStack";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-10">
      <Hero />
      <Service />
      <Leading_slogan />
      <Approch />
      <TechStack />
    </main>
  );
}
