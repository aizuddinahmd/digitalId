import React from "react";
import { fingerprint } from "../assets";
import styles from "../styles";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className={`flex-1 font-epilogue font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
          >
            Take Control
            <br className="sm:block hidden" />
            Of Your
            <br className="sm:block hidden" />
            <span className="text-gradient"> Personal Information</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Store, secure and share your personal information on the blockchain
          with IdVerse
        </p>
      </div>
      <div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <img
            src={fingerprint}
            alt="fingerprint"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 gold__gradient"></div>

          <div className="absolute z-[1] w-[50%] h-[50%] rounded-full right-20 bottom-40 purple__gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
