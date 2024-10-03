import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OurLiveShow() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <>
      <div
        className="dempp"
        style={{
          backgroundImage: "url('/assets/img/hero/ourliveshow_header.JPG')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "center",
        }}
      >
        <h2 style={{ paddingTop: "18%" }}>Our Live Show</h2>
        <p>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/"}
            style={{ color: "white" }}
          >
            Home{" "}
          </Link>{" "}
          / Our Live Show
        </p>
      </div>

      <div className="overflow-hidden space bgring" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="title-area mb-30">
              <h1 className="sec-title" style={{ textAlign: "center" }}>
                AerialBelly Live Shows
              </h1>
            </div>
            <div className="col-xl-6">
              <div className="img-box3">
                <div className="img1">
                  <img
                    src="assets/img/normal/liveshow.jpeg"
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
                <h3 className="sec-title">
                  OUR LIVE SHOWS, EVENTS AND WORKSHOPS WORLDWIDE
                </h3>
              </div>
              <p className="sec-desc mt-n2 mb-30">
                Experience the mesmerizing fusion of elegance and
                gravity-defying artistry with AerialBelly Dance Company’s live
                shows. Immerse yourself in the captivating synergy of authentic
                Belly Dance and Aerial arts, where skillful performers weave a
                tapestry of movement and grace. Book us now for an enchanting
                evening that transcends boundaries and elevates entertainment to
                new heights. A unique blend of dance forms awaits, promising an
                unforgettable spectacle that will leave you spellbound.
              </p>
              <p className="sec-desc mt-n2 mb-30">
                We also conduct our Belly Dance workshops in various cities of
                the world.
              </p>
              <div className="about-btn mt-40">
                <button onClick={openModal} className="th-btn gold-btn">
                  Book Us Now
                </button>
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

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h3>Thank you for showing interest</h3>
            <p>
              Thank you for showing interest in making Aerial Belly a part of
              your grand event. Please let us know about your requirement,
              events & about your company via an email{" "}
              <h6>
                <a
                  href="mailto:aerialbelly@gmail.com"
                  className="info-box_link"
                  style={{ color: "black" }}
                >
                  aerialbelly@gmail.com
                </a>
              </h6>
              We will revert to your email at the earliest.
            </p>

            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              to={"https://api.whatsapp.com/send?phone=918487990530&text=Hello"}
              className="th-btn gold-btn"
            >
              Contact on WhatsApp
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;

          position: fixed;
          z-index: 10;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background-color: #fefefe;
          margin: auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 500px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease-in-out;
        }
        .close-button {
          color: #aaa;
          font-size: 28px;
          font-weight: bold;
          text-align: end;
        }
        .close-button:hover,
        .close-button:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .modal-content {
            width: 90%;
            max-width: 90%;
          }
        }
      `}</style>
    </>
  );
}

export default OurLiveShow;
