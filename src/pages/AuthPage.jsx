import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = ({ signUp }) => {
  const [login, setLogin] = useState(!signUp);

  function togglePage() {
    setLogin(!login);
  }

  return (
    <div className="w-full">
      {login ? (
        <>
          <LoginForm toggleForm={togglePage} />
        </>
      ) : (
        <>
          <SignupForm toggleForm={togglePage} />
        </>
      )}
    </div>
  );
};

export default AuthPage;
