import React from "react";
import { containerStyle } from "../assets/styles/Style";

import { IoIosCode } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { RxPeople } from "react-icons/rx";
import bag from "../assets/images/bag.svg";
import { SlEnergy } from "react-icons/sl";

export default function SectionTwo() {
  return (
    <div className="bg-[#F8FAFC] flex justify-center items-center">
      <div
        className={`${containerStyle} py-12 flex flex-col items-center justify-center`}
      >
        <span className="text-[#90a1b9] font-bold text-[11px] leading-4 tracking-[1.1px] uppercase">
          Browse by Category
        </span>

        <div className="flex gap-3 pt-7">
          <div className="flex justify-between items-center gap-2 px-4 py-2.5 bg-[#F5F3FF] border-[0.69px] border-[#ede9fe] rounded-full">
            <IoIosCode className="text-[#7F22FE] " />
            <p className="font-semibold text-sm leading-5 text-[#7F22FE]">
              Frontend
            </p>

            <p className=" text-xs leading-4 text-[#7F22FE]">2</p>
          </div>

          <div className="flex justify-between items-center gap-2 px-4 py-2.5 bg-[#F0f9FF] border-[0.69px] border-[#DFF2FE] rounded-full">
            <RiGlobalLine className="text-[#0084D1] " />
            <p className="font-semibold text-sm leading-5 text-[#0084D1]">
              WordPress
            </p>

            <p className=" text-xs leading-4 text-[#0084D1]">2</p>
          </div>

            <div className="flex justify-between items-center gap-2 px-4 py-2.5 bg-[#FFF7ED] border-[0.69px] border-[#FFEDD4] rounded-full">
            <RxPeople className="text-[#F54900]" />
            <p className="font-semibold text-sm leading-5 text-[#F54900]">
              Leadership
            </p>

            <p className=" text-xs leading-4 text-[#F54900]">1</p>
          </div>


           <div className="flex justify-between items-center gap-2 px-4 py-2.5 bg-[#ECFDF5] border-[0.69px] border-[#D0FAE5] rounded-full">
            <img src={bag} className="w-5" alt="" />
            <p className="font-semibold text-sm leading-5 text-[#009966]">
              Entrepreneurship
            </p>

            <p className=" text-xs leading-4 text-[#009966]">1</p>
          </div>

           <div className="flex justify-between items-center gap-2 px-4 py-2.5 bg-[#EEF2FF] border-[0.69px] border-[#E0E7FF] rounded-full">
            <SlEnergy className="text-primary" />
            <p className="font-semibold text-sm leading-5 text-colorPrimary">
              Backend
            </p>

            <p className=" text-xs leading-4 text-colorPrimary">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
