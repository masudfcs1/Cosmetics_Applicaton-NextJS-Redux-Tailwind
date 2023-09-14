import Image from "next/image";
import React from "react";

interface blogCart {
  img: string;
  title: string;
  date: string;
  comment: string;
}

const BlogCart = ({ img, title, date, comment }: blogCart) => {
  return (
    <div className=" space-y-4">
      <img
        className=" rounded-lg hover:scale-105 transition-transform"
        src={img}
        // width={250}
        // height={250}
        alt="post"
      />

      <div className=" text-accent font-medium">
        <span>{date} </span>
        <span>{comment} </span>
      </div>
      <h3 className=" font-bold text-2xl">{title} </h3>
    </div>
  );
};

export default BlogCart;
