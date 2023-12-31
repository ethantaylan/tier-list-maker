import React from "react";
import { useDroppable } from "@dnd-kit/core";

export const Droppable: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
