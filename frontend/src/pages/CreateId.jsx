import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, CustomButton, Loader } from "../components";
import { useStateContext } from "../context";
import { useStorageUpload } from "@thirdweb-dev/react";
import styles from "../styles";

const CreateId = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createId } = useStateContext();
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    location: "",
    poscode: "",
    gender: "",
    phoneNo: "",
    image: "",
  });

  const { mutateAsync: upload } = useStorageUpload();

  const uploadToIpfs = async () => {
    if (image) {
      const uploadUrl = await upload({
        data: [image],
        options: {
          uploadWithGatewayUrl: true,
          uploadWithoutDirectory: true,
        },
      });
      console.log(uploadUrl);
      setImageUrl(uploadUrl);
    } else {
      console.log("Error in Uploading pics");
    }
  };

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  // const checkIfImage = (url, callback) => {
  //   const img = new Image();
  //   img.src = url;

  //   if (img.complete) callback(true);

  //   img.onload = () => callback(true);
  //   img.onerror = () => callback(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageUrl) {
      setIsLoading(true);
      const updatedForm = { ...form, image: imageUrl };
      await createId(updatedForm);
      setForm(updatedForm);
      setIsLoading(false);
      navigate("/profile");
    } else {
      alert("Please provide pictures");
    }

    // checkIfImage(form.image, async (exists) => {
    //   if (exists) {
    //   } else {
    //     alert("Provide valid image URL");
    //   }
    // });

    console.log(form);
  };

  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {isLoading && <Loader />}
          <div
            className={`flex flex-row justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]`}
          >
            <h1
              className={`font-poppins text-white font-bold text-[18px] sm:text-[25px] leading-[38px]`}
            >
              Create your ID
            </h1>
          </div>
          <form
            // onSubmit={handleSubmit}
            className={`w-full flex flex-col mt-[65px] gap-[30px]`}
          >
            <div className={`flex flex-wrap gap-[40px]`}>
              <FormField
                labelName="Full Name"
                placeholder="Write your full name"
                inputType="text"
                value={form.fullName}
                handleChange={(e) => {
                  handleFormFieldChange("fullName", e);
                }}
              />
              <FormField
                labelName="Birth Date"
                placeholder="Birth Date"
                inputType="date"
                value={form.birthDate}
                handleChange={(e) => {
                  handleFormFieldChange("birthDate", e);
                }}
              />
              <FormField
                labelName="Home Address"
                placeholder="Home Address"
                isTextArea
                inputType="text"
                value={form.location}
                handleChange={(e) => {
                  handleFormFieldChange("location", e);
                }}
              />
              <FormField
                labelName="Poscode"
                placeholder="Poscode"
                inputType="text"
                value={form.poscode}
                handleChange={(e) => {
                  handleFormFieldChange("poscode", e);
                }}
              />
              <FormField
                labelName="Gender"
                placeholder="Male/Female"
                inputType="text"
                value={form.gender}
                handleChange={(e) => {
                  handleFormFieldChange("gender", e);
                }}
              />
              <FormField
                labelName="Phone Number"
                placeholder="Write your Phone Number"
                inputType="number"
                value={form.phoneNo}
                handleChange={(e) => {
                  handleFormFieldChange("phoneNo", e);
                }}
              />
              <div className={`flex flex-col sm:flex-row gap-4`}>
                <div>
                  <input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        setImage(e.target.files[0]);
                      }
                    }}
                    className="py-[15px] sm:px-[25px] px-[15px] block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-[#1dc071]
      hover:file:bg-violet-100"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    onClick={uploadToIpfs}
                    className="bg-[#1dc071] py-[10px] px-[25px] font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] cursor:pointer"
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
              <CustomButton
                btnType="submit"
                title="Create New ID"
                styles="bg-[#1dc071]"
                handleClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateId;
