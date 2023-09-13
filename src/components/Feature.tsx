import React from "react";
import FeatureCart from "./FeatureCart";

const data = [
  {
    img: "/iconsCosmetics.png",
    title: "Naturally Derived",
    desc: "Natural and organic beauty product",
  },
  {
    img: "/iconsDelivery.png",
    title: "Free Shooping",
    desc: "Free Shipping on all orders over $99 ",
  },
  {
    img: "/icons-secure.png",
    title: "Secure Payment",
    desc: "Fully Protected When Paying Online",
  },
];

const Feature = () => {
  return (
    // <div className=" container pt-16">
    //   <div className=" grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3">
    //     {data.map((item) => (
    //       <FeatureCart
    //         key={item.title}
    //         img={item.img}
    //         title={item.title}
    //         desc={item.desc}
    //       />
    //     ))}
    //   </div>
    // </div>

    <div className=" container pt-16">
      <div className=" grid md:grid-cols-2 gap-7 lg:grid-cols-3">
        {data.map((item) => (
          <FeatureCart
            key={item.title}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
