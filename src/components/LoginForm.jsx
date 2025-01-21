import React, { useState } from "react";
import { Link } from "react-router";
import userServices from "../utilities/userServices";

const LoginForm = ({ toggleForm, setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const credentials = { ...formData };
    try {
      const user = await userServices.login(credentials);
      setUser(user);
    } catch (err) {
      setError("log-in failed... try again!");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Log-in to start posting and studying!!</h1>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
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
          <button type="submit" className="signin-button">
            Log-in
          </button>
        </form>
        <p>{error}</p>
        new?
        <Link to="/signup" onClick={toggleForm}>
          create account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
