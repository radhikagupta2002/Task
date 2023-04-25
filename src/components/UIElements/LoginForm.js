import React from "react";
import { LoginSchema } from "../../Schema/LoginSchema";
import { useFormik } from "formik";
import Modal from "./Modal";

const LoginForm = (props) => {
  const loginInitialValues = {
    Email: "",
    Password: "",
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: loginInitialValues,
    validationSchema: LoginSchema,
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
        <h3>Login</h3>
        <div className="password-input-panel">
          <p>Email</p>
          <div className="input-field">
            <input
              type="email"
              name="Email"
              required
              id="Email"
              placeholder="Email"
              value={values.Email}
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
              placeholder="Password"
              id="Password"
              required
              value={values.Password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </div>
        <button className="goto-login" type="button" onClick={() => props.setAuthState(true)}>Signup instead</button>
      </div>
    </Modal>
  );
};

export default LoginForm;
