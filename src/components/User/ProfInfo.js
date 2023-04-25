import React, { useState, useContext, useEffect } from "react";
import Heading from "../UIElements/Heading";
import "./ProfInfo.css";
import { useFormik } from "formik";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const ProfInfo = () => {
  const auth = useContext(AuthContext);

  const [editInfo, setEditInfo] = useState(false);

  const initialValues = {
    education: "Graduation",
    occupation: "College Student",
  };

  const infoSubmitHandler = async (event) => {
    event = {
      profInfo: event,
    };

    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/profile-details/profinfo/${auth.uid}`,
        event,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        auth.profInfo = response.data.profInfo;
        const userData = JSON.parse(localStorage.getItem("userData"));
        userData.profInfo = response.data.profInfo;
        localStorage.setItem("userData", JSON.stringify(userData));
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(event);
  };
  const formik = useFormik({
    initialValues,
    onSubmit: infoSubmitHandler, // You can handle the form submission here
  });

  useEffect(() => {
    if (auth.professionalInfo) {
      formik.setFieldValue("education", auth.professionalInfo["education"]);
      formik.setFieldValue("occupation", auth.professionalInfo["occupation"]);
    }
  }, [auth.professionalInfo]);

  const btnStateHandler = (btnState, setBtnState) => {
    if (btnState == true) {
      formik.handleSubmit();
    }
    setBtnState(!btnState);
    setEditInfo(!editInfo);
  };

  return (
    <div className="profile-info">
      <Heading
        onTrue="Save"
        onFalse="Edit"
        Label="PROFESSIONAL INFORMATION"
        submitHandler={btnStateHandler}
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="info-selector">
          <div className="selector-panel">
            <label htmlFor="education">Highest Education</label>
            <select
              id="education"
              name="education"
              disabled={!editInfo}
              value={formik.values.education}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Primary" >Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="selector-panel">
            <label htmlFor="occupation">What do you do currently?</label>
            <select
              disabled={!editInfo}
              id="occupation"
              name="occupation"
              value={formik.values.occupation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="Schooling">Schooling</option>
              <option value="College Student">College Student</option>
              <option value="Teaching">Teaching</option>
              <option value="Job">Job</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
        </div>
        <hr></hr>
      </form>
    </div>
  );
};

export default ProfInfo;
