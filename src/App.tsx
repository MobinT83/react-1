// import { useState } from "react";

import "./index.css";

function App() {
  return (
    <>
      {/* menu of the website */}
      <div className="bg-component">
        <menu className="flex flex-row w-fit m-auto gap-10 mt-8 text-2xl font-serif p-4 rounded-4xl bg-[#45403e] text-[#082a2a]">
          <a
            href="#"
            className=" hover:text-[#0b3b3b] hover:scale-110 transition-all duration-400 ease-out"
          >
            home
          </a>
          <a
            href="#"
            className=" hover:text-[#0b3b3b] hover:scale-110 transition-all duration-400 ease-out"
          >
            about us
          </a>
          <a
            href="#"
            className=" hover:text-[#0b3b3b] hover:scale-110 transition-all duration-400 ease-out"
          >
            company members
          </a>
          <a
            href="#"
            className=" hover:text-[#0b3b3b] hover:scale-110 transition-all duration-400 ease-out"
          >
            products
          </a>
        </menu>
      </div>
    </>
  );
}

export default App;
