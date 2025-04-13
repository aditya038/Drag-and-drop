import React from "react";

export const Button = ({ element, onDeleteComponent }) => {
  return (
    <div
      className="m-5 p-1.5"
      style={{
        position: "absolute",
        left: element.x,
        top: element.y,
      }}
    >
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 font-large rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
      >
        Submit
      </button>
      <button
        type="button"
        onClick={() => onDeleteComponent(element.id)}
        className="text-white bg-red-700 hover:bg-red-800 font-bold rounded-full text-lg px-2 text-center ml-2"
      >
        X
      </button>
    </div>
  );
};
