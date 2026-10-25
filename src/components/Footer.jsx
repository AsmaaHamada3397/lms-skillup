import React from "react";
import { containerStyle } from "../assets/styles/Style";
import { LuGraduationCap } from "react-icons/lu";

import { RiTwitterLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { LuYoutube } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-textColor flex justify-center items-center">
      <div
        className={`${containerStyle} py-14 flex flex-col items-center justify-center`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <div className="bg-[#615FFF] p-[7.5px] h-8 w-8 flex justify-center items-center rounded-[10px]">
                <LuGraduationCap className="text-white font-bold" />
              </div>
              <h1 className="font-bold text-[18px] leading-7 text-white">
                SkillUp Academy
              </h1>
            </div>
            <p className="text-sm leading-[22.75px] text-[#90a1b9] pt-3">
              Practical technology and business courses built around real-world
              projects, delivered by experienced instructors.
            </p>

            <div className="flex gap-2.5 pt-5">
              <div className="flex justify-center items-center bg-[#1D293D] p-2.25 rounded-full">
                <RiTwitterLine className="text-[#90A1B9]  text-xl" />
              </div>

              <div className="flex justify-center items-center bg-[#1D293D] p-2.25 rounded-full">
                <FiFacebook className="text-[#90A1B9] text-xl" />
              </div>

              <div className="flex justify-center items-center bg-[#1D293D] p-2.25 rounded-full">
                <FaInstagram className="text-[#90A1B9]  text-xl" />
              </div>

              <div className="flex justify-center items-center bg-[#1D293D] p-2.25 rounded-full">
                <LuYoutube className="text-[#90A1B9]  text-xl" />
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-white font-bold text-xs leading-4 tracking-[1.2px] uppercase">
              Quick Links
            </p>
            <ul className="pt-5">
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Instructors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="text-white font-bold text-xs leading-4 tracking-[1.2px] uppercase">
              Categories
            </p>
            <ul className="pt-5">
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Frontend
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  WordPress
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Backend
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pt-3 text-[#90A1B9] text-sm leading-5 font-medium"
                >
                  Entrepreneurship
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className="text-white font-bold text-xs leading-4 tracking-[1.2px] uppercase">
              contact
            </p>
            <p className="pt-5 flex gap-2 items-center">
              <FaRegEnvelope className="text-[#90A1B9]" />
              <a
                href="#"
                className=" text-[#90A1B9] text-sm leading-5 font-medium"
              >
                info@skillupacademy.com
              </a>
            </p>

            <p className="pt-3 text-textColor2 text-sm leading-5">
              Available Sun – Thu, 9am – 5pm
            </p>
          </div>
        </div>

        <div className="mt-12 border-t-[0.67px] border-[#1D293D] flex justify-between w-full pt-6">
          <p className="text-xs leading-4 text-[#45556c]">
            © 2026 SkillUp Academy. All rights reserved.
          </p>

          <div className="flex gap-5 items-center">
            <a href="#" className="text-[#45556c] text-xs"> Privacy Policy </a>
            <a href="#" className="text-[#45556c] text-xs"> Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
}
