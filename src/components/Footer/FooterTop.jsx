import React from 'react'
import { MailOutlined } from "@ant-design/icons";
import { Input, Button } from 'antd';

const FooterTop = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-[20px] font-semibold leading-7">
          Subscribe on our newsletter
        </h1>
        <p className="text-[16px] text-[#606060] leading-7">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
      </div>

      <div className='flex items-center justify-center gap-x-2 mt-[21px] mb-[39px]'>
        <Input
          type="email"
          prefix={<MailOutlined />}
          placeholder="Email"
          className="w-[274px] h-[40px]"
        ></Input>
        <button className="px-[10px] py-[10px] bg-[#127FFF] w-[100px] h-[40px] rounded-md  text-[16px] font-medium text-white ">
          Subscribe
        </button>
      </div>
    </>
  );
}

export default FooterTop