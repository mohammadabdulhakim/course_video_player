import usePopupProps from "@/store/usePopupProps";
import React from "react";
import Popup from "./Popup";

const PopupPDF = () => {
  const { src } = usePopupProps();

  return (
      <Popup btnAction title="Lesson PDF File">
        <div className="flex items-center justify-center px-4 !h-full">
          <iframe src={src} className="w-full h-full"></iframe>
        </div>
      </Popup>
  );
};

export default PopupPDF;
