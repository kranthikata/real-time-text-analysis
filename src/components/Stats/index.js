import React from "react";

const Stats = ({ text }) => {
  const wordsArray = text.toLowerCase().match(/\w+/g) || [];
  const uniqueWords = new Set(wordsArray);
  const charCount = text.replace(/[\s\W]/g, "").length;

  return (
    <div className="mb-3 md:mb-5 lg:mb-10 mx-auto md:ml-14 w-[80%]">
      <div>
        <h1 className="font-mono text-4xl text-slate-200 mb-5">Stats</h1>
        <div className="p-5 rounded-md bg-gradient-to-r from-slate-700 to-slate-800 drop-shadow-2xl">
          <div className="flex items-center justify-between mb-10 mr-12">
            <p className="font-mono text-xl lg:text-3xl md:text-2xl font-semibold text-slate-300 w-1/2">
              Unique Words
            </p>
            <span className="font-mono text-slate-300 text-xl lg:text-3xl md:text-2xl font-semibold">
              : {uniqueWords.size}
            </span>
          </div>
          <div className="flex items-center justify-between mr-12">
            <p className="font-mono text-xl lg:text-3xl md:text-2xl font-semibold w-1/2 text-slate-300">
              Character Count
            </p>
            <span className="font-mono text-xl lg:text-3xl md:text-2xl font-semibold text-slate-300">
              : {charCount}
            </span>
          </div>
          <p className="text-red-500 text-sm">
            *Note: The Character count is only the count of alphabets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
