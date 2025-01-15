import React from "react";
import Header from "../components/Header";

const ProfilePage = ({ user }) => {
  return (
    <div className="w-full">
      <Header title="Profile" user={user} />
    </div>
  );
};

export default ProfilePage;
