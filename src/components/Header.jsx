import React from "react";
import { Link } from "react-router";
import Pfp from "./Pfp";

const Header = ({ title, user }) => {
  console.log(user);
  return (
    <div className="flex justify-between w-full items-center gap-4 p-4">
      <h1 className="w-full">{title}</h1>
      {/* if user exists, show logged-in state. if user does not exist, show log-in
      button */}
      {user ? (
        <>
          <Link to="/upload">
            <img src="/icons/upload.svg" />
          </Link>
          <Link to="/profile/:id">
            <Pfp src={user.pfp} />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="signin-button w-fit h-fit min-w-fit">
            Log-in
          </Link>
          <Link to="/signup" className="signin-button w-fit h-fit min-w-fit">
            Sign-up
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
