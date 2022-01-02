import React, { useState } from "react";
import "../styles/Form.css";
import FormSignIn from "../components/FormSignIn";
import FormSuccess from "../components/FormSuccess";

function SignIn() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        {!isSubmitted ? (
          <div className="form-content-left">
            <form className="form" noValidate>
              <h1>Get started with us today!</h1>
              <div className="form-inputs">
                <label className="form-label">Username</label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  //   value={values.username}
                  //   onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label className="form-label">Email</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  //   value={values.email}
                  //   onChange={handleChange}
                />
              </div>
              <button onClick={submitForm}>Login</button>
            </form>
          </div>
        ) : (
          <div className="form-content-left">
            <h1 className="form-success">Login Successful!</h1>
          </div>
        )}
        <div className="form-content-right"></div>
      </div>
    </>
  );
}

export default SignIn;
