import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const [uid, setUid] = useState(null);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState({});
  const [interests, setInterests] = useState([]);
  const [professionalInfo, setProfessionalInfo] = useState({});
  const [profilePic, setprofilePic] = useState(null);
  const [aboutMe, setAboutMe] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const login = useCallback(
    (
      id,
      token,
      firstName,
      lastName,
      email,
      links,
      interests,
      professionalInfo,
      profilePic,
      aboutMe,
      phoneNo,
      expirationDate
    ) => {
      if (profilePic === "https://s3.amazonaws.com/") {
        setprofilePic(null);
      } else {
        setprofilePic(profilePic);
      }
      setUid(id);
      setIsLoggedIn(token);
      setfirstName(firstName);
      setEmail(email);
      setInterests(interests);
      setLastName(lastName);
      setLinks(links);
      setProfessionalInfo(professionalInfo);

      setAboutMe(aboutMe);
      setPhoneNo(phoneNo);
      const tokenExpirationDate = expirationDate
        ? new Date(expirationDate)
        : new Date(new Date().getTime() + 1000 * 60 * 60);
      setTokenExpirationDate(tokenExpirationDate);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: id,
          token: token,
          expiration: tokenExpirationDate.toISOString(),
          email: email,
          firstName: firstName,
          lastName: lastName,
          profilePic: profilePic,
          phoneNo: phoneNo,
          links: links,
          interests: interests,
          professionalInfo: professionalInfo,
          aboutMe: aboutMe,
        })
      );
    },
    []
  );

  const logout = useCallback(() => {
    setUid(null);
    setIsLoggedIn(null);
    setfirstName("");
    setEmail("");
    setInterests([]);
    setLastName("");
    setLinks({});
    setProfessionalInfo({});
    setAboutMe("");
    setPhoneNo(0);
    setprofilePic(null);
    setTokenExpirationDate(null);
    localStorage.removeItem("userData");
  }, []);

  useEffect(() => {
    if (isLoggedIn && tokenExpirationDate) {
      console.log(tokenExpirationDate);
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();

      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [isLoggedIn, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.firstName,
        storedData.lastName,
        storedData.email,
        storedData.links,
        storedData.interests,
        storedData.professionalInfo,
        storedData.profilePic,
        storedData.aboutMe,
        storedData.phoneNo,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return {
    uid,
    login,
    logout,
    isLoggedIn,
    firstName,
    lastName,
    interests,
    links,
    profilePic,
    professionalInfo,
    email,
    aboutMe,
    phoneNo,
  };
};
