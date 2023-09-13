import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" container relative pt-16">
      <Image src="/hero1.png" width={1700} height={1500} alt="Hero Image" />
    </div>
  );
};

export default Hero;
