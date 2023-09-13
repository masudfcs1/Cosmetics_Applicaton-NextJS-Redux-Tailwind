import Image from "next/image";
import React from "react";
//
// interface propsType {
//   img: string;
//   title: string;
//   desc: string;
// }

// const FeatureCart = ({ img, title, desc }: propsType) => {
//   return (
//     // <div className=" flex gap-8">
//     //   <Image
//     //     src={img}
//     //     width={60}
//     //     height={50}
//     //     alt={title}
//     //     className=" h-[50px] w-auto "
//     //   />
//     //   <div className=" space-y-1">
//     //     <h2 className=" font-medium text-xl uppercase">{title} </h2>
//     //     <p className=" text-gray-600 text-[14px]">{desc} </p>
//     //   </div>
//     // </div>
//   );
// };

interface propType {
  img: string;
  title: string;
  desc: string;
}

const FeatureCart = ({ img, title, desc }: propType) => {
  return (
    <div className=" flex gap-8">
      <Image src={img} width={60} height={50} alt="Image" />
      <div className=" space-y-1">
        <h2 className=" font-medium text-xl ">{title} </h2>
        <p className=" text-gray-600 text-[14px] ">{desc} </p>
      </div>
    </div>
  );
};

export default FeatureCart;
