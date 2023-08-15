
const MultiCard = ({ image, price, title }) => {
  return (
    <div className="w-[220px] h-[310px] px-[10px] py-[9px] rounded-md border-[1px] border-[#E0E0E0]">
      <div className="w-[200px] h-[200px] px-[24px] py-[14px]">
        <img
          src={image}
          className="object-contain w-[200px] h-[200px] "
          alt=""
        />
      </div>
      <h1 className="mt-[14px] text-[16px] font-medium">${price}</h1>
      <p className=" font-normal text-[#8B96A5] text-[16px] w-[186px]" title={title}>
        {(title.length > 20 ? title.slice(0, 20) + "..." : title)}
      </p>
    </div>
  );
};

export default MultiCard;