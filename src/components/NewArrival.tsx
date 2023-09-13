"use client";
import React, { useState, useEffect } from "react";
import { Whisper } from "next/font/google";
import ProductCart, { additonProduct } from "./ProductCart";
import Data from "../../utils/productData";

const whisper = Whisper({ subsets: ["vietnamese"], weight: ["400"] });

const tabsData = ["All", "Skin care", "Lipsticks", "Makeup", "Nail & Wax"];

const NewArrival = () => {
  const [selected, setselected] = useState(0);
  const [data, setdata] = useState([]);

  const shuffleArray = (array: any) => {
    return array
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ value }: any) => value);
  };

  useEffect(() => {
    setdata(shuffleArray(Data).slice(0, 15));
  }, []);

  const clickhandled = (index: number) => {
    const category = tabsData[index].toLowerCase();
    setselected(index);

    if (category === "all") {
      setdata(shuffleArray(Data).slice(0, 15));
      return;
    }

    const filterdata = Data.filter((item) => item.category.includes(category));
    setdata(shuffleArray(filterdata));
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
          {data.map((item: additonProduct) => (
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
