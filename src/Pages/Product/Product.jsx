import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL_LOCAL } from "../../Services/API_Local";
import { FetchProduct } from "../../Services/Redux/Actions";
import "./Product.scss";

class Product extends Component {
  componentDidMount() {
    this.props.FetchProduct();
    window.scrollTo(0,0);
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
                  <div className="card-container">
                    <img
                      src={API_URL_LOCAL + item.image}
                      className="card-img-top"
                      alt="img-product"
                    />
                    <div className="card-body">
                      <p className="card-text">{item.name}</p>
                    </div>
                  </div>
                  <div className="btn-card">
                    <Link to={`detailproduct/${item._id}`}>
                      <button className="btn btn-sm">Detail Product</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="product-link">
          <button className="btn">All SarenOne Product</button>
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
