import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import locContext from "../context/locContext";
import Swal from "sweetalert2";

function ProductDetails() {
  const location = useContext(locContext);
  const userRoll = JSON.parse(localStorage.getItem("aerialst"))
  const user_id = userRoll ? userRoll.id : null
  const navigate = useNavigate();
  const [size, setSize] = useState([])
  const [color, setColor] = useState([])
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 50) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const { id } = useParams();
  const [data, setData] = useState([]);

  const getProductData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getproductbyid/${id}`
      );
      if (res.status === 200) {
        setData(res.data.data[0]);
        setSize(res.data.data[0].size.split(',').map(item => ({ name: item })));
        setColor(res.data.data[0].color.split(','))
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

  const [cart, setCart] = useState({
    "user_id": user_id,
    "cart_type": 1,
    "quantity": quantity
  });
  console.log(cart);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCart({
      ...cart,
      text: value
    })
  }

  const addGroupcart = async () => {
    try {
      if (!user_id) {
        navigate("/loginpage");
      } else if (!cart.size || cart.size === "Size") {
        Swal.fire({
          icon: "warning",
          title: "Please select size",
          timer: 1500,
        })
      } else if (!cart.color) {
        Swal.fire({
          icon: "warning",
          title: "Please select color",
          timer: 1500,
        })
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
    }

  }

  useEffect(() => {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: quantity,
    }));
  }, [quantity]);

  const handleimg = (e) => {
    e.target.src = "/assets/img/imgnot.png";
    e.target.alt = "Image not found";
  };

  return (

    <div className="white-popup my-5">
      <div className="container bg-white">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-thumb-area">
              <div>
                <div className="img">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${data.photo}`}
                    draggable={false}
                    onError={handleimg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="product-about">
              <h2 className="product-title" >{data.title}</h2>
              <p className="text">
                {data.description}
              </p>
              <div className="actions">
                <div className="quantity">
                  <input
                    type="number"
                    className="qty-input"
                    step="1"
                    name="quantity"
                    value={quantity}
                    title="Qty"
                    readOnly
                  />
                  <button className="quantity-plus qty-btn" onClick={handleIncrease}>
                    <i className="far fa-chevron-up"></i>
                  </button>
                  <button className="quantity-minus qty-btn" onClick={handleDecrease}>
                    <i className="far fa-chevron-down"></i>
                  </button>
                </div>
                <button onClick={() => addGroupcart()} className="th-btn">Add to Cart</button>

              </div>
              <div className="product_meta">
                <div className="row">
                  <div className="col-md-3 col-4">
                    <div className="add-form">
                      <select
                        name="id_branch"
                        id="id_branch"
                        className="form-select"
                        required
                        onChange={(e) => {
                          const { value } = e.target;
                          setCart((prevValues) => ({
                            ...prevValues,
                            size: value,
                          }));
                        }}
                      >
                        <option value="Size">Size</option>
                        {size.length > 0
                          ? size.map((data) => (
                            <option
                              key={data.id}
                              data-key={data.id}
                            >
                              {data.name}
                            </option>
                          ))
                          : null}
                      </select>
                    </div>
                  </div>
                  <div className="col-6 d-flex gap-3" style={{ flexWrap: 'wrap' }}>
                    <div style={{ border: '2px solid black', height: '46px', width: '46px', padding: '4px', borderRadius: '25%' }}>
                      <div style={{ background: cart.color, height: '35px', width: '35px', borderRadius: '25%' }}></div>
                    </div>
                    {color.map((dataa, index) => {
                      return <div
                        onClick={(e) => {
                          setCart((prevValues) => ({
                            ...prevValues,
                            color: dataa
                          }))
                        }}
                        style={{ background: dataa, height: '30px', width: '30px', borderRadius: '25%' }}></div>
                    })}
                  </div>

                  <div className="col-lg-7 mt-2">
                    <div className="form-group">
                      <label>Description</label>
                      <input
                        type="text"
                        name="text"
                        className="form-control"
                        onChange={handleInputChange}
                        placeholder="Description"
                        required
                      />
                    </div>
                  </div>
                </div>
                <span className="posted_in mt-3">Amount : <span className="sku">{data.amount}₹</span></span>
              </div>

            </div>
            <Link onClick={() => window.scrollTo({ top: 0, behavior: "instant" })} to={'/shop'} style={{ color: 'white' }}>
              <button className="th-btn mt-4" style={{ marginTop: '30px !important' }}>
                Back
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div >
  )
}
export default ProductDetails;