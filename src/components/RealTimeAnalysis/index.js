import React, { useState } from "react";
import Stats from "../Stats";
import StringReplacement from "../StringReplacement";

const RealTimeAnalysis = () => {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="md:flex  md:h-[85%] md:ml-10">
      <div className="w-full md:w-1/2">
        <textarea
          className="w-full md:h-full lg:h-[90%] border-2 border-gray-400 rounded-lg text-slate-100 text-xl outline-none p-4 mb-4 bg-transparent"
          value={text}
          placeholder="Enter the text..."
          onChange={handleTextChange}
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <Stats text={text} />
        <StringReplacement text={text} setText={setText} />
      </div>
    </div>
  );
};

export default RealTimeAnalysis;
