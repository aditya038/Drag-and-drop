import React from "react";

export const Button = ({ id, onDeleteComponent }) => {
  return (
    <div className="flex m-5 p-1.5">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 font-large rounded-lg text-lg px-5 py-2.5 me-2 mb-2"
      >
        Submit
        <button
          type="button"
          onClick={() => onDeleteComponent(id)}
          className="text-white bg-red-700 hover:bg-red-800 font-large rounded-full text-lg px-2 text-center ml-4"
        >
          X
        </button>
      </button>
    </div>
  );
};
