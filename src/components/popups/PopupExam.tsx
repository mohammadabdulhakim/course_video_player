import usePopupProps from "@/store/usePopupProps";
import React from "react";
import Popup from "./Popup";
import Image from "next/image";

const PopupExam = () => {
  const { src } = usePopupProps();

  return (
    <>
      <Popup btnAction title="Exam">
        <div className="flex items-center justify-center">
          <Image src={src || ""} alt={src || ""} width={300} height={300} className="object-contain" />
        </div>
      </Popup>
    </>
  );
};

export default PopupExam;
