import { color } from "@mui/system";
import React from "react";
import { useState } from "react";

const App = () => {
  const [Color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: Color }}
    >
      <div className="fixed flex justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-7 shadow-lg bg-white px-6 py-4 rounded-xl">
          <button
            onClick={() => setColor("darkred")}
            className="px-4 uppercase font-bold text-lg font-mono py-2 rounded-full text-white shadow-lg bg-red-800 hover:scale-110 duration-500"
          >
            red
          </button>

          <button
            onClick={() => setColor("darkgreen")}
            className="px-4 uppercase font-bold text-lg font-mono py-2 rounded-full text-white shadow-lg bg-green-800 hover:scale-110 duration-500"
          >
            green
          </button>

          <button
            onClick={() => setColor("darkblue")}
            className="px-4 uppercase font-bold text-lg font-mono py-2 rounded-full text-white shadow-lg bg-blue-800 hover:scale-110 duration-500"
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
