import React from "react";
import { Carousel, Button } from "antd";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const IntroCarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <div className="bg_img w-[664px] h-[373px] px-[44px] py-[56px]">
        <p className="text-[28px] ">Latest trending</p>
        <h1 className="text-[32px] font-bold mb-[17px]">Electronic items</h1>
        <button className="bg-white px-4 h-[40px] text-[16px] rounded-md font-medium">Learn more</button>
      </div>
    </>
  );
};

export default IntroCarousel;
