import React, { useEffect, useRef, useState } from "react";

export const Paragraph = ({ element, onDeleteComponent }) => {
  const paragraphRef = useRef(null);
  const [text, setText] = useState("Add Paragraph");

  useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.innerText = text;
    }
  }, []);

  const handleInput = () => {
    const newText = paragraphRef.current.innerText;
    setText(newText);
  };

  return (
    <div
      className="w-xl flex border-2 m-5 p-1.5"
      style={{
        position: "absolute",
        left: element.x,
        top: element.y,
      }}
    >
      <p
        ref={paragraphRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        className="text-lg font-medium cursor-text outline-none flex-1"
      />
      <button
        type="button"
        onClick={() => onDeleteComponent(element.id)}
        className="text-white bg-red-700 hover:bg-red-800 font-bold rounded-full text-lg px-2 text-center ml-5"
      >
        X
      </button>
    </div>
  );
};
