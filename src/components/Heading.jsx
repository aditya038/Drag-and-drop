import React, { useEffect, useRef, useState } from "react";

export const Heading = ({ element, onDeleteComponent }) => {
  const headingRef = useRef(null);
  const [text, setText] = useState("Add Heading");

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.innerText = text;
    }
  }, []);

  const handleInput = () => {
    const newText = headingRef.current.innerText;
    setText(newText);
  };

  return (
    <div
      className="w-2xl flex border-2 m-5 p-3"
      style={{
        position: "absolute",
        left: element.x,
        top: element.y,
      }}
    >
      <h1
        ref={headingRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        className="text-3xl font-bold cursor-text outline-none flex-1"
      />
      <button
        type="button"
        onClick={() => onDeleteComponent(element.id)}
        className="text-white bg-red-700 hover:bg-red-800 font-bold rounded-full text-lg px-3 text-center ml-5"
      >
        X
      </button>
    </div>
  );
};
