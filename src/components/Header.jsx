import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { containerStyle } from "../assets/styles/Style";
import { IoMenuSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className=" flex justify-center items-center shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
      <div className={`${containerStyle} py-4`}>
        <div className="flex justify-between items-center">
          {/* logo */}
          <div className="flex gap-2">
            <div className="bg-colorPrimary p-[7.5px] h-8 w-8 flex justify-center items-center rounded-[10px]"> 
              <LuGraduationCap className="text-white font-bold" />
            </div>
            <h1 className="font-bold text-[20px] leading-7">SkillUp <span className="text-colorPrimary">Academy</span></h1>
          </div>
          {/* links */}
          <nav className="gap-7 hidden lg:flex">
            <a className="navItems" href="">Home</a>
            <a className="navItems" href="">Courses</a>
            <a className="navItems" href="">Instructors</a>
            <a className="navItems" href="">About</a>
            <a className="navItems" href="">Contact</a>
          </nav>
          
          {/* buttons */}
          <div>
            <button className="font-semibold text-sm leading-5 bg-colorPrimary text-white px-5 py-2.5 rounded-[10px] hidden lg:block">Explore Courses</button>
          </div>

          <IoMenuSharp className="lg:hidden text-2xl text-[#45556C]" />
        </div>
      </div>
    </div>
  );
}
