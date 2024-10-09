import Image from "next/image";
import React from "react";

const Clients = () => {
  const clientImage = ({ visible }: { visible: boolean }) => {
    return <Image width={0} height={0} sizes="100vw" src="/clients/avatar-5.png" alt="profile" className={`size-40 ${visible ? "" : "opacity-0"} `} />;
  };

  const clientTestimony = ({ type, hidden }: { type: "mobile" | "desktop"; hidden: boolean }) => {
    return (
      <div
        className={`flex flex-col gap-6 w-fit justify-center items-center md:items-start
        ${type === "mobile" ? "md:hidden" : "max-md:hidden"} ${hidden ? "opacity-0" : ""}
      `}
      >
        <h4 className="md:text-xl text-lg font-medium px-4 md:px-0 text-center md:text-left">&quot;This product has completely transformed how I manage my projects and deadlines&quot;</h4>

        <div className="flex flex-col w-full justify-center items-center md:items-start gap-1">
          <p className="md:text-base text-sm font-normal">Talia Taylor</p>

          <p className="md:text-base text-sm font-normal text-white-70">Digital Marketing Director @ Quantum</p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full justify-center items-center gap-4">
        <h1 className="font-medium md:text-5xl text-xl">Our clients</h1>

        <p className="md:text-base text-sm font-normal text-center px-16">Hear firsthand how our solutions have boosted online success for users like you.</p>
      </div>

      <div className="flex max-md:flex-col w-full justify-center items-center gap-2">
        <div className="size-72 md:h-72 md:w-full relative">
          <div className="absolute size-full md:px-32 flex">
            <div className="flex justify-center items-center w-full">
              <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white-100 to-transparent" />

              {clientImage({ visible: true })}

              <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white-100 to-transparent" />
            </div>
            <div className="h-full flex justify-center items-center">{clientTestimony({ type: "desktop", hidden: false })}</div>
          </div>

          <div className="absolute size-full flex flex-col justify-center items-center">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white-100 to-transparent" />
            <div className=" w-full px-32 flex">
              {clientImage({ visible: false })}
              {clientTestimony({ type: "desktop", hidden: true })}
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white-100 to-transparent" />
          </div>
        </div>

        {clientTestimony({ type: "mobile", hidden: false })}
      </div>
    </section>
  );
};

export default Clients;
