import React, { Component } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsApp.scss";

class WhatsApp extends Component {
    state = {
        phonenumber: '+6285156371589'
    }

  onWhatsApp() {
    let url = `http://wa.me/+6285156371589?text=Hallo, saya ingin bertanya mengenai SarenOne`;
    window.open(url)
  }

  render() {
    return (
      <div className="body-whatsapp" onClick={this.onWhatsApp}>
        <FaWhatsapp />
      </div>
    );
  }
}

export default WhatsApp;
