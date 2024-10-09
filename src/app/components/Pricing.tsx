"use client";

import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { pricing } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const [switchState, setSwitchState] = useState(false);
  return (
    <section className="pb-20 flex flex-col justify-center items-center gap-12">
      <div className="flex flex-col w-full justify-center items-center gap-4 px-3 text-center">
        <h1 className="font-medium md:text-5xl text-xl">Pricing</h1>

        <h2 className="text-sm md:text-base font-normal">Choose the right plan to meet your SEO needs and start optimizing today.</h2>

        <div className="flex gap-3 w-36 items-start">
          <Switch onCheckedChange={() => setSwitchState((prev) => !prev)} />

          <p className="font-normal text-sm text-white-70">Bill {switchState ? "Monthly" : "Yearly"}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-[1px] border-white-10 p-4 flex flex-col gap-4 w-60 md:w-64 xl:w-72 h-96 md:h-[420px] bg-transparent">
          <CardHeader className="p-0 flex flex-col">
            <CardTitle className="text-white-100 font-medium text-xl md:text-3xl">{pricing[0].name}</CardTitle>

            <CardDescription>${switchState ? pricing[0].price + 10 : pricing[0].price}/mo</CardDescription>
          </CardHeader>

          <CardContent className="p-0 pt-4 h-full flex flex-col justify-between flex-1 border-t border-white-10">
            <div className="space-y-2">
              {pricing[0].features.map((feature, index) => {
                return (
                  <div key={`feature_pricing_${index}`} className="flex gap-2 w-full text-white-100 justify-start items-center">
                    <FaCheck className="size-3" />

                    <p className="text-xs md:text-sm">{feature}</p>
                  </div>
                );
              })}
            </div>

            <Button className="w-full text-white-100 h-fit bg-primary-600">Join waitlist</Button>
          </CardContent>
        </Card>

        <Card className="relative z-0 border-[1px] border-white-10 p-4 flex flex-col gap-4 w-60 md:w-64 xl:w-72 h-96 md:h-[420px] bg-gradient-to-b from-black to-primary-300 from-30% overflow-hidden">
          <div className="absolute opacity-15 z-10 grid grid-cols-5 gap-0 w-full h-ful bg-gradient-b from-black from-20% to-transparent inset-0">
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
            <div className="border h-16 border-white-10"></div>
          </div>
          <CardHeader className="p-0 flex flex-col z-20">
            <CardTitle className="text-white-100 font-medium text-xl md:text-3xl">{pricing[1].name}</CardTitle>

            <CardDescription>${switchState ? pricing[1].price + 10 : pricing[1].price}/mo</CardDescription>
          </CardHeader>

          <CardContent className="p-0 pt-4 h-full z-20 flex flex-col justify-between flex-1 border-t border-white-10">
            <div className="space-y-2">
              {pricing[1].features.map((feature, index) => {
                return (
                  <div key={`feature_pricing_${index}`} className="flex gap-2 w-full text-white-100 justify-start items-center">
                    <FaCheck className="size-3" />

                    <p className="text-xs md:text-sm">{feature}</p>
                  </div>
                );
              })}
            </div>

            <Button className="w-full text-white-100 h-fit bg-primary-700">Join waitlist</Button>
          </CardContent>
        </Card>

        <Card className="border-[1px] border-white-10 p-4 flex flex-col gap-4 w-60 grow md:w-64 xl:w-72 h-96 md:h-[420px] bg-transparent">
          <CardHeader className="p-0 flex flex-col">
            <CardTitle className="text-white-100 font-medium text-xl md:text-3xl">{pricing[2].name}</CardTitle>

            <CardDescription>${switchState ? pricing[2].price + 10 : pricing[2].price}/mo</CardDescription>
          </CardHeader>

          <CardContent className="p-0 pt-4 h-full flex flex-col justify-between flex-1 border-t border-white-10 col-span-2">
            <div className="space-y-2">
              {pricing[2].features.map((feature, index) => {
                return (
                  <div key={`feature_pricing_${index}`} className="flex gap-2 w-full text-white-100 justify-start items-center">
                    <FaCheck className="size-3" />

                    <p className="text-xs md:text-sm">{feature}</p>
                  </div>
                );
              })}
            </div>

            <Button className="w-full text-white-100 h-fit bg-primary-600">Join waitlist</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
