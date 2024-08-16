import React from "react";

const Handler = () => {
  return (
    <div
      className="w-full h-screen bg-zinc-300 flex flex-col gap-10 justify-center"
      item-center
    >
      <div className="w-60 px-3 py-2 bg-zinc-100 rounded">
        <h3 className="font-semibold text-xl">VOl 1 song</h3>
        <p className="text-xs mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          reprehenderit totam quaerat.
        </p>
        <button className="text-zinc-100 px-2 py-1 bg-sky-400 text-xs font-semibold mt-3 rounded-md">
          Download now
        </button>
      </div>
    </div>
  );
  
};

export default Handler;
<!--  -->