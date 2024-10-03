import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Swal from "sweetalert2";
import locContext from "../context/locContext";

function BellyDanceWorkShop() {
  const location = useContext(locContext);

  const userRoll = JSON.parse(localStorage.getItem("aerialst"))
  const user_id = userRoll ? userRoll.id : null
  const navigate = useNavigate();

  const [group, setGroup] = useState([]);
  const getSubsriptionData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getAllWorkshops`
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

  const [cart, setCart] = useState({
    "user_id": user_id,
    "cart_type": 2,
  });

  const addGroupcart = async (id) => {
    try {
      if (!user_id) {
        navigate("/loginpage");
      } else {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/addToCart/${id}`, cart);
        console.log(res);

        if (res.status === 200 && res.data.data) {
          Swal.fire({
            icon: "success",
            title: "This Add to cart",
            timer: 1500,
          })
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

  }
  const handleimg = (e) => {
    e.target.src = "/assets/img/dance/TECHNIQUE WORKSHOP.JPG";
    e.target.alt = "Image not found";
  };
  return (
    <>
      <div className="dempp" style={{ backgroundImage: "url('/assets/img/hero/ImportedPhoto_1722864109271.jpg')", backgroundSize: 'cover', backgroundPosition: ' center' }}>
        <h2>Belly Dance WorkShop</h2>
        <p> <Link onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          to={'/'} style={{ color: 'white' }}>Home </Link> / Belly Dance WorkShop </p>
      </div>


      <div className="container">
        <div className="row">
          <div className="container mt-5">
            <div className="dance bgring1">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <img src="/assets/img/dance/TECHNIQUE WORKSHOP.JPG" alt="Aerial Belly" />

                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1 my-5">
                    <p>Refine your belly dance moves in AerialBelly Studio's<b style={{ fontFamily: 'Poppins' }}> monthly 2-hour Belly Dance Choreography Workshop </b>with the talented artist Nupur Shah. Join her on one day of each month to master captivating sequences, blending belly dance with the latest Bollywood and non-Egyptian beats. Whether you're a seasoned dancer or a beginner, Nupur's guidance guarantees a rewarding learning experience. Don't miss the chance to stay in sync with the latest dance trends. Mark your calendar for an immersive session of creativity and rhythm with Nupur Shah. Unleash the dancer in you!</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="th-blog-wrapper mt-5">
        <div className="container">
          <div className="row">
            {group.map((dataa, index) => {
              return <div className="col-lg-6" key={index}>
                <div className="th-blog blog-single has-post-thumbnail">
                  <div className="blog-img">
                    {/* <img src="assets/img/blog/blog-s-1-1.jpg" alt="Blog Image" /> */}
                    <img
                      src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${dataa.photo}`}
                      draggable={false}
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: 'cover'
                      }}
                      onError={handleimg}
                    />
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <Link>
                        <i className="fa-light fa-calendar-days"></i>
                        {dataa.date}
                      </Link>
                      <Link to={dataa.location} target="block">
                        <i className="fa-solid fa-location-dot"></i>
                        location
                      </Link>
                      <Link>
                        <i className="fa-regular fa-building"></i>
                        {dataa.city}
                      </Link>
                    </div>
                    <h2 className="blog-title">{dataa.title}</h2>
                    <p className="blog-text">{dataa.description}</p>
                    {location === "IN"
                      ? <p className="blog-title">₹ {dataa.rupees}</p>
                      : <p className="blog-title">$ {dataa.doller}</p>
                    }
                    <button className="th-btn" style={{ cursor: 'pointer' }} onClick={() => addGroupcart(dataa.id)}>Add To Cart</button>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>



      <Tabs>
        <TabList>
          {/* <Tab><i className="fa-solid fa-circle fa-2xs"></i> BELLY DANCE CHOREOGRAPHY WORKSHOP</Tab> */}
          {/* <Tab><i className="fa-solid fa-circle fa-2xs"></i> TECHNIQUE WORKSHOP</Tab> */}
        </TabList>

        <TabPanel>

        </TabPanel>

        {/* <TabPanel>
          <div className="container">
          <h5 style={{ textAlign: 'center',  }}>TECHNIQUE WORKSHOP</h5>
          <div className="row">
              <div className="container my-4">
                <div className="dance bgring1">
                  <div className="row">
                  <div className="col-md-5">
                      <div className="tab-img1">
                        <img src="\assets\img\dance\TECHNIQUE WORKSHOP.JPG" alt="Aerial Belly" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="tab-text1">
                      <p>Enhance your belly dance skills with AerialBelly Studio's<b style={{fontFamily:'Poppins'}}> monthly Belly Dance Core Technique Workshop.</b> Held on one Sunday each month, this one-hour session is designed for all levels, focusing on drilling and mastering specific techniques. Join us online via Google Meet or in-person at our Ahmedabad studio for a deep dive into enhancing your dance fundamentals. Led by experienced instructors, it's a valuable resource for skill elevation in a supportive environment. Don't miss the chance to refine your technique-mark your calendar and take a step closer to mastering the essence of belly dance!</p>
                      </div>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel> */}
      </Tabs>
    </>
  )
}
export default BellyDanceWorkShop;