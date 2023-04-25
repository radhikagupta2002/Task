import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";
import { FaHome, FaCompass } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { ImBooks } from "react-icons/im";

import { RiUserFollowFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import Backdrop from "./Backdrop";
// import { sideBarContext } from "../context/sideBarContext";
import { AuthContext } from "../context/AuthContext";
import SignUpForm from "./UIElements/SignUpForm";
import LoginForm from "./UIElements/LoginForm";

import axios from "axios";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/courses",
    name: "Courses",
    icon: <ImBooks />,
  },
  {
    path: "/trending",
    name: "Trending",
    icon: <FaCompass />,
  },
  {
    path: "/following",
    name: "Following",
    icon: <RiUserFollowFill />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/discord",
    name: "Discord",
    icon: <BsDiscord />,
  },
  {
    path: "/creator",
    name: "Creator Access",
    icon: (
      <svg
        className="cust-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 50 50"
        fill="currentColor"
      >
        <path d="M25,2C12.297,2,2,12.297,2,25c0,12.703,10.297,23,23,23s23-10.297,23-23C48,12.297,37.703,2,25,2z M25.34,32.413 c2.527,0,4.451-1.295,5.03-3.395h2.301C32.067,32.35,29.2,34.5,25.34,34.5c-4.929,0-8.01-3.647-8.01-9.494 c0-5.86,3.068-9.506,7.997-9.506c3.823,0,6.803,2.402,7.343,5.897h-2.301c-0.604-2.339-2.54-3.81-5.042-3.81 c-3.483,0-5.671,2.867-5.671,7.419S21.844,32.413,25.34,32.413z"></path>
      </svg>
    ),
  },
  {
    path: "/sendfeedback",
    name: "Feedback",
    icon: (
      <svg
        className="cust-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M 2 1 C 0.8974609 1 0 1.8969727 0 3 L 0 22.5 C 0 22.702148 0.12207025 22.885742 0.30859375 22.962891 C 0.37011715 22.98877 0.4355469 23 0.5 23 C 0.6298828 23 0.75781253 22.949219 0.85351562 22.853516 L 5.7070312 18 L 20 18 C 21.102539 18 22 17.103027 22 16 L 22 10.328125 C 22 10.125977 21.87793 9.9423829 21.691406 9.8652344 C 21.504883 9.7875977 21.289062 9.831543 21.146484 9.9746094 L 18.058594 13.060547 C 17.848633 13.270996 17.583008 13.412598 17.292969 13.470703 L 14.792969 13.970703 C 14.294922 14.071289 13.791992 13.912598 13.439453 13.560547 C 13.083984 13.20459 12.930664 12.697266 13.029297 12.205078 L 13.470703 10 L 5.5 10 C 5.2236328 10 5 9.7763672 5 9.5 C 5 9.2236328 5.2236328 9 5.5 9 L 13.892578 9 C 13.909973 8.9807129 13.921021 8.9559936 13.939453 8.9375 L 15.876953 7 L 5.5 7 C 5.2236328 7 5 6.7763672 5 6.5 C 5 6.2236328 5.2236328 6 5.5 6 L 16.5 6 C 16.606445 6 16.700195 6.0410157 16.78125 6.0976562 L 20.025391 2.8535156 C 20.298828 2.5795898 20.629883 2.3642578 21.009766 2.2128906 C 21.182617 2.1440429 21.301758 1.9838867 21.320312 1.7988281 C 21.339844 1.6132812 21.254883 1.4326171 21.099609 1.3300781 C 20.770508 1.1137695 20.390625 1 20 1 L 2 1 z M 22.085938 3 C 21.581055 3 21.087891 3.2045898 20.732422 3.5605469 L 14.646484 9.6445312 C 14.576172 9.7143554 14.529297 9.8037109 14.509766 9.9003906 L 14.009766 12.402344 C 13.976563 12.566406 14.02832 12.735352 14.146484 12.853516 C 14.241211 12.948242 14.369141 13 14.5 13 C 14.532227 13 14.56543 12.996582 14.597656 12.990234 L 17.097656 12.490234 C 17.195313 12.470703 17.28418 12.42334 17.353516 12.353516 L 23.439453 6.2675781 C 23.795898 5.9111328 24 5.4174805 24 4.9140625 C 24 3.8583984 23.141602 3 22.085938 3 z M 20.707031 5 L 22 6.2929688 L 21.292969 7 L 20 5.7070312 L 20.707031 5 z M 5.5 12 L 11.5 12 C 11.776367 12 12 12.223633 12 12.5 C 12 12.776367 11.776367 13 11.5 13 L 5.5 13 C 5.2236328 13 5 12.776367 5 12.5 C 5 12.223633 5.2236328 12 5.5 12 z"></path>
      </svg>
    ),
  },
  {
    path: "/usertour",
    name: "User Tour",
    icon: (
      <svg
        className="cust-icon"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 250.93 250.93"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path d="m247.896,25.718l-25.083-17.244c-1.167-0.802-2.55-1.232-3.966-1.232h-91.706c-3.866,0-7,3.134-7,7v47.462h-88.06c-1.416,0-2.799,0.43-3.966,1.231l-25.081,17.244c-1.899,1.306-3.034,3.464-3.034,5.769s1.135,4.462 3.034,5.768l25.082,17.244c1.167,0.802 2.55,1.232 3.966,1.232h88.06v119.496h-29.224c-3.866,0-7,3.134-7,7s3.134,7 7,7h69.74c3.866,0 7-3.134 7-7s-3.134-7-7-7h-26.517v-173.959h84.706c1.416,1.42109e-14 2.799-0.43 3.966-1.232l25.082-17.243c1.899-1.306 3.034-3.463 3.034-5.769s-1.134-4.462-3.033-5.767zm-213.64,70.474l-14.9-10.244 14.9-10.244h85.885v20.488h-85.885zm182.417-54.463h-82.532v-20.487h82.532l14.9,10.244-14.9,10.243z"></path>
      </svg>
    ),
  },
];

