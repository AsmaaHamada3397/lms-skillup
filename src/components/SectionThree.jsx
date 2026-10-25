import React from "react";
import { containerStyle } from "../assets/styles/Style";
import { GoChevronRight } from "react-icons/go";
import { IoMdTime } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";

import course1 from "../assets/images/Image (Frontend Development Fundamentals).png";
import course2 from "../assets/images/Image (Dynamic Websites with ACF).png";
import course3 from "../assets/images/Image (WordPress Website Development).png";
import sara from "../assets/images/Image (Sara Ali).png";

import ahmed from "../assets/images/Image (Ahmed Mohamed).png";

export default function SectionThree() {
  return (
    <div className="flex justify-center items-center">
      <div className={`${containerStyle} py-16 lg:py-20`}>
        <h1 className="text-textColor font-bold text-[30px] lg:text-[38px] leading-[47.5px]">
          Featured Courses
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0">
          <p className=" leading-6.5 text-textColor2 ">
            Explore practical courses designed to help you build real skills.
          </p>
          <button className="flex gap-2 justify-center border border-[#C6D2FF] text-colorPrimary font-semibold text-sm leading-5 lg:w-fit items-center py-2.5 px-5 rounded-[10px]">
            View All Courses <GoChevronRight />
          </button>
        </div>

        <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[14px]">
            <figure>
              <img
                src={course3}
                alt="wordpress"
                className="h-44 w-full object-cover"
              />
            </figure>

            <div className="p-5 flex flex-col">
              <div className="flex gap-2 pb-3">
                <div className="badge rounded-full text-[#0069A8] bg-[#DFF2FE]">
                  WordPress
                </div>
                <div className="badge rounded-full text-[#008236] bg-[#dcfce7]">
                  Beginner
                </div>
              </div>

              <h2 className=" font-bold leading-5.5 text-textColor pb-2">
                WordPress Website Development
              </h2>
              <p className="text-sm text-textColor2 leading-[22.75px] pb-4">
                Build complete, professional WordPress websites from scratch.
                Learn installation, theme customization, plugins, and publishing
                a live site.
              </p>

              <div className="flex items-center gap-4 pb-4">
                <div className="flex gap-1.5">
                  <IoMdTime className="text-[#90a1b9] " />
                  <p className="text-[#90a1b9] text-xs leading-4">24 Hours</p>
                </div>

                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">8 sessions</p>
                </div>
              </div>

              <div className="border-t-[0.69px] border-[#F1F5F9] pt-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    src={ahmed}
                    alt="instructor-image"
                    className="w-7 h-7 rounded-full"
                  />

                  <p className="text-xs leading-4 font-medium text-[#45556c]">
                    Ahmed Mohamed
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="font-bold leading-6 text-textColor">$120</p>
                  <button className="font-semibold text-xs leading-4 text-white  bg-colorPrimary py-1.5 px-3 rounded-[10px] ">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[14px]">
            <figure>
              <img
                src={course2}
                alt="wordpress"
                className="h-44 w-full object-cover"
              />
            </figure>

            <div className="p-5 flex flex-col">
              <div className="flex gap-2 pb-3">
                <div className="badge rounded-full text-[#0069A8] bg-[#DFF2FE]">
                  WordPress
                </div>
                <div className="badge rounded-full text-[#BB4D00] bg-[#FEF3C6]">
                  Intermediate
                </div>
              </div>

              <h2 className=" font-bold leading-5.5 text-textColor pb-2">
                Dynamic Websites with ACF
              </h2>
              <p className="text-sm text-textColor2 leading-[22.75px] pb-4">
                Master Advanced Custom Fields to create flexible, data-driven
                WordPress sites. Build Custom Post Types, Taxonomies, and
                dynamic Elementor templates.
              </p>

              <div className="flex items-center gap-4 pb-4">
                <div className="flex gap-1.5">
                  <IoMdTime className="text-[#90a1b9] " />
                  <p className="text-[#90a1b9] text-xs leading-4">18 Hours</p>
                </div>

                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">6 sessions</p>
                </div>
              </div>

              <div className="border-t-[0.69px] border-[#F1F5F9] pt-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    src={ahmed}
                    alt="instructor-image"
                    className="w-7 h-7 rounded-full"
                  />

                  <p className="text-xs leading-4 font-medium text-[#45556c]">
                    Ahmed Mohamed
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="font-bold leading-6 text-textColor">$100</p>
                  <button className="font-semibold text-xs leading-4 text-white  bg-colorPrimary py-1.5 px-3 rounded-[10px] ">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-[14px]">
            <figure>
              <img
                src={course1}
                alt="wordpress"
                className="h-44 w-full object-cover"
              />
            </figure>

            <div className="p-5 flex flex-col">
              <div className="flex gap-2 pb-3">
                <div className="badge rounded-full text-[#0069A8] bg-[#DFF2FE]">
                  WordPress
                </div>
                <div className="badge rounded-full text-[#008236] bg-[#dcfce7]">
                  Beginner
                </div>
              </div>

              <h2 className=" font-bold leading-5.5 text-textColor pb-2">
                Frontend Development Fundamentals
              </h2>
              <p className="text-sm text-textColor2 leading-[22.75px] pb-4">
                Start your web development journey with HTML, CSS, and
                JavaScript. Build real projects and develop solid foundations
                for modern web work.
              </p>

              <div className="flex items-center gap-4 pb-4">
                <div className="flex gap-1.5">
                  <IoMdTime className="text-[#90a1b9] " />
                  <p className="text-[#90a1b9] text-xs leading-4">30 Hours</p>
                </div>

                <div className="flex gap-1.5">
                  <IoBookOutline className="text-[#90a1b9]" />
                  <p className="text-[#90a1b9] text-xs leading-4">
                    10 sessions
                  </p>
                </div>
              </div>

              <div className="border-t-[0.69px] border-[#F1F5F9] pt-4 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <img
                    src={sara}
                    alt="instructor-image"
                    className="w-7 h-7 rounded-full"
                  />

                  <p className="text-xs leading-4 font-medium text-[#45556c]">
                    Sara Ali
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="font-bold leading-6 text-textColor">$140</p>
                  <button className="font-semibold text-xs leading-4 text-white  bg-colorPrimary py-1.5 px-3 rounded-[10px]">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
