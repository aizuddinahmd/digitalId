import React from "react";
import { securitybox } from "../assets";
import styles, { layout } from "../styles";

const Benefit1 = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={`${layout.sectionImg}`}>
        <img src={securitybox} alt="security" className={`w-[100%] h-[100%]`} />
        <div className="absolute -left-1/2 z-[3] top-0 rounded-full w-[50%] h-[50%] white__gradient" />
        <div className="absolute -left-1/2 z-[0] top-0 rounded-full w-[50%] h-[50%] pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>
          Protect your personal information <br />
          with the highest level of security
        </h4>
        <p className={`${styles.paragraph}`}>
          In this step, users can store all their personal information in one
          secure place on the ldverse platform. This includes information such
          as name, address, birthdate, social security number, educational
          qualifications, work experience, and any other information they choose
          to store.
        </p>
      </div>
    </section>
  );
};

export default Benefit1;
