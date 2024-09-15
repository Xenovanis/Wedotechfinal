import React from "react";

const SectionList = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="w-full lg:w-1/2  pr-6 pl-4 lg:pl-8 py-6 lg:py-12">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`cursor-pointer py-4 lg:py-6 border-b text-lg lg:text-2xl ${
            activeSection.id === section.id
              ? "text-black font-bold border-b-2 border-black"
              : "text-gray-400"
          }`}
          style={{
            whiteSpace: 'nowrap',  // Prevent wrapping into two lines
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          onClick={() => onSectionClick(section)} // Set active section on click
        >
          {section.title}
        </div>
      ))}
    </div>
  );
};

export default SectionList;
