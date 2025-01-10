import React from "react";
import { Heading } from "./Heading";

export const Skills = () => {
  const skills = [
    "C++",
    "C",
    "JavaScript",
    "Python",
    "React",
    "TailwindCSS",
    "Next.js",
    "HTML/CSS",
    "Express",
    "MySQL",
    "MongoDB",
    "Git",
    "Supabase",
    "Postman",
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-4xl mt-20 mb-4 trasition-transform duration-500 ease-in-out transform hover:scale-105"
      >
        Skills
      </Heading>
      <div className="flex flex-wrap gap-3 ">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-900 text-gray-100 text-xs px-2 py-1 rounded-md shadow-sm font-normal hover:scale-110 transition-transform duration-500 ease-in-out "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
