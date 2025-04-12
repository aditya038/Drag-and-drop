import React, { useEffect, useRef, useState } from "react";

export const Heading = ({ id, onDeleteComponent }) => {
  const headingRef = useRef(null);
  const [text, setText] = useState("Edit me");

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
    <div className="flex border-2">
      <h1
        ref={headingRef}
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        className="text-3xl font-bold cursor-text outline-none mt-5 flex-1"
      />
      <button
        type="button"
        onClick={() => onDeleteComponent(id)}
        className="text-white bg-red-700 hover:bg-red-800 font-large rounded-xl text-lg px-3 text-center"
      >
        X
      </button>
    </div>
  );
};
