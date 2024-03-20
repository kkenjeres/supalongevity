import React from "react";

const Footer = () => {
  return (
    <footer className="text-[14px] bg-[#F9DFB9] py-20">
      <div className="w-[90%] md:w-[80%] m-auto md:flex gap-40 ">
        <div className="flex flex-col">
          <span className="text-[16px] font-[800]">supalongevity</span>
          <span className="my-[12px]">Unlock Longevity.</span>
          <span>Copyright © 2024 - All rights reserved</span>
        </div>
        <div className="flex flex-col">
          {" "}
          <span className="mb-[12px] opacity-50">LINKS</span>
          <span>Login</span>
          <span>Pricing</span>
        </div>
        <div className="flex flex-col">
          {" "}
          <span className="mb-[12px] opacity-50">LEGAL</span>
          <span>Terms of services</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
