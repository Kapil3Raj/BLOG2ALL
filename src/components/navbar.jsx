import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand text-decoration-none text-light" to={"/blog2all"}>BLOG2ALL</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to={"/blog2all"} className="text-decoration-none text-light me-3">Home</Link>
          </li>
          <li className="nav-item">
          <Link to={"/add"} className="text-decoration-none text-light me-3">Create blog</Link>
          </li>
          <li className="nav-item">
          <Link to={"/blogcard"} className="text-decoration-none text-light me-3">Your blog</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Nav;
