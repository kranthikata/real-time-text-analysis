import React, { useState } from "react";

const StringReplacement = ({ text, setText }) => {
  const [search, setSearch] = useState("");
  const [replace, setReplace] = useState("");

  const handleReplace = () => {
    const regex = new RegExp(search, "g");
    setText(text.replace(regex, replace));
    setSearch("");
    setReplace("");
  };

  return (
    <div className="ml-14 w-[80%] mx-auto">
      <h1 className="font-mono text-4xl text-slate-200 mb-5">Replace Words</h1>
      <div className="p-5 rounded-md flex flex-col bg-gradient-to-r from-slate-800 to-slate-700 drop-shadow-2xl">
        <div className="mb-10">
          <input
            className="border p-2 mr-2 rounded-md outline-none md:w-[46%] lg:w-[48%] w-[48%] bg-gray-900 text-gray-200 drop-shadow-2xl"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="border p-2 mr-2 rounded-md outline-none md:w-[46%] lg:w-[48%] w-[47%] bg-gray-900 text-gray-200 drop-shadow-2xl"
            type="text"
            placeholder="Replace with"
            value={replace}
            onChange={(e) => setReplace(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 text-white p-2 rounded-md outline-none w-[98%]"
          onClick={handleReplace}
        >
          Replace All
        </button>
      </div>
    </div>
  );
};

export default StringReplacement;
