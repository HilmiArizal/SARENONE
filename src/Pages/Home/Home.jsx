import React, { Component } from "react";
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
            <button className="btn btn-sm">SarenOne Product</button>
          </div>
        </div>

        <div id="section-product">
          <Product />
        </div>

        <div id="section-team">
            <Team/>
        </div>

        <div id="section-about">
            <About/>
        </div>
      </div>
    );
  }
}

export default Home;
