import React from "react";

function Header() {
  return (
    <div className="flex h-[50px] bg-gray-700 text-black ">
      <div className="flex items-center ml-auto mr-auto text-center">
        <ul className="flex gap-20">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Stashed</li>
        </ul>
      </div>

      <div className="absolute ml-0 items-start gap-2">
        <img className="h-[50px] w-[50px]" src="/fucku.png" />
        <div className="w-[200px]">
          <h1 className="absolute ml-[60px] mt-[-55px] text-x">pop-porn</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
