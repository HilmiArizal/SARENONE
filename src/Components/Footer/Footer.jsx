import React from "react";
import { AiFillMail, AiFillPhone, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiCopyright } from "react-icons/bi";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-md">
          <div className="title">Contact us</div>
          <div className="d-flex">
            <div className="icon">
              <AiFillPhone />
            </div>
            <div>022 - 88886011</div>
          </div>
          <div className="d-flex">
            <div className="icon">
              <IoLogoWhatsapp />
            </div>
            <div>+62 - 85156371589</div>
          </div>
          <div className="d-flex">
            <div className="icon">
              <AiFillMail />
            </div>
            <div>sarenonesosis@gmail.com</div>
          </div>
          <div className="d-flex">
            <div className="icon">
              <AiFillInstagram />
            </div>
            <div>sosissarenone</div>
          </div>
          <div className="d-flex">
            <div className="icon">
              <FaMapMarkedAlt />
            </div>
            <div>
              Jl. Pasadena Jl. Caringin, Babakan Ciparay, Kec. Babakan Ciparay,
              Kota Bandung, Jawa Barat 40224
            </div>
          </div>
        </div>
        <div className="col-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.540321531671!2d107.57695771477302!3d-6.94540699498204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8b40e363c6b%3A0x4228645d0ad7b9b2!2sSarenOne%20Office!5e0!3m2!1sid!2sid!4v1629109352422!5m2!1sid!2sid"
            loading="lazy"
            className="map"
            title="SarenOne Office"
          ></iframe>
        </div>
        <div className="col-md">
          <div>
            Get Exlusive <strong> digital marketing</strong> updates straight to
            your inbox.
          </div>
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              <RiSendPlaneFill />
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center mb-2 copyright">
          <BiCopyright style={{marginRight:'5px'}}/> CV. Heaven Sentosa. All rights deserved.
      </div>
    </div>
  );
}

export default Footer;
