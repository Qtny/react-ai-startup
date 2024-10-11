import { footer } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex max-md:flex-col justify-center h-full max-md:items-center rounded-lg border border-white-10 w-full py-8 gap-8" >
      <div className="flex md:flex-col md:flex-1 justify-between items-center md:items-start md:h-60 w-full md:w-[30%] lg:w-1/2">
        <div className="flex gap-2 justify-center md:justify-start items-center text-sm">
          <Image src={"/logo.svg"} width={38} height={38} alt="logo" />
          AI Startup Kit
        </div>

        <div className="flex gap-4">
          <Image src={"/footer/logo-x.svg"} width={20} height={20} alt="logo" className="cursor-pointer" />
          <Image src={"/footer/logo-instagram.svg"} width={20} height={20} alt="logo" className="cursor-pointer" />
          <Image src={"/footer/logo-youtube.svg"} width={20} height={20} alt="logo" className="cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 w-full md:w-[70%] lg:w-1/2">
        {footer.map((foot, index) => {
          return (
            <div key={`foot_${index}`} className="flex flex-col gap-4">
              <h5 className="font-medium text-sm">{foot.title}</h5>
              <div className="flex flex-col gap-2">
                {foot.subFeatures.map((sub, sIndex) => {
                  return <div key={`sub_${index}_${sIndex}`} className="font-normal text-white-50 text-sm cursor-pointer">{sub}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
