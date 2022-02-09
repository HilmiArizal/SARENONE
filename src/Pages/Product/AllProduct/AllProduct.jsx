import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL_LOCAL } from "../../../Services/API_Local";
import { FetchProduct } from "../../../Services/Redux/Actions";
import "./AllProduct.scss";

class AllProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.FetchProduct();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="all-product">
        <div className="row">
          {this.props.dataProduct.map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="card">
                  <Link to={`detailproduct/${item._id}`}>
                    <div className="card-container">
                      <div className="card-image">
                        <img
                          src={API_URL_LOCAL + item.image}
                          alt="img-product"
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="card-body">
                    <div className="card-name">{item.name}</div>
                    <div className="card-weight">({item.weight}gr)</div>
                  </div>
                  <div className="button">
                    <Link to={`detailproduct/${item._id}`}>
                      <button className="btn btn-primary btn-sm">
                        Choose Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataProduct: state.product.dataProduct,
  };
};

export default connect(mapStateToProps, { FetchProduct })(AllProduct);
