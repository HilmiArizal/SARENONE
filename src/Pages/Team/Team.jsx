import React, { Component } from "react";
import { connect } from "react-redux";
import { API_URL_LOCAL } from "../../Services/API_Local";
import { fetchTeam } from "../../Services/Redux/Actions";
import { FaWhatsapp } from "react-icons/fa";
import "./Team.scss";

class Team extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTeam();
  }

  onWhatsApp(value){
    let nickname = value.nickname
    let phonenumber = value.phonenumber;
    let url = `http://wa.me/+62${phonenumber}?text=Hallo ${nickname === 'Puri' ? 'Bu' : 'Pak'} ${nickname}, saya ingin bertanya mengenai semua produk SarenOne`;
    window.open(url)
  }

  render() {
    console.log(this.props.dataTeam);
    return (
      <div className="team">
        <div className="title-team">Our Marketing</div>
        <div className="body-team">
          <div className="row">
            {this.props.dataTeam.map((item, index) =>
              item.division !== "Sales Promotion Girls" ? (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <div className="card-image">
                      <div className="image">
                        <img src={API_URL_LOCAL + item.image} alt="" />
                      </div>
                    </div>
                    <div className="card-identity">
                      <div className="fullname">{item.fullname}</div>
                      <div className="division">( {item.division} )</div>
                      <div className="phonenumber">
                        <button className="btn btn-sm" onClick={() => this.onWhatsApp(item)}> <FaWhatsapp style={{marginRight:'5px'}}/> Chat By WhatsApp</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    dataTeam: state.team.dataTeam,
  };
};

export default connect(mapStatetoProps, { fetchTeam })(Team);
