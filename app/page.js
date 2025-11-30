
import Approch from "./Componants/Home/Approch";
import Hero from "./Componants/Home/Hero";
import Service from "./Componants/Home/Service";

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Hero />
      <Service />
      <Approch />
    </main>
  );
}
