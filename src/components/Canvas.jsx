import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";

export const Canvas = ({ onDrop, canvasComponents }) => {
  function handleDrop(e) {
    e.preventDefault();
    const type = e.dataTransfer.getData("componentType");
    if (type) {
      onDrop(type);
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="flex-1 h-screen"
      id="canvas"
      style={{ backgroundColor: "#CCCCCC" }}
    >
      <div className="font-bold text-xl ml-5 p-2 text-center">Drop components here....</div>
      <div className="ml-5">
        {canvasComponents.map((cc) => {
          if (cc.componentType === "heading") return <Heading key={cc.id} />;
          if (cc.componentType === "paragraph") return <Paragraph key={cc.id} />;
          if (cc.componentType === "button") return <Button key={cc.id} />;
          return null;
        })}
      </div>
    </div>
  );
};
