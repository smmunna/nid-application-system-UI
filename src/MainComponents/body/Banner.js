import React from "react";
import "../../App.css";
import ClaimAccount from "./claim_account/ClaimAccount";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <Router>
        <div className="banner">
          <div className="banner-title container">
            <h2>Bangladesh</h2>
            <h4>NID Application System</h4>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="column1">
                <div className="column1-heading">Don't have an account?</div>
                <div className="column1-body">
                  If you already have a National ID, then you can claim your
                  online account.
                </div>
                <div className="column1-footer">
                  <Link to="/ac" className="mylink">
                    Claim Account{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="column2">
                <div className="column1-heading">Apply for a National ID</div>
                <div className="column2-body">
                  If you do not have a National ID, then you can apply for a new
                  one.
                </div>
                <div className="column1-footer">
                  <Link to="/register" className="mylink">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>

        <Routes>
          <Route path="/ac" element={<ClaimAccount/>} />
        </Routes>
      </Router>
    </div>
  );
}
