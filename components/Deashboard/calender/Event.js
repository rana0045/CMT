
import { HiMiniCheckCircle, HiPlus } from "react-icons/hi2";

const Event = () => {
    const data = [
        {
            icon: (
                <HiMiniCheckCircle className=" text-green-400 w-10 h-10 rounded-full" />
            ),
            name: "ShowCine Meeting",
            time: "10:45:16 AM",
            date: "07 Nov 2022",
            status: "Completed",
        },
        {
            icon: (
                <HiMiniCheckCircle className=" text-red-400 w-10 h-10 rounded-full" />
            ),
            name: "ShowCine Meeting",
            time: "10:45:16 AM",
            date: "07 Nov 2022",
            status: "pending",
        },
        {
            icon: (
                <HiMiniCheckCircle className=" text-yellow-400 w-10 h-10 rounded-full" />
            ),
            name: "ShowCine Meeting",
            time: "10:45:16 AM",
            date: "07 Nov 2022",
            status: "pending",
        },
        {
            icon: (
                <HiMiniCheckCircle className=" text-yellow-400 w-10 h-10 rounded-full" />
            ),
            name: "ShowCine Meeting",
            time: "10:45:16 AM",
            date: "07 Nov 2022",
            status: "pending",
        },
        {
            icon: (
                <HiMiniCheckCircle className=" text-yellow-400 w-10 h-10 rounded-full" />
            ),
            name: "ShowCine Meeting",
            time: "10:45:16 AM",
            date: "07 Nov 2022",
            status: "pending",
        },
        {
            icon: (
                <HiMiniCheckCircle className=" text-yellow-400 w-10 h-10 rounded-full" />
            ),
            name: "ShowCine Meeting",
            time: "10:45:16 AM",
            date: "07 Nov 2022",
            status: "pending",
        },



    ];

    return (
        <div>

            {/* ------heading------ */}
            <div className="grid grid-cols-2  m-4 mx-10 lg:w-[100%] sm:w-[80%] md:w-[80%] overflow-y-auto  no-scrollbar ">
                <div className="felx justify-center text-event text-[29px] font-semibold">
                    EVENTS
                </div>
                <div className="flex justify-center">
                    <div className="relative flex items-center ">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border   border-gray-300 rounded-md py-2 px-4 pl-20 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-transparent"
                        />
                        <svg
                            className="  absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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
                        <HiPlus className="ml-5 bg-status2 w-10 h-9 text-white rounded-lg shadow-lg" />
                    </div>

                </div>
            </div>


            {/* ------EVENT ITEM------ */}
            {data.map((item, index) => {
                return (
                    <div key={index} className="grid grid-cols-5 gap-10  lg:m-10 ">


                        <div>{item.icon}</div>
                        <div>
                            <p className=" text-event ">{item.name}</p>
                        </div>
                        <div>
                            <p className=" text-event  ">{item.time}</p>
                        </div>
                        <div>
                            <p className=" text-event ">{item.date}</p>
                        </div>
                        <div
                            className={`    ${item.status === "pending" ? "text-status" : "text-status2"
                                }`}
                        >
                            {item.status}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Event;
