import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full md:gap-8 gap-4 max-xs:px-3">
      <div className="flex md:gap-3 gap-2 w-fit border-[1px] border-white-10 rounded-full md:px-4 px-3 md:py-3 py-2">
        <div className="w-fit bg-primary-500 flex items-center text-black rounded-full px-2 py-[2px] font-bold md:text-[10px] text-[8px]">NEW</div>

        <p className="text-primary-500 md:text-base text-xs font-normal">Latest integration just arrived</p>
      </div>

      <div className="flex flex-col gap-1 items-center justify-center">
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-normal text-white-100">Boost your</h1>
        <h1 className="lg:text-7xl md:text-6xl text-4xl font-normal inline-block bg-gradient-to-b from-white-100 to-primary-700 from-40% to-80% text-transparent bg-clip-text pb-2">
          rankings with AI.
        </h1>
      </div>

      <p className="md:text-lg text-sm px-8 md:px-36 lg:px-60 text-center">Elevate your site’s visibility effortlessly with AI, where smart technology meets user-friendly SEO tools.</p>

      <Button className="bg-white-100 text-black hover:text-white-100 text-sm md:text-base">Start for free</Button>

      <div className="relative pt-10 w-full flex items-center justify-center">
        <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black h-48 w-full" />
        <div className="rounded-xl max-w-[1024px] w-full">
          <Image height={0} width={0} alt="product" src="/product-image.png" sizes="100vw" className="w-full h-auto shadow-product-shadow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
