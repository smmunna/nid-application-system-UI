/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../App.css";
import Logo from "../images/logo-ec.png";
import world from "../images/world.png";
import Claim from "../body/claim_account/ClaimAccount";
import Home from "../Main";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function header() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src={Logo} className="logo" alt="" srcset="" />
              <span className="navheading">NID Service BD.</span>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/fees">
                    Fees
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    Download
                  </Link>
                </li>
              </ul>

              <div class="dropdown">
                <button class="dropbtn"><img src={world} height="30" width="30" alt="" srcset="" /></button>
                <div class="dropdown-content">
                  <a href="#">English</a>
                  <a href="#">Bangla</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/home" element={Home} />
          <Route path="/fees" component={Claim} />
          <Route path="/contact" element={<h1>From Contact</h1>} />
          <Route path="/menu" element={<h1>I am from Menu</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
