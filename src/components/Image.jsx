import React, { useState } from "react";

export const Image = ({ element, onDeleteComponent }) => {
  const noImage = "../src/assets/noimg.jpg";
  const [image, setImage] = useState(noImage);

  function getImage(evt) {
    if (evt.target.files[0]) {
      setImage(URL.createObjectURL(evt.target.files[0]));
    } else {
      setImage(noImage);
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        left: element.x,
        top: element.y,
      }}
    >
      <div className="flex">
        <form className="flex-1">
          <input
            onChange={getImage}
            className="text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
          />
        </form>
        <button
          type="button"
          onClick={() => onDeleteComponent(element.id)}
          className="text-white bg-red-700 hover:bg-red-800 font-bold rounded-full text-lg px-4 text-center ml-5"
        >
          X
        </button>
      </div>
      <p className="text-lg m-2 font-bold">Preview of Image</p>
      <div className="w-xs border mb-5">
        <img src={image} className="p-2" />
      </div>
    </div>
  );
};
