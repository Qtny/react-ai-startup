"use client";

import Image from "next/image";
import React from "react";

const Perks = () => {
  return (
    <section className="flex flex-col gap-8 justify-center items-center pb-20">
      <h2 className="text-xl md:text-2xl font-medium text-center md:w-[440px]">Harness the power of AI, making search engine optimization intuitive and effective for all skill levels</h2>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col border justify-between items-center border-white-10 rounded-lg p-4 gap-8 md:h-96 h-72">
            <div className="w-[180px] h-auto flex justify-center items-center flex-1">
              <Image width={0} height={0} sizes="100vw" src="/perks/ring.png" alt="ring" className="w-full h-auto" />
            </div>

            <div className="flex flex-col gap-3 h-16 md:h-20">
              <h5 className="text-xs md:text-sm lg:text-base font-medium">SEO goal setting</h5>

              <p className="text-xs md:text-sm lg:text-base font-normal text-white-70">Helps you set and achieve SEO goals with guided assistance</p>
            </div>
          </div>

          <div className="relative flex flex-col rounded-lg p-4 border border-white-10 size-full justify-between md:h-96 h-72 overflow-hidden z-0 bg-gradient-to-b from-black to-primary-300">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/perks/product-graph.png"
              alt="product"
              className="w-auto h-[200px] xs:h-[400px] lg:h-[550px] object-cover object-left absolute top-10 left-10 z-10"
            />

            {/* background */}
            <div className="absolute top-0 left-0 size-full z-20">
              <div className="bg-gradient-to-b from-transparent from-30% to-primary-300 h-56 md:h-80" />
              <div className="bg-primary-300 h-16" />
            </div>

            <div className="" />

            <div className="flex flex-col gap-3 z-20 h-16 md:h-20 md:w-72">
              <h5 className="text-xs md:text-sm lg:text-base font-medium">User-friendly dashboard</h5>

              <p className="text-xs md:text-sm lg:text-base font-normal text-white-70">Perform complex SEO audits and optimizations with a single click</p>
            </div>
          </div>
        </div>

        <div className="flex max-md:flex-col gap-4">
          <div className="relative flex flex-col rounded-lg p-4 border border-white-10 size-full justify-between md:h-96 h-72 overflow-hidden z-0 bg-gradient-to-b from-black to-primary-300">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/perks/traffic-graph.png"
              alt="product"
              className="w-auto h-[200px] xs:h-[400px] lg:h-[450px] object-cover object-left absolute top-10 left-10 z-10"
            />

            {/* background */}
            <div className="absolute top-0 left-0 size-full z-20">
              <div className="bg-gradient-to-b from-transparent from-30% to-primary-300 h-56 md:h-80" />
              <div className="bg-primary-300 h-16" />
            </div>

            <div className="" />

            <div className="flex flex-col gap-3 z-20 h-16 md:h-20 md:w-72">
              <h5 className="text-xs md:text-sm lg:text-base font-medium">Visual Reports</h5>

              <p className="text-xs md:text-sm lg:text-base font-normal text-white-70">Visual insights into your site&apos;s performance.</p>
            </div>
          </div>

          <div className="flex flex-col border justify-between items-center border-white-10 rounded-lg p-4 gap-8 md:h-96 h-72">
            <div className="md:w-[180px] w-[150px] h-auto flex justify-center items-center flex-1">
              <Image width={0} height={0} sizes="100vw" src="/perks/cone.png" alt="ring" className="w-full h-auto" />
            </div>

            <div className="flex flex-col gap-3 h-16 md:h-20">
              <h5 className="text-xs md:text-sm lg:text-base font-medium">Smart Keyboard Generator</h5>

              <p className="text-xs md:text-sm lg:text-base font-normal text-white-70">Automatic suggestions and the best keywords to target.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Perks;
