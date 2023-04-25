import React, { useState, useContext, useEffect } from "react";
import Heading from "../UIElements/Heading";
import "./Socials.css";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import SocialLinks from "../UIElements/SocialLinks";
import { LinkSchema } from "../../Schema/LinksSchema";
import { useFormik } from "formik";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";



const socialLinks = [
  {
    LinkName: "LinkedIn",
    icon: <AiFillLinkedin />,
    placeholder: "LinkedIn",
  },
  {
    LinkName: "Github",
    icon: <GoMarkGithub />,
    placeholder: "Github",
  },
  {
    LinkName: "Facebook",
    icon: <BsFacebook />,
    placeholder: "Facebook",
  },
  {
    LinkName: "Twitter",
    icon: <AiFillTwitterCircle />,
    placeholder: "Twitter",
  },
  {
    LinkName: "Instagram",
    icon: <AiFillInstagram />,
    placeholder: "Instagram",
  },
  {
    LinkName: "Website",
    icon: <VscGlobe />,
    placeholder: "Your Website",
  },
];

const Socials = () => {
  const auth = useContext(AuthContext);

  const [editState, setEditState] = useState(false);

  let initialValues = {
    LinkedIn: "",
    Github: "",
    Instagram: "",
    Facebook: "",
    Website: "",
    Twitter: "",
  };

  const socialSubmitHandler = (btnState, setBtnState) => {
    if (btnState === true) {
      handleSubmit();
    }
    setBtnState(!btnState);
    setEditState(!editState);
  };

  const linkSubmitHandler = async (event) => {
    event = {
      userLinks: event,
    };
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/user/profile-details/socials/${auth.uid}`,
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
        userData.links = response.data.links;
        localStorage.setItem("userData", JSON.stringify(userData));
        auth.links = response.data.links;
        console.log(auth.links);
      })
      .catch((error) => {
        console.log(error);
      });
    
  };



  useEffect(() => {
    if (Object.keys(auth.links).length > 0) {
      Object.keys(auth.links).forEach((key) => {
        setFieldValue(key, auth.links[key]);
      });
      console.log(values)
    }
  }, [auth.links]);


  const { values, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LinkSchema,
      onSubmit: linkSubmitHandler,
    });



  return (
    <>
      <div className="social-links">
        <Heading
          Label="ON THE WEB"
          onTrue="Save"
          onFalse="Edit"
          submitHandler={socialSubmitHandler}
        />
        <form onSubmit={handleSubmit}>
          <div className="link-section">
            {socialLinks.map((link) => (
              <SocialLinks
                key={link.LinkName}
                name={link.LinkName}
                placeholder={link.placeholder}
                values={values[link.LinkName]}
                icon={link.icon}
                handleChange={handleChange}
                onBlur={handleBlur}
                editState={editState}
              />
            ))}
          </div>
        </form>
        <hr></hr>
      </div>
    </>
  );
};

export default Socials;
