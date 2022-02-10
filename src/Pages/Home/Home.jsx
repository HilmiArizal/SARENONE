import React, { Component } from "react";
import { Link } from "react-scroll";
import About from "../About/About";
import Product from "../Product/Product";
import Team from "../Team/Team";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="section-home">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="home-1">
                  <div className="title">
                    <Link
                      activeClass="link-active"
                      to="section-product"
                      spy={true}
                      smooth={true}
                      offset={-25}
                      duration={100}
                    >
                      <button className="btn btn-sm">SarenOne Product</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="home-2">
                  <div className="title">
                    <Link
                      activeClass="link-active"
                      to="section-product"
                      spy={true}
                      smooth={true}
                      offset={-25}
                      duration={100}
                    >
                      <button className="btn btn-sm">SarenOne Product</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* <div className="home" id="section-home">
          <div className="title">
            <Link to="/product">
              <button className="btn btn-sm">SarenOne Product</button>
            </Link>
          </div>
        </div> */}

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
