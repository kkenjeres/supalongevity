import React from "react";
import Image from "next/image";

import img2 from "../../public/images/img2.svg";
const Cases = () => {
  return (
    <section className="bg-[#FCF3E4] py-40">
      <div className="w-[90%] md:w-[60%] m-auto">
        <h2 className="text-center text-[48px] font-[800] leading-[60px]">
          Use cases
        </h2>
        <p className="mt-[40px] mb-[150px] text-center text-[18px] font-[400] text-[#4A2B24]">
          There are millions of ways to agitate a problem and drive action. Here
          are
          <br /> examples of 3 chat experiences:
        </p>
        <Image
          src={img2}
          width={500}
          height={500}
          alt="img"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Cases;
