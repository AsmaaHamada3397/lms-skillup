import React from "react";
import { containerStyle } from "../assets/styles/Style";
import { GoArrowRight } from "react-icons/go";

export default function SectionSix() {
  return (
    <div className="bg-colorPrimary flex justify-center items-center">
      <div
        className={`${containerStyle} py-16 lg:py-20 flex flex-col items-center justify-center`}
      >
        <p className="font-extrabold text-[30px] leading-[37.5px] lg:text-[36px] lg:leading-11.25 text-white">
          Ready to Start Learning?
        </p>

        <p className="pt-4 pb-8 text-lg leading-[29.25px] lg:w-xl text-[#E0E7FF] text-center">
          Explore our available courses and choose the learning path that fits
          your goals.
        </p>

        <button className="px-7 py-3.5 bg-white rounded-[10px] text-colorPrimary font-bold leading-6 flex items-center gap-2">
          Browse All Courses
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
}
