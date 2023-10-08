import { useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className={style.signup_container}>
        <div className={style.signup_form_container}>
          <div className={style.left}>
            <h1>Wilcome Back</h1>
            <Link to="/login">
              <button type="button" className={style.white_btn}>
                Sign In
              </button>
            </Link>
          </div>
          <div className={style.right}>
            <form onSubmit={handleSubmit} className={style.form_containe}>
              <h1>Create Accout</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                className={style.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                className={style.input}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className={style.input}
              />
              <input
                type="password"
                placeholder="Email"
                name="password"
                value={data.password}
                onChange={handleChange}
                className={style.input}
              />
              {error && <div className={style.error_msg}>{error}</div>}
              <button type="submit" className={style.green_btn}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
