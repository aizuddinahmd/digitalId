import React from "react";
import styles from "../styles";

import {
  Features,
  Hero,
  Benefit1,
  Benefit2,
  Benefit3,
  CTA,
} from "../components";

const Home = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
          <Benefit1 />
          <Benefit2 />
          <Benefit3 />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default Home;
