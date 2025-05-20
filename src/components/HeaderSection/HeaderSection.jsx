import React from "react";

export default function HeaderSection({ topHeading, heading, subHeading }) {
  return (
    <>
      <div className="text-center mt-40">
        <span className="subheading font-YekanMedium mt-4 mb-4">
          {topHeading}
        </span>
        <h2 className="font-YekanHeavy text-5xl mt-3 dark:text-white">
          {heading}
        </h2>
        <p className="mt-4 font-YekanMedium text-xl dark:text-white">
          {subHeading}
        </p>
      </div>
    </>
  );
}
