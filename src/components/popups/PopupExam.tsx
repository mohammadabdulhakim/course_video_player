import usePopupProps from "@/store/usePopupProps";
import React from "react";
import Popup from "./Popup";
import Image from "next/image";

const PopupExam = () => {
  const { src } = usePopupProps();

  return (
    <>
      <Popup btnAction title="Exam">
        <div className="w-full h-full relative"><Image src={src || ""} alt={src || ""} fill className="object-contain" /></div>
      </Popup>
    </>
  );
};

export default PopupExam;
