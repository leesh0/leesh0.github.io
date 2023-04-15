import React from "react";
import { Pacifico, Rajdhani } from "next/font/google";
import meta from "../../../metadata.json";
import Link from "next/link";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const rajdhani = Rajdhani({ weight: "600", subsets: ["latin"] });

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center h-20 px-5">
        <div className="flex items-center select-none cursor-pointer">
          <div className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-br from-teal-300 to-blue-400">
            <span className={pacifico.className}>{meta.site}</span>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          {meta.navigation.map((nav: any) => (
            <Link href={nav.to}>
              <div className={`${rajdhani.className} text-lg px-3`}>
                {nav.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
