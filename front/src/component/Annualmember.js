import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import locContext from "../context/locContext";
import axios from "axios";
import Swal from "sweetalert2";

function Annualmember() {
  const location = useContext(locContext);
  const userRoll = JSON.parse(localStorage.getItem("aerialst"));
  const user_id = userRoll ? userRoll.id : null;
  const navigate = useNavigate();
  const [group, setGroup] = useState([]);

  const getSubsriptionData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/8`
      );
      if (res.status === 200) {
        setGroup(res.data.data);
      } else {
        setGroup([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSubsriptionData();
  }, []);

  const addGroupcart = async (id) => {
    try {
      if (!user_id) {
        navigate("/loginpage");
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/addToCart/${id}`,
          { user_id }
        );
        if (res.status === 200 && res.data.data) {
          Swal.fire({
            icon: "success",
            title: "This Add to cart",
            timer: 1500,
          });
        } else if (res.status === 201) {
          Swal.fire({
            icon: "warning",
            title: res.data.msg,
            confirmButtonText: "OK",
            confirmButtonColor: "#06bdff",
          });
        }
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        Swal.fire({
          icon: "warning",
          title: "This Data Already Exists",
          confirmButtonText: "OK",
          confirmButtonColor: "#06bdff",
        });
      } else {
        // setLoader(true)
      }
    }
  };
  return (
    <div>

      <section
        className="price-area bg-top-center bg-smoke space bgringggg"
        id="pricesection"
        data-bg-src="assets/img/bg/pricing_1_1.png"
      >
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title sub-title2 mt-n1">Pricing Plan</span>
            <h2 className="sec-title">Our Annual Membership</h2>
          </div>
          <div className="row  justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="price-card active my-2">
                <h3 className="price-card_title box-title">
                  Heavy Discount on our studio classes
                </h3>
                <div className="price-card_content">
                  {location === "IN" ? (
                    <h4 className="price-card_price">
                      <span className="currency"> ₹ </span> 1,20,000{" "}
                      <span className="duration">(ex GST)</span>
                    </h4>
                  ) : (
                    <h4 className="price-card_price">
                      <span className="currency"> $ </span> 1,600{" "}
                      <span className="duration">(ex GST)</span>
                    </h4>
                  )}
                  <div className="available-list">
                    <ul>
                      <li>
                        Access to all Belly Dance Regular Classes (Level 1 to
                        Level 16)
                      </li>
                      <li>Access to all Aerial Yoga / Silks Regular Classes</li>
                      <li>Access to all Indo-Belly Classes</li>
                      {/* <li>Offline & Online Classes</li>
                      <li className="unavailable">24/7 Full Support</li> */}
                    </ul>
                  </div>
                </div>
                <div className="price-btn">
                  <div
                    onClick={() => addGroupcart(group[0].le_1_id)}
                    style={{ cursor: "pointer" }}
                    className="th-btn"
                  >
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="price-card active my-2">
                <h3 className="price-card_title box-title">
                  Heavy Discount on our online classes
                </h3>
                <div className="price-card_content">
                  {location === "IN" ? (
                    <h4 className="price-card_price">
                      <span className="currency"> ₹ </span> 1,20,000{" "}
                      <span className="duration">(ex GST)</span>
                    </h4>
                  ) : (
                    <h4 className="price-card_price">
                      <span className="currency"> $ </span> 1,600{" "}
                      <span className="duration">(ex GST)</span>
                    </h4>
                  )}
                  <div className="available-list">
                    <ul>
                      <li>
                        Access to all Belly Dance Regular Classes (Level 1 to
                        Level 16)
                      </li>
                      <li>Access to all Bolly-Belly Classes</li>
                      <li>Access to all Indo-Belly Classes</li>
                      {/* <li>Offline & Online Classes</li>
                      <li className="unavailable">24/7 Full Support</li> */}
                    </ul>
                  </div>
                </div>
                {/* <div className="price-btn" style={{ paddingTop: '25px' }}><Link onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  to={'/'} className="th-btn" >Add To Cart</Link></div> */}
                <div className="price-btn" style={{ paddingTop: "25px" }}>
                  <div
                    onClick={() => addGroupcart(group[1].le_1_id)}
                    style={{ cursor: "pointer" }}
                    className="th-btn"
                  >
                    Add To Cart
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-5 col-xl-5 col-xxl-6">
              <div className="img-box3" style={{ paddingTop: "65px" }}>
                <img src="assets/img/normal/become.jpg" alt="About" />
              </div>
            </div> */}

            <div
              className="col-lg-5 col-xl-5 col-xxl-6"
              style={{ width: "100%", textAlign: "center" }}
            >
              <div className="img-box3" style={{ paddingTop: "65px" }}>
                {" "}
                <img src="assets/img/normal/become.jpg" alt="About" />
              </div>
            </div>

            {/* <div className="col-lg-5 col-xl-5 col-xxl-6">
              <div className="class-schedule-image bounce-slide">
              </div>
            </div> */}
          </div>
        </div>
      </section>

    </div >
  );
}
export default Annualmember;