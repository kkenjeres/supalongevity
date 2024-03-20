import React from "react";
import Button from "./ui/ButtonNav";
const Nav = () => {
  return (
    <header className="w-[90%] md:w-[80%] m-auto p-4 absolute top-2 right-0 left-0 z-10">
      <nav>
        <ul className="flex justify-between items-center text-white">
          <li>supalongevity</li>
          <li>FAQ</li>
          <li>
            <Button />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
