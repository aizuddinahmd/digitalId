import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormField, CustomButton, Loader } from "../components";
import { useStateContext } from "../context";

const CreateId = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createId } = useStateContext();
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    location: "",
    poscode: "",
    gender: "",
    phoneNo: "",
    image: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;

    if (img.complete) callback(true);

    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setForm({ ...form, image: "" });
    checkIfImage(form.image, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createId({
          ...form,
        });
        setIsLoading(false);
        navigate("/profile");
      } else {
        alert("Provide valid image URL");
      }
    });

    console.log(form);
  };

  return (
    <div
      className={`bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10`}
    >
      {isLoading && <Loader />}
      <div
        className={`flex flex-row justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]`}
      >
        <h1 className="font-epilogue text-white font-bold text-[18px] sm:text-[25px] leading-[38px]">
          Create your ID
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
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
          <FormField
            labelName="National ID"
            placeholder="Paste your ID Url"
            inputType="text"
            value={form.image}
            handleChange={(e) => {
              handleFormFieldChange("image", e);
            }}
          />
        </div>
        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton
            btnType="submit"
            title="Create New ID"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateId;
