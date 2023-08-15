import React, { useState } from "react";
import { Input } from "antd";
import logo from "../../assets/images/logo-colored.svg"

const HeaderTop = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <nav className="my-5">
        <div className="nav_wrapper flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
          {/* Search */}
          <div className="flex items-center">
            <Input
              className="w-[420px] h-[40px]
              rounded-s-[10px] rounded-e-none 
              border-[0.5px] border-[#0D6EFD]"
              placeholder="Search"
            />

            <select
              className="w-[145px] h-[40px] border-[1px] border-[#0D6EFD] p-[10px]"
              defaultValue={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option defaultValue="">All Categories</option>
            </select>
            <button className="px-[10px] py-[10px] bg-[#127FFF] w-[100px] h-[40px] rounded-e-[10px] text-[16px] font-medium text-white ">
              Search
            </button>
          </div>
          {/* Cart */}
          <ul className="flex items-center gap-x-[18px]">
            <li className="hover:text-[#127FFF]">
              <a href="#" className=" flex flex-col gap-[7px] items-center">
                <i className="bx bxs-user text-[20px] text-[#8B96A5]"></i>
                <p className="text-[12px] text-[#8B96A5] ">Profile</p>
              </a>
            </li>

            <li className="hover:text-[#127FFF]">
              <a href="#" className=" flex flex-col gap-[7px] items-center">
                <i className="bx bx-message-detail text-[20px] text-[#8B96A5]"></i>
                <p className="text-[12px] text-[#8B96A5] ">Profile</p>
              </a>
            </li>

            <li className="hover:text-[#127FFF]">
              <a href="#" className=" flex flex-col gap-[7px] items-center">
                <i className="bx bxs-heart text-[20px] text-[#8B96A5]"></i>
                <p className="text-[12px] text-[#8B96A5] ">Profile</p>
              </a>
            </li>

            <li className="hover:text-[#127FFF]">
              <a href="#" className=" flex flex-col gap-[7px] items-center">
                <i className="bx bxs-cart-alt text-[20px] text-[#8B96A5]"></i>
                <p className="text-[12px] text-[#8B96A5] ">My cart</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderTop;
