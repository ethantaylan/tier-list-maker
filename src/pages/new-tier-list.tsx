import React from "react";

import { DnD } from "../components/tierlist-bar/dnd";
import { TierListBar } from "../components/tierlist-bar/tierlist-bar";

export const NewTierList: React.FC = () => {
  return (
    <div className="gap-2 flex flex-col p-5 rounded-xl">
      <TierListBar tier={"S"} tierColor={"bg-red-500"} />
      <TierListBar tier={"A"} tierColor={"bg-orange-500"} />
      <TierListBar tier={"B"} tierColor={"bg-yellow-500"} />
      <DnD />
    </div>
  );
};
