import React from "react";
import IntroCarousel from "./IntroCarousel"
import { Button } from "antd";
import "./style.scss";
import avatar from "../../assets/images/Avatar.svg"


const index = () => {
  return (
    <section>
      <div className="container max-auto">
        <div className="wrapper_intro border border-[#DEE2E7] py-[17px] px-[14px] flex items-center justify-between">
          <ul className="flex flex-col items-start">
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Automobiles
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Clothes and wear
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Home interiors
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Computer and tech
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Tools, equipments
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Sports and outdoor
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Animal and pets
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              Machinery tools
            </button>
            <button className="w-[250px] p-[10px] rounded-md text-left hover:bg-[#E5F1FF] duration-00 hover:font-[500]">
              More category
            </button>
          </ul>

          <IntroCarousel />

          <ul>
            <li>
              <div className="card">
                <div className="card_user w-[200px] h-[150px] px-[10px] py-3 bg-[#E3F0FF] rounded-md">
                  <div className="flex items-center gap-x-2">
                    <img src={avatar} alt="Avatar" />
                    <h className="text-[16px] ">
                      Hi, user <br /> let’s get stated
                    </h>
                  </div>

                  <button className="w-[180px] h-[30px] linear text-[white] rounded-md mt-3">
                    Join now
                  </button>
                  <button className="w-[180px] h-[30px] bg-white text-[#0D6EFD] rounded-md mt-3">
                    Log in
                  </button>
                </div>

                <div className="w-[200px] h-[100px] p-4 bg-[#F38332] rounded-md mt-[10px] cursor-pointer">
                  <p className="text-[16px] text-white ">
                    Get US $10 off <br /> with a new <br /> supplier
                  </p>
                </div>

                <div className="w-[200px] h-[100px] p-4 bg-[#55BDC3] rounded-md mt-[10px] cursor-pointer">
                  <p className="text-[16px] text-white ">
                    Send quotes with <br /> supplier <br /> preferences
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
