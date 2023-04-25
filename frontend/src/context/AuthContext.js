import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
  uid: null,
  email: "",
  firstName: "",
  lastName: "",
  profilePic: null,
  phoneNo: null,
  links: {},
  interests: [],
  professionalInfo: {},
  sideBarToggle: () => {},
  sideBarOpen: false,
  aboutMe: "",
});
