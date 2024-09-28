import { testimonies } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Testimony = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 w-full">
      <p className="text-xs md:text-sm lg:text-base font-normal text-white-70">Trusted by the world&apos;s most innovative teams</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-[960px]">
        {testimonies.map((testimony) => {
          // return <div key={testimony.path}></div>
          return (
            <div key={testimony.path} className="rounded-md border border-white-10 md:px-3 px-2 w-auto h-20 md:h-28 flex justify-center items-center">
              <Image src={testimony.path} height={0} width={0} sizes="100vw" alt="testimony images" className="w-full h-auto" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimony;
