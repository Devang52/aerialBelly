import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import locContext from "../context/locContext";
import { Link } from "react-router-dom";

export default function OrderList() {
  const location = useContext(locContext);

  const userRoll = JSON.parse(localStorage.getItem("aerialst"));
  const id = userRoll.id;
  const [data, setData] = useState([]);
  console.log(data);

  const getAddtoCartData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getOrderItem/${id}`
      );
      if (res.status === 200) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAddtoCartData();
  }, []);
  const handleimg = (e) => {
    e.target.src = "/assets/img/imgnot.png";
    e.target.alt = "Image not found";
  };
  return (
    <>
      <div className="th-cart-wrapper space-top space-extra-bottom">
        <div className="container">
          <nav
            aria-label="breadcrumb"
            style={{ "--bs-breadcrumb-divider": "none" }}
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to="/"
                >
                  Home{" "}
                </Link>
                /
              </li>
              <li className="breadcrumb-item">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                  to="/addtocard"
                >
                  Add To Cart{" "}
                </Link>
                /
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Order List
              </li>
            </ol>
          </nav>
          <form action="#" className="woocommerce-cart-form mt-5">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Level</th>
                  <th className="cart-col-total">Duration</th>
                  <th className="cart-col-quantity">Size</th>
                  <th className="cart-col-quantity">Color</th>
                  <th className="cart-col-quantity">Description</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-remove">Amount</th>
                  <th className="cart-col-remove"></th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="12">No data available</td>
                  </tr>
                ) : (
                  data.map((dataa, index) => {
                    return (
                      <tr className="cart_item" key={index}>
                        <td data-title="Image">
                          <a
                            className="cart-productimage"
                            href="shop-detailis.html"
                          >
                            <img
                              width="91"
                              height="91"
                              src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${dataa.photo ? dataa.photo : dataa.w_photo}`}
                              draggable={false}
                              onError={handleimg}
                            />
                          </a>
                        </td>
                        <td data-title="Porduct Name">
                          <a
                            className="cart-productname"
                          >
                            {dataa.table_name === null ? (dataa.title === null ? dataa.w_name : dataa.title) : dataa.table_name}
                          </a>
                        </td>
                        <td data-title="Level">
                          <span className="amount">
                            {dataa.level_name === null ? '-' : dataa.level_name}
                          </span>
                        </td>
                        <td data-title="Duration">
                          <span className="amount">
                            {dataa.duration === null ? '-' : dataa.duration}
                          </span>
                        </td>
                        <td data-title="Size">
                          <span className="amount">
                            {dataa.size === null ? '-' : dataa.size}
                          </span>
                        </td>
                        <td data-title="Color" style={{ textAlign: '-webkit-center' }}>
                          <span className="amount">
                            {dataa.color === null ? '-' : <div style={{ background: dataa.color, height: '35px', width: '35px', borderRadius: '25%' }}></div>}
                          </span>
                        </td>
                        <td data-title="Description">
                          <span className="amount">
                            {dataa.text === null ? '-' : dataa.text}
                          </span>
                        </td>
                        <td data-title="Quantity">
                          <span className="amount">
                            {dataa.quantity === null ? '-' : dataa.quantity}
                          </span>
                        </td>
                        <td data-title="Amount">
                          <span className="amount">
                            {/* {dataa.amount === null
                              ? (location === "IN" ? "₹" + dataa.rupees : "$" + dataa.doller)
                              : "₹" + dataa.amount} */}
                            {dataa.amount === null
                              ? (location === "IN" ? "₹" + (dataa.rupees === null ? dataa.w_amount : dataa.rupees) : "$" + dataa.doller)
                              : "₹" + dataa.amount}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
}
