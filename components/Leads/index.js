import React from "react";
import { HiPlus } from "react-icons/hi2";
import Router, { useRouter } from "next/router";

const index = () => {
    const router = useRouter();
    const data = [

        {
            Project_Name: "ShowCine",
            Brand_Name: "Tech Hunt",
            Client_Name: "Lorem ",
            Account_Manager: "Lorem",
            Project_Manager: "Lorem",
            Assign_To: "Lorem ",
            Progress: "80%",

        },
        {
            Project_Name: "ShowCine",
            Brand_Name: "Tech Hunt",
            Client_Name: "Lorem ",
            Account_Manager: "Lorem",
            Project_Manager: "Lorem",
            Assign_To: "Lorem ",
            Progress: "80%",

        },
        {
            Project_Name: "ShowCine",
            Brand_Name: "Tech Hunt",
            Client_Name: "Lorem ",
            Account_Manager: "Lorem",
            Project_Manager: "Lorem",
            Assign_To: "Lorem ",
            Progress: "80%",

        },
        {
            Project_Name: "ShowCine",
            Brand_Name: "Tech Hunt",
            Client_Name: "Lorem ",
            Account_Manager: "Lorem",
            Project_Manager: "Lorem",
            Assign_To: "Lorem ",
            Progress: "80%",

        },
        {
            Project_Name: "ShowCine",
            Brand_Name: "Tech Hunt",
            Client_Name: "Lorem ",
            Account_Manager: "Lorem",
            Project_Manager: "Lorem",
            Assign_To: "Lorem ",
            Progress: "80%",

        },
        {
            Project_Name: "ShowCine",
            Brand_Name: "Tech Hunt",
            Client_Name: "Lorem ",
            Account_Manager: "Lorem",
            Project_Manager: "Lorem",
            Assign_To: "Lorem ",
            Progress: "80%",

        },
    ];

    return (
        <div>
            <div className="flex justify-between mx-5 my-5">
                <div className="text-event text-[29px] font-semibold">New Leads</div>

            </div>

            <div className="grid grid-cols-5 gap-5 ">
                <div className="relative m-5 overflow-x-auto col-span-5   ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-event text-[16px]">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Project Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Brand Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Client Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Assign To
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Progress %
                                </th>

                            </tr>
                        </thead>
                        {data.map((item, index) => {
                            return (
                                <tbody>
                                    <tr className="bg-white border-b mb-5 bg-card-color shadow-lg ">

                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900  ">
                                            {item.Project_Name}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                            {item.Brand_Name}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                            {item.Client_Name}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                            {item.Assign_To}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                                            {item.Progress}
                                        </th>



                                    </tr>


                                </tbody>
                            )
                        })}

                    </table>
                </div>

            </div>


        </div>
    );
};

export default index;
