import React from "react";

import { Navbar } from "./navbar/navbar";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="container">
        <Navbar />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
