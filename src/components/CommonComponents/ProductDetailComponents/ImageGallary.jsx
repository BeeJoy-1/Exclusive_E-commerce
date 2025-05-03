import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ImageGallary = ({ Image }) => {
  const [initialState, setinitialState] = useState(
    (Image && Image[0]) ||
      "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const params = useParams();
  useEffect(() => {
    if (Image && Image.length > 0) {
      setinitialState(Image[0]);
    }
  }, [params?.id, Image]);

  // useEffect(() => {
  //   setinitialState(Image[0]);
  // }, [params?.id]);

  const [zoomStyle, setZoomStyle] = useState({
    transform: "scale(1)",
    transformOrigin: "center center",
  });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomStyle({
      transform: "scale(2)", // Adjust zoom level
      transformOrigin: `${x}% ${y}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center center",
    });
  };

  return (
    <div className="flex gap-x-8">
      <div className="grid grid-rows-4 gap-y-4">
        {Image?.map((item, index) => (
          <div className="flex items-center justify-center" key={index}>
            <img
              src={item}
              alt=""
              className="w-[170px] h-[168px] rounded-sm object-cover cursor-pointer bg-gray-100"
              onClick={() => setinitialState(item)}
            />
          </div>
        ))}
        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[170px] h-[168px] rounded-sm object-cover cursor-pointer bg-gray-100"
            onClick={() =>
              setinitialState(
                "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[170px] h-[168px] rounded-sm object-cover cursor-pointer bg-gray-100"
            onClick={() =>
              setinitialState(
                "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-[170px] h-[168px] rounded-sm object-cover cursor-pointer bg-gray-100"
            onClick={() =>
              setinitialState(
                "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              )
            }
          />
        </div>
      </div>

      {/* Big Image */}
      <div className="w-[70%] flex items-center justify-center bg-gray-100">
        <div
          className="w-[90%] h-[90%] overflow-hidden flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={initialState}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 ease-out cursor-pointer"
            style={zoomStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
