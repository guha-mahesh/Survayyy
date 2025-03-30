import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import formImg from "../../assets/formy.png";
import ad from "../../assets/advert.png";

const FormCardCreator = () => {
  const [inputs, setInputs] = useState({
    title: "",
    link: "",
    description: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    reason: keyof typeof inputs
  ) => {
    setInputs({
      ...inputs,
      [reason]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (!inputs.title || !inputs.link || !inputs.description) {
      alert("Please fill in all fields before submitting.");
      return; // Don't proceed with form submission if any field is empty
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const userName = user?.name || "Unknown";

    const formEntry = {
      title: inputs.title,
      link: inputs.link,
      description: inputs.description,
      name: userName,
    };

    const existingEntries = JSON.parse(
      localStorage.getItem("formEntries") || "[]"
    );

    existingEntries.push(formEntry);

    localStorage.setItem("formEntries", JSON.stringify(existingEntries));

    setInputs({ title: "", link: "", description: "" });

    console.log(localStorage);

    window.location.reload();
  };

  return (
    <div className="form-card-creator">
      <h2>Title</h2>
      <InputBox
        placeholder="What is the name of your survey?"
        reason="title"
        onChange={(e) => handleInputChange(e, "title")}
        value={inputs.title}
      ></InputBox>
      <h2>Form</h2>
      <InputBox
        placeholder="Insert link here"
        reason="link"
        onChange={(e) => handleInputChange(e, "link")}
        value={inputs.link}
      ></InputBox>
      <h2>Description</h2>
      <InputBox
        placeholder="What is this survey about?"
        reason="description"
        onChange={(e) => handleInputChange(e, "description")}
        value={inputs.description}
      ></InputBox>
      <button className="submitForm" onClick={handleSubmit}>
        Submit
      </button>
      <div className="adContain">
        <img className="adImg" src={ad}></img>
        <div className="support">
          <h1 className="supportHeading">Support our local businesses!</h1>
        </div>
      </div>
    </div>
  );
};

export default FormCardCreator;
