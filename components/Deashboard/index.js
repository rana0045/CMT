import React from 'react'
import Calender from './calender/Calender'
import Totalprojects from "./projects/Totalproject";
import Ongoing from "./projects/onGoing";
import Todolist from './todo-list/todoList'
import { HiArrowsPointingOut, HiPlus } from "react-icons/hi2";


import Event from "./calender/Event";
import Allprojects from './projects/Allprojects'
const index = () => {
    return (
        <>
            {/* ---------dashbord heading--------- */}
            <p className="text-grey-700 text-3xl mt-5 mb-16 text-white font-bold uppercase hover:subpixel-antialiased">
                dashboard
            </p>

            {/* ---------projects--------- */}

            <div className="grid lg:grid-cols-5 gap-6 mb-5   ">
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
                <div className="rounded-lg   lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Ongoing />
                </div>
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-4 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-6  mb-16 ">


                {/* ---------calender--------- */}

                <div className="rounded lg:w-[277px]   bg-card-color max-h-246 overflow-hidden  shadow-xl ">
                    <div className="m-4 flex justify-between">
                        <p className=" text-event capitalize text-[19px] font-bold ">
                            CALENDER
                        </p>
                        <div className="flex justify-between">
                            <HiArrowsPointingOut className="mr-2   w-5 h-5" />
                        </div>
                    </div>
                    <Calender />
                </div>

                {/* ---------events--------- */}


                <div className="rounded-lg bg-card-color h-full shadow-xl lg:col-span-3  ">
                    <div className="h-96 overflow-y-auto no-scrollbar ">
                        <Event />
                    </div>
                </div>


                {/* ---------Todo list--------- */}


                <div className="rounded-lg bg-card-color h-full shadow-xl  ">
                    <div className="m-4 flex justify-between">
                        <p className=" text-event capitalize text-[19px] font-bold ">
                            TODOLIST
                        </p>
                        <div className="flex justify-between">
                            <HiArrowsPointingOut className="mr-2   w-5 h-5" />
                            <HiPlus className="mr-2 bg-white w-5 h-5" />
                        </div>
                    </div>
                    <Todolist />
                </div>
            </div>



            {/* -----------emplyes details------------ */}

            <p className="text-grey-700 text-3xl mb-5 text-white font-bold uppercase hover:subpixel-antialiased">
                Employees Status
            </p>
            <div className="grid lg:grid-cols-5 gap-6 mb-5   ">


                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
                <div className="rounded-lg   lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Ongoing />
                </div>
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-2 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
                <div className="rounded-lg lg:w-[277px] lg:h-[170px] bg-card-color shadow-xl lg:col-span-1 md:col-span-4 md-w-[50%] mb-5">
                    <Totalprojects />
                </div>
            </div>



            <div className="rounded-lg bg-card-color h-full shadow-xl lg:col-span-5 sm:col-span-5 md:col-span-5 mb-5  ">
                <div className="  overflow-y-auto h-96 no-scrollbar overflow-x-auto ">
                    <Allprojects />
                </div>
            </div>




        </>
    )
}

export default index