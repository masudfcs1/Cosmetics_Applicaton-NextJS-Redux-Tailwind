import React from "react";
import BlogCart from "./BlogCart";

const data = [
  {
    img: "/blog1.jpg",
    title: " Lorem ipsum dolor sit amet.",
    date: "Aug 15, 2023",
    comment: 10,
  },
  {
    img: "/blog4.jpg",
    title: " Lorem ipsum dolor sit amet.",
    date: "Aug 15, 2023",
    comment: 6,
  },
  {
    img: "/blog3.jpg",
    title: " Lorem ipsum dolor sit amet.",
    date: "Aug 15, 2023",
    comment: 3,
  },
];

const BlogSection = () => {
  return (
    <div className=" container pt-32">
      <div className=" font-bold text-2xl">Latest News</div>
      <p className=" text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
        voluptate.
      </p>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <BlogCart
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
