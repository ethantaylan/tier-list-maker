// import { GridStack } from "gridstack";
import React from "react";

import "gridstack/dist/gridstack.min.css";

export interface TierListBarProps {
  tier: string;
  //   description: string;
  tierColor: string;
}

export const TierListBar: React.FC<TierListBarProps> = ({
  tier,
  //   description,
  tierColor,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-40 items-center justify-center">
        <div
          className={`w-28 h-full rounded-s-xl p-5 text-white font-semibold text-2xl ${tierColor}`}
        >
          <span className="flex h-full justify-center items-center">
            {tier.toUpperCase()}
          </span>
        </div>
        <div className="w-full flex items-center justify-center h-full bg-slate-900 rounded-e-xl">
          TIER LIST ITEMS
        </div>
      </div>
    </div>
  );
};
