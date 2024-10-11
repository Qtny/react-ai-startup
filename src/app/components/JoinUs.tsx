"use-client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const JoinUs = () => {

  return (
    <section className="flex justify-center items-center w-full">
      <div className="flex flex-col relative pb-28 bg-gradient-to-b from-primary-300 to-black border border-white-10 rounded-lg pt-20 gap-10 w-full justify-center items-center z-0">
        <div className="absolute opacity-15 z-10 grid grid-cols-8 gap-0 w-full h-ful bg-gradient-b from-black from-20% to-transparent inset-0">
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
          <div className="border border-white-10"></div>
        </div>
        <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl text-center md:w-72 lg:w-96">AI-driven SEO for everyone.</h1>

        <div className="flex flex-col gap-3 w-60 md:w-72 justify-center items-center z-20">
          <Input className="border-white-10 text-white-100 placeholder-white-10" placeholder="Your email" />

          <Button
            className="text-black bg-white-100  hover:text-white-100 hover:bg-black w-full"
          >
            Join waitlist
          </Button>
        </div>

        <p className="text-gray-400 font-normal text-sm px-3 text-center">No credit card required ‧ 7-days free trial</p>
      </div>
    </section>
  );
};

export default JoinUs;
