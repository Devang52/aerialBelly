import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div
        className="dempp"
        style={{
          backgroundImage: "url('/assets/img/hero/slider11.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "55%",
        }}
      >
        <h2 style={{ paddingTop: "170px" }}>About Us</h2>
        <p>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/"}
            style={{ color: "white" }}
          >
            Home{" "}
          </Link>{" "}
          / About Us
        </p>
      </div>

      <div className="overflow-hidden space bgring " id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 my-5">
              <div className="img-box3">
                <div className="img1">
                  <img
                    src="assets/img/normal/Nupur  Shah9566-2.JPG"
                    style={{ borderRadius: "30px", height: "470px" }}
                    alt="About"
                  />
                </div>
                <div className="shape1">
                  <img src="assets/img/shape/about_shape_1.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-30">
                <h2 className="sec-title"> About Our Founder</h2>
              </div>
              <h2 className="sec-desc mt-n2 mb-30">Nupur Shah</h2>
              <h4 className="sec-title"> Founder of AerialBelly</h4>
              <Link to={"https://www.instagram.com/iamnupurkaushik?igsh=NzZ1bTJ3eTVwbW81"} target="blank">
                <i style={{ fontSize: '25px' }} className="fab fa-instagram"></i>
              </Link>
              <Link className="px-3" to={"mailto:letsworknupur@gmail.com"} target="blank">
                <i style={{ fontSize: '25px' }} className="fa-regular fa-envelope"></i>
              </Link>
              <Link to={"https://www.facebook.com/noopur.shah.03?mibextid=LQQJ4d"} target="blank">
                <i style={{ fontSize: '22px' }} className="fa-brands fa-facebook-f"></i>
              </Link>
              {/* <div className="about-btn mt-40"><Link to={'/loginpage'} className="th-btn gold-btn">Join Us Now</Link></div> */}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-xl-12">
              <p className="sec-desc mt-n2 mb-30">
                Nupur Shah is one of the head secretaries at Aerial Sports
                Association of India. She is a professional belly dance artist
                and an Aerialist. She has been into teaching and performing
                belly dance and aerial art since past 10 years now. She has
                taken training in belly dance and in aerial art from
                internationally acclaimed belly dancers (from Egypt) and
                aerialists. Before getting into belly dance and aerial arts, she
                was a freestyle dancer and a choreographer. She has been trained
                in various dance forms as well. She was a professional model and
                has won the title of Miss Gujarat 2014. She was among top 40
                contestants in Femina Miss Diva Universe 2014. After coining her
                own dance style AerialBelly, she auditioned for a TV dance
                reality show called Main Hoon Michael (Judged by Bollywood
                celebrities Tiger Shroff and Nawazuddin Siddiqui) in which she
                became one of the top 9 contestants. She then got opportunities
                to perform belly dance in various TV shows as guest artist,
                later did shows of Aerial and belly dance nationally &
                internationally. She has won bronze medal in National Aerial
                Sports Championship. Been on regional channels for her
                contribution to the field of art. She started her career in Pune
                and later shifted to Bombay. Her classes are now in Mumbai and
                in Ahmedabad. Her brainchild AerialBelly got recognition in the
                year 2020 on national TV (Zee TV & Zee Cafe) in the show called
                Dance with me hosted and judged by Shakti Mohan and Mukti Mohan.
                She now has her team working in Mumbai and in Ahmedabad and
                performing all over the world and has her institute in
                Ahmedabad, named AerialBelly Studio.
              </p>
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
                    src="assets/img/normal/ab-aeriel.jpg"
                    style={{ marginTop: "8%", borderRadius: "30px" }}
                    alt="About"
                  />
                </div>
                <div className="shape1">
                  <img src="assets/img/shape/about_shape_1.svg" alt="shape" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-30">
                <h2 className="sec-title"> About AerialBelly</h2>
              </div>
              <p className="sec-desc mt-n2 mb-30">
                AerialBelly is a copyrighted dance form. This dance form was
                formed in the year 2017. AerialBelly is the brainchild of Ms.
                Nupur Shah. The concept of this dance form is to belly dance in
                the air/on an aerial prop. This absolutely mesmerizing dance
                form is still new in the world art industry but it has succeeded
                in making its name among some of the most talented and
                celebrated artists of India like Shakti Mohan and Mukti Mohan.
                It is on its way to grow and shine more!
              </p>

              {/* <div className="about-btn mt-40"><Link to={'/loginpage'} className="th-btn gold-btn">Join Us Now</Link></div> */}
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

      <div className="overflow-hidden space " id="about-sec">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-xl-6">
              <div className="title-area mb-30">
                <h2 className="sec-title">AerialBelly Studio</h2>
              </div>
              <p className="sec-desc mt-n2 mb-30">
                Our prime location offers an outdoor Aerial setup 22 feet above
                ground, blending art and nature seamlessly. Experience Aerial
                dance and yoga in the serene outdoor space surrounded by lush
                greenery with a stunning sunrise view. Our spacious indoor
                studio, equipped with professional amenities, mirrors, and
                dedicated online class areas, provides a tranquil heaven for
                dance enthusiasts. Our studio is known for offering authentic
                Belly Dance classes & workshops and also Aerial Arts classes to
                all the age groups. Join us to unleash your creativity and
                celebrate the harmony of art and nature!
              </p>
              <div className="about-btn mt-40">
                <Link onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  to={"/studiorental"} className="th-btn gold-btn">
                  Book  Studio Now{" "}
                </Link>
              </div>
            </div>
            <div className="col-xl-6 my-4">
              <iframe
                width="600"
                height="315"
                src="https://www.youtube.com/embed/d7H4A0udgTI?si=bMFIbjE-9qrokysL&amp;start=7"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
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

      {/* <div className="overflow-hidden space bgring" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1"><img src="assets/img/normal/nupurshah.jpeg" style={{  borderRadius: '30px' }} alt="About" /></div>
                <div className="shape1"><img src="assets/img/shape/about_shape_1.svg" alt="shape" /></div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area">
                <h2 className="sec-title"> About Our Founder</h2>
                <h2 className="sec-title"> Nupur Shah</h2>
                <h4 className="sec-title"style={{paddingTop:'15%'}}> Founder Of AerialBelly Dance Style</h4>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
         
            <div className="col-xl-12">
              <div className="title-area mb-30">
         
                <h4 className="sec-title"> FOUNDER OF AerialBelly DANCE STYLE</h4>
              </div>
              <p className="sec-desc mt-n2 mb-30" style={{paddingTop:'15%'}}>Nupur Shah is one of the head secretaries at Aerial Sports Association of India. She is a professional belly dance artist and an Aerialist. She has been into teaching and performing belly dance and aerial art since past 10 years now. She has taken training in belly dance and in aerial art from internationally acclaimed belly dancers (from Egypt) and aerialists. Before getting into belly dance and aerial arts, she was a freestyle dancer and a choreographer. She has been trained in various dance forms as well. She was a professional model and has won the title of Miss Gujarat 2014. She was among top 40 contestants in Femina Miss Diva Universe 2014. After coining her own dance style AerialBelly, she auditioned for a TV dance reality show called Main Hoon Michael (Judged by Bollywood celebrities Tiger Shroff and Nawazuddin Siddiqui) in which she became one of the top 9 contestants. She then got opportunities to perform belly dance in various TV shows as guest artist, later did shows of Aerial and belly dance nationally & internationally. She has won bronze medal in National Aerial Sports Championship. Been on regional channels for her contribution to the field of art. She started her career in Pune and later shifted to Bombay. Her classes are now in Mumbai and in Ahmedabad.
Her brainchild AerialBelly got recognition in the year 2020 on national TV (Zee TV & Zee Cafe) in the show called Dance with me hosted and judged by Shakti Mohan and Mukti Mohan. She now has her team working in Mumbai and in Ahmedabad and performing all over the world and has her institute in Ahmedabad, named AerialBelly Studio.</p>

              <div className="about-btn mt-40"><Link to={'/bellydance'} className="th-btn gold-btn">Learn More</Link></div>
            </div>
          </div>

        </div>
        <div className="shape-mockup movingX d-none d-xxl-block" data-top="0%" data-right="0%"><img
          src="assets/img/shape/shape_1.png" alt="shape" /></div>
      </div> */}



      <section className="space">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title mt-n1">we believe in excellence</span>
            <h2 className="sec-title">OUR PROFESSIONAL INSTRUCTORS</h2>
          </div>
          <div
            className="row slider-shadow th-carousel"
            data-slide-show="4"
            data-lg-slide-show="3"
            data-md-slide-show="2"
            data-sm-slide-show="2"
            data-xs-slide-show="1"
            data-arrows="true"
          >
            <div className="col-sm-6 col-lg-4">
              <div className="th-team team-card my-3">
                <div className="team-img">
                  <img src="assets/img/team/instctornupur.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h3 className="team-title box-title">
                    <a href="single-instructor.html">Nupur Shah</a>
                  </h3>
                  {/* <span className="team-desig">Instructor</span> */}
                </div>
                <div className="team-social">
                  <Link to={"https://youtube.com/@nupurshahh?si=77KsUw4I3NB4rya0"} target="blank">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link to={"https://www.instagram.com/aerialbelly?igsh=MnNrYmdjYnpmY2w1"} target="blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="th-team team-card my-3">
                <div className="team-img">
                  <img src="assets/img/team/IMG_4984.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h3 className="team-title box-title">
                    <a href="single-instructor.html">Deepika Thakor</a>
                  </h3>
                  {/* <span className="team-desig">Coreographer</span> */}
                </div>
                <div className="team-social">
                  <Link to={"https://youtube.com/@nupurshahh?si=77KsUw4I3NB4rya0"} target="blank">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link to={"https://www.instagram.com/aerialbelly?igsh=MnNrYmdjYnpmY2w1"} target="blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="th-team team-card my-3">
                <div className="team-img">
                  <img src="assets/img/team/A-564053701782.jpg" alt="Team" />
                </div>
                <div className="team-content">
                  <h3 className="team-title box-title">
                    <a href="single-instructor.html">Yati Vyas</a>
                  </h3>
                </div>
                <div className="team-social">
                  <Link to={"https://youtube.com/@nupurshahh?si=77KsUw4I3NB4rya0"} target="blank">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link to={"https://www.instagram.com/aerialbelly?igsh=MnNrYmdjYnpmY2w1"} target="blank">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
                .ab_report th, td {
                    padding: 8px;
                    text-align: initial;
                    }

                    @media (max-width: 1024px) {
                      p.sec-desc.mt-n2.mb-30 {
                        padding-top: 0 !important;
                    }
                    }
            `}</style>
    </>
  );
}
export default About;
