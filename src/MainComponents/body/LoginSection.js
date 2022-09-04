/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
export default function LoginSection() {
  return (
    <div>
      <div className="loginsection">
        <div className="container">
          <Router>
            <div className="row">
              <div className="col-lg-6">
                <div className="login-form">
                  <h1>Login</h1>
                  <p>
                    If you already have an online account, please login with
                    your credentials.
                  </p>
                  <form action="#" method="post">
                    <input type="text" placeholder="Id Number" /> <br /> <br />
                    <input type="text" placeholder="Password" /> <br /> <br />
                    <button className="login-btn">Login</button>{" "}
                    <Link to="/forgot-password" className="forgotpass">
                      {" "}
                      Forgot Password{" "}
                    </Link>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="questions">
                  <h3>Frequently asked questions</h3>
                  <Link to="question1" className="linkstyle">
                    <div className="ques1">
                      <p>General Information</p>
                      <img
                        className="arrow"
                        src="https://img.icons8.com/ios-glyphs/30/FAB005/arrow.png"
                      />
                    </div>
                  </Link>
                  <Link to="question2" className="linkstyle">
                    <div className="ques1">
                      <p>Regarding NID Correction</p>
                      <img
                        className="arrow"
                        src="https://img.icons8.com/ios-glyphs/30/FAB005/arrow.png"
                      />
                    </div>
                  </Link>
                  <Link to="question3" className="linkstyle">
                    <div className="ques1">
                      <p>About Lost ID Card</p>
                      <img
                        className="arrow"
                        src="https://img.icons8.com/ios-glyphs/30/FAB005/arrow.png"
                      />
                    </div>
                  </Link>
                  <Link to="question4" className="linkstyle">
                    <div className="ques1">
                      <p>How to Register</p>
                      <img
                        className="arrow"
                        src="https://img.icons8.com/ios-glyphs/30/FAB005/arrow.png"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <Routes>
              <Route
                path="/forgot-password"
                element={<h5>sm.Munna</h5>}
              />
              <Route
                path="/question1"
                element={<h5>sm.Munna</h5>}
              />
              <Route
                path="/question2"
                element={<h5>sm.Munna</h5>}
              />
              <Route
                path="/question3"
                element={<h5>sm.Munna</h5>}
              />
              <Route
                path="/question4"
                element={<h5>sm.Munna</h5>}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
