import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL_LOCAL } from "../../Services/API_Local";
import { FetchProduct } from "../../Services/Redux/Actions";
import "./Product.scss";

class Product extends Component {
  componentDidMount() {
    this.props.FetchProduct();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="product">
        <div className="title-product">Our Product</div>
        <div className="row">
          {this.props.dataProduct.slice(0, 3).map((item, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <Link to={`detailproduct/${item._id}`}>
                    <div className="card-container">
                      <div className="card-image">
                        <img
                          src={API_URL_LOCAL + item.image}
                          className="card-img-top"
                          alt="img-product"
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="card-body">
                    <div className="card-name">{item.name}</div>
                    <div className="card-weight">({item.weight}gr)</div>
                  </div>
                  <div className="btn-card">
                    <Link to={`detailproduct/${item._id}`}>
                      <button className="btn btn-sm">Choose Product</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="product-link">
          <Link to="/product">
            <button className="btn">All SarenOne Product</button>
          </Link>
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

export default connect(mapStateToProps, { FetchProduct })(Product);
