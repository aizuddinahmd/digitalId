import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x8f96115aE5360669BEfb91b8d53E0870fB8E07a8"
  );
  const { mutateAsync: createId } = useContractWrite(contract, "createId");

  const address = useAddress();
  const connect = useMetamask();

  const publishId = async (form) => {
    try {
      const data = await createId([
        address,
        form.fullName,
        new Date(form.birthDate).getTime(),
        form.location,
        form.poscode,
        form.gender,
        form.phoneNo,
        form.image,
      ]);
      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getIds = async () => {
    const ids = await contract.call("getId");
    const parsedIds = ids.map((id, i) => ({
      owner: id.owner,
      fullName: id.fullName,
      birthDate: id.birthDate.toNumber(),
      location: id.location,
      poscode: id.poscode.toString(),
      gender: id.gender,
      phoneNo: id.phoneNo.toString(),
      image: id.image,
      pId: i,
    }));
    console.log(parsedIds);
    return parsedIds;
  };

  const getUserIds = async () => {
    const allIds = await getIds();
    const filteredIds = allIds.filter((id) => id.owner === address);

    return filteredIds;
  };

  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createId: publishId,
        getIds,
        getUserIds,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
