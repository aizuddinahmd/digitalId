import styles from "../styles";
import React from "react";
import CustomButton from "./CustomButton";

const CTA = () => (
  <section
    className={`${styles.marginY} ${styles.flexCenter} ${styles.padding} flex sm:flex-row flex-col box-shadow bg-black-gradient rounded-[20px]`}
  >
    <div className={`flex flex-1 flex-col`}>
      <h2 className={`${styles.heading2}`}>
        Take Control of Your Information Today!
      </h2>
      <p className={`${styles.paragraph} mt-5`}>
        Fill out your information and store it in blockchain
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <CustomButton
        btnType="submit"
        title="Get Started"
        styles="bg-[#1dc071]"
      />
    </div>
  </section>
);

export default CTA;
