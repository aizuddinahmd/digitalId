import React from "react";
import CustomButton from "./CustomButton";
import { logo, pfp, close, menu } from "../assets";

import { useStateContext } from "../context";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { connect, address } = useStateContext();
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`w-full flex py-6 justify-between items-center navbar`}>
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28-px] object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />
      <Link to="/">
        <div className="w-[80px] h-[80px] rounded-full flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="logo"
            className="w-[100%] h-[100%] object-contain"
          />
        </div>
      </Link>
      <div
        className={`${
          toggle ? "block" : "hidden"
        } sm:block flex justify-center items-center gap-8`}
      >
        <Link to="/createId">
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <li
              className={`font-epilogue font-normal cursor-pointer text-[16px] text-white`}
            >
              Create Profile
            </li>
          </ul>
        </Link>
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
          <Link to="/profile">
            <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
              <img
                src={pfp}
                alt="user"
                className="w-[100%] h-[100%] object-contain rounded-full "
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
