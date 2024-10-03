import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout2 bgring3"
        data-bg-src="/assets/img/bg/footer_bg_1.png"
      >
        <div className="container">
          <div className="footer-top">
            <div className="row gx-0 align-items-center">
              <div className="col-xl-auto col-md-6">
                <div className="footer-logo">
                  <Link to={'/'}>
                    <img src="/assets/img/White_logo.png" alt="Aerial Belly" />
                  </Link>
                </div>
              </div>
              <div className="col-xl col-md-6">
                <div className="footer-newsletter">
                  <h3 className="h4 newsletter-title">
                    Sign Up to get updates & news about us..
                  </h3>
                  {/* <form className="newsletter-form"><input className="form-control style2" type="email"
                  placeholder="Enter your email" required=""/> <button type="submit"
                  className="th-btn gold-btn-2">Subscribe</button></form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="style1" />
        <div className="widget-area" style={{ paddingTop: "60px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">
                    AERIALBELLY STUDIO , AHMEDABAD
                  </h3>
                  <div className="th-widget-about">
                    <div className="th-social-wrapper">
                      <div className="office-hour">
                        <h4 className="title">opening hour:</h4>
                        <span className="desc">
                          Visiting hours Tuesday to Sunday 06:00 PM - 09:00 PM
                        </span>
                        <br />
                        <br />
                        <span className="desc">
                          Meeting On Prior Appointment Basis
                        </span>
                      </div>
                      <div className="th-social">
                        <h6 className="social-title">Follow Us:</h6>
                        <Link to={"https://www.facebook.com/share/9XT9SNsX2vaAyTLk/?mibextid=LQQJ4d"} target="blank">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to={"https://www.instagram.com/aerialbelly?igsh=MnNrYmdjYnpmY2w1"} target="blank">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to={"https://youtube.com/@nupurshahh?si=77KsUw4I3NB4rya0"} target="blank">
                          <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to={"https://g.co/kgs/5HqUQBb"} target="blank">
                          <i className="fa-brands fa-google"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Quick Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/about"}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/bellydance"}
                        >
                          Belly Dance Classes
                        </Link>{" "}
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/aerialbellyart"}
                        >
                          Aerial Arts Classes
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/bellydanceworkshop"}
                        >
                          Belly dance Workshop
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/prerecordingclasses"}
                        >
                          Pre-Recorded Classes{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Contact Now</h3>
                  <div className="th-widget-contact">
                    <div className="info-box">
                      <div className="info-box_icon">
                        <a
                          href="https://www.google.com/maps/dir//AerialBelly+Studio,+Westside+building,+Shilp+Zaveri,+518,+Shyamal+Cross+Rd,+behind+Iconic,+Shyamal,+Ahmedabad,+Gujarat+380051/@23.0135995,72.5283253,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e9b60d81c7901:0x1a4eb8ec68071c83!2m2!1d72.5283253!2d23.0135995?entry=ttu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-sharp fa-solid fa-location-dot"></i>
                        </a>
                      </div>
                      <p className="info-box_text">
                        {" "}
                        518, Shilp Zaveri, Shyamal Cross Rd, behind Iconic,
                        Swinagar Society, Shyamal, Ahmedabad, Gujarat 380051
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fa-solid fa-phone"></i>
                      </div>
                      <p className="info-box_text">
                        <a
                          href="tel:+(91) 84879 90530"
                          className="info-box_link"
                        >
                          +(91) 84879 90530
                        </a>
                      </p>
                    </div>
                    <div className="info-box">
                      <div className="info-box_icon">
                        <i className="fa-solid fa-envelope"></i>
                      </div>
                      <p className="info-box_text">
                        <a
                          href="mailto:aerialbelly@gmail.com"
                          className="info-box_link"
                        >
                          aerialbelly@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <p className="copyright-text">
                  Copyright <i className="fal fa-copyright"></i> 2023 By{" "}
                  <a href="https://torbitmultisoft.com/">
                    Torbit Multisoft Pvt Ltd
                  </a>
                  . All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="footer-copyright-right style2">
                  <ul>
                    <li>
                      <Link onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      } to={'/terms-&-conditions'}>Terms & condition</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="scroll-top style2">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Footer;
