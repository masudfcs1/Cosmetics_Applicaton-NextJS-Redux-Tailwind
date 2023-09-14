import Image from "next/image";
import React from "react";

interface propType {
  img: string;
  type: string;
  quantity: string;
}

const CategoryCard = ({ img, type, quantity }: propType) => {
  return (
    <div className=" space-y-4">
      <Image
        className=" rounded-full border-2 md:border-8 border-white"
        src={img}
        width={250}
        height={250}
        alt={type}
      />

      <div>
        <h2 className=" text-[14px] md:text-xl font-medium ">{type} </h2>
        <p className=" text-gray-700 text-[12px] md:text-[24px] ">
          {quantity}{" "}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
