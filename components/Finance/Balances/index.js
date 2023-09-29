import { HiPlus } from "react-icons/hi2";
const index = () => {
  return (
    <>
      <div className="flex flex-col   m-5">
        <div className="flex flex-row justify-between ">
          <p className=" text-3xl font-medium ">Balance</p>
          <HiPlus className="ml-5 bg-status2 w-[30px] h-[30px] text-white rounded-lg shadow-lg cursor-pointer" />
        </div>
        <div>
          <p className=" text-lg font-medium">
            < span className=" text-xl text-green-500 font-bold mr-2">$</ span>
            Dollar <br />
            <span className=" text-3xl text-green-500">9784.79</span>
          </p>
        </div>
        <div className="w-[146px] h-[132px] flex justify-center items-center ">
          <picture>
            <img className="w-full" src="./images/card.png" alt="img" />
          </picture>
        </div>
      </div>
    </>
  );
};

export default index;
