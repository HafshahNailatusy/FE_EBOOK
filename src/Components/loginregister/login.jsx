import * as React from "react";
import './login.css';
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";

const loginregister = () => {
  return (
    <div className="wrapper">
      <form action="">
          <h1>butopia.</h1>
          <h5 className="teks">Email</h5>
          <div className="input-box">
              <input type="text" required />
              <MdOutlineMail className="icon" />
          </div>
          <h5 className="teks">Password</h5>
          <div className="input-box">
              <input type="password" required />
              <FiLock className="icon" />
          </div>
          {/* <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
          </div> */}
          <button className="button" type="submit">Login</button>
          <div className="register-link">
             <p>Don't have an account?<a href="#">Register</a></p>
          </div>
      </form>
      
    </div>
  );
    }

export default loginregister;
