import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import locContext from "../context/locContext";

function Home() {
  const location = useContext(locContext);
  const userRoll = JSON.parse(localStorage.getItem("aerialst"));
  const user_id = userRoll ? userRoll.id : null;
  const navigate = useNavigate();
  const sliderRef = useRef(null);

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
            // title: res.data.msg,
            title: "The added program is already selected in the cart",
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

  const card = [
    {
      title: "kavita gadhavi",
      cardimg: "/assets/img/avtar_fe.jpg",
      description: "I always loved this dance form and really wanted someone the best and a  professional to train me for this gracious art . I came across “Aerial Belly dance studio “.Your passion for belly dance is infectious, and your training theoretically and practically has been invaluable. Nupur and her Team  undoubtedly owns a  professional techniques and teaching style which is inspiring and motivating. I appreciate all the effort you put into my belly dance training .Each lesson with you brings new growth and confidence in my belly dance abilities."
    },
    {
      title: "Taruna Sharma",
      cardimg: "/assets/img/testimonial/test1.png",
      description: "I’been looking for belly dance institute since past four months and then i came across to aerial belly by Nupur shah and decided to learn and its truly my best decision ever. They have experienced trainer who focus to teach proper technique and moves of belly dance. I really enjoy while i dance. best place to learn belly dance ,must give a chance once come and experience yourself."
    },
    {
      title: "Manisha Kode",
      cardimg: "/assets/img/testimonial/test2.png",
      description: "I am enrolled in online classes. I love both the instructors Nupur ji and Deepika ji. I am thrilled to learn this dance form from the expert. Nupur ji has devoted her life to this dance form. Her knowledge about history of the dance form as well as technical details around variety in the dance form is commendable. Thanks for making it available online and supporting remote students with utmost care."
    },
    {
      title: "Vrisha Shah",
      cardimg: "/assets/img/avtar_fe.jpg",
      description: "I m learning aerial silk here since 2months & the experience is worth. I m learning aerial under Nupur mam and Deepika mam and both the teachers r quite experienced, friendly and aced.The environment in the classes is really lovely and peaceful which makes the process of learning even more easier and stress free. According to my personal experience I would rate Aerialbelly studio 10/10 ⭐️"
    },
    {
      title: "chandni jani",
      cardimg: "/assets/img/testimonial/test3.png",
      description: "I have just started learning belly dance & it is helping me to get in tune with my body. I'm enjoying a lot especially someone who has no background as such in dancing learning it from Deepika Ma'am & Nupur ma'am who are very good with this art is not more than a blessing in disguise. Plus you get to meet all new and beautiful women who are committed to work on themselves along with dancing fun is a win win."
    },
    {
      title: "Puja Shah",
      cardimg: "/assets/img/avtar_fe.jpg",
      description: "It’s a great experience. I never thought that my daughter ll learn a belly dance but all credit goes to ma’am that she make her to learn in best way..!! She enjoys a lot in her class she is looking forward to learn more ..!!!"
    },
  ];

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 350,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  async function exampleFunction() {
    const { value: formValues, dismiss } = await Swal.fire({
      html: `
        <h3>Enquire Now</h3>
        <input id="swal-input1" className="swal2-input" style="margin-top: 15px" type="email" placeholder="Email">
        
        <div class="phone-container" style="display: flex; align-items: center; margin-top: 15px;">
          <select id="country-code" className="form-select" style="width: 45%; margin-right: 10px;">      
            <option value="+91">+91 (India)</option>
            <option value="+44">+971 (Dubai)</option>
            <option value="+1">+1 (USA, Canada)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (Australia)</option>
            <option value="+81">+81 (Japan)</option>
            <option value="+49">+49 (Germany)</option>
            <option value="+33">+33 (France)</option>
            <option value="+39">+39 (Italy)</option>
            <option value="+86">+86 (China)</option>
            <option value="+7">+7 (Russia)</option>
            <option value="+55">+55 (Brazil)</option>
            <option value="+34">+34 (Spain)</option>
            <option value="+27">+27 (South Africa)</option>
            <option value="+82">+82 (South Korea)</option>
            <option value="+63">+63 (Philippines)</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+62">+62 (Indonesia)</option>
            <option value="+234">+234 (Nigeria)</option>
            <option value="+52">+52 (Mexico)</option>
            <option value="+31">+31 (Netherlands)</option>
            <option value="+20">+20 (Egypt)</option>
            <option value="+46">+46 (Sweden)</option>
            <option value="+41">+41 (Switzerland)</option>
            <option value="+48">+48 (Poland)</option>
            <option value="+47">+47 (Norway)</option>
            <option value="+45">+45 (Denmark)</option>
            <option value="+351">+351 (Portugal)</option>
            <option value="+30">+30 (Greece)</option>
            <option value="+353">+353 (Ireland)</option>
            <option value="+36">+36 (Hungary)</option>
            <option value="+90">+90 (Turkey)</option>
            <option value="+64">+64 (New Zealand)</option>
            <!-- You can add more country codes here as needed -->
          </select>
          <input id="swal-input2" className="swal2-input" style="width: 70%;" type="number" placeholder="Phone number">
        </div>
        
        <div className="form-group" style="margin-top: 15px">
          <select id="classes" className="form-select" required>
            <option value="-- Select Classes--">Classes</option>
            <option>Belly Dance Classes</option>
            <option>Aerial Arts Classes</option>
            <option>Other</option>
          </select>
        </div>
      `,
      focusConfirm: false,
      confirmButtonColor: "#bd934c",
      preConfirm: () => {
        return {
          email: document.getElementById("swal-input1").value,
          phone:
            document.getElementById("country-code").value +
            document.getElementById("swal-input2").value,
          classes: document.getElementById("classes").value,
        };
      },
    });

    if (dismiss) {
      return;
    } else {
      const data = {
        email: formValues.email,
        phone: formValues.phone,
        classes: formValues.classes,
      };

      try {
        function validateEmail(email) {
          const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return regex.test(email);
        }
        // const contactRegex = /^\+\d{1,3}\d{10}$/;

        if (!data.email || !data.phone) {
          Swal.fire({
            title: "Please enter all data",
            icon: "warning",
            confirmButtonColor: "#bd934c",
          });
        } else if (!validateEmail(data.email)) {
          Swal.fire({
            title: "Please enter a valid email",
            icon: "warning",
            confirmButtonColor: "#bd934c",
          });
        } else if (data.classes === '-- Select Classes--') {
          Swal.fire({
            title: "Please select classes",
            icon: "warning",
            confirmButtonColor: "#bd934c",
          });
        }
        // else if (!contactRegex.test(data.phone)) {
        //   Swal.fire({
        //     title: "Invalid Contact Format",
        //     text: "Contact number must be exactly 10 digits after the country code",
        //     icon: "warning",
        //     confirmButtonColor: "#bd934c",
        //   });
        // } 
        else {
          const res = await axios.post(
            `${process.env.REACT_APP_BACKEND_BASE_URL}/mailsend`,
            data
          );
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Enquiry sent successfully",
              timer: 1500,
              confirmButtonColor: "#bd934c",
            });
          } else {
            Swal.fire({
              title: "Inquiry send failed",
              icon: "error",
              confirmButtonColor: "#bd934c",
            });
          }
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "warning",
          title: "Server Error",
          confirmButtonText: "OK",
          confirmButtonColor: "#bd934c",
        });
      }
    }
  }

  return (
    <>
      <marquee width="100%" direction="left" style={{background: "#bd934c", marginBottom: "-8px"}} scrollamount="5">
        <p style={{margin: "0", color: "white", fontSize: "20px", wordSpacing: "5px", letterSpacing: "2px", fontFamily: "Poppins"}}>AerialBelly Studio is turning 2 years on 9th October. Register for any course/workshop before 9th October & get exclusive discounts and offers.</p>
      </marquee>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        should
        stop
        playing
        on
        user
        interaction
        interval={2500}
      >
        <div data-src="/assets/img/hero/slider4.jpg" className="">
          <div className="hero-content" style={{ top: "7%" }}>
            <div data-swiper-parallax="300" className="slide-title">
              <span
                className="hero-subtitle style2 mt-n1"
                data-ani="slideinleft"
                data-ani-delay="0.1s"
                style={{ letterSpacing: "2px" }}
              >
                <b>where Grace Meets Strength</b>
              </span>
            </div>
            <div
              data-swiper-parallax="400"
              className="slide-text"
              style={{ paddingTop: "initial" }}
            >
              <h1
                className="hero-title text-white"
                data-ani="slideinleft"
                data-ani-delay="0.3s"
              >
                Connect to your Mind, Body & Soul.
              </h1>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div data-src="/assets/img/hero/slider2.jpg" className="">
          <div className="hero-content" style={{ top: "45%", left: "28%" }}>
            <div data-swiper-parallax="300" className="slide-title">
              <span
                className="hero-subtitle style2 mt-n1"
                data-ani="slideinleft"
                data-ani-delay="0.1s"
              >
                <b>Fly the highest</b>
              </span>
            </div>
            <div data-swiper-parallax="400" className="slide-text">
              <h1
                className="hero-title text-white"
                data-ani="slideinleft"
                data-ani-delay="0.3s"
              >
                Discover your Wings!
              </h1>
              {/* <div className="btn-group mt-35" data-ani="slideinleft" data-ani-delay="0.9s"><a href="/"
                className="th-btn gold-btn-2">Apply Now</a>
              </div> */}
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        <div data-src="/assets/img/hero/slider3.jpg" className="">
          <div className="hero-content" style={{ top: "17%" }}>
            <div data-swiper-parallax="300" className="slide-title">
              <span
                className="hero-subtitle style2 mt-n1"
                data-ani="slideinleft"
                data-ani-delay="0.1s"
              >
                <b>Authentic & Soulful</b>
              </span>
            </div>
            <div data-swiper-parallax="400" className="slide-text">
              <h1
                className="hero-title text-white"
                data-ani="slideinleft"
                data-ani-delay="0.3s"
              >
                fall in love with yourself.
              </h1>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </AutoplaySlider>

      <div
        className="video-area-two top-bg-center"
        data-bg-src="assets/img/bg/demo.jpg"
      >
        <div className="video-wrapper">
          <div className="video-box1" data-bg-src="assets/img/normal/demo.jpg">
            <video controls style={{ height: "650px", width: "850px" }}>
              <source src="assets/img/hero/home_v1.mov" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
            </video>
          </div>
          <div className="video-text bgringg">
            <div className="title-area mb-0 ">
              <h2 className="sec-title" style={{ textAlign: "center" }}>
                Welcome to AerialBelly
              </h2>
              <h6 style={{ color: "#bd934c" }}>
                A House Of Authentic Belly Dance & Aerial Arts
              </h6>
              <p className="sec-desc mt-n2 mb-30">
                At AerialBelly, we fuse the ethereal beauty of aerial arts with
                the mesmerizing movements of belly dance, creating a unique
                space where creativity soars and bodies dance with grace.
              </p>
              <p className="sec-desc mt-n2 mb-30">
                Founded with a passion for both aerial arts and belly dance by
                Nupur Shah, Our studio is a haven for those seeking to explore
                the heights of aerial acrobatics and the depths of belly dance
                rhythms.
              </p>
              <p className="sec-desc mt-n2 mb-30">
                Driven by a desire to share her love for these art forms, Nupur
                established AerialBelly Studio. Here, she brings together a team
                of dedicated instructors who share her vision of fostering
                creativity, strength, and joy through movement.
              </p>
              <p className="sec-desc mt-n2 mb-30">
                AerialBelly Studio is more than just a place to learn — it's a
                community united by a love for movement and a commitment to
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden space bgring" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1">
                  {/* <video autoPlay style={{ height: "600px", width: "850px" }}>
                    <source src="assets/img/hero/Nupur Shah.MP4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                  </video> */}
                  <video
                    controls
                    autoPlay
                    // muted
                    loop
                    style={{ height: "600px", width: "850px" }}
                  >
                    <source src="assets/img/hero/Nupur Shah.MP4" type="video/mp4" />
                    <source src="movie.ogg" type="video/ogg" />
                  </video>

                  {/* <img
                    src="assets/img/normal/bellydance1.jpg"
                    style={{ marginTop: "8%", borderRadius: "30px" }}
                    alt="About"
                  /> */}
                </div>
                <div className="shape1">
                  <img src="assets/img/shape/about_shape_1.svg" alt="shape" />
                </div>
                <div className="about-counter1 bounce-slide">
                  <h3 className="counter-title">
                    <span className="counter-number">11</span>
                  </h3>
                  <span className="counter-text">Years of Experiences</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-30">
                {/* <span className="sub-title style2">Belly Dance</span> */}
                <h2 className="sec-title">Belly Dance</h2>
              </div>
              <p className="sec-desc mt-n2 mb-30">
                Belly Dance/Raqs Sharqi is a traditional art form of Egypt. It
                has a rich history and its classical music will make anyone fall
                in love with themselves. Belly dance has minimum 12 forms in
                Egypt itself and is performed in various ways.
                <br />
                We at AerialBelly are determined to clear the wrong notions,
                belly dance has revolving around it by spreading its
                authenticity, right concepts, knowledge, techniques with deep
                understanding of its roots and classical music. In our authentic
                belly dance professional course, we make sure every student is
                well versed with every smallest of aspects of Raqs Sharqi/Belly
                Dance.
              </p>
              <div className="checklist-wrapper">
                <div className="checklist">
                  {/* <ul>
                    <li>Preparation For Competitions</li>
                    <li>Personal / Group Lessons</li>
                    <li>Dance Testing</li>
                    <li>Unlimited Dance Classes</li>
                    <li>Lose Weight While Having Fun</li>
                    <li>24/7 Online Supported</li>
                  </ul> */}
                </div>
              </div>
              <div className="about-btn mt-40">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to={"/bellydance"}
                  className="th-btn gold-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-xxl-block"
          data-top="0%"
          data-right="0%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
      </div>

      <div className="overflow-hidden space bgring" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1">
                  <img
                    src="assets/img/normal/aerial1.jpg"
                    style={{ marginTop: "8%", borderRadius: "30px" }}
                    alt="About"
                  />
                </div>
                <div className="shape1">
                  <img src="assets/img/shape/about_shape_1.svg" alt="shape" />
                </div>
                <div className="about-counter1 bounce-slide">
                  <h3 className="counter-title">
                    <span className="counter-number">11</span>
                  </h3>
                  <span className="counter-text">Years of Experiences</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-30">
                {/* <span className="sub-title style2">Aerial Arts</span> */}
                <h2 className="sec-title">Aerial Arts</h2>
              </div>
              <p className="sec-desc mt-n2 mb-30">
                Take flight with our exhilarating Aerial arts classes. Under the
                guidance of our experienced and internationally trained instructors, students can defy
                gravity and explore a variety of aerial disciplines, including <span style={{ color: '#bd934c', fontWeight: '600' }} > Aerial Yoga,
                  Silks, Hoops / Lyra, Trapeze, Cube and Hammock.</span> Whether you're a beginner or
                an experienced aerialist, our classes offer a unique opportunity
                to soar to new heights. We teach Aerial Arts in an outdoor setup of<span style={{ color: '#bd934c', fontWeight: '600' }} > 22 feet height.</span> Come, experience Aerial Arts Classes
                at AerialBelly Studio in India like never before.
              </p>
              <div className="about-btn mt-40">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to={"/aerialbellyart"}
                  className="th-btn gold-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-mockup movingX d-none d-xxl-block"
          data-top="0%"
          data-right="0%"
        >
          <img src="assets/img/shape/shape_1.png" alt="shape" />
        </div>
      </div>

      <div
        className="video-area-two top-bg-center"
        data-bg-src="assets/img/bg/demo.jpg"
      >
        <div className="video-wrapper">
          <div className="video-box1" data-bg-src="assets/img/normal/demo.jpg">
            <img src="/assets/img/normal/bellydance1.jpg" alt="video" />
            {/* <img src="assets/img/normal/demo.jpg" alt="video" /> */}
          </div>
          <div className="video-text bgringg">
            <div className="title-area mb-0 text-center">
              <span className="sub-title sub-title2 line-border">
                One Step towards loving yourself...
              </span>
              <h2 className="sec-title">Book your Demo Class Now!</h2>
              {/* <p className="sec-desc text-white">[note: may want a registration form inserted here & linked to dance?]</p> */}
              <div className="video-group style2 text-center">
                <div className="th-btn gold-btn-2 " onClick={exampleFunction}>
                  Enquire Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <section className="testimonial-area-two space-top" data-pos-for=".price-area" data-sec-pos="top-half"
        data-bg-src="assets/img/bg/testimonial_bg_1.jpg">
        <div className="container">
          <div className="testimonial-box-wrapper">
            <div className="title-area mb-0"><span className="sub-title style2">Testimonials</span>
              <h2 className="sec-title mb-0 text-white">What our students say?</h2>
            </div>
            <div className="icon-box my-3">
              <button data-slick-prev="#testiSlide1" className="slick-arrow default" onClick={() => sliderRef.current.slickPrev()}>
                <i className="far fa-arrow-left"></i>
              </button>
              <button data-slick-next="#testiSlide1" className="slick-arrow default" onClick={() => sliderRef.current.slickNext()}>
                <i className="far fa-arrow-right" ></i>
              </button>
            </div>
          </div>
          <div className="row th-carousel testi-slider2" id="testiSlide1" data-slide-show="1">
            <Slider ref={sliderRef} {...settings}>
              {card.map((detail, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="col-lg-12">
                    <div className="testi-box2">
                      <div className="testi-content_content">
                        <img src={detail.cardimg} alt="Testimonial" style={{ height: '100px', width: '100px', borderRadius: '50%' }} />
                        <p className="testi-box_text">{detail.description}</p>
                        <div className="testi-box_profile">
                          <div className="media-body">
                            <h3 className="testi-box_name h6">{detail.title}</h3>
                            {/* <span className="testi-box_desig">dance student</span> */}
                          </div>
                          <div className="testi-box_quote">
                            <img src="assets/img/icon/quote_2.png" alt="quote" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

          </div>
        </div>
      </section>

      <section
        className="blog-area-two bg-smoke space bgringggg144"
        id="blog-sec"
        data-bg-src="assets/img/bg/blog_1_2.png"
      >
        <div className="container">
          <div className="title-area text-center mt-5">
            <span className="sub-title sub-title2 mt-n1">Featured on </span>
            {/* <h2 className="sec-title">Our Latest News & Articles</h2> */}
          </div>
          <div className="photos">
            <div className="pic1">
              <img src="/assets/img/blog/hb.png" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/Zee.jpg" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/haufly.jpeg" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/Radio City.png" alt="blog image" />
            </div>
            <div className="pic1">
              <img
                src="/assets/img/blog/Ahmedabad Mirror.png"
                alt="blog image"
              />
            </div>
          </div>
          <div className="photos-1">
            <div className="pic1">
              <img src="/assets/img/blog/Ketto India.png" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/Akkar Bakkar.jpeg" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/Mid Day Mumbai.png" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/storiyaan.jpg" alt="blog image" />
            </div>
            <div className="pic1">
              <img src="/assets/img/blog/Mirchi-98.3.jpg" alt="blog image" />
            </div>
          </div>

          {/* <div className="row blog-slide2 slider-shadow th-carousel" id="blogSlide1" data-slide-show="3" data-lg-slide-show="2"
            data-md-slide-show="2" data-sm-slide-show="1" data-arrows="true">

           

          </div> */}
        </div>
      </section>

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
      <style jsx>{`
        @media (max-width: 767px) {
          .space,
          .space-bottom {
            padding-bottom: var(--section-space-mobile);
            margin-top: -40%;
          }
        }
      `}</style>
    </>
  );
}
export default Home;
