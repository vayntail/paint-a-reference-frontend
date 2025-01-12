import React from "react";

const Header = ({ title, user }) => {
  return (
    <div className="flex justify-between w-full">
      <h1 className="w-full">{title}</h1>
      {/* if user exists, show logged-in state. if user does not exist, show log-in
      button */}
      {user ? (
        <>logged-in</>
      ) : (
        <>
          <button className="nav-button P-5">Sign-up / Log-in</button>
        </>
      )}
    </div>
  );
};

export default Header;
