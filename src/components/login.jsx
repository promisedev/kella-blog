import React from "react";
import { Link } from "gatsby";

import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { useEffect } from "react";
import { useGlobalContext } from "../context_api/Appcontext";
import { navigate } from "gatsby";
const Login = () => {
  let bg
  const [formdata, setFormdata] = useState({});
  const [formerr, setFormerr] = useState({});
  const [iserr, setIserr] = useState(false);

  const [visible, setVisible] = useState(false);
  const { dispatch, state, loading } = useGlobalContext();
  // ----------------------------------------------
  useEffect(() => {
    setFormerr({
      email: "please provide email",
      password: "please provide password",
    });
  }, []);

  useEffect(() => {
    const isuser = Object.values(state.user).length>0;
    console.log(isuser);
    if (isuser) {
      navigate("/admin",{replace:true});
      return
    }else{
        return
    }
  }, [state.user]);

  // -------------------------------------------
  const handleInput = (e) => {
    let value = e.currentTarget.value;
    let name = e.currentTarget.name;
    setFormdata((prev) => ({ ...prev, [name]: value }));
    if (value == "") {
      setFormerr((prev) => ({ ...prev, [name]: `please provide ${name}` }));
    } else {
      setFormerr((prev) => ({ ...prev, [name]: "" }));
    }
  };
  // ----------------------------------------------------
  const passwordShow = () => {
    if (visible == false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  // -----------------------------------------------------------
  const handleLogin = (e) => {
    e.preventDefault();
    if (formerr.password !== "" || formerr.email !=="") {
      setIserr(true);
      return
    } else {
      setIserr(false);
      // initiate login
      console.log(formerr, formdata)
      dispatch({ type: "LOGIN", payload: formdata });
    }
  };
  // -------------------------------------------------------
  return (
    <section className=" parent login-cont">
      <div
        className="login-container"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="login-info">
          <h1>Sign In to Create More Content</h1>
          <p>If you don't have an account</p>
          <p>
            you can <Link to="/login">Register here!</Link>
          </p>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-form-div">
            <input
              type="text"
              name="email"
              placeholder="youremail@email.com"
              onChange={handleInput}
            />
          </div>
          {iserr && <p className="form-err">{formerr?.email}</p>}
          <div className="login-form-div">
            <input
              type={visible ? "text" : "password"}
              name="password"
              onChange={handleInput}
            />
            <span className="show-icon" onClick={passwordShow}>
              {visible ? <MdOutlineVisibility /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
          {iserr && <p className="form-err">{formerr?.password}</p>}

          <p className="login-recovery">Recover Password?</p>
          <button
            className="login-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