const Sidebar = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authState, setAuthState] = useState(true); //login = false
  const auth = useContext(AuthContext);

  const custStyle = {
    flexDirection: "column",
    width: "80%",
    gap: "2px",
    padding: "5px 5px",
    borderRadius: "5px",
  };

  const custTextStyle = {
    fontSize: "0.6rem",
    fontWeight: "600",
  };

  const authSubmitHandler = async (event, { resetForm }) => {
    // console.log(event);
    try {
      let user;
      if (authState) {
        //signup
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`, event, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            user = response.data;
            console.log(user);
            auth.login(
              user.uid,
              user.token,
              user.FirstName,
              user.LastName,
              user.Email,
              user.Links,
              user.Interests,
              user.ProfessionalInfo,
              user.ProfilePic,
              user.AboutMe,
              user.PhoneNo,
            );
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        //login
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/api/user/login`, event, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            user = response.data;
            auth.login(
              user.uid,
              user.token,
              user.FirstName,
              user.LastName,
              user.Email,
              user.Links,
              user.Interests,
              user.ProfessionalInfo,
              user.ProfilePic,
              user.AboutMe,
              user.PhoneNo,
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }

    resetForm();
    closeModalHandler();
  };

  const closeModalHandler = () => {
    setShowAuthModal(false);
  };

  return (
    <>
      {auth.sideBarOpen && <Backdrop onClick={auth.sideBarToggle} />}

      {authState ? (
        <SignUpForm
          authSubmitHandler={authSubmitHandler}
          closeModalHandler={closeModalHandler}
          showAuthModal={showAuthModal}
          setAuthState={setAuthState}
        />
      ) : (
        <LoginForm
          authSubmitHandler={authSubmitHandler}
          closeModalHandler={closeModalHandler}
          showAuthModal={showAuthModal}
          setAuthState={setAuthState}
        />
      )}
      <motion.div
        animate={{
          width: auth.sideBarOpen ? "200px" : "60px",
          padding: auth.sideBarOpen ? "1rem" : "0.5rem",
        }}
        className="sidebar"
      >
        <section className="routes">
          <div className="scroll-nav">
            {routes.map((route) => (
              <NavLink
                to={route.path}
                key={route.name}
                className="link"
                style={!auth.sideBarOpen ? custStyle : {}}
              >
                <div className="icon">{route.icon}</div>
                <div
                  className="link_name"
                  style={!auth.sideBarOpen ? custTextStyle : {}}
                >
                  {route.name}
                </div>
              </NavLink>
            ))}
          </div>
          <hr></hr>
          {auth.isLoggedIn ? (
            <div
              className="link logout-btn"
              style={!auth.sideBarOpen ? custStyle : {}}
              onClick={auth.logout}
            >
              <div className="icon">
                <svg
                  className="cust-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0303 8.97368C23.0303 7.807 24.4281 7.20869 25.2722 8.01408L28.4777 11.0725C29.3057 11.8625 29.3032 13.1849 28.4722 13.9717L25.2767 16.9977C24.4283 17.8012 23.0303 17.1997 23.0303 16.0312C23.0303 15.296 22.4343 14.7 21.6991 14.7H14.601C13.4964 14.7 12.601 13.8046 12.601 12.7V12.3C12.601 11.1954 13.4964 10.3 14.601 10.3H21.704C22.4365 10.3 23.0303 9.70619 23.0303 8.97368ZM17.4125 19.7824C18.2594 19.2271 19.4002 19.2365 20.1165 19.9523C20.8801 20.7154 20.864 21.9731 19.9909 22.6079C17.7973 24.2026 15.4602 25 12.9798 25C9.3266 25 6.25 23.8042 3.75 21.4125C1.25 19.0208 0 16.0333 0 12.45C0 10.2 0.572391 8.11667 1.71717 6.2C2.86195 4.28333 4.40657 2.77083 6.35101 1.6625C8.29545 0.554167 10.404 0 12.6768 0C15.206 0 17.6285 0.822203 19.9445 2.46661C20.8192 3.08773 20.8497 4.33987 20.0908 5.09828C19.389 5.7997 18.2709 5.80954 17.4454 5.25888C15.9376 4.25296 14.3564 3.75 12.702 3.75C10.1936 3.75 8.0766 4.61667 6.35101 6.35C4.62542 8.08333 3.76263 10.2 3.76263 12.7C3.76263 15.0333 4.65067 17.0417 6.42677 18.725C8.20286 20.4083 10.2862 21.25 12.6768 21.25C14.3417 21.25 15.9203 20.7608 17.4125 19.7824Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                className="link_name"
                style={!auth.sideBarOpen ? custTextStyle : {}}
              >
                Logout
              </div>
            </div>
          ) : (
            <div
              className="link logout-btn"
              style={!auth.sideBarOpen ? custStyle : {}}
              onClick={() => setShowAuthModal(true)}
            >
              <div className="icon">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 30 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.4125 19.7824C18.2594 19.2271 19.4002 19.2365 20.1165 19.9523C20.8801 20.7154 20.864 21.9731 19.9909 22.6079C17.7973 24.2026 15.4602 25 12.9798 25C9.3266 25 6.25 23.8042 3.75 21.4125C1.25 19.0208 0 16.0333 0 12.45C0 10.2 0.572391 8.11667 1.71717 6.2C2.86195 4.28333 4.40657 2.77083 6.35101 1.6625C8.29545 0.554167 10.404 0 12.6768 0C15.206 0 17.6285 0.822203 19.9445 2.46661C20.8192 3.08773 20.8497 4.33987 20.0908 5.09828C19.389 5.7997 18.2709 5.80954 17.4454 5.25888C15.9376 4.25296 14.3564 3.75 12.702 3.75C10.1936 3.75 8.0766 4.61667 6.35101 6.35C4.62542 8.08333 3.76263 10.2 3.76263 12.7C3.76263 15.0333 4.65067 17.0417 6.42677 18.725C8.20286 20.4083 10.2862 21.25 12.6768 21.25C14.3417 21.25 15.9203 20.7608 17.4125 19.7824Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M14.1233 13.9275L17.3288 16.9859C18.1729 17.7913 19.5707 17.193 19.5707 16.0263C19.5707 15.2938 20.1645 14.7 20.897 14.7L28 14.7C29.1046 14.7 30 13.8046 30 12.7L30 12.3C30 11.1954 29.1046 10.3 28 10.3L20.9019 10.3C20.1667 10.3 19.5707 9.70402 19.5707 8.96884C19.5707 7.80031 18.1727 7.19882 17.3243 8.00228L14.1288 11.0283C13.2978 11.8151 13.2953 13.1375 14.1233 13.9275Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                className="link_name"
                style={!auth.sideBarOpen ? custTextStyle : {}}
              >
                Login
              </div>
            </div>
          )}
        </section>
      </motion.div>
    </>
  );
};

export default Sidebar;
