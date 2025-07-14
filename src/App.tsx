// import { useState } from "react";

import "./index.css";

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
      </div>
    </>
  );
}

export default App;
