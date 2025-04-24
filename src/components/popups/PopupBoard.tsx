import usePopupProps from "@/store/usePopupProps";
import React from "react";
import Popup from "./Popup";
import { getSuitableMessage } from "@/constants/constants";
import useTopicsStore from "@/store/useTopicsStore";
import { users } from "@/data/dummy";
import Image from "next/image";

const PopupBoard = () => {
  const { src } = usePopupProps();
  const { userProgress } = useTopicsStore();

  const suitableMessage = getSuitableMessage(userProgress);

  return (
    <>
      <Popup title="Leader Board">
        <div className="flex items-center flex-col p-4 md:px-8 lg:px-16 gap-10 h-full">
          <div className="flex items-center justify-center flex-col gap-0.5">
            <p className="text-[#080264] text-[16px]">
              Introduction to JavaScript and Important Concepts
            </p>
            <p className="text-[#080264] font-bold text-[16px]">Leader Board</p>
          </div>
          <div className="bg-[#F5F9FA] w-[400px] max-w-full flex items-center justify-center gap-3 p-4 drop-shadow-md">
            <p dir="rtl" className="text-[16px] text-[#182578]">
              {suitableMessage?.message}
            </p>
            <span className="text-5xl">{suitableMessage?.icon}</span>
          </div>

          <div className="w-[400px] max-w-full bg-[#F5F9FA] drop-shadow-md rounded-4xl p-6 gap-4 flex flex-col">
            {users.map((user) => (
              <div className="border-1 bg-white p-3">
                <div className="flex items-center gap-5">
                  <Image
                    width={40}
                    height={40}
                    alt={user.fullName}
                    src={user.pic}
                    className="rounded-full"
                  />
                    <p className=" text-md ">{user.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PopupBoard;
