import React from "react";
import styles from "../styles";
import { logo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
    <div className={`${styles.flexStart} flex-col mb-8 w-full`}>
      <div className={`justify-start`}>
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p
          className={`${styles.paragraph}
        max-w-[310px] mt-4`}
        >
          Take control of your information
        </p>
      </div>
      {/* <div
        className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10`}
      >
        {footerLinks.map((footerLink) => (
          <div key={footerLink.key} className={`flex flex-col`}>
            <h4 className={`font-poppins font-medium text-18px text-white`}>
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-medium text-18px text-dimWhite hover:text-secondary cursor-pointer`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
    <div className="flex md:flex-row flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3f3E45]">
      <p
        className={`font-poppins font-normal text-18px text-center text-white`}
      >
        2023 IdVerse. All Rights Reserved.
      </p>
      {/* <div className={`flex flex-row md:mt-0 mt-6`}>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;
