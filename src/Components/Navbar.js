import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-sm navbar-light bg-primary ">
        <div className="container">
          <Link className="navbar-brand mezrigui" to="/">
            Fares Mekni 
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link cart" to="/">
                  <button className="btn btn-warning btn-sm">Products</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className=" nav-link cart" to="/cart">
                  <button className="btn btn-warning btn-sm">My Cart</button>
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    
    );
  }
}
