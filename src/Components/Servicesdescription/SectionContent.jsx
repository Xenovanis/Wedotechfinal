import React from "react";

const SectionContent = ({ activeSection }) => {
  return (
    <div className="transition-opacity ease-in duration-500">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">{activeSection.heading}</h2>
      <p className="text-lg lg:text-xl">{activeSection.content}</p>
      <button className=" border border-black mt-4 px-4 py-2 text-white bg-black hover:bg-white hover:text-black  rounded-full">
        <a href="">
        Find out more</a>
      </button>
    </div>
  );
};

export default SectionContent;
