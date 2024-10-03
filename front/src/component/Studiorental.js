import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";
import locContext from "../context/locContext";
import axios from "axios";
import Swal from "sweetalert2";

function Studiorental() {
  const location = useContext(locContext);
  const userRoll = JSON.parse(localStorage.getItem("aerialst"));
  const user_id = userRoll ? userRoll.id : null;
  const navigate = useNavigate();

  // const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [group, setGroup] = useState([]);
  const getSubsriptionData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/7`
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
        console.log(res);

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
    <>
      <div
        className="dempp"
        style={{
          backgroundImage: "url('/assets/img/hero/DSCF0033.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "55%",
        }}
      >
        <h2 className="rental-studio" style={{ paddingTop: "280px" }}>
          Studio Rental And Collaboration
        </h2>
        <p>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/"}
            style={{ color: "white" }}
          >
            Home{" "}
          </Link>{" "}
          / Studio Rental And Collaboration
        </p>
      </div>

      <div
        className="overflow-hidden space"
        id="about-sec"
        style={{ padding: "30px 0px" }}
      >
        <div className="rental" style={{ margin: "0 6%" }}>
          <h2
            className="sec-title"
            style={{ textAlign: "center", marginBottom: "0px" }}
          >
            {" "}
            STUDIO RENTAL & COLLABORATION
          </h2>
          <div className="row align-items-center my-4">
            <div className="col-xl-6">
              <iframe
                width="560"
                height="450"
                src="https://www.youtube.com/embed/d7H4A0udgTI?si=JStrvYw4yzXTZ6iF&amp;start=5"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <iframe width="600" height="315" src="https://www.youtube.com/embed/_EH-z3T72Qw?si=y_SdibPpy3VDSt15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe> */}
            </div>

            <div className="col-xl-6">
              <div className="title-area "></div>
              <p className="sec-desc mt-n2 mb-15">
                {" "}
                Unlock the canvas of creativity by renting our versatile
                space-an ideal haven for artists, instructors, and event
                organizers alike. Whether you're crafting your masterpiece,
                conducting workshops, or hosting Intimate gatherings, our space
                is tailored to accommodate your vision. From small indoor events
                to enchanting outdoor shows, open mic nights, and serene yoga
                classes, our venue provides the canvas for your artistic
                expression. Elevate your endeavors in a space designed to
                inspire and bring your ideas to life. Book AerialBelly Studio
                now and transform your concepts into captivating reality.
              </p>
              <p className="sec-desc mt-n2 mb-15">
                {" "}
                We also collaborate with artists/instructors who want to take
                their classes/workshops at our studio.
              </p>
              <p className="sec-desc mt-n2 mb-15">
                {" "}
                <b style={{ fontFamily: "Poppins" }}>
                  {" "}
                  We have 2 packages for the instructors who want to collaborate
                  with us.
                </b>
              </p>
              <p className="sec-desc mt-n2 mb-15">
                {" "}
                1. 50% - 50% (Our team will help in marketing classes/workshops
                on our social media)
              </p>
              <p> 2. 60% - 40% (Zero involvement of our team)</p>
              <p className="sec-desc mt-n2 mb-15">
                {" "}
                <b style={{ fontFamily: "Poppins" }}>
                  {" "}
                  In collaboration: A nominal amount of ₹1,000 is required to
                  confirm the slot booking.
                </b>
              </p>
              <p className="sec-desc mt-n2 mb-15">
                {" "}
                <b style={{ fontFamily: "Poppins" }}>
                  {" "}
                  To rent our studio, charges are mentioned below;
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {location === 'IN'
        ?
        <div className="space" style={{ paddingTop: "0px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-xl-7 col-xxl-12">
                <div className="class-schedule-wrapper">
                  <div
                    className="tab-content tab-schedule-content"
                    id="nav-tabContent"
                    style={{ width: "100%" }}
                  >
                    <div
                      className="tab-pane fade active show"
                      id="nav-step1"
                      role="tabpanel"
                    >
                      <div className="schedule-details">
                        <table>
                          <tr
                            className="schedule-content"
                            style={{ backgroundColor: "#bd934c" }}
                          >
                            <th
                              className="time mb-0"
                              style={{ fontWeight: "700" }}
                            >
                              Name
                            </th>
                            <th
                              className="time mb-0"
                              style={{ fontWeight: "700" }}
                            >
                              Space
                            </th>
                            <th
                              className="time mb-0"
                              style={{ fontWeight: "700" }}
                            >
                              Facility
                            </th>
                            <th
                              className="time mb-0"
                              style={{ fontWeight: "700" }}
                            >
                              Action{" "}
                            </th>
                            {/* <th className="time mb-0" style={{ fontWeight: '700' }}>24 CLASSES</th>
                                                            <th className="time mb-0" style={{ fontWeight: '700' }}>ACTION</th> */}
                          </tr>

                          <tr className="schedule-content">
                            <td className="time mb-0">Indoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              800 per hour
                            </td>
                            <td className="time mb-0">
                              {" "}
                              Includes usage of Speaker, Lights, 1 AC
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[0].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>

                          <tr className="schedule-content">
                            <td className="time mb-0">Indoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              1,000 per hour
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights, 2 AC
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[1].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>

                          <tr className="schedule-content">
                            <td className="time mb-0">Outdoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              1,300 per hour
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[2].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>
                          <tr className="schedule-content">
                            <td className="time mb-0">Outdoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              1,800 per hour
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights, Aerial Setup
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[3].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>
                          <tr className="schedule-content">
                            <td className="time mb-0">Indoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              18,000 25 hours
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights, 2 AC (validity of
                              4 days)
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[4].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>
                          <tr className="schedule-content">
                            <td className="time mb-0">Indoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              34,000 50 hours
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights, 2 AC (validity of
                              8 days)
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[5].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>
                          <tr className="schedule-content">
                            <td className="time mb-0">Outdoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              29,250 25 hours
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights (validity of 4
                              days) - Extra 3000 for the usage of Aerial Setup
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[6].le_1_id)}
                              className="time mb-0"
                            >
                               <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>
                          <tr className="schedule-content">
                            <td className="time mb-0">Outdoor Space</td>
                            <td className="time mb-0">
                              <i className="fa-solid fa-indian-rupee-sign fa-sm"></i>{" "}
                              55,250 50 hours
                            </td>
                            <td className="time mb-0">
                              Includes usage of Speaker, Lights (validity of 8
                              days) - Extra 5000 for the usage of Aerial Setup
                            </td>
                            <td
                              style={{ cursor: "pointer" }}
                              onClick={() => addGroupcart(group[7].le_1_id)}
                              className="time mb-0"
                            >
                              <button type="button" class="btn btn-primary btn-xsm" style={{ padding: '5px 10px', fontSize: '11px' }}>Add To Cart</button>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ''}

      <section
        className="price-area bg-top-center bg-smoke space bgringggg"
        id="pricesection"
        data-bg-src="assets/img/bg/pricing_1_1.png"
      >
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-xl-5 col-md-6">
              <div className="price-card active">
                <div className="price-card_content">
                  <h4>To Rent Our Studio</h4>
                </div>
                <div className="price-btn">
                  {" "}
                  <a href="/Memo.pdf" className="th-btn" download>
                    Download PDF
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="price-card active">
                <div className="price-card_content">
                  <h4>To Collaborate With Us</h4>
                </div>
                <div className="price-btn">
                  {" "}
                  <a href="/MOU Collab.pdf" className="th-btn" download>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .ab_report th,
        td {
          padding: 8px;
          text-align: initial;
        }
        @media (max-width: 1024px) {
          .space,
          .space-bottom {
            padding-bottom: var(--section-space-mobile);
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}
export default Studiorental;
