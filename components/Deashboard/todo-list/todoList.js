import { Checkbox } from "@mui/material";
import { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState([]);

  return (
    <div className=" bg-todo-list w-[217px] h-[70px] flex flex-row justify-evenly">
      <div>
        <p className=" underline text-[8px]">Meeting with Stakeholders</p>
        <p className=" text-[8px]">{`Time:`}</p>
        <p className=" text-[8px]">{`Place:`}</p>
        <p className=" text-[8px]">{`Notes:`}</p>
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
};

export default Todolist;
