"use client";
import React, { useState } from "react";
import { Whisper } from "next/font/google";
import ProductCart from "./ProductCart";
import data from "../../utils/productData";

const whisper = Whisper({ subsets: ["vietnamese"], weight: ["400"] });

const tabsData = ["All", "Skin Care", "Lipsticks", "Makeup", "Nail & Wax"];

const NewArrival = () => {
  const [selected, setselected] = useState(0);

  const clickhandled = (index: number) => {
    setselected(index);
  };

  return (
    <div className=" container p-32">
      <div className=" text-center">
        <h3 className={`${whisper.className} text-[40px] text-gray-500 `}>
          For the sake of your personal attractiveness
        </h3>
        <h2 className=" font-semibold text-5xl">New Addition</h2>
        <ul className=" flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
          {tabsData.map((text, index) => (
            <li
              key={text}
              className={`${
                selected === index && "text-accent"
              } hover:text-accent cursor-pointer`}
              onClick={() => clickhandled(index)}
            >
              {text}
            </li>
          ))}
        </ul>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
          {data.map((item) => (
            <ProductCart
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              sale={item.sale}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default NewArrival;
