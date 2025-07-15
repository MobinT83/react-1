// import { useState } from "react";

import "./index.css";
import { CardTitleExample } from "./components/card";

function App() {
  return (
    <>
      {/* menu of the website */}
      <div className="bg-component">
        <menu className="flex flex-row w-fit mx-auto gap-8 mt-8 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
          <a
            href="#"
            className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out"
          >
            Company Members
          </a>
          <a
            href="#"
            className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300 ease-out"
          >
            Products
          </a>
        </menu>
        <h1 className="border-b-2 border-white/20 text-center text-4xl font-bold mt-14 font-serif">
          <span className=" text-white/10">Codeland </span>
          web design company
        </h1>
        {/* cards */}
        <div className="m-auto w-fit mt-12 font-serif  text-center">
          <p className="text-4xl text-white">Company cards</p>
          <div className="mt-5 grid grid-cols-3 gap-20 ">
            <CardTitleExample />
            <CardTitleExample />
            <CardTitleExample />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
