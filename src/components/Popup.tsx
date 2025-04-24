import React from "react";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import usePopupProps from "@/store/usePopupProps";
import useTopicsStore from "@/store/useTopicsStore";
import Image from "next/image";

const Popup = ({
  children,
  title = "",
  btnAction = false,
}: Readonly<{
  children?: React.ReactNode;
  title?: string;
  btnAction?: boolean;
}>) => {
  const { toggleOpen, id } = usePopupProps();
  const { markAsDone } = useTopicsStore();

  return (
    <>
      <div className="fixed w-screen md:w-2/3 h-11/12 bottom-[53%] right-[50%] translate-x-[50%] translate-y-[50%] z-100 drop-shadow-2xl">
        <div className="w-full bg-white p-4 flex justify-between items-center">
          {btnAction && (
            <Button
              onClick={() => {
                markAsDone(id || 0);
                toggleOpen("");
              }}
              size={"lg"}
              className={`bg-green-600 hover:bg-green-700 cursor-pointer`}
            >
              Mark as done
            </Button>
          )}
          <h3 className="text-3xl font-semibold">
            {title}
          </h3>
          <Button
            onClick={() => toggleOpen("")}
            size={"sm"}
            variant={"destructive"}
            className={`cursor-pointer rounded-full`}
          >
            <XIcon />
          </Button>
        </div>

        {children}
      </div>
      <span
        onClick={() => toggleOpen("")}
        className="block bg-black/15 fixed h-screen w-screen top-0 right-0 backdrop-blur-md z-50"
      ></span>
    </>
  );
};

export default Popup;
