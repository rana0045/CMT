import React from "react";

const index = () => {
    const data = [
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },
        {
            Name: "Bonnie Green",
            Position: " SR: Designer",
            img: "./images/user_2",
        },

        ,
    ];

    return (
        <div className="w-auto flex flex-row overflow-x-auto    ">

            {data.map((item, index) => {

                return (
                    <div
                        key={index}
                        className="w-80 mx-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-shrink-0"
                    >
                        <div className="flex flex-row justify-around items-center pb-5 mt-5">
                            <img
                                className="w-24 h-full   rounded shadow-lg"
                                src="./images/user_2.png"
                                alt="Bonnie image"
                            />
                            <div>
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                    {item.Name}
                                </h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.Position}
                                </span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <a
                                        href="#"
                                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                                    >
                                        Message
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default index;
