import React from "react";
import Header from "../components/Header";
import Pfp from "../components/Pfp";

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
  return (
    <div className="w-full">
      <Header title="Profile" user={user} />
      <Pfp src={pfp} />
      {username}
    </div>
  );
};

export default ProfilePage;
