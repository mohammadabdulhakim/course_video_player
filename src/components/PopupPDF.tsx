import usePopupProps from "@/store/usePopupProps";
import React from "react";
import Popup from "./Popup";

const PopupPDF = () => {
  const { src } = usePopupProps();

  return (
      <Popup btnAction title="Lesson PDF File">
        <iframe src={src} className="w-full h-full"></iframe>
      </Popup>
  );
};

export default PopupPDF;
