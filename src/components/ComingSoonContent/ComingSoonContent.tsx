import React from "react";
import data from "../../../data/data";

function ComingSoonContent() {
  const { description, title } = data;
  return (
    <>
      <div className="relative flex flex-col  place-items-center ">
        <h2 className="text-center font-heading my-28 text-3xl sm:text-3xl lg:text-4xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent text-white">
            {title}
          </span>
        {/*   <span className="">⏳</span> */}
        </h2>
        <p
          className="text-2xl md:text-3xl p-6 max-w-3xl text-center m-5 text-black font-large"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      </div>
    </>
  );
}

export default ComingSoonContent;
