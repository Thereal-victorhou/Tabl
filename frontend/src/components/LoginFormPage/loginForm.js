import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveCurrentPage } from '../../store/navigation';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    dispatch(saveCurrentPage('home'))
    return (
      <Redirect to="/" />
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    const userName = 'Demo User';
    const password = 'password';
    return dispatch(sessionActions.login({ credential: userName, password: password }))
  }



  return (
    <div className="login_form_container">
        <div className="login_left">
          <form onSubmit={handleSubmit}>
            <div className="login_text">
              <div className="login_header">
                <h2>Log in to Kelp</h2>
              </div>
              <div className="login_signup">
                <h4>New to Kelp? <a href="/signup"> Sign up</a></h4>

              </div>
              <div className="login_disclaimer">
                <p>By logging in, you agree to Kelp's
                  <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/"> Terms of Service </a>
                  and
                  <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/"> Privacy Policy</a>.
                </p>

              </div>
            </div>
            <button className="demo_login" type='button' onClick={demoLogin}>
              <h4>Continue with Demo User</h4>
            </button>
            <fieldset className="login_divider">
              <legend align="center">OR</legend>
            </fieldset>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <input
              className="login_email"
              type="text"
              placeholder="Email"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
            <input
              className="login_password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login_button" type="submit">Log In</button>
            <div className="signup_redirect">
              <p>New to Yelp?
                <a href="/signup"> Sign up</a>
              </p>
            </div>
          </form>
        </div>
      <div className="login_right">
        <img src="https://porfoliopicturesbucket.s3.us-west-1.amazonaws.com/yelp-login-signup-picture.png" alt='Login Picture' />
      </div>
    </div>
  );
}

export default LoginFormPage;
