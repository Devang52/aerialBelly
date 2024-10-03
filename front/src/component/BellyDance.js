import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import locContext from "../context/locContext";
import Swal from "sweetalert2";

function BellyDance() {
  const location = useContext(locContext);
  const userRoll = JSON.parse(localStorage.getItem("aerialst"))
  const user_id = userRoll ? userRoll.id : null
  const navigate = useNavigate();

  //        Group Belly Dance Classes 
  const [group, setGroup] = useState([]);
  const getSubsriptionData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/1`
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

  //    Private Belly Dance Classes With Our Senior Instructor
  const [privatea, setPrivatea] = useState([]);
  const getPrivateData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/2`
      );
      if (res.status === 200) {
        setPrivatea(res.data.data);
      } else {
        setPrivatea([]);
      }
    } catch (err) {
      console.log(err);
    }
  };


  //    Private Belly Dance Classes With Nupur Shah
  const [privateaclass, setPrivateaclass] = useState([]);
  const getPrivateclassData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/3`
      );
      if (res.status === 200) {
        setPrivateaclass(res.data.data); // Corrected here
      } else {
        setPrivateaclass([]); // Corrected here
      }
    } catch (err) {
      console.log(err);
    }
  };

  //       Monthly Belly Dance Choreography Classes
  const [privateaclassmonthly, setPrivateaclassmonthly] = useState([]);
  const getPrivateclassmonthlyData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/4`
      );
      if (res.status === 200) {
        setPrivateaclassmonthly(res.data.data); // Corrected here
      } else {
        setPrivateaclassmonthly([]); // Corrected here
      }
    } catch (err) {
      console.log(err);
    }
  };


  const addGroupcart = async (id) => {
    try {
      if (!user_id) {
        navigate("/loginpage");
      } else {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/addToCart/${id}`, { user_id });
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

  useEffect(() => {
    getSubsriptionData();
    getPrivateData();
    getPrivateclassData();
    getPrivateclassmonthlyData();
  }, []);

  return (
    <div>
      <div className="dempp" style={{ backgroundPositionY: '31%' }}>
        <h2>Belly Dance Classes</h2>
        <p><Link onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          to={'/'} style={{ color: 'white' }}>Home </Link> / Belly Dance Classes</p>
      </div>
      <Tabs>
        <TabList>
          <Tab><i className="fa-solid fa-circle fa-2xs"></i> Authantic Belly Dance Group Classes</Tab>
          <Tab><i className="fa-solid fa-circle fa-2xs"></i> Authantic Belly Dance Private Classes</Tab>
          <Tab><i className="fa-solid fa-circle fa-2xs"></i> Fusion Belly Dance Classes</Tab>


        </TabList>

        <TabPanel>
          <div className="container mt-5">
            <h3 style={{ textAlign: 'center' }}>In-Studio Classes / Online Classes</h3>
            <div className="dance ">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <h4><b>Glimpses of our level 1 Beginners sequence.</b></h4>
                    <iframe width="600" height="315" src="https://www.youtube.com/embed/_EH-z3T72Qw?si=y_SdibPpy3VDSt15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                    <video controls style={{ height: '315px', width: '850px' }}>
                      <source src="assets/img/hero/belly_v1.mp4" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                    </video>

                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1">
                    <h4><b>Learn Authentic Belly Dance With Us</b></h4>
                    <p>Get ready to learn authentic Egyptian Belly Dance/Raqs Sharqi , its different forms in the world , Belly dance Egyptian classic musicality, its history & background.
                      The entire certified course is of 16 levels(3-4 years) . In every level we teach different form of belly dance , musicality and it's background with a sequence on an Egyptian song. Each level is of 2 months.
                      Everything will be taught from scratch & in depth which will make students understand and learning process super fun and easy yet informative & challenging. Each class consists of Pranayama, intense warm up, techniques break down, choreography, spine cool down and meditation.
                    </p>
                    <p>There are no criteria to join our Belly Dance classes. We offer classes to all the age groups (above 7) , size , gender & anybody simply willing to learn belly dance in depths.

                      Our each class is of 90 minutes(1 hour 30 minutes). Weekly 2 classes. Weekend class duration may change.

                      Total hours of training that includes exam is 24 hours. After completion of every level , there will be an exam that will be included in the course itself.

                      Certificate will be given only to the deserving students.

                      We don't take new admissions directly in our mid levels, every new admission will have to start their journey with us from Level 1 (Beginners level) as our syllabus is vast.</p>


                  </div>

                </div>

              </div>
              <div className="space">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-xl-7 col-xxl-12">

                      <div className="class-schedule-wrapper">

                        <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                          <h3 style={{ textAlign: 'center' }}>Fee Structure of Group Belly Dance Classes <br></br>  (In Studio & Online Classes)</h3>
                          <h6 style={{ textAlign: 'center', color: '#bd934c' }}>Demo Class of Level-1 for 1 hour 30 minutes at {location === "IN" ? "₹750" : "$20"}<button type="button" onClick={() => addGroupcart(311)} className="btn btn-primary btn-xsm" style={{ padding: '5px 8px', marginLeft: '2%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button></h6>

                          <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                            <div className="schedule-details">
                              <table style={{ textAlign: 'center' }}>
                                <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>

                                  <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                  <th className="title mb-0" style={{ fontWeight: '700' }}>1 MONTH</th>
                                  <th className="author mb-0" style={{ fontWeight: '700' }}>2 MONTH</th>
                                </tr>
                                {group.slice(0, 16).map((dataa, idex) => {
                                  return <tr className="schedule-content" key={idex}>
                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataa.level_name}</td>
                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                      {location === "IN" ? "₹" + dataa.rupees_1 : "$" + dataa.doller_1}
                                      <button type="button" onClick={() => addGroupcart(dataa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </td>
                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                      {location === "IN" ? "₹" + dataa.rupees_2 : "$" + dataa.doller_2}
                                      <button type="button" onClick={() => addGroupcart(dataa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                    </td>
                                  </tr>
                                })}
                              </table>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <Tabs>
            <TabList>

              <Tab>Belly Dance Private Classes With Our Senior Instructor</Tab>
              <Tab>Belly Dance Private Classes With Nupur Shah</Tab>
            </TabList>

            <TabPanel>
              <div className="container my-5">
                <h3 style={{ textAlign: 'center' }}>In-Studio Classes / Online Classes</h3>
                <div className="dance bgring1">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-img1">
                        <h4 style={{ paddingBottom: '30px' }}><b>Let This Egyptian Art from Make You Fall In Love With Yourself</b></h4>
                        <img src="\assets\img\dance\senior.jpg" alt="Aerial Belly" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="tab-text1" style={{ paddingTop: '30px' }}>
                        <h4>Belly Dance Private Classes with our senior instructor</h4>
                        <p>Embark on a personalized journey into the world of belly dance with our senior instructor at AerialBelly Studio. Our instructors, each possessing a minimum of 3 years of teaching experience and internationally trained belly dancers , are masters in their craft. Having showcased their skills in professional belly dance shows across India, they bring a wealth of knowledge to their classes.</p>
                        <p>With a global reach, our instructors have successfully trained over 3000 students, imparting the artistry of belly dance to enthusiasts worldwide. Experience the magic of private classes tailored to your pace and style, available both online via Google Meet and at our studio.</p>
                        <p>At AerialBelly, we are committed to providing an enriching and individualized learning experience. Join our private belly dance classes to refine your skills, guided by seasoned instructors who have mastered the art of this mesmerizing dance form.</p>
                        <p>Private class structure: Each class of 90 minutes. Classes include theory of 3 hours that includes belly dance history, forms , evolution, benefits, Egyptian musicality & understanding of every aspect of belly dance. Fundamentals, core and authentic techniques & moves , intense work outs for the flexibility of stomach muscles and back muscles. Full body conditioning for the understanding of advanced belly dance techniques. Sequences on authentic Egyptian music with understanding of every music in detail. Each level of 24 hours. Exam is included in the last training session. Certificate to the deserving ones will be provided after completion of every level.</p>
                        <p>It’s important to establish clear communication with the instructor to discuss and coordinate flexible class times based on the student’s availability.</p>
                        <p>We have customised private classes as well. To know more about our customised private classes, please get in touch with us via WhatsApp +91-8487990530.</p>
                      </div>
                    </div>
                  </div>


                  <div className="space">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7 col-xl-7 col-xxl-12">
                          <div className="class-schedule-wrapper">
                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                              <h3 style={{ textAlign: 'center' }}>Private Belly Dance Classes With Our Senior Instructor <br></br>  (Online/In-Studio Classes)</h3>
                              <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                <div className="schedule-details">
                                  <table style={{ textAlign: 'center' }}>
                                    <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                      <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                      <th className="title mb-0" style={{ fontWeight: '700' }}>DROP IN</th>
                                      <th className="author mb-0" style={{ fontWeight: '700' }}>8 CLASSES</th>
                                      <th className="author mb-0" style={{ fontWeight: '700' }}>16 CLASSES</th>
                                    </tr>

                                    {privatea.map((dataa, idex) => {
                                      return <tr className="schedule-content" key={idex}>
                                        <td className="time mb-0" style={{ textAlign: 'center' }}>{dataa.level_name}</td>
                                        <td className="title mb-0" style={{ textAlign: 'center' }}>
                                          {location === "IN" ? "₹" + dataa.rupees_1 : "$" + dataa.doller_1}
                                          <button type="button" onClick={() => addGroupcart(dataa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                        </td>
                                        <td className="title mb-0" style={{ textAlign: 'center' }}>
                                          {location === "IN" ? "₹" + dataa.rupees_2 : "$" + dataa.doller_2}
                                          <button type="button" onClick={() => addGroupcart(dataa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                        </td>
                                        <td className="title mb-0" style={{ textAlign: 'center' }}>
                                          {location === "IN" ? "₹" + dataa.rupees_3 : "$" + dataa.doller_3}
                                          <button type="button" onClick={() => addGroupcart(dataa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                        </td>
                                      </tr>
                                    })}
                                  </table>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>


                </div>
              </div>

            </TabPanel>

            <TabPanel>
              <div className="container mt-5">
                <h3 style={{ textAlign: 'center' }}>In-Studio Classes / Online Classes</h3>
                <div className="dance bgring1">

                  <div className="row">
                    <div className="col-12">
                      <div className="tab-img1">
                        <h4 style={{ paddingBottom: '30px' }}>Let This Egyptian Art from Make You Fall In Love With Yourself</h4>
                        <img src="\assets\img\dance\belly-pvt.jpg" alt="Aerial Belly" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="tab-text1" style={{ paddingTop: '30px' }}>
                        <h4>Belly Dance Private Classes with Nupur shah</h4>

                        <p>Embark on a mesmerizing journey of belly dance with AerialBelly Studio, offering exclusive private classes both online via Google Meet and offline at our Ahmedabad studio. Delve into the artistry of belly dance with none other than our founder, Nupur Shah, a seasoned instructor with a decade of global teaching experience. Nupur, an extraordinary belly dance artist and trainer, brings a wealth of knowledge to her classes. Having trained over 5 thousand students both online and offline, she has left an indelible mark on the belly dance community, particularly in Mumbai, Pune, and Ahmedabad. Nupur's expertise extends beyond teaching; she has graced stages worldwide and showcased her talent on national TV dance reality shows. Immerse yourself in the allure of Belly Dance/Raqs Sharqi with Nupur Shah, and let her guidance ignite your passion for this captivating dance form. Whether online or at our studio in Ahmedabad, these private classes promise a personalized and enchanting learning experience. Unleash the dancer within and fall in love with the magic of belly dance under the expert tutelage of Nupur Shah at AerialBelly Studio. Private class structure: Each class of 90 minutes. Classes include theory of 3 hours that includes belly dance history, forms , evolution, benefits, Egyptian musicality & understanding of every aspect of belly dance. Fundamentals, core and authentic techniques & moves , intense work outs for the flexibility of stomach muscles and back muscles. Full body conditioning for the understanding of advanced belly dance techniques. Sequences on authentic Egyptian music with understanding of every music in detail. Each level of 24 hours. Exam is included in the last training session. Certificate to the deserving ones will be provided after completion of every level.</p>
                        <p>It’s important to establish clear communication with the instructor to discuss and coordinate flexible class times based on the student’s availability.</p>
                        <p>We have customised private classes as well. To know more about our customised private classes, please get in touch with us via WhatsApp +91-8487990530.</p>


                      </div>
                    </div>
                  </div>
                  <div className="space">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7 col-xl-7 col-xxl-12">

                          <div className="class-schedule-wrapper">

                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                              <h3 style={{ textAlign: 'center' }}>Private Belly Dance Classes With Nupur Shah <br></br>  (Online/In-Studio Classes)</h3>
                              <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                <div className="schedule-details">
                                  <table style={{ textAlign: 'center' }}>
                                    <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>

                                      <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                      <th className="title mb-0" style={{ fontWeight: '700' }}>DROP IN</th>
                                      <th className="author mb-0" style={{ fontWeight: '700' }}>8 CLASSES</th>
                                      <th className="author mb-0" style={{ fontWeight: '700' }}>16 CLASSES</th>
                                    </tr>

                                    {privateaclass.map((dataa, idex) => {
                                      return <tr className="schedule-content" key={idex}>
                                        <td className="time mb-0" style={{ textAlign: 'center' }}>{dataa.level_name}</td>
                                        <td className="title mb-0" style={{ textAlign: 'center' }}>
                                          {location === "IN" ? "₹" + dataa.rupees_1 : "$" + dataa.doller_1}
                                          <button type="button" onClick={() => addGroupcart(dataa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                        </td>
                                        <td className="title mb-0" style={{ textAlign: 'center' }}>
                                          {location === "IN" ? "₹" + dataa.rupees_2 : "$" + dataa.doller_2}
                                          <button type="button" onClick={() => addGroupcart(dataa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                        </td>
                                        <td className="title mb-0" style={{ textAlign: 'center' }}>
                                          {location === "IN" ? "₹" + dataa.rupees_3 : "$" + dataa.doller_3}
                                          <button type="button" onClick={() => addGroupcart(dataa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                        </td>
                                      </tr>
                                    })}
                                  </table>
                                </div>
                              </div>


                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>


          </Tabs>
        </TabPanel>

        <TabPanel>
          <div className="container my-5">
            <div className="dance bgring1">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <img className="bellymon" src="\assets\img\dance\fusion.jpeg" alt="Aerial Belly" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1">
                    <h5><b>MONTHLY BOLLY BELLY CHOREOGRAPHY CLASSES</b></h5>
                    <p>Join AerialBelly Studio's monthly Bolly Belly Choreography Classes led by renowned instructor Nupur Shah. Craft a mesmerizing 2-minute sequence on iconic Bollywood tunes in just 8 classes/month, Tuesdays and Thursdays, 9-10 pm IST. Open to all ages(Above 7), no experience required. Experience the magic of Bollywood and belly dance with us!</p>
                    <h6> Fee: {location === 'IN' ? '₹ 2,700' : '$ 50'}</h6>
                    <div className="about-btn mt-40" style={{ cursor: 'pointer' }} onClick={() => addGroupcart(privateaclassmonthly[0].le_1_id)}><div className="th-btn gold-btn">ADD TO CART</div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="dance bgring1">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <img className="bellymon" src="\assets\img\dance\fusion2.jpeg" alt="Aerial Belly" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1">
                    <h5><b>MONTHLY INDO BELLY CHOREOGRAPHY CLASSES</b></h5>
                    <p>Belly dance is a Middle Eastern dance that originated in Egypt, which features movements of the hips and torso. It has evolved to take many different forms depending on the country and region, both in costume and dance style; with the Egyptian styles and costumes</p>
                    <h6> Fee: {location === 'IN' ? '₹ 2,000' : '$ 50'}</h6>
                    <div className="about-btn mt-40" style={{ cursor: 'pointer' }} onClick={() => addGroupcart(privateaclassmonthly[1].le_1_id)}><div className="th-btn gold-btn">ADD TO CART</div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="dance bgring1">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <img className="bellymon" src="\assets\img\dance\fusion3.jpeg" alt="Aerial Belly" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1">
                    <h5><b>MONTHLY SUFI BELLY DANCE CLASSES</b></h5>
                    <p>AerialBelly as we unveil an exciting and soul-stirring dance experience with our Sufi Belly Dance Batch, A fusion sequence of Contemporary & Belly Dance. Every month, we will teach a mesmerizing Sufi belly dance sequence set to an iconic Hindi Sufi song.
                      TUESDAYS & THURSDAYS 8pm to 9pm IST.
                      Monthly fee (8 classes): {location === 'IN' ? '₹ 3,000' : '$ 50'}. Each class of one hour. Classes are for everyone above the age of 10.</p>
                    <h6>Monthly fee (8 classes): {location === 'IN' ? '₹ 3,000' : '$ 50'}</h6>
                    <div className="about-btn mt-40" style={{ cursor: 'pointer' }} onClick={() => addGroupcart(privateaclassmonthly[2].le_1_id)}><div className="th-btn gold-btn">ADD TO CART</div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="dance bgring1">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <img className="bellymon" src="\assets\img\dance\fusion4.jpeg" alt="Aerial Belly" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1">
                    <h5><b>MONTHLY LOCK POP BELLY DANCE CLASSES</b></h5>
                    <p>AerialBelly as we unveil an exciting and mesmerizing dance experience with our Lock Pop Belly Dance Batch. Every month, we will teach a captivating fusion sequence of locking & popping & tribal belly dance sequence set to hypnotic and transformative music.
                      WEDNESDAY & FRIDAY
                      9 to 10pm IST
                      Monthly fee (8 classes): {location === 'IN' ? '₹3,000' : '$50'} Any age group above 10 can join this batch.</p>
                    <h6>Monthly fee (8 classes): {location === 'IN' ? '₹ 3,000' : '$ 50'}</h6>
                    <div className="about-btn mt-40" style={{ cursor: 'pointer' }} onClick={() => addGroupcart(privateaclassmonthly[3].le_1_id)}><div className="th-btn gold-btn">ADD TO CART</div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="container my-5">
            <div className="dance bgring1">
              <div className="row">
                <div className="col-md-5">
                  <div className="tab-img1">
                    <img className="bellymon" src="\assets\img\dance\fusion5.jpeg" alt="Aerial Belly" />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-text1">
                    <h5><b>DRUM SOLO BELLY DANCE CLASSES</b></h5>
                    <p> In this batch get ready to learn a super mesmerising sequence on a Drum Solo belly dance music which you can take  to stages and shows!</p>
                    <h6> Fee: {location === 'IN' ? '₹ 3,500' : '$ 50'}</h6>
                    <div className="about-btn mt-40" style={{ cursor: 'pointer' }} onClick={() => addGroupcart(privateaclassmonthly[4].le_1_id)}><div className="th-btn gold-btn">ADD TO CART</div></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </TabPanel>

      </Tabs>
      <style jsx>{`
                .ab_report th, td {
                    padding: 8px;
                    text-align: initial;
                    }
            `}</style>
    </div>
  );
}
export default BellyDance;






