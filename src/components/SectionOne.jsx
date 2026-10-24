import React from "react";
import { containerStyle } from "../assets/styles/Style";
import { FaStar, FaArrowRight } from "react-icons/fa6";
// import CountUp from "react-countup/dist/index.esm.js";
import CountUpModule from "react-countup";
import Image from "../assets/images/sectionOneImage.png";
import tick from "../assets/images/tick.svg"
export default function SectionOne() {
  const CountUp = CountUpModule.default;

  return (
    <div className="flex justify-center items-center">
      <div className={`${containerStyle} py-24`}>
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex items-center justify-center gap-2 rounded-full px-3 py-1.5 bg-[#EEF2FF] border-[0.69px] border-[#e0e7ff] w-fit">
              <FaStar className="text-colorPrimary text-[10px]" />
              <p className="text-colorPrimary font-bold text-xs leading-4">
                Trusted by 700+ students
              </p>
            </div>

            <h1 className="text-textColor font-extrabold text-[52px] leading-[58.24px] tracking-[-1.3px] max-w-136.25 pt-[23px]">
              Learn Skills That Move Your Career Forward
            </h1>

            <p className="pt-5 max-w-lg text-lg text-textColor2 leading-7.5">
              Practical technology and business courses delivered by experienced
              instructors and designed around real-world projects.
            </p>

            <div className="pt-8 flex gap-3 items-center">
              <button className="flex gap-2 items-center text-white bg-colorPrimary rounded-[10px] px-6 py-3 cursor-pointer">
                Explore Courses <FaArrowRight />
              </button>

              <button className="flex gap-2 items-center text-colorPrimary border border-[#C6D2FF] rounded-[10px] px-6 py-3 cursor-pointer">
                Meeet Out Instructor
              </button>
            </div>

            <div className="mt-10 pt-6 border-t-[0.69px] border-[#F1F5F9]">
              <div className="flex gap-8">
                <div className="flex-col">
                  <div className="flex items-center">
                    <CountUp
                      className="text-2xl font-extrabold leading-8 text-textColor"
                      start={0}
                      end={20}
                      duration={1}
                    />
                    <p className="text-2xl font-extrabold leading-8 text-textColor">
                      +
                    </p>
                  </div>
                  <p className="text-textColor2 text-xs leading-4">
                    Practical Courses
                  </p>
                </div>

                <div className="flex-col">
                  <div className="flex items-center">
                    <CountUp
                      className="text-2xl font-extrabold leading-8 text-textColor"
                      start={0}
                      end={10}
                      duration={1}
                    />
                    <p className="text-2xl font-extrabold leading-8 text-textColor">
                      +
                    </p>
                  </div>
                  <p className="text-textColor2 text-xs leading-4">
                    Expert Instructors
                  </p>
                </div>

                <div className="flex-col">
                  <div className="flex items-center">
                    <CountUp
                      className="text-2xl font-extrabold leading-8 text-textColor"
                      start={0}
                      end={700}
                      duration={1}
                    />
                    <p className="text-2xl font-extrabold leading-8 text-textColor">
                      +
                    </p>
                  </div>
                  <p className="text-textColor2 text-xs leading-4">
                    Students Enrolled
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ">
            <img
              src={Image}
              className=" rounded-4 h-auto object-cover w-136 2xl:w-175 rounded-2xl"
              alt=""
            />

            <div className="absolute -bottom-3 -left-5  border-[0.69px] border-[#f1f5f9] bg-white  z-2 shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] p-4 rounded-[14px] flex gap-3">
                <div className="w-10 h-10 bg-[#D0FAE5] flex items-center justify-center rounded-[10px]">
                    <img src={tick} className="text-lg" alt="" />
                </div>

                <div>
                    <p className="font-bold text-sm leading-5 text-textColor">Project-Based Learning</p>
                    <p className="text-[#90a1b9] text-xs leading-4">Build real things from day one</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
