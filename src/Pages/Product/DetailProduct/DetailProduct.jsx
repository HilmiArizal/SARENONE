import React, { Component } from "react";
import { connect } from "react-redux";
import { API_URL_LOCAL } from "../../../Services/API_Local";
import { FetchProductId } from "../../../Services/Redux/Actions";
import { FaArrowLeft } from "react-icons/fa";
import "./DetailProduct.scss";
import { Link } from "react-router-dom";

class DetailProduct extends Component {
  componentDidMount() {
    let id = this.props.location.pathname.split("/")[2];
    this.props.FetchProductId(id);
    window.scrollTo(0, 0);
  }

  render() {
    const item = this.props.dataProductId;
    return (
      <div className="detail-product">
        <div className="jumbotron">
          <Link to="/" style={{color:'#fff'}}>
            <div className="icon-back">
              <FaArrowLeft />
            </div>
          </Link>
          <div className="row">
            <div className="col-md-4">
              <div className="image">
                <img src={API_URL_LOCAL + item.image} alt="img-product" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="name">{item.name}</div>
              <div className="weight">{item.weight}gr</div>
              <div className="price">
                Rp. {parseInt(item.price).toLocaleString()},-
              </div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataProductId: state.product.dataProductId,
  };
};

export default connect(mapStateToProps, { FetchProductId })(DetailProduct);
