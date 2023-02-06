import React from "react";
import CustomButton from "./CustomButton";
import { logo } from "../assets";

import { useStateContext } from "../context";

const Navbar = () => {
  const { connect, address } = useStateContext();

  return (
    <div
      className={`flex md:flex-row flex-row-reverse justify-between mb-[35px] gap-6`}
    >
      <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className={`sm:flex hidden flex-row justify-end gap-4`}>
        <CustomButton
          btnType="button"
          title={
            address
              ? `${address.slice(0, 8) + "..." + address.slice(-4)}`
              : "Connect"
          }
          styles={address ? "bg-[#1c1c24]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            connect();
          }}
        />
        {/* <Link to="/profile">
      <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
        <img
          src={thirdweb}
          alt="user"
          className="w-[60%] h-[60%] object-contain "
        />
      </div>
    </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
