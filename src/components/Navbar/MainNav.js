import React, { useContext, useState } from "react";
import "./MainNav.css";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../utility/Cipherschools_icon.png";
import { AiOutlineCompass } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgBell } from "react-icons/cg";
import Avatar from "../UIElements/Avatar";
import BlankPic from "../../utility/blankProfile.jpg";

let notification = 0; // for real purpose this has to be managed by useState and should be fetched by the backend
let tokens = 0;

const MainNav = () => {
  const auth = useContext(AuthContext);
  const [showSearchOptions, setSearchOptions] = useState("none");
  const [showAccountOptions, setAccountOptions] = useState("none");


  const accountToggle = () => {
    let element = document.getElementById("account-options");
    if (showAccountOptions === "none") {
      element.style.display = "block";
      setAccountOptions("block");
    } else if (showAccountOptions === "block") {
      element.style.display = "none";
      setAccountOptions("none");
    }
  };

  return (
    <>
      <div className="main-nav">
        <div className="left-nav">
          <div className="hamburger">
            <HiOutlineBars3BottomLeft onClick={auth.sideBarToggle} />
          </div>
          <div className="title-container">
            <img src={Logo} alt="cipherschools" />
            <h1 className="title">CipherSchools</h1>
          </div>
          <div className="browse-container">
            <AiOutlineCompass />
            <div className="custom-select">
              <span className="select-label">Browse </span>
              <RiArrowDropDownLine />
              <ul className="select-options">
                <li>App Development</li>
                <li>Web Development</li>
                <li>Game Development</li>
                <li>Data Structures</li>
                <li>Programming</li>
                <li>Machine Learning</li>
                <li>Data Science</li>
                <li>Others</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-nav">
          <div className="search">
            <BiSearch />
            <input type="text" placeholder="Search and Learn" />
            <div
              className="search-option"
              onClick={() => {
                let element = document.getElementById("search-options");
                if (showSearchOptions === "none") {
                  element.style.display = "block";
                  setSearchOptions("block");
                } else if (showSearchOptions === "block") {
                  element.style.display = "none";
                  setSearchOptions("none");
                }
              }}
            >
              <svg
                className="search-option"
                width="17"
                height="16"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16.0005C4.17526 16.0014 2.58119 14.7673 2.125 13.0005H0V11.0005H2.126C2.64564 8.98794 4.62012 7.70874 6.66928 8.05706C8.71845 8.40537 10.1594 10.2651 9.98486 12.3363C9.81035 14.4075 8.07856 16 6 16.0005ZM6 10.0005C4.9074 10.0016 4.01789 10.8793 4.00223 11.9718C3.98658 13.0643 4.85057 13.9672 5.94269 13.9996C7.03481 14.032 7.95083 13.182 8 12.0905V12.4905V12.0005C8 10.8959 7.10457 10.0005 6 10.0005ZM20 13.0005H11V11.0005H20V13.0005ZM11 8.00049C9.17563 8.00096 7.58209 6.76693 7.126 5.00049H0V3.00049H7.126C7.64564 0.987939 9.62012 -0.291258 11.6693 0.0570554C13.7184 0.405368 15.1594 2.26511 14.9849 4.33633C14.8103 6.40755 13.0786 7.99996 11 8.00049ZM11 2.00049C9.9074 2.0016 9.01789 2.87934 9.00223 3.97183C8.98658 5.06433 9.85056 5.9672 10.9427 5.99961C12.0348 6.03203 12.9508 5.18199 13 4.09049V4.49049V4.00049C13 2.89592 12.1046 2.00049 11 2.00049ZM20 5.00049H16V3.00049H20V5.00049Z"
                  fill="var(--text-color)"
                ></path>
              </svg>
            </div>
          </div>
          <ul id="search-options" className="search-options">
            <li>Video</li>
            <li>Course</li>
            <li>Instructor</li>
            <li>All</li>
          </ul>
          <div title="notification" className="notification">
            <CgBell />
            <span className="notif-badge">{notification}</span>
          </div>
          <Avatar
            className="nav-avatar"
            height="1.5"
            width="1.5"
            src={auth.profilePic ? auth.profilePic : BlankPic}
            alt="account avatar"
            onClick={accountToggle}
          />
          <ul id="account-options" className="account-options">
            <li>Dashboard</li>
            <li>My Profile</li>
            <li>Enrolled Courses</li>
            <li>Wishlist</li>
            <li>Liked Videos</li>
          </ul>

          <svg
            className="tokens"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 26 25"
            fill="none"
          >
            <g clipPath="url(#clip0_1637:22987)">
              <path
                d="M24.5552 12.5C24.5552 19.135 19.2639 24.5 12.7536 24.5C6.24329 24.5 0.952026 19.135 0.952026 12.5C0.952026 5.86501 6.24329 0.5 12.7536 0.5C19.2639 0.5 24.5552 5.86501 24.5552 12.5Z"
                stroke="#222831"
              />
              <path
                d="M19.7941 11.7592C20.8058 11.7592 21.6259 10.9371 21.6259 9.92306C21.6259 8.90899 20.8058 8.08691 19.7941 8.08691C18.7825 8.08691 17.9624 8.90899 17.9624 9.92306C17.9624 10.9371 18.7825 11.7592 19.7941 11.7592Z"
                fill="#D48432"
              />
              <path
                d="M21.6438 15.0533C21.6438 15.158 21.6295 15.2518 21.6185 15.3556C21.5708 15.8058 21.4596 16.2468 21.2882 16.6656C21.2 16.9124 21.0832 17.148 20.9402 17.3675C20.7988 17.5986 20.6446 17.8216 20.4785 18.0355C20.2889 18.2594 19.7952 18.8252 19.4674 19.0018C19.2648 19.1084 19.0382 19.161 18.8094 19.1546C18.8094 19.1546 19.4278 18.3286 19.6107 18.0617C19.7312 17.9055 19.7967 17.7136 19.7969 17.5161C19.7999 17.3638 19.7795 17.212 19.7362 17.0659C19.7235 17.0155 19.7054 16.9665 19.6823 16.9198C19.6741 16.9041 19.6621 16.8906 19.6474 16.8807C19.6327 16.8708 19.6157 16.8648 19.598 16.8632C19.1475 16.8206 18.7287 16.6119 18.4229 16.2775C18.117 15.9431 17.9458 15.5069 17.9424 15.0533C17.9449 14.8119 17.9949 14.5734 18.0894 14.3514C18.184 14.1293 18.3213 13.9282 18.4934 13.7594C18.6656 13.5906 18.8692 13.4575 19.0927 13.3676C19.3162 13.2777 19.5552 13.2329 19.796 13.2357C20.8155 13.2357 21.6884 14.0499 21.6438 15.0533Z"
                fill="#D48432"
              />
              <path
                d="M17.9002 19.7991C17.7362 20.1854 17.4673 20.5178 17.1242 20.7585C16.8979 20.9213 16.654 21.0579 16.3971 21.1656C16.084 21.3013 15.7594 21.4084 15.4272 21.4857C14.7253 21.6496 14.007 21.7324 13.2863 21.7324C8.10865 21.7324 3.88904 17.4883 3.88904 12.2805C3.88904 7.07274 8.10191 2.81177 13.2703 2.81177C15.7668 2.81177 16.6557 3.25856 17.1958 3.69606L17.2034 3.70197C17.4592 3.91813 17.6648 4.18776 17.8057 4.49196C17.9466 4.79616 18.0194 5.12756 18.019 5.46295C18.0181 6.07367 17.7756 6.65911 17.3447 7.09087C16.9139 7.52264 16.3297 7.76549 15.7205 7.76616C15.5891 7.76624 15.458 7.75466 15.3287 7.73153C15.1375 7.7 14.9514 7.6432 14.7751 7.56261C14.6637 7.50984 14.5474 7.46798 14.428 7.43761C13.9671 7.3284 13.4929 7.28602 13.02 7.31176C11.7684 7.38134 10.59 7.92525 9.72362 8.83327C8.85719 9.7413 8.36752 10.9455 8.35384 12.202C8.34526 12.856 8.4671 13.5053 8.7122 14.1115C8.9573 14.7177 9.32073 15.2688 9.78116 15.7324C10.2388 16.1986 10.7847 16.5686 11.3869 16.8205C11.9891 17.0724 12.6354 17.2012 13.288 17.1994C13.7145 17.2003 14.1394 17.1455 14.5518 17.0364C14.653 17.0103 14.7523 16.9776 14.8492 16.9384C14.9517 16.8967 15.057 16.8622 15.1644 16.8354C15.3475 16.789 15.5358 16.7657 15.7247 16.7661C16.334 16.7666 16.9183 17.0094 17.3492 17.4412C17.7801 17.873 18.0226 18.4586 18.0232 19.0694V19.0786C18.0342 19.3249 17.9922 19.5706 17.9002 19.7991Z"
                fill="#D48432"
              />
              <path
                d="M17.5092 19.641C17.2691 20.239 16.7147 20.57 16.2319 20.7787C15.9422 20.904 15.6419 21.0029 15.3345 21.0743C14.6642 21.2315 13.978 21.3105 13.2896 21.3099C8.33023 21.3099 4.3103 17.2677 4.3103 12.2803C4.3103 7.29301 8.31085 3.23389 13.2702 3.23389C15.7457 3.23389 16.5074 3.68152 16.9312 4.02443C17.14 4.2006 17.3078 4.42039 17.4229 4.66841C17.5381 4.91643 17.5977 5.18668 17.5977 5.46024C17.598 5.70753 17.5497 5.95246 17.4555 6.18101C17.3613 6.40956 17.2231 6.61724 17.0487 6.79218C16.8743 6.96712 16.6673 7.10588 16.4394 7.20051C16.2114 7.29514 15.9671 7.3438 15.7204 7.34368C15.6139 7.34389 15.5076 7.33456 15.4028 7.31581C15.2462 7.28998 15.0938 7.2434 14.9495 7.1773C14.8143 7.11303 14.6732 7.06211 14.5282 7.02527C14.0283 6.90752 13.5142 6.86174 13.0015 6.88929C11.6439 6.96739 10.3663 7.55847 9.42632 8.54338C8.4863 9.52829 7.95371 10.8338 7.9359 12.1967C7.92855 12.9064 8.06164 13.6104 8.32748 14.2682C8.59332 14.9259 8.98664 15.5243 9.48466 16.0287C9.98269 16.5331 10.5756 16.9336 11.229 17.2068C11.8824 17.4801 12.5833 17.6208 13.2913 17.6207C13.7529 17.6214 14.2126 17.5618 14.6588 17.4433C14.7772 17.413 14.8934 17.3749 15.0068 17.3293C15.0903 17.295 15.1762 17.2668 15.2638 17.2449C15.4136 17.2071 15.5676 17.188 15.7221 17.1883C15.9686 17.1882 16.2127 17.2367 16.4405 17.3312C16.6682 17.4257 16.8752 17.5642 17.0495 17.7389C17.2238 17.9136 17.3621 18.1209 17.4565 18.3492C17.5508 18.5775 17.5994 18.8221 17.5994 19.0692C17.6114 19.2641 17.5807 19.4593 17.5092 19.641Z"
                fill="#EC981B"
              />
              <path
                d="M19.7941 11.5903C20.8058 11.5903 21.6259 10.7682 21.6259 9.75411C21.6259 8.74004 20.8058 7.91797 19.7941 7.91797C18.7825 7.91797 17.9624 8.74004 17.9624 9.75411C17.9624 10.7682 18.7825 11.5903 19.7941 11.5903Z"
                fill="#EC981B"
              />
              <path
                d="M21.6438 14.8843C21.6438 14.9891 21.6295 15.0828 21.6185 15.1867C21.5708 15.6368 21.4596 16.0779 21.2882 16.4967C21.2 16.7435 21.0832 16.979 20.9402 17.1985C20.7988 17.4296 20.6446 17.6527 20.4785 17.8666C20.2889 18.0904 19.7952 18.6563 19.4674 18.8328C19.2648 18.9395 19.0382 18.9921 18.8094 18.9857C18.8094 18.9857 19.4278 18.1597 19.6107 17.8928C19.7312 17.7365 19.7967 17.5447 19.7969 17.3472C19.7999 17.1949 19.7795 17.043 19.7362 16.897C19.7235 16.8465 19.7054 16.7975 19.6823 16.7509C19.6741 16.7351 19.6621 16.7217 19.6474 16.7118C19.6327 16.7019 19.6157 16.6959 19.598 16.6943C19.1475 16.6517 18.7287 16.4429 18.4229 16.1086C18.117 15.7742 17.9458 15.338 17.9424 14.8843C17.9449 14.643 17.9949 14.4044 18.0894 14.1824C18.184 13.9604 18.3213 13.7592 18.4934 13.5904C18.6656 13.4216 18.8692 13.2885 19.0927 13.1987C19.3162 13.1088 19.5552 13.064 19.796 13.0668C20.8155 13.0668 21.6884 13.881 21.6438 14.8843Z"
                fill="#EC981B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1637:22987">
                <rect
                  width="24.6032"
                  height="25"
                  fill="white"
                  transform="translate(0.452026)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="token-num">{tokens}</p>
        </div>
      </div>
    </>
  );
};

export default MainNav;