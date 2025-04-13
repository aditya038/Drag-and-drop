import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";
import { Image } from "./Image";

export const Canvas = ({ onDrop, canvasComponents, onDeleteComponent }) => {
  function handleDrop(e) {
    e.preventDefault();

    const dropZoneRect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - dropZoneRect.left;
    const y = e.clientY - dropZoneRect.top;

    const type = e.dataTransfer.getData("componentType");

    const newComponent = { id: uuidv4(), componentType: type, x, y }
    onDrop(newComponent);
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="relative col-span-3 min-h-[100vh] overflow-auto bg-gray-300"
    >
      <div className="font-bold text-xl ml-5 p-2 text-center">
        Drop components here....
      </div>
      <div>
        {canvasComponents.map((cc) => {
          if (cc.componentType === "heading")
            return (
              <Heading
                key={cc.id}
                element={cc}
                onDeleteComponent={onDeleteComponent}
              />
            );
          if (cc.componentType === "paragraph")
            return (
              <Paragraph
                key={cc.id}
                element={cc}
                onDeleteComponent={onDeleteComponent}
              />
            );
          if (cc.componentType === "button")
            return (
              <Button
                key={cc.id}
                element={cc}
                onDeleteComponent={onDeleteComponent}
              />
            );
          if (cc.componentType === "image")
            return (
              <Image
                key={cc.id}
                element={cc}
                onDeleteComponent={onDeleteComponent}
              />
            );
          return null;
        })}
      </div>
    </div>
  );
};
