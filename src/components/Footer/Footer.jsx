import React from 'react';
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import appStore from "../../assets/App-Store.svg";
import googleStore from '../../assets/GooglePlay-Store.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__social">
        <div className="footer__social--media">
          <IconContext.Provider value={{ color: "#fff", size: "1.7rem" }}>
            <div className='footer__icon'><FaFacebookF /></div>
            <div className='footer__icon'><FaTwitter /></div>
            <div className='footer__icon'><FaPinterest /></div>
            <div className='footer__icon'><FaYoutube /></div>
            <div className='footer__icon'><FaInstagram /></div>
          </IconContext.Provider>
        </div>
        <div className="footer__social--app">
          <img src={appStore} alt="app store link" />
          <img src={googleStore} alt="google play link" />
        </div>
      </div>
      <div className="footer__links">
        <p>&copy; Shop and Kart plc (UK)</p>
        <span className="footer__pipeline">|</span>
        <p>Terms & Conditions</p>
        <span className="footer__pipeline">|</span>
        <p>Privacy</p>
        <span className="footer__pipeline">|</span>
        <p>Cookies</p>
        <span className="footer__pipeline">|</span>
        <p>Accessibility</p>
        <span className="footer__pipeline">|</span>
        <p>Sustainability</p>
      </div>
    </div>
  );
}

export default Footer