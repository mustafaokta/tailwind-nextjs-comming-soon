import React from "react";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <>
      <div className="relative flex flex-col   place-items-center">
        <h2 className="text-center font-heading mt-28 text-3xl sm:text-3xl lg:text-4xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent text-white">
            {title}
          </span>
          {/*   <span className="">⏳</span> */}
        </h2>
        <div className="mt-4">
          <p
            className="text-2xl md:text-3xl max-w-3xl text-center font-bold font-serif  text-black font-large"
            dangerouslySetInnerHTML={{
              __html: "Maximize Your Brand's Visibility",
            }}
          ></p>
          <p
            className=" text-sm pb-6  max-w-3xl text-center mb-8  px-9 text-black font-large"
            dangerouslySetInnerHTML={{
              __html: "Florida's Busiest Streets Await!",
            }}
          ></p>
        </div>
      </div>
    </>
  );
}

export default ComingSoonContent;
