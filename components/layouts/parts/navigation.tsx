import React from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 px-5">
        <div className="flex items-center select-none cursor-pointer">
          <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-br from-teal-300 to-blue-400">
            <span className={pacifico.className}>sh0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
