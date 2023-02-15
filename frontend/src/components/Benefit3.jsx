import React from "react";
import { profile } from "../assets";
import styles, { layout } from "../styles";

const Benefit3 = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImg}`}>
        <img src={profile} alt="profile" className={`w-[100%] h-[100%]`} />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient" />

        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full right-20 bottom-40 white__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>
          Take ownership of your personal information <br />
          and control who has access to it
        </h4>
        <p className={`${styles.paragraph}`}>
          Users can grant and revoke access to their information at any time,
          ensuring that they maintain control over their personal information.
          With ldverse, users no longer have to worry about third-party entities
          misusing their personal information.
        </p>
      </div>
    </section>
  );
};

export default Benefit3;
