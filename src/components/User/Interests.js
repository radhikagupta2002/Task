import React, { useState, useEffect, useContext } from "react";
import Heading from "../UIElements/Heading";
import "./Interests.css";
import Modal from "../UIElements/Modal";
import { useFormik } from "formik";
import InterestList from "./InterestList";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const initialValues = {
  options: [],
};

const options = [
  { name: "App Development", id: 0 },
  { name: "Web Development", id: 1 },
  { name: "Game Development", id: 2 },
  { name: "Data Structures", id: 3 },
  { name: "Programming", id: 4 },
  { name: "Machine Learning", id: 5 },
  { name: "Data Science", id: 6 },
  { name: "Others", id: 7 },
];

const Interests = () => {
  const [showModal, setShowModal] = useState(false);

  const auth = useContext(AuthContext);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const interestSubmitHandler = async (event) => {
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/profile-details/interests/${auth.uid}`,
        event,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.interests = response.data.interests;
        localStorage.setItem("userData", JSON.stringify(userData));
        auth.interests = response.data.interests;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(event);
    formik.resetForm();
    closeModalHandler();
  };

  useEffect(()=>{
    
    if(auth.interests){
      console.log("after fetch"+auth.interests);
      let newOptions = [...auth.interests];
      setSelectedOptions(newOptions);
    }
  },[auth.interests])

 

  const formik = useFormik({
    initialValues,
    onSubmit: interestSubmitHandler,
  });

  const handleOptionClick = (option) => {
    let newSelectedOptions = [...selectedOptions];
    if (selectedOptions.includes(option)) {
      newSelectedOptions = newSelectedOptions.filter(
        (selectedOption) => selectedOption !== option
      );
    } else {
      newSelectedOptions.push(option);
    }
    setSelectedOptions(newSelectedOptions);
    formik.setFieldValue("options", newSelectedOptions);
  };

  const interestModalHandler = (btnState, setBtnState) => {
    setBtnState(!btnState);
    setShowModal(!showModal); // dont forget to do this when triggering the form submit handler funct
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="interest-panel">
      <Heading
        onTrue="Edit"
        onFalse="Edit"
        Label="INTERESTS"
        submitHandler={interestModalHandler}
      />
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={"Password"}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        onSubmit={formik.handleSubmit}
        footer={
          <div className="password_footer">
            <button
              className="cancel_btn"
              type="button"
              onClick={closeModalHandler}
            >
              Close
            </button>
            <button type="submit" className="save_btn">
              Save
            </button>
          </div>
        }
      >
        <div className="options-list">
          {options.map((option) => (
            <div
              key={option.id}
              className={`option${
                selectedOptions.includes(option.name) ? "__selected" : ""
              }`}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.name}
            </div>
          ))}
        </div>
      </Modal>
      <InterestList selectedOptions={selectedOptions} />
    </div>
  );
};

export default Interests;
