import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Shop() {
  const [data, setData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getallproduct`
      );
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    } catch (err) {
      console.log(err);
      // setLoader(true);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  const handleimg = (e) => {
    e.target.src = "/assets/img/imgnot.png";
    e.target.alt = "Image not found";
  };

  return (
    <>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row flex-row-reverse">

            <div className="container">
              <div className="row gy-40">
                {data.map((dataa, id) => (
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="th-product product-grid">
                      <div className="product-img">
                        {/* <img src="assets/img/product/product_1_1.jpg" alt="Product Image" /> */}
                        <img
                          src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${dataa.photo}`}
                          style={{
                            // width: "70%",
                            // height: "100%",
                            // borderRadius: "50%",
                            // margin: "5px 0",
                          }}
                          draggable={false}
                          onError={handleimg}
                        />
                        <div className="actions">
                          <Link
                            className="delete-table me-2"
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            to={`/productdetails/${dataa.id}`}
                          >
                           <i class="fa-regular fa-eye"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-content">
                        {/* <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                          <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                        </div> */}
                        <h3 className="product-title">{dataa.title}</h3>
                        <span className="price">{dataa.amount}₹</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_1.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Pascaline Dress</h3>
                      <span className="price">$15,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_2.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Cocktail Dress</h3>
                      <span className="price">$14,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_3.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Bridesmaid Dress</h3>
                      <span className="price">$12,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_4.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Skirt Cocktail Dress</h3>
                      <span className="price">$17,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_4.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Skirt Cocktail Dress</h3>
                      <span className="price">$17,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_4.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Skirt Cocktail Dress</h3>
                      <span className="price">$17,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_4.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Skirt Cocktail Dress</h3>
                      <span className="price">$17,00.00</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src="assets/img/product/product_1_4.jpg" alt="Product Image" />
                      <div className="actions">
                        <a href="cart.html" className="icon-btn"><i className="fa-regular fa-cart-shopping"></i></a>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="star-rating" role="img" aria-label="Rated 5.00 out of 5">
                        <span>Rated <strong className="rating">5.00</strong> out of 5 based on <span className="rating">1</span> customer rating</span>
                      </div>
                      <h3 className="product-title">Skirt Cocktail Dress</h3>
                      <span className="price">$17,00.00</span>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          </div>

        </div>
      </section>




    </>
  )
}
export default Shop;