import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Product from "../Product/Product";
import Team from "../Team/Team";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home" id="section-home">
          <div className="title">
            <Link to="/product">
              <button className="btn btn-sm">SarenOne Product</button>
            </Link>
          </div>
        </div>

        <div id="section-product">
          <Product />
        </div>

        <div id="section-team">
          <Team />
        </div>

        <div id="section-about">
          <About />
        </div>
      </div>
    );
  }
}

export default Home;
