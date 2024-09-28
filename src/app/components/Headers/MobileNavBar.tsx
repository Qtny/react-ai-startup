"use client";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { navbarRoutes } from "@/lib/constants";
import Image from "next/image";

const MobileNavBar = () => {
  return (
    <div className="md:hidden flex justify-center items-center">
      <Sheet>
        <SheetTrigger>
          <Image src={"/icon-menu.svg"} width={24} height={24} alt="menu" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black border-primary flex flex-col gap-10 p-8">
          <SheetHeader>
            <Image src={"/logo.svg"} width={38} height={38} alt="logo" />
          </SheetHeader>

          <ul className="flex flex-col gap-4 text-base text-white-70">
            {navbarRoutes.map((navbar) => {
              return <li key={navbar.title}>{navbar.title}</li>;
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavBar;
