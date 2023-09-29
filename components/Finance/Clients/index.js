import React from "react";
import { HiPlus } from "react-icons/hi2";

const Index = () => {
  const data = [
    {
      Client: "Lorem Ipsum",
      Project: "Lorem Ipsum",
      Assign_to: "Lorem Ipsum",
      Date: "Lorem Ipsum",
      Sales: "$50,700.00",
    },
    {
      Client: "Lorem Ipsum",
      Project: "Lorem Ipsum",
      Assign_to: "Lorem Ipsum",
      Date: "Lorem Ipsum",
      Sales: "$50,700.00",
    },
    {
      Client: "Lorem Ipsum",
      Project: "Lorem Ipsum",
      Assign_to: "Lorem Ipsum",
      Date: "Lorem Ipsum",
      Sales: "$50,700.00",
    },
    {
      Client: "Lorem Ipsum",
      Project: "Lorem Ipsum",
      Assign_to: "Lorem Ipsum",
      Date: "Lorem Ipsum",
      Sales: "$50,700.00",
    },
    {
      Client: "Lorem Ipsum",
      Project: "Lorem Ipsum",
      Assign_to: "Lorem Ipsum",
      Date: "Lorem Ipsum",
      Sales: "$50,700.00",
    },
    {
      Client: "Lorem Ipsum",
      Project: "Lorem Ipsum",
      Assign_to: "Lorem Ipsum",
      Date: "Lorem Ipsum",
      Sales: "$50,700.00",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between mx-5 my-5">
        <div className="text-event text-[29px] font-semibold">
          List Of Clients
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border   border-gray-300 rounded-md py-2 px-4 pl-20 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
          />
          <svg
            className="  absolute left-3 top-2.5 h-5 w-5 text-gray-400 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10.5" cy="10.5" r="7.5" />
            <line x1="21" y1="21" x2="15.8" y2="15.8" />
          </svg>
          <HiPlus className="ml-5 bg-status2 w-10 h-9 text-white rounded-lg shadow-lg cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5 ">
        <div className="relative m-5 overflow-x-auto col-span-5   ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-event text-[16px] border-b">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Client
                </th>
                <th scope="col" className="px-6 py-3">
                  Project
                </th>
                <th scope="col" className="px-6 py-3">
                  Assign to
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Sales
                </th>
              </tr>
            </thead>
            {data.map((item, index) => {
              return (
                <tbody>
                  <tr className="bg-white   mb-5 bg-card-color shadow-lg ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900  "
                    >
                      {item.Client}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 "
                    >
                      {item.Project}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 "
                    >
                      {item.Assign_to}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 "
                    >
                      {item.Date}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-green-500 "
                    >
                      {item.Sales}
                    </th>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
