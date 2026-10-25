import React from "react";
import { containerStyle } from "../assets/styles/Style";
import { GoChevronRight } from "react-icons/go";
import Ahmed from "../assets/images/Image (Ahmed Mohamed) (1).png";
import Sara from "../assets/images/Image (Sara Ali) (1).png";
import Omar from "../assets/images/Image (Omar Hassan) (1).png";

import { IoBookOutline } from "react-icons/io5";

export default function SectionFive() {
  return (
    <div className="flex justify-center items-center">
      <div className={`${containerStyle} py-16 lg:py-20`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
          <h1 className="text-textColor font-bold text-[30px] leading-[37.5px] lg:text-[38px] lg:leading-[47.5px]">
            Learn From Experienced Instructors
          </h1>
          <button className="flex gap-2 justify-center border border-[#C6D2FF] text-colorPrimary font-semibold text-sm leading-5 lg:w-fit items-center py-2.5 px-5 rounded-[10px]">
            All Instructors <GoChevronRight />
          </button>
        </div>

        <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-[14px] border-[0.69px] border-[#E2E8F0] overflow-hidden shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
            <div className="h-47 w-full bg-[#EEF2FF] flex flex-col justify-center items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={Ahmed} className="w-full h-full " alt="" />
              </div>
              <p className="pt-3 font-bold leading-6 text-textColor">
                Ahmed Mohamed
              </p>
              <p className="font-semibold text-sm leading-5 text-colorPrimary">
                WordPress Developer & Instructor
              </p>
            </div>

            <div className="p-6 mb-8">
              <p className="text-sm leading-[22.75px] text-textColor2">
                Ahmed is a WordPress developer and instructor with seven years
                of experience building dynamic websites and teaching practical
                web
              </p>
              <div className="pt-4 flex gap-1.5 flex-wrap">
                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  WordPress
                </span>

                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  Elementor
                </span>

                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  ACF
                </span>
              </div>

              <div className="pt-4 pb-5 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">10 Courses</p>
                </div>

                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">7 yrs exp.</p>
                </div>
              </div>

              <button className="border-[0.69px] w-full border-[#c6d2ff] px-5 py-2.5 text-colorPrimary text-sm font-semibold leading-5 rounded-[10px]">
                View Profile
              </button>
            </div>
          </div>

          <div className="rounded-[14px] border-[0.69px] border-[#E2E8F0] overflow-hidden shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
            <div className="h-47 w-full bg-[#EEF2FF] flex flex-col justify-center items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={Sara} className="w-full h-full " alt="" />
              </div>
              <p className="pt-3 font-bold leading-6 text-textColor">
                Sara Ali
              </p>
              <p className="font-semibold text-sm leading-5 text-colorPrimary">
                Senior Frontend Developer
              </p>
            </div>

            <div className="p-6 mb-8">
              <p className="text-sm leading-[22.75px] text-textColor2">
                Sara is a senior frontend developer with six years of experience
                in modern web technologies. She specializes in building
              </p>
              <div className="pt-4 flex gap-1.5 flex-wrap">
                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  HTML
                </span>

                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  CSS
                </span>

                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  JavaScript
                </span>
                
                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  React
                </span>
              </div>

              <div className="pt-4 pb-5 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">2 Courses</p>
                </div>

                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">6 yrs exp.</p>
                </div>
              </div>

              <button className="border-[0.69px] w-full border-[#c6d2ff] px-5 py-2.5 text-colorPrimary text-sm font-semibold leading-5 rounded-[10px]">
                View Profile
              </button>
            </div>
          </div>

             <div className="rounded-[14px] border-[0.69px] border-[#E2E8F0] overflow-hidden shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
            <div className="h-47 w-full bg-[#EEF2FF] flex flex-col justify-center items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={Omar} className="w-full h-full " alt="" />
              </div>
              <p className="pt-3 font-bold leading-6 text-textColor">
                Omar Hassan
              </p>
              <p className="font-semibold text-sm leading-5 text-colorPrimary">
                Business & Leadership Trainer
              </p>
            </div>

            <div className="p-6 mb-8">
              <p className="text-sm leading-[22.75px] text-textColor2">
               Omar is a certified business and leadership trainer with nine years of experience working with teams and organizations across the region. 
              </p>
              <div className="pt-4 flex gap-1.5 flex-wrap">
                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  HLeadership
                </span>

                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  Communication
                </span>

                <span className="bg-[#f1f5f9] border-[0.69px] border-[#e2e8f0] px-2.5 py-1 rounded-lg">
                  Entrepreneurship
                </span>
              </div>

              <div className="pt-4 pb-5 flex justify-between items-center">
                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">2 Courses</p>
                </div>

                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">9 yrs exp.</p>
                </div>
              </div>

              <button className="border-[0.69px] w-full border-[#c6d2ff] px-5 py-2.5 text-colorPrimary text-sm font-semibold leading-5 rounded-[10px]">
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
