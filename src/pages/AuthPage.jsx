import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const AuthPage = ({ signUp, setUser }) => {
  const [login, setLogin] = useState(!signUp);

  function togglePage() {
    setLogin(!login);
  }

  return (
    <div className="w-full">
      {login ? (
        <>
          <LoginForm toggleForm={togglePage} setUser={setUser} />
        </>
      ) : (
        <>
          <SignupForm toggleForm={togglePage} setUser={setUser} />
        </>
      )}
    </div>
  );
};

export default AuthPage;
