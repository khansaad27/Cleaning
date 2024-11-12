import React from "react";
import { IoIosCheckmark } from "react-icons/io"; 
import Button from "../layer/Button";
import Image from "../layer/Image";

const PricingCard = ({ planTitle, planPrice, imagePath, details = [], customStyles = {} }) => {
  return (
    <div
      className="w-[424px] p-8 bg-white rounded-[15px] hover:bg-[#F0FCF7] border border-[#8FCCB3]/30 hover:border-[#2B8761] transition-all duration-500 shadow-lg hover:shadow-xl"
      style={{ ...customStyles }}
    >
      <div className="w-[45px] h-[45px] mb-4">
        <Image
          src={imagePath || '/default-image.png'} 
          alt={`${planTitle} image`}
          width={45}
          height={45}
          className="object-cover rounded-full"
        />
      </div>

      <div className="content">
        <h3 className="text-[#2B8761] font-Roboto text-[22px] font-medium leading-[160%] mt-4 hover:text-[#1C5F45] transition-all duration-300">
          {planTitle}
        </h3>
        <h2 className="text-[#313131] font-Roboto text-[36px] font-medium leading-[42%] my-6">
          {planPrice}
        </h2>

        <ul>
          {details && details.length > 0 ? (
            details.map((detail, idx) => (
              <li
                key={idx}
                className="text-[#515854] font-Roboto text-[16px] font-normal leading-[26px] flex gap-1 items-center mb-3"
              >
                <span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px] p-1">
                  <IoIosCheckmark />
                </span>
                {detail}
              </li>
            ))
          ) : (
            <li className="text-[#515854] font-Roboto text-[16px] font-normal leading-[26px]">
              No features available
            </li>
          )}
        </ul>

        <Button className="bg-[#DFE8E5] text-[#2B8761] hover:bg-[#2B8761] hover:text-white rounded-[5px] transition-all duration-50">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
