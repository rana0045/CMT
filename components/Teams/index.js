import React from "react";
import Ui from "./Ui/index";
import Frontend from './Frontend/index'
import Backend from './Backend/index'
const index = () => {
  return (
    <>
      <div>
        <p className=" text-[23px] font-semibold text-white mb-5">
          UI/UX & Graphic Department
        </p>
        <Ui />
      </div>
      <div className="   mt-4">
        <p className=" text-[23px] font-semibold text-white mb-5 ">
          Frontend Developers
        </p>
        <Frontend />
      </div>
      <div className="   mt-4">
        <p className=" text-[23px] font-semibold text-white mb-5 ">
          Backend Developers
        </p>
        <Backend />
      </div>


    </>
  );
};

export default index;
