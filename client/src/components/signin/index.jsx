import { useState } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //   const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";

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
      <div className={style.login_container}>
        <div className={style.login_form_container}>
          <div className={style.left}>
            <form onSubmit={handleSubmit} className={style.form_containe}>
              <h1>Login to Your Account</h1>

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
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className={style.input}
              />
              {error && <div className={style.error_msg}>{error}</div>}
              <button type="submit" className={style.green_btn}>
                Sign In
              </button>
            </form>
          </div>
          <div className={style.right}>
            <h1>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={style.green_btn}>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
