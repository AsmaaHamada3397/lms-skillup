import React from "react";
import { containerStyle } from "../assets/styles/Style";
import { FiLayers } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import certificate from "../assets/images/certificate.svg";
export default function SectionFour() {
  return (
    <div className="bg-[#F8FAFC] flex justify-center items-center">
      <div
        className={`${containerStyle} py-16 lg:py-20 flex flex-col items-center justify-center`}
      >
        <p className="font-bold text-[30px] leading-[37.5px] text-textColor lg:text-[38px] lg:leading-[47.5px]">
          Why Learn With Us
        </p>

        <p className="leading-6.5 text-textColor2 pt-3  w-98.5 md:text-center md:w-xl">
          Everything we build is designed around one goal — helping you get
          results you can use.
        </p>

        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-[14px] p-6 border-[0.69px] border-[#E2E8F0] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex flex-col justify-center items-center">
            <div className="bg-[#EEF2FF] rounded-[14px] p-3.25 w-fit">
            <FiLayers className="text-colorPrimary text-xl" />
            </div>
            <p className="pt-4 font-bold text-4 leading-6 text-textColor">Practical Projects</p>

            <p className="pt-2 text-sm leading-[22.75px] text-textColor2 text-center">
                Every course includes real-world projects you can add directly to your portfolio.
            </p>
          </div>
        
        <div className="bg-white rounded-[14px] p-6 border-[0.69px] border-[#E2E8F0] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex flex-col justify-center items-center">
            <div className="bg-[#EEF2FF] rounded-[14px] p-3.25 w-fit">
            <img src={certificate} alt="" />
            </div>
            <p className="pt-4 font-bold text-4 leading-6 text-textColor">Expert Instructors</p>

            <p className="pt-2 text-sm leading-[22.75px] text-textColor2 text-center">
                Learn from professionals with years of industry and teaching experience.
            </p>
          </div>

          <div className="bg-white rounded-[14px] p-6 border-[0.69px] border-[#E2E8F0] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex flex-col justify-center items-center">
            <div className="bg-[#EEF2FF] rounded-[14px] p-3.25 w-fit">
            <HiMiniArrowTrendingUp className="text-colorPrimary text-xl" />
            </div>
            <p className="pt-4 font-bold text-4 leading-6 text-textColor">Career-Focused Content</p>

            <p className="pt-2 text-sm leading-[22.75px] text-textColor2 text-center">
              Curriculum designed around the skills that employers and clients actually need.
            </p>
          </div>

          <div className="bg-white rounded-[14px] p-6 border-[0.69px] border-[#E2E8F0] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] flex flex-col justify-center items-center">
            <div className="bg-[#EEF2FF] rounded-[14px] p-3.25 w-fit">
            <FiTarget className="text-colorPrimary text-xl" />
            </div>
            <p className="pt-4 font-bold text-4 leading-6 text-textColor">Flexible Learning</p>

            <p className="pt-2 text-sm leading-[22.75px] text-textColor2 text-center">
              Study at your own pace with structured sessions and clear learning objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
