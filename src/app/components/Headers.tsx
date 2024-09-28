import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navbarRoutes } from "@/lib/constants";
import { RiArrowDownSLine } from "react-icons/ri";
import MobileNavBar from "./Headers/MobileNavBar";

const Headers = () => {
  return (
    <header className="flex justify-center items-center">
      <nav className="flex py-5 items-center justify-between w-full lg:px-32">
        <Image src={"/logo.svg"} width={38} height={38} alt="logo" />

        <div className="max-md:hidden flex gap-[30px] border px-10 py-2 rounded-full border-white-10">
          {navbarRoutes.map((navbar) => {
            return <button key={navbar.title} className="text-sm text-white-70 flex gap-1 justify-center items-center">
              {navbar.title}
              {navbar.isMore && (
               <RiArrowDownSLine className="size-5" />
              )}
            </button>
          })}
        </div>

        <div className="flex gap-4 items-center">
          <Button className="ring-[1px] ring-offset-4 ring-offset-black ring-[#FFFFFF26] text-sm font-medium w-fit px-3 py-1 bg-gradient-to-r from-[#8C45FF66] to-[#9855FF] rounded-md">
            Join waitlist
          </Button>
          <MobileNavBar />
        </div>
      </nav>
    </header>
  );
};

export default Headers;
