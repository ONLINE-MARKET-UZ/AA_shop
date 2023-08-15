import React from "react";
import logo from "../../assets/images/logo-colored.svg";
import Apple from "../../assets/images/apple.svg";
import Play from "../../assets/images/Playma.svg";

const Fotter = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="Logo" />
          <p className="text-[16px] text-[#606060] leading-7 my-4 w-[276px]">
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="flex items-center gap-x-[10px]">
            <i class=" text-[32px] rounded-full bx bxl-facebook-circle"></i>
            <i class=" text-[32px] rounded-full bx bxl-twitter"></i>
            <i class=" text-[32px] rounded-full bx bxl-linkedin-square"></i>
            <i class=" text-[32px] rounded-full bx bxl-instagram"></i>
            <i class=" text-[32px] rounded-full bx bxl-youtube"></i>
          </div>
        </div>

        <div className="flex items-start gap-x-16">
          <div>
            <h1 className="text-[16px] font-medium mb-[10px]">About</h1>
            <p className="text-[16px] text-[#606060] leading-7">About Us</p>
            <p className="text-[16px] text-[#606060] leading-7">Find store</p>
            <p className="text-[16px] text-[#606060] leading-7">Categories</p>
            <p className="text-[16px] text-[#606060] leading-7">Blogs</p>
          </div>

          <div>
            <h1 className="text-[16px] font-medium mb-[10px]">Partnership</h1>
            <p className="text-[16px] text-[#606060] leading-7">About Us</p>
            <p className="text-[16px] text-[#606060] leading-7">Find store</p>
            <p className="text-[16px] text-[#606060] leading-7">Categories</p>
            <p className="text-[16px] text-[#606060] leading-7">Blogs</p>
          </div>

          <div>
            <h1 className="text-[16px] font-medium mb-[10px]">Information</h1>
            <p className="text-[16px] text-[#606060] leading-7">Help Center</p>
            <p className="text-[16px] text-[#606060] leading-7">Money Refund</p>
            <p className="text-[16px] text-[#606060] leading-7">Shipping</p>
            <p className="text-[16px] text-[#606060] leading-7">Contact us</p>
          </div>

          <div>
            <h1 className="text-[16px] font-medium mb-[10px]">For users</h1>
            <p className="text-[16px] text-[#606060] leading-7">Login</p>
            <p className="text-[16px] text-[#606060] leading-7">Register</p>
            <p className="text-[16px] text-[#606060] leading-7">Settings</p>
            <p className="text-[16px] text-[#606060] leading-7">My Orders</p>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-medium mb-[10px]">For users</h1>
            <button>
              <img src={Apple} alt="" />
            </button>
            <button>
              <img src={Play} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
