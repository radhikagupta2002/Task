import React from "react";
import { useFormik } from "formik";
import { SignUpSchema } from "../../Schema/SignUpSchema";
import Modal from "./Modal";

const SignUpForm = (props) => {
  const SignupInitialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    PhoneNo: 0,
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: SignupInitialValues,
    validationSchema: SignUpSchema,
    onSubmit: props.authSubmitHandler,
  });

  return (
    <Modal
      show={props.showAuthModal}
      onCancel={props.closeModalHandler}
      header={"Password"}
      contentClass="place-item__modal-content"
      footerClass="place-item__modal-actions"
      onSubmit={handleSubmit}
      footer={
        <div className="password_footer">
          <button
            className="cancel_btn"
            type="button"
            onClick={props.closeModalHandler}
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
        <h3>Sign Up</h3>
        <div className="password-input-panel">
          <p>First Name</p>
          <div className="input-field">
            <input
              type="text"
              name="FirstName"
              required
              id="FirstName"
              placeholder="First Name"
              value={values.FirstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="password-input-panel">
          <p>Last Name</p>
          <div className="input-field">
            <input
              type="text"
              name="LastName"
              placeholder="Last Name"
              id="LastName"
              value={values.LastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="password-input-panel">
          <p>Email</p>
          <div className="input-field">
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email"
              required
              value={values.Email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="password-input-panel">
          <p>Mobile Number</p>
          <div className="input-field">
            <input
              type="number"
              name="PhoneNo"
              required
              id="PhoneNo"
              placeholder="Mobile Number"
              value={values.PhoneNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <div className="password-input-panel">
          <p>Password</p>
          <div className="input-field">
            <input
              type="password"
              name="Password"
              required
              id="Password"
              placeholder="Password"
              value={values.Password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <button className="goto-login" type="button" onClick={() => props.setAuthState(false)} >Login Instead</button>
      </div>
    </Modal>
  );
};

export default SignUpForm;
