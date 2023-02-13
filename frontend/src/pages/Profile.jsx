import React, { useState, useEffect } from "react";
import { Loader } from "../components";
import { useStateContext } from "../context";
import styles from "../styles";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [ids, setIds] = useState([]);

  const { address, contract, getUserIds } = useStateContext();

  const fetchIds = async () => {
    setIsLoading(true);
    const data = await getUserIds();
    console.log(data);
    setIds(data);
    setIsLoading(false);
    console.log(ids);
  };

  useEffect(() => {
    if (contract) fetchIds();
  }, [address, contract]);

  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {isLoading && <Loader />}
          <div className="w-full flex flex-col mt-10 gap-[30px]">
            <div className={`mt-[60px] gap-5 flex lg:flex-row flex-col`}>
              {!isLoading &&
                ids.length > 0 &&
                ids.map((id) => (
                  <div className={`flex-[2] flex flex-col gap-[40px]`}>
                    <img
                      src={id.image}
                      alt="user"
                      className="w-[240px] h-[240px] rounded-full object-contain"
                    />
                    <div>
                      <h4
                        className={`font-epilogue font-semibold text-[18px] text-white uppercase`}
                      >
                        Full Name
                      </h4>
                      <p
                        className={`font-epilogue font-normal text-[18px] text-[#808191]`}
                      >
                        {id.fullName}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-epilogue font-semibold text-[18px] text-white uppercase`}
                      >
                        Birth Date
                      </h4>
                      <p
                        className={`font-epilogue font-normal text-[18px] text-[#808191]`}
                      >
                        {id.birthDate}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-epilogue font-semibold text-[18px] text-white uppercase`}
                      >
                        Address
                      </h4>
                      <p
                        className={`font-epilogue font-normal text-[18px] text-[#808191]`}
                      >
                        {id.location}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-epilogue font-semibold text-[18px] text-white uppercase`}
                      >
                        Poscode
                      </h4>
                      <p
                        className={`font-epilogue font-normal text-[18px] text-[#808191]`}
                      >
                        {id.poscode}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-epilogue font-semibold text-[18px] text-white uppercase`}
                      >
                        Gender
                      </h4>
                      <p
                        className={`font-epilogue font-normal text-[18px] text-[#808191]`}
                      >
                        {id.gender}
                      </p>
                    </div>
                    <div>
                      <h4
                        className={`font-epilogue font-semibold text-[18px] text-white uppercase`}
                      >
                        Phone Number
                      </h4>
                      <p
                        className={`font-epilogue font-normal text-[18px] text-[#808191]`}
                      >
                        {id.phoneNo}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
