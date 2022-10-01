import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const renderDate = (type) => {

    switch (type) {
      case "day":

        break;
      case "year":
        const today = new Date();
        let yyyy = today.getFullYear();

        for (let i = 0; i <= 100; i++) {
          const priorYear = yyyy - i;
          return `<option value="${priorYear}">${priorYear}</option>`
        }
        break;
    }

  }

  return (
    <div className="signup_form_container">
        <div className="signup_left">
          <form onSubmit={handleSubmit}>
            <div className="signup_text">
              <div className="signup_header">
                <h2>Sign up for Kelp</h2>
              </div>
              <div className="signup_slogan">
                <h5>Connect with great local businesses</h5>
              </div>
              <div className="signup_disclaimer">
                <p>By logging in, you agree to Kelp's
                  <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/"> Terms of Service </a>
                  and
                  <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/"> Privacy Policy</a>.
                </p>

              </div>
            </div>
            {/* <button className="demo_login" onClick={demoLogin}>
              <h4>Continue with Demo User</h4>
            </button>
            <fieldset className="login_divider">
              <legend align="center">OR</legend>
            </fieldset> */}
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <div className="signup_name">
              <input
                className="firstname"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                className="lastname"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              className="signup_input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="signup_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="signup_input"
              type="text"
              placeholder="ZIP Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
            <div className="birthday_container">
              <div className="header_container">
                <h5>Birthday</h5>
                <p>Optional</p>
              </div>
              <div className="date_container">
                <select name="month" id="month-select">
                  <option value="">Month</option>
                  <option value="january"> January </option>
                  <option value="febuary"> Febuary </option>
                  <option value="march"> March </option>
                  <option value="april"> April </option>
                  <option value="may"> May </option>
                  <option value="june"> June </option>
                  <option value="july"> July </option>
                  <option value="august"> August </option>
                  <option value="september"> September </option>
                  <option value="october"> October </option>
                  <option value="november"> November </option>
                  <option value="december"> December </option>
                </select>
                <select className="day" id="day-select">
                  <option value="">Day</option>
                  {renderDate("day")}

                </select>
                <select className="year" id="year-select">
                  <option value="">Year</option>
                  {renderDate("year")}
                </select>
              </div>
            </div>
            <button className="signup_button" type="submit">Sign Up</button>
            <div className="signup_redirect">
              <p>Already on Yelp?
                <a href="/login"> Log in</a>
              </p>
            </div>
          </form>
        </div>
      <div className="signup_right">

      </div>
    </div>

  );
}

export default SignupFormPage;
