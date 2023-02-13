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
      </div>
    </section>
  );
};

export default Benefit2;
