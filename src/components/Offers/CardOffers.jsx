import React, { useState } from "react";


const CardOffers = () => {

  return (
    <>
      <div className="wrapper border-[1px] flex items-start border-[#DEE2E7] h-[240px] mt-[30px] rounded-md">
        <div className="p-5">
          <h1 className="text-[20px] font-semibold">Deals and offers</h1>
          <p className="text-[16px] text-[#8B96A5]">Hygiene equipments</p>
          <div className="flex items-center gap-x-[6px] mt-[18px]">
            <p className="w-[45px] h-[50px] bg-[#606060] text-white text-center cursor-pointer rounded-[4px]">
              <strong>04</strong> Days
            </p>
            <p className="w-[45px] h-[50px] bg-[#606060] text-white text-center cursor-pointer rounded-[4px]">
              <strong>13</strong> Hour
            </p>
            <p className="w-[45px] h-[50px] bg-[#606060] text-white text-center cursor-pointer rounded-[4px]">
              <strong>34</strong> Min
            </p>
            <p className="w-[45px] h-[50px] bg-[#606060] text-white text-center cursor-pointer rounded-[4px]">
              <strong>56</strong> Sec
            </p>
          </div>
        </div>
        <div className="offers_card px-5 py-2 text-center w-[179px] h-[235px] border-x-[1px]">
          <img src="https://picsum.photos/id/122/140/140" alt="product" />
          <h2 className="mt-[11px] text-[16px]">Smart watches</h2>
          <span className="text-[14px] font-medium text-[#EB001B] px-[13px] h-[28px] py-[3px] rounded-[29px] bg-[#FFE3E3]">
            22%
          </span>
        </div>

        <div className="offers_card px-5 py-2 text-center w-[179px] h-[235px] border-x-[1px]">
          <img src="https://picsum.photos/id/122/140/140" alt="product" />
          <h2 className="mt-[11px] text-[16px]">Smart watches</h2>
          <span className="text-[14px] font-medium text-[#EB001B] px-[13px] h-[28px] py-[3px] rounded-[29px] bg-[#FFE3E3]">
            22%
          </span>
        </div>

        <div className="offers_card px-5 py-2 text-center w-[179px] h-[235px] border-x-[1px]">
          <img src="https://picsum.photos/id/122/140/140" alt="product" /> 
          <h2 className="mt-[11px] text-[16px]">Smart watches</h2>
          <span className="text-[14px] font-medium text-[#EB001B] px-[13px] h-[28px] py-[3px] rounded-[29px] bg-[#FFE3E3]">
            22%
          </span>
        </div>

        <div className="offers_card px-5 py-2 text-center w-[179px] h-[235px] border-x-[1px]">
          <img src="https://picsum.photos/id/122/140/140" alt="product" />
          <h2 className="mt-[11px] text-[16px]">Smart watches</h2>
          <span className="text-[14px] font-medium text-[#EB001B] px-[13px] h-[28px] py-[3px] rounded-[29px] bg-[#FFE3E3]">
            22%
          </span>
        </div>

        <div className="offers_card px-5 py-2 text-center w-[179px] h-[235px] border-x-[1px]">
          <img src="https://picsum.photos/id/122/140/140" alt="product" />
          <h2 className="mt-[11px] text-[16px]">Smart watches</h2>
          <span className="text-[14px] font-medium text-[#EB001B] px-[13px] h-[28px] py-[3px] rounded-[29px] bg-[#FFE3E3]">
            22%
          </span>
        </div>

        <div className="offers_card px-5 py-2 text-center w-[179px] h-[235px] border-x-[1px]">
          <img src="https://picsum.photos/id/122/140/140" alt="product" />
          <h2 className="mt-[11px] text-[16px]">Smart watches</h2>
          <span className="text-[14px] font-medium text-[#EB001B] px-[13px] h-[28px] py-[3px] rounded-[29px] bg-[#FFE3E3]">
            22%
          </span>
        </div>
      </div>
    </>
  );
};

export default CardOffers;
