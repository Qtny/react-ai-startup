import { capabilities } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const Capabilities = () => {
  return (
    <section className="flex flex-col gap-12 py-10 w-full px-8 max-lg:px-4">
      <h3 className="text-xl md:text-6xl font-medium w-1/2">Elevate your SEO efforts</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {capabilities.map((capability) => {
          return (
            <div className="space-y-4" key={capability.title}>
              <div className="flex gap-1 text-white-100 items-center justify-start">
                <Image height={20} width={20} alt={capability.title} src={capability.path} />

                <h5 className="text-xs font-medium">{capability.title}</h5>
              </div>

              <p className="text-xs text-white-70">{capability.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Capabilities;
