import React from "react";
import styles, { layout } from "../styles";
import { save, secure, share } from "../assets";

const Features = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h4 className={`${styles.heading2}`}>How IdVerse works</h4>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Secure and store your personal information in 3 easy steps
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        <div className={`flex flex-row p-6 rounded-[20px] feature-card `}>
          <div
            className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
          >
            <img src={save} alt="title" className={`w-[100%] h-[100%]`} />
          </div>
          <div className={`flex-1 flex flex-col ml-3 `}>
            <h4 className="text-white font-poppins font-semibold font-[18px] leading-[23px] mb-1 ">
              Store
            </h4>
            <p className="text-dimWhite font-poppins font-normal font-[18px] leading-[23px] ">
              Store all your personal information and identity in one secure
              place.
            </p>
          </div>
        </div>
        <div className={`flex flex-row p-6 rounded-[20px] feature-card `}>
          <div
            className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
          >
            <img src={secure} alt="secure" className={`w-[100%] h-[100%]`} />
          </div>
          <div className={`flex-1 flex flex-col ml-3 `}>
            <h4 className="text-white font-poppins font-semibold font-[18px] leading-[23px] mb-1 ">
              Secure
            </h4>
            <p className="text-dimWhite font-poppins font-normal font-[18px] leading-[23px] ">
              Keep your information safe and secure with blockchain technology.
            </p>
          </div>
        </div>
        <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
          <div
            className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}
          >
            <img src={share} alt="share" className={`w-[100%] h-[100%]`} />
          </div>
          <div className={`flex-1 flex flex-col ml-3 `}>
            <h4 className="text-white font-poppins font-semibold font-[18px] leading-[23px] mb-1 ">
              Share
            </h4>
            <p className="text-dimWhite font-poppins font-normal font-[18px] leading-[23px] ">
              Share your information and private data with trusted entities,
              when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
