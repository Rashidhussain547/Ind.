import React from "react";
import "./footer.scss";
import img from "../../assets/images/newLogo.png";
const Footer = ({ className }) => {
  return (
    <>
      <div className="footerMain container-fluid row" id="Contact">
        <div className="footer-col1 col-lg-4">
          <img src={img} className={"footerLogoimg " + className} />
          <p>
            There might be many tips and tricks that you can use to get your
            content seen, but nothing works quite as well as creating high
            quality content. If you focus on creating unique content that
            valuable.
          </p>
          <h3>Info</h3>
          <div className="footer-Con-text">
            
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <div className="address">
              &nbsp; Suit No. 502, Plot No. 7c/1, Main Khyaban-e-Ittehad,DHA Phase 7,
              Karachi-Pakistan
            </div>
          </div>
          <div className="footer-Con-text">
            <span>
              <i class="fas fa-phone-alt"></i>
            </span>
            <div className="f-phone">&nbsp;+92-320-2579810 +92-320-2579820</div>
          </div>

          <div className="footer-Con-text s-icon">
            <a href="#!">
              <i class="fas fa-rss"></i>
            </a>
            <a href="#!">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!">
              <i class="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="footer-col2 col-lg-3">
          <h3 class="font-weight-bold  mb-4">Follow us</h3>

          <ul class="list-unstyled">
            <li>
              <a href="#!">Facebook</a>
            </li>
            <li>
              <a href="#!">Linkedin</a>
            </li>
            <li>
              <a href="#!">Instagram</a>
            </li>
            <li>
              <a href="#!">Youtube</a>
            </li>
            <li>
              <a href="#!">Vimeo</a>
            </li>
          </ul>
        </div>
        <div className="footer-col3 contactFooter col-lg-4">
          <h3>Contact us</h3>
          <form action="#" method="#" className="contactForm">
            <div className="form-NE">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
              />
              <input
                className="form-control"
                id="email"
                placeholder="Email*"
                type="email"
              />
            </div>
            <div className="formCmnt">
              <textarea
                className="form-control"
                id="comments"
                placeholder="Please describe what you need."
                
              ></textarea>
            </div>
            <div className="formBtn">
            <button className="cont-btn" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="copyRight grid-row">
        <div className="crRight">
          <p> &copy; CopyRight 2022. All rights reserved </p>
        </div>
        {/* <div className='crLeft'>
                <ul>
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact</a></li>
                </ul>
            </div> */}
      </div>
    </>
  );
};

export default Footer;
