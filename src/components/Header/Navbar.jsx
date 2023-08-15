import React from "react";
import { Dropdown, Space, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";




const Navbar = () => {
  return (
    <div className="br_top py-4 mb-5">
      <div className="container mx-auto">
        <div className="wrapper flex items-center justify-between">
          <div className="flex items-center gap-x-[6px]">
            <Button type="text">
              <i className="bx bx-menu text-[24px]"></i>
            </Button>
            <ul className="flex items-center gap-x-[25px]">
              <li className="text-[16px] font-medium cursor-pointer hover:text-[#127FFF]">
                All category
              </li>
              <li className="text-[16px] font-medium cursor-pointer hover:text-[#127FFF]">
                Hot offers
              </li>
              <li className="text-[16px] font-medium cursor-pointer hover:text-[#127FFF]">
                Gift boxes
              </li>
              <li className="text-[16px] font-medium cursor-pointer hover:text-[#127FFF]">
                Menu item
              </li>
              <li className="text-[16px] font-medium cursor-pointer hover:text-[#127FFF]">
                Projects
              </li>
              {/* <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Click me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown> */}

              <select className=" outline-none cursor-pointer hover:text-[#127FFF]">
                <option selected disabled>
                  Help
                </option>
              </select>
            </ul>
          </div>

          <div className="flex items-center gap-x-8">
            <select className=" outline-none cursor-pointer hover:text-[#127FFF]">
              <option selected disabled>
                English, USD
              </option>
            </select>
            <select className=" outline-none cursor-pointer hover:text-[#127FFF]">
              <option selected disabled>
                Ship to   {/*img */} img (56x40)
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
