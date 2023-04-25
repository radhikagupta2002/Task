import React, { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CreatorAccess from "./pages/CreatorAccess";
import Dashboard from "./pages/Dashboard";
import Discord from "./pages/Discord";
import Following from "./pages/Following";
import SendFeedback from "./pages/SendFeedback";
import Trending from "./pages/Trending";
import UserTour from "./pages/UserTour";
import { useAuth } from "./hook/auth-hook";
import { AuthContext } from "./context/AuthContext";

import ProfilePage from "./pages/ProfilePage";
import Navigation from "./components/Navbar/Navigation";

const App = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sideBarToggle = useCallback(() => {
    setSideBarOpen(!sideBarOpen);
  }, [sideBarOpen]);

  const {
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
  } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        sideBarToggle,
        sideBarOpen,
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
      }}
    >
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/creator" element={<CreatorAccess />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/following" element={<Following />} />
            <Route path="/sendfeedback" element={<SendFeedback />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/usertour" element={<UserTour />} />
            <Route path="*" element={<>Not Found</>} />
          </Routes>
        </Navigation>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
