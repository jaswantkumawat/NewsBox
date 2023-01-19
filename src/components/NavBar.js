import React from "react";
import {
  Link
} from "react-router-dom";


const NavBar = () =>{
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg "
          style={{ backgroundColor: "dimgray" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" style={{ color: "white" }} to="/General">
             <strong> News Box </strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/General" > Home </Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/Business">Business</Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/Entertainment">Entertainment</Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/Health" >Health</Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/Science">Science</Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/Sports" >Sports</Link></li>
                <li className="nav-item"> <Link className="nav-link" style={{ color: "white" }} to="/Technology">Technology</Link> </li>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default NavBar;
