import React from "react";
import { Link } from "react-router";

const Header = ({ title, user }) => {
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

          <div className="w-14 h-14 bg-slate-300 rounded-full"></div>
        </>
      ) : (
        <>
          <Link to="/" className="signin-button w-fit h-fit min-w-fit">
            Sign-up
          </Link>
          <Link to="/" className="signin-button w-fit h-fit min-w-fit">
            Log-in
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
