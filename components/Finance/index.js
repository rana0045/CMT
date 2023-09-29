import React from "react";
import Balance from "./Balances/index";
import Clients from "./Clients/index";
import Sales from "./Sales/index";
const index = () => {
  return (
    <>
      <p className="text-grey-700 text-3xl mt-5 mb-16 text-white font-bold uppercase hover:subpixel-antialiased"></p>

      <div className="grid lg:grid-cols-6 gap-5  mb-5   ">
        <div className="rounded-lg h-[472.002px] overflow-auto no-scrollbar    bg-card-color shadow-xl lg:col-span-2 md:col-span-5 md-w-[50%] mb-5">
          <Sales />
        </div>
        <div className="rounded-lg overflow-auto no-scrollbar   h-[472.002px] bg-card-color shadow-xl lg:col-span-4 md:col-span-5 md-w-[50%] mb-5">
          <Clients />
        </div>
        <div className="rounded-lg overflow-auto no-scrollbar lg:w-[240px]   h-[246px] bg-card-color shadow-xl lg:col-span-1 md:col-span-5 md-w-[50%] mb-5">
          <Balance />
        </div>
      </div>
    </>
  );
};

export default index;
