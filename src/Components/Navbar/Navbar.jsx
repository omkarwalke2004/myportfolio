import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

function Navbar() {
    const [menu,openmenu]=useState(false);
    const[Showmenu,setShowmenu]=useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-20 pt-6 md:px-20 ">
      <span className="text-2xl font-bold tracking-wide">Portfolio</span>
      <ul className={`${menu ?"block":"hidden"}  mx-24 py-2 mt-4 md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none  text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
       
        <a href="#About" className="relative">
          {" "}
          <li className="text-md transition-all duration-300 p-1 md:p-0 group">
            About
            <div className="absolute w-11  bg-white/80 h-0.5 scale-x-0 group-hover:scale-x-100 "></div>

          </li>
        </a>
        <a href="#Experince" className="relative">
          {" "}
          <li className="text-md transition-all duration-300 p-1 md:p-0 group">
            Skills
            <div className="absolute w-10  bg-white/80 h-0.5 scale-x-0 group-hover:scale-x-100 "></div>

          </li>
        </a>{" "}
       
        <a href="#Projects" className="relative">
        <li className="text-md transition-all duration-300 p-1 md:p-0 group">
          Projects
          <div className="absolute w-16  bg-white/80 h-0.5 scale-x-0 group-hover:scale-x-100 "></div>

        </li>
       
        </a>
        <a href="#Footer" className="relative">
        
          {" "}
          <li className="text-md transition-all duration-300 p-1 md:p-0 group">
            Contact
            <div className="absolute w-16  bg-white/80 h-0.5 scale-x-0 group-hover:scale-x-100 "></div>
          </li>
        

        </a>
      </ul>
      {(Showmenu)?(
        <RiMenu2Line widths={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
            openmenu(!menu);
            setShowmenu(!Showmenu);
        }}/>

      ):<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
        openmenu(!menu);
        setShowmenu(!Showmenu);
      }}/>}
    </nav>
  );
}

export default Navbar;
