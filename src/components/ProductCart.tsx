import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cartSlice";

export interface additonProduct {
  id: string;
  img: string;
  name: string;
  price: number;

  sale: boolean | undefined;
}

const ProductCart = ({
  id,
  img,
  name,
  price,

  sale,
}: additonProduct) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const getRating = () => {
    const randomNumber = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min) + min);
    };
    switch (randomNumber(0, 5)) {
      case 0:
        return (
          <div className=" flex justify-center text-accent pt-4 pb-2">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 1:
        return (
          <div className=" flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className=" flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className=" flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className=" flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );

      case 5:
        return (
          <div className=" flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return <div></div>;
    }
  };

  const addProductToCart = (e: React.FormEvent) => {
    e.stopPropagation();
    const payload = {
      id,
      name,
      img,
      price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };

  return (
    <div
      className=" group cursor-pointer"
      onClick={() => router.push(`/details/${id}`)}
    >
      <div className=" relative">
        <Image
          src={img}
          alt={name}
          width={1000}
          height={1142}
          className=" w-full"
        />

        {sale && (
          <div className=" bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4 ">
            Sale!
          </div>
        )}

        <div className=" absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer ">
          <div className=" absolute bottom-0 mb-4 left-[50%] translate-x-[50%] flex gap-2 ">
            <div className=" bg-white w-[50px] h-[50px] text-[26px] grid place-items-center ">
              <AiOutlineHeart />
            </div>
            <div
              className=" bg-white w-[50px] h-[50px] text-[26px] grid place-items-center "
              onClick={addProductToCart}
            >
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
      {getRating()}
      <h2 className=" font-medium pb-3 hover:text-accent">{name} </h2>
      <p className=" text-gray-600 font-light">${price}.00 </p>
    </div>
  );
};

export default ProductCart;
