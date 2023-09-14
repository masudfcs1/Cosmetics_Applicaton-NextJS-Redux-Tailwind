import React from "react";
import { Whisper } from "next/font/google";
import CategoryCard from "./CategoryCard";

const whisper = Whisper({ subsets: ["vietnamese"], weight: ["400"] });

const data = [
  {
    img: "/1.jpg",
    type: "Lipsticks",
    quantity: "2 Items",
  },
  {
    img: "/28.jpg",
    type: "Nail & Wax",
    quantity: "3 Items",
  },
  {
    img: "/27.jpg",
    type: "Makeup",
    quantity: "6 Items",
  },
];

const Category = () => {
  return (
    <div className=" container bg-[url(/hero1.png)] bg-no-repeat  py-16 mt-32 ">
      <div className=" container text-center text-white">
        <h3 className={`${whisper.className} text-3xl`}>Favorite Category</h3>

        <h2 className=" text-[40px] font-medium "> Top Category</h2>
        <div className=" flex justify-center gap-4 md:gap-16 pt-8">
          {data.map((item) => (
            <CategoryCard
              key={item.type}
              img={item.img}
              type={item.type}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
