import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import locContext from "../context/locContext";

function Navbar() {
  const location = useContext(locContext);
  const userRoll = JSON.parse(localStorage.getItem("adminRoll"));

  const [auth, setAuth] = useState(false);
  // const [name, setName] = useState('');
  // const [message, setMessage] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate(); // Use navigate to programmatically navigate

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(process.env.REACT_APP_BACKEND_BASE_URL);
  //       if (res.data.Status === "Success") {
  //         setAuth(true);
  //         setName(res.data.name);
  //       } else {
  //         setAuth(false);
  //         setMessage(res.data.Message);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setMessage("Error fetching data");
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleLogout = async () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/logout`)
          .then((res) => {
            if (res.data.Status === "Success") {
              document.cookie =
                "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
              localStorage.removeItem("adminRoll");
              localStorage.removeItem("aerialst");
              navigate("/");

              Swal.fire({
                icon: "success",
                title: "User Logout",
                timer: 1500,
              });
            } else {
              alert("Error");
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <>
      {(userRoll === null || userRoll === "student") && (
        <>
          <div className="whatapp">
            <a href="https://api.whatsapp.com/send?phone=918487990530&amp;text=Hello">
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </a>
          </div>
          <div
            className={
              isToggled
                ? "sidemenu-wrapper show style2 d-lg-block"
                : "sidemenu-wrapper style2 d-lg-block"
            }
          >
            <div className="sidemenu-content bgringggg2">
              <button
                className="closeButton sideMenuCls"
                onClick={() => setIsToggled(false)}
              >
                <i className="far fa-times"></i>
              </button>
              <div className="about-logo" style={{ marginTop: "40px" }}>
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to={"/"}
                >
                  <img
                    src="assets/img/Aerial_Belly_Final_Logo.png"
                    alt="Aerial Belly"
                  />
                </Link>
              </div>
              <div className="widget mt-5">
                <div className="recent-post-wrap">
                  <div className="recent-post style2">
                    <ul>
                      <li className="navpho" onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/about"}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="navpho" onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/bellydance"}
                        >
                          Belly Dance Classes
                        </Link>
                      </li>
                      <li className="navpho" onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/aerialbellyart"}
                        >
                          Aerial Arts Classes
                        </Link>
                      </li>
                      <li className="navpho" onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/bellydanceworkshop"}
                        >
                          Belly Dance Workshop
                        </Link>
                      </li>
                      <li className="navpho" onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/prerecordingclasses"}
                        >
                          Pre Recorded Classes
                        </Link>
                      </li>
                      <li className="navpho" onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/addtocard"}
                        >
                          My Cart
                        </Link>
                      </li>



                      <li onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/studiorental"}
                        >
                          Studio Rental And Collaboration
                        </Link>
                      </li>

                      <li onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/omi"}
                        >
                          OMI - Our Annual Show
                        </Link>
                      </li>

                      <li onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/ourliveshow"}
                        >
                          Live Shows
                        </Link>
                      </li>

                      <li onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/annualmember"}
                        >
                          Annual Membership
                        </Link>
                      </li>
                      <li onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/packages"}
                        >
                          Packages & Discounts
                        </Link>
                      </li>
                      <li onClick={() => setIsToggled(false)}>
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/terms-&-conditions"}
                        >
                          Terms  & Conditions
                        </Link>
                      </li>
                      {location === 'IN'
                        ? <li onClick={() => setIsToggled(false)}>
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "instant" })
                            }
                            to={"/shop"}
                          >
                            Shop
                          </Link>
                        </li>
                        : ''}
                      {userRoll ? (
                        <li onClick={() => setIsToggled(false)}>
                          {/* <li onClick={() => setIsToggled(false)}>
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "instant" })
                              }
                              to={"/addtocard"}
                            >
                              Add To Cart
                            </Link>
                          </li> */}
                          <li
                            onClick={() => setIsToggled(false)}
                            className="mt-5"
                          >
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "instant" })
                              }
                              to={"/orderlist"}
                            >
                              My Orders
                            </Link>
                          </li>
                          <li
                            onClick={() => setIsToggled(false)}
                          >
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "instant" })
                              }
                              to={"/profile"}
                            >
                              Profile
                            </Link>
                          </li>
                          <li onClick={() => setIsToggled(false)}                          >
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "instant" })
                              }
                              to={"/payment-history"}
                            >
                              Payment History
                            </Link>
                          </li>
                          {/* <Link onClick={handleLogout}>Logout</Link> */}
                          <Link
                            onClick={handleLogout}
                            style={{ fontWeight: 650, color: "black" }}
                          >
                            Logout
                          </Link>
                        </li>
                      ) : (
                        <li onClick={() => setIsToggled(false)}>
                          <Link to={"/loginpage"}>Login</Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget">
                <div className="th-widget-about">
                  <div className="th-social style2">
                    <Link to={"https://www.facebook.com/share/9XT9SNsX2vaAyTLk/?mibextid=LQQJ4d"} target="blank">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to={"https://www.instagram.com/aerialbelly?igsh=MnNrYmdjYnpmY2w1"} target="blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to={"https://youtube.com/@nupurshahh?si=77KsUw4I3NB4rya0"} target="blank">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link to={"https://g.co/kgs/5HqUQBb"} target="blank">
                      <i className="fa-brands fa-google"></i>
                    </Link>
                    <Link to={"mailto:aerialbelly@gmail.com"} target="blank">
                      <i className="fa-solid fa-envelope"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <header className="th-header header-layout2">
            <div className="sticky-wrapper">
              <div className="menu-area">
                <div className="container">
                  <div className="row align-items-center justify-content-between bgring2">
                    <div className="col-auto">
                      <div className="header-logo">
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/"}
                        >
                          <img
                            src="/assets/img/Aerial_Belly_Final_Logo.png"
                            alt="Aerial Belly"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-auto">
                      <nav className="main-menu d-none d-lg-inline-block">
                        <ul>
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
                          <li className="menu-item-has-children">
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "instant" })
                              }
                              to={"/bellydance"}
                            >
                              Our courses
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link
                                  onClick={() =>
                                    window.scrollTo({
                                      top: 0,
                                      behavior: "instant",
                                    })
                                  }
                                  to={"/bellydance"}
                                >
                                  Belly Dance Classes
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={() =>
                                    window.scrollTo({
                                      top: 0,
                                      behavior: "instant",
                                    })
                                  }
                                  to={"/aerialbellyart"}
                                >
                                  Aerial Arts Classes
                                </Link>
                              </li>
                            </ul>
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
                              Pre-Recorded Classes
                            </Link>
                          </li>
                          <li>
                            <Link to={'/addtocard'}>
                              <button
                                style={{ height: '45px', width: '46px', fontSize: '17px' }}
                                type="button"
                                className="th-menu-toggle"
                              >
                                <i class="fa-solid fa-cart-shopping"></i>
                              </button>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <button
                      type="button"
                      onClick={handleToggle}
                      className="th-menu-toggle"
                    >
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="logo-bg"></div>
              <div className="menu-bg"></div>
            </div>
          </header>
        </>
      )}

      {userRoll === "admin" && (
        <>
          <div className="header">
            <div className="header-left">
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to={"/"}
                className="logo"
              >
                {/* <img src="/assets/img/nobel2.png" alt="Logo" width="60" height="60" /> */}
                <img
                  src="/assets/img/Aerial_Belly_Final_Logo.png"
                  alt="Aerial Belly"
                />
              </NavLink>
            </div>
            <a
              onClick={handleToggle}
              className={isToggled ? "navbartog mobile_btn" : "mobile_btn"}
            >
              <i className="fas fa-align-left"></i>
            </a>
            <div className="header-split" style={{ pointerEvents: 'none' }}>
              <div className="page-headers">
                <div className="search-bar">
                  <span>
                    <i className="fe fe-search"></i>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                </div>
              </div>
              <ul className="nav user-menu" style={{ pointerEvents: 'initial' }}>
                <li className="nav-item dropdown logout-box">
                  <a href="#" className="user-NavLink  nav-NavLink">
                    <span className="user-img" onClick={handleLogout}>
                      <i
                        className="fa-solid fa-arrow-right-from-bracket"
                        style={{ color: "#26448c", fontSize: "20px" }}
                      ></i>
                      <span className="animate-circle"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Sidebar --> */}
          <div
            onClick={handleToggle}
            className={isToggled ? "navbartog sidebar" : "sidebar"}
            id="sidebar"
          >
            <div className="sidebar-header">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                to={"/student"}
              >
                <div className="sidebar-logo">
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }
                    to={"/student"}
                  >
                    {/* <img src="/assets/img/nobel2.png" className="img-fluid logo" alt="" /> */}
                    <img
                      src="/assets/img/Aerial_Belly_Final_Logo.png"
                      className="img-fluid logo"
                      alt="Aerial Belly"
                    />
                  </Link>
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }
                    to={"/student"}
                  >
                    <img
                      src="/assets/img/Aerial_Belly_Final_Logo.png"
                      className="img-fluid logo-small"
                      alt="Aerial Belly"
                    />
                    {/* <img src="/assets/img/nobel2.png" className="img-fluid logo-small" alt="" /> */}
                  </Link>
                </div>
              </Link>
            </div>

            <div className="sidebar-inner slimscroll">
              <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                  {/* <li className="menu-title m-0">
                                <h6>Home</h6>
                            </li> */}
                  {/* <li>
                    <NavLink to={'/'}>
                      <i className="fa-solid fa-house"></i>
                      <span>Dashboard</span>
                    </NavLink>
                  </li> */}
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/student"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Students</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/workshop"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Workshop</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/event"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Events</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/product"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Product</span>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/subscription-plan"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Subscription Plan</span>
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/tablename"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>TableName</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/all-payment-history"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Payment History</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                      to={"/purchasepackages"}
                    >
                      <i className="fa-solid fa-book"></i>
                      <span>Purchase Packages</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
