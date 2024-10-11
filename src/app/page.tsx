import Capabilities from "./components/Capabilities";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Headers from "./components/Headers";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Perks from "./components/Perks";
import Pricing from "./components/Pricing";
import Testimony from "./components/Testimony";

export default function Home() {
  return (
    <main className=" gap-20 flex flex-col h-full bg-black items-center">
      <Headers />
      <div className="w-full flex items-center justify-center bg-gradient-to-b from-black via-primary-400 to-black from-60% via-70% to-90%">
        <Hero />
      </div>
      <Testimony />
      <Perks />
      <div className="w-full flex items-center justify-center bg-gradient-to-r from-primary-100 to-black">
        <Capabilities />
      </div>
      <Clients />
      <Pricing />
      <JoinUs />
      <Footer />
    </main>
  );
}
