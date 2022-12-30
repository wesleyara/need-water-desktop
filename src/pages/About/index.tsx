import { Header } from "@/components";
import React from "react";

export const About = () => {
  return (
    <>
      <Header />
      <div className="full mx-auto flex w-[500px] flex-col items-center justify-center">
        <span className="block h-[250px] w-[250px]">
          <img src="https://avatars.githubusercontent.com/u/89321125?v=4" />
        </span>
        <span className="mt-2 text-center">
          Desenvolvido por{"  "}
          <a
            href="https://github.com/wesleyara"
            target="_blank"
            rel="noreferrer"
            className="text-cerulean-500"
          >
            Wesley Araújo
          </a>{" "}
          utilizando Electron, ReactJS, TypeScript, TailwindCSS e Redux.
        </span>

        <div className="mt-10 flex flex-col items-center justify-center">
          <span>
            Node Version:{" "}
            <span className="text-cerulean-500">{process.versions.node}</span>
          </span>

          <span>
            Chrome Version:{" "}
            <span className="text-cerulean-500">{process.versions.chrome}</span>
          </span>

          <span>
            Electron Version:{" "}
            <span className="text-cerulean-500">
              {process.versions.electron}
            </span>
          </span>

          <span>
            React Version:{" "}
            <span className="text-cerulean-500">{React.version}</span>
          </span>
        </div>
      </div>
    </>
  );
};
