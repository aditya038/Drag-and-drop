import React from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";
import { Image } from "./Image";

export const Canvas = ({ onDrop, canvasComponents, onDeleteComponent }) => {
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
      className="col-span-3 h-screen bg-gray-300"
    >
      <div className="font-bold text-xl ml-5 p-2 text-center">Drop components here....</div>
      <div className="ml-5">
        {canvasComponents.map((cc) => {
          if (cc.componentType === "heading") return <Heading key={cc.id} id={cc.id} onDeleteComponent={onDeleteComponent}/>;
          if (cc.componentType === "paragraph") return <Paragraph key={cc.id} id={cc.id} onDeleteComponent={onDeleteComponent}/>;
          if (cc.componentType === "button") return <Button key={cc.id} id={cc.id} onDeleteComponent={onDeleteComponent}/>;
          if (cc.componentType === "image") return <Image key={cc.id} id={cc.id} onDeleteComponent={onDeleteComponent}/>;
          return null;
        })}
      </div>
    </div>
  );
};
