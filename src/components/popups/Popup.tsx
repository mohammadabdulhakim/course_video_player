import React from "react";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import usePopupProps from "@/store/usePopupProps";
import useTopicsStore from "@/store/useTopicsStore";

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
      <div className="fixed w-screen md:w-2/3 h-[calc(100%-20px)] bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%] z-100 drop-shadow-2xl overflow-auto">
        <div className="w-full bg-white p-2 flex justify-between items-center border-1 px-4 md:px-8 sticky top-0 z-60">
          {btnAction && (
            <div className="flex-1">
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
            </div>
          )}
          <h3
            className={`text-2xl font-semibold flex-1 ${
              btnAction ? "text-center" : ""
            }`}
          >
            {title}
          </h3>
          <div className="flex-1 flex justify-end">
            <Button
              onClick={() => toggleOpen("")}
              size={"sm"}
              variant={"destructive"}
              className={`cursor-pointer rounded-full`}
            >
              <XIcon />
            </Button>
          </div>
        </div>

        <div className="bg-white w-full h-full min-h-full relative">{children}</div>
      </div>
      <span
        onClick={() => toggleOpen("")}
        className="block bg-black/15 fixed h-screen w-screen top-0 right-0 backdrop-blur-md z-50"
      ></span>
    </>
  );
};

export default Popup;
