import Headers from "./components/Headers";
import Hero from "./components/Hero";
import Perks from "./components/Perks";
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
    </main>
  );
}
