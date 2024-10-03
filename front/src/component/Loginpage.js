import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/login`, {
        email,
        password,
      }) // Corrected usage of username and password
      .then((res) => {
        if (res.data.Status === "Success") {
          localStorage.setItem("adminRoll", JSON.stringify(res.data.roll));
          localStorage.setItem("aerialst", JSON.stringify(res.data.userdata));
          if (res.data.roll === "admin") {
            Swal.fire({
              icon: "success",
              title: "Admin Login successfully",
              timer: 1500,
            }).then(() => {
              navigate("/student");
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Login successfully",
              timer: 1500,
            }).then(() => {
              navigate("/");
            });
          }
        } else {
          Swal.fire({
            icon: "warning",
            title: "Wrong Email or Password",
            timer: 1500,
          })
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login-page">

      <form className="login-form " onSubmit={handleSubmit}>
        <div className="table-actions d-flex">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/"}
            className="delete-table me-2"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </div>
        <div className="about-logo" style={{ textAlign: "center" }}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/"}
          >
            <img
              src="assets/img/Aerial_Belly_Final_Logo.png"
              alt="Aerial Belly"
            />
          </Link>
        </div>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="forgot">
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/forgot-password"}
          >
            <p>Forgot Password?</p>
          </Link>
        </div>
        <button className="th-btn gold-btn my-4" type="submit">
          Login
        </button>

        <div className="signup-text">
          <p>
            Don't have an account?{" "}
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              to={"/registration"}
            >
              Sign up
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
