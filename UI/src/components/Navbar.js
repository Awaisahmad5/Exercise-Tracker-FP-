import React from "react";

function Navbar() {
  return (
    <div className="navbar d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg bg-gold d-flex justify-content-center">
        <div className="container">
          <a className="navbar-brand text-primary" href="/">
            Excercise Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
