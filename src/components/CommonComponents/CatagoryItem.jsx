import React from "react";

const CatagoryItem = ({ componentData }) => {
  const { id, name, img } = componentData[0];
  return (
    <div>
      <div className="w-full h-[145px] bg-text_gray7D8184">
        <span>{img}</span>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default CatagoryItem;
