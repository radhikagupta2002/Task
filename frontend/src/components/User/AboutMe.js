import React, { useState, useContext, useEffect } from "react";
import Heading from "../UIElements/Heading";
import "./AboutMe.css";
import { useFormik } from "formik";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

// let uid = "6422f102410e54cf48c818db";

const AboutMe = () => {
  const auth = useContext(AuthContext);

  // const [aboutMeText,setAboutMeText]=useState(auth.aboutMe);

  // console.log(auth.aboutMe);
  const aboutSubmitHandler = async (event) => {
    console.log(event);
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/profile-details/about/${auth.uid}`,
        event,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        auth.aboutMe = response.data.aboutMe;
        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.aboutMe = response.data.aboutMe;
        localStorage.setItem("userData", JSON.stringify(userData));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const initialValues = {
    AboutMe: auth.aboutMe,
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    onSubmit: aboutSubmitHandler,
  });

  const [editState, setEditState] = useState(false);

  const btnSubmitHandler = (btnState, setBtnState) => {
    if (btnState === true) {
      handleSubmit();
    }
    setBtnState(!btnState);
    setEditState(!editState);
  };

  useEffect(() => {
    values.AboutMe = auth.aboutMe;
  }, [auth.aboutMe]);

  return (
    <div className="about-me-panel">
      <Heading
        Label="ABOUT ME"
        onTrue="Save"
        onFalse="Edit"
        submitHandler={btnSubmitHandler}
      />
      <form onSubmit={handleSubmit}>
        <div className="aboutme-input_section">
          <textarea
            name="AboutMe"
            value={values.AboutMe}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={!editState}
            className="about-input"
            placeholder={
              auth.aboutMe !== "" ? auth.aboutMe : "Add something about you."
            }
          />
        </div>
      </form>
      <hr></hr>
    </div>
  );
};

export default AboutMe;
