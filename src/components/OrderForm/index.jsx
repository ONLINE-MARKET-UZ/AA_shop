import React from "react";
import { Input } from "antd";
import "./style.scss"

const index = () => {
  return (
    <section className="mt-[42px]">
      <div className="container mx-auto ">
        <div className="wrapper px-[49px] py-[51px] image flex justify-between">
          <div>
            <h1 className="text-[32px] font-semibold text-white mb-[13px]">
              An easy way to send <br /> requests to all suppliers
            </h1>
            <p className="text-[14px] text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
              Natus cum alias odit perferendis.
            </p>
          </div>

          <div className="w-[491px] h-[346px] bg-white rounded-md px-5 py-[22px]">
            <h1 className="text-[20px] font-semibold leading-7">
              Send quote to suppliers
            </h1>
            <Input
              type="text"
              placeholder="What item you need?"
              className=" placeholder:text-[#1c1c1c] p-[10px] my-5 placeholder:text-[16px]"
            />

            <textarea
              className="w-full h-[74px] p-[11px] outline-none border-[1px] border-[#DEE2E7]"
              placeholder="Type more details"
            ></textarea>

            <div className="flex items-center gap-x-2">
              <Input
                type="text"
                placeholder="Quantity"
                className="w-[206px] p-[10px] placeholder:text-[#1c1c1c] placeholder:text-[16px]"
              />

              <select className="w-[111px] p-[11px] outline-none text-[#1c1c1c] border-[1px] border-[#DEE2E7] rounded-md">
                <option disabled selected>
                  Pcs
                </option>
              </select>
            </div>

            <button className="w-[180px] h-[40px] linear text-[white] rounded-md mt-5 px-4">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
