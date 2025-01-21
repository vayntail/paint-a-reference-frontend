import React from "react";
import Header from "../components/Header";
import Pfp from "../components/Pfp";
import userServices from "../utilities/userServices";

const ProfilePage = ({ user }) => {
  const {
    username,
    pfp,
    email,
    password,
    bio,
    favRefs,
    favStudies,
    uploadedRefs,
    uploadedStudies,
  } = user;

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      userServices.logOut();
      window.location.href = "http://localhost:5173/"; // refresh page
    } catch (err) {
      setError("log-out failed, try again ", err);
    }
  };

  return (
    <div className="w-full">
      <Header title="Profile" user={user} />
      <div className="flex">
        <button className="red-button ml-auto" onClick={handleLogOut}>
          log out
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-28">
          <Pfp src={pfp} />
        </div>
        {username}
      </div>
    </div>
  );
};

export default ProfilePage;
