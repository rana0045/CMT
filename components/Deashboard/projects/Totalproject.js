

export default function Totalprojects() {
    return (
        <div className=" flex flex-row">
            <div className="flex flex-col justify-start mt-5 pl-5">
                <div>
                    <picture>
                        <img src="./images/all.png" alt="all porjext " />
                    </picture>
                    <p className="capitalize my-2 text-base">total projects</p>
                    < span className=" text-2xl font-bold">30</ span>
                </div>
                <div className=" flex flex-row">
                    <picture>
                        <img className="mt-3 mb-2" src="./images/icons.svg" alt="all porjext " />
                    </picture>
                    <p className="ml-2 text-green-300 font-semibold">10.5%</p>
                </div>
            </div>

            <div className="flex justify-center items-center ml-10">
                <picture>
                    <img src="./images/Growth.png" alt="sds" />
                </picture>
            </div>
        </div>
    )
}