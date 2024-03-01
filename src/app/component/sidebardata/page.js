"use client";
import { datas } from "./datas";

const SideBarData = ({ toggle }) => {
  const sidebarClass =
    "flex items-center mt-2 p-4 rounded-lg cursor-pointer hover:bg-white transition-all duration-300 ";

  return (
    <div className="">
      {datas.map((data) => {
        return (
          <div className={`${ toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"} ${sidebarClass} last:absolute left-4 bottom-4`} key={data.id}>
            <div className="mr-2 text-[1.7rem] text-brown"> {data.icon} </div>
            <div className={`${ toggle ? "opacity-0 delay-200" : "" } text-[1rem] text-brown whitespace-pre`}>
              {data.text}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBarData;
