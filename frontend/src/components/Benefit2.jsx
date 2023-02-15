import React from "react";
import { key } from "../assets";
import styles, { layout } from "../styles";

const Benefit2 = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Store all your information <br /> in one place.
        </h2>
        <p className={`${styles.paragraph}`}>
          With ldverse, users can store all their personal information in one
          secure place, accessible from anywhere. This eliminates the need for
          users to remember multiple passwords or carry physical copies of their
          personal information.
        </p>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={key} alt="key" className={`w-[100%] h-[100%]`} />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient" />

        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full right-20 bottom-40 white__gradient" />
      </div>
    </section>
  );
};

export default Benefit2;
