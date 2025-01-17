import React, { useState } from "react";
import { Link } from "react-router";
import userServices from "../utilities/userServices";

const SignupForm = ({ toggleForm, setUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = { ...formData };

      console.log("inside sign up form:", submitData);
      delete submitData.confirmPassword;

      const user = await userServices.signUp(submitData);
      setUser(user);
      console.log(user);

      window.location.href = "http://localhost:5173/"; // refresh page
    } catch (err) {
      setError("sign up failed, try again ", err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Sign-up to start posting and studying!!</h1>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>username</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            required
          />
          <br />
          <label>email</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            required
          />
          <br />
          <label>password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
            required
          />
          <br />
          <label>confirm password</label>
          <br />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="must match password"
            required
          />
          <br />
          <button
            type="submit"
            disabled={formData.password !== formData.confirmPassword}
            className="signin-button"
          >
            Sign-up
          </button>
        </form>
        <p>{error}</p>
        already a user?
        <Link to="/login" onClick={toggleForm}>
          log-in!
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
