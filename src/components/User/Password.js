import React, { useState,useContext } from "react";
import Heading from "../UIElements/Heading";
import Modal from "../UIElements/Modal";
import "./Password.css";
import { useFormik } from "formik";
import { ChangePassword } from "../../Schema/ChangePassword";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";


const Password = () => {

  const auth=useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const showPasswordHandler = (idName) => {
    if (idName === "ConfirmPassword")
      setShowConfirmPassword(!showConfirmPassword);
    else if (idName === "NewPassword") setShowNewPassword(!showNewPassword);
    else setShowCurrentPassword(!showCurrentPassword);

    let element = document.getElementById(idName);
    if (element.type === "password") {
      element.type = "text";
    } else {
      element.type = "password";
    }
  };

  const passwordSubmitHandler = async(event, { resetForm }) => {
    //connect with backend
    event["uid"] = auth.uid;

    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/password/reset`,
        event,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(event);
    closeModalHandler();
    resetForm();
  };

  const showModalHandler = (btnState, setBtnState) => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowConfirmPassword(false);
    setShowCurrentPassword(false);
    setShowNewPassword(false);
    resetForm();
    setShowModal(false);
  };

  const initialValues = {
    CurrentPassword: "",
    NewPassword: "",
    ConfirmPassword: "",
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: ChangePassword,
    onSubmit: passwordSubmitHandler,
  });

  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={"Password"}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        onSubmit={handleSubmit}
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
        <div className="password-chg-panel">
          <div className="password-input-panel">
            <p>Current Password</p>
            <div className="input-field">
              <input
                type="password"
                name="CurrentPassword"
                required
                id="CurrentPassword"
                placeholder="Current Password"
                value={values.CurrentPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showCurrentPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => {
                    showPasswordHandler("CurrentPassword");
                  }}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => {
                    showPasswordHandler("CurrentPassword");
                  }}
                />
              )}
            </div>
          </div>
          <div className="password-input-panel">
            <p>New Password</p>
            <div className="input-field">
              <input
                type="password"
                name="NewPassword"
                placeholder="New Password"
                id="NewPassword"
                required
                value={values.NewPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showNewPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => {
                    showPasswordHandler("NewPassword");
                  }}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => {
                    showPasswordHandler("NewPassword");
                  }}
                />
              )}
            </div>
          </div>
          <div className="password-input-panel">
            <p>Confirm Password</p>
            <div className="input-field">
              <input
                type="password"
                name="ConfirmPassword"
                id="ConfirmPassword"
                placeholder="Confirm New Password"
                required
                value={values.ConfirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => {
                    showPasswordHandler("ConfirmPassword");
                  }}
                />
              ) : (
                <AiOutlineEye
                  onClick={() => {
                    showPasswordHandler("ConfirmPassword");
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>
      <div className="password-panel">
        <Heading
          onTrue="Change"
          onFalse="Change"
          Label="PASSWORD & SECURITY"
          submitHandler={showModalHandler}
        />
        <div className="password-view">
          <div className="password-heading">
            <p>Password</p>
            <div className="dummy-view">
              <input type="password" disabled value=".................." />
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default Password;
