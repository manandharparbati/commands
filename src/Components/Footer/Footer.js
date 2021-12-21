import React from "react";
import mail from "../../images/mail.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-part1">
            <div className="text">
              <p>Synical</p>
              <p>Bot</p>
            </div>
            <div className="footer-part0">
              <div className="images">
                <img src={mail} alt="" />
                <p>Email: admin@gmail.com</p>
              </div>
              <p>Copyright © Synical Bot, 2021</p>
            </div>
          </div>
          <div className="footer-part2">
            <h1>Pages</h1>
            <p>Home</p>
            <p>Commands</p>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Docs</p>
          </div>
          <div className="footer-part3">
            <p>Terms of services</p>
            <p>Privecy Policy</p>
          </div>
          <div className="footer-part4">
            <button>Add to Discord</button>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
