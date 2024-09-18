import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Experience />
      </div>
    </main>
  );
}
