import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Registration() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    nationality: "",
    city: "",
    code: "+91",
    phone: "",
    w_number: "",
    gender: "",
    dob: "",
    health: "no",
    h_issue: "",
    start_date: "",
    user_type: "student",
  });

  const navigate = useNavigate();
  const [wnum, setWnum] = useState(true)
  const [hisu, setHisu] = useState(false)
  const handleOptionChange = (event) => {
    const { name, checked, value } = event.target;

    if (name === 'w_number') {
      setData((prevData) => {
        if (checked) {
          setWnum(false)
          return {
            ...prevData,
            w_number: data.phone // Update the name field with the value
          };
        } else {
          setWnum(true)
          return {
            ...prevData,
            w_number: ""
          };
        }
      });
    } else if (name === 'health') {
      setData((prevData) => {
        if (checked) {
          setHisu(true)
          return {
            ...prevData,
            health: 'yes'
          };
        } else {
          setHisu(false)
          return {
            ...prevData,
            health: 'no',
            h_issue: ''
          };
        }
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  console.log(data);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedData = {
      name: data.name.trim(),
      email: data.email.trim(),
      password: data.password.trim(),
      phone: data.phone.trim(),
      w_number: data.w_number.trim(),
      dob: data.dob.trim(),
      gender: data.gender.trim(),
      health: data.health.trim(),
      address: data.address.trim(),
      city: data.city.trim(),
      user_type: data.user_type,
    };

    if (Object.values(trimmedData).some((value) => !value)) {
      Swal.fire({
        icon: "warning",
        title: "Please enter all data",
      });
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/create-user`,
        data
      );

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          timer: 1500,
        }).then(() => {
          navigate("/loginpage");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
        });
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "warning",
        title: "Error",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-page" style={{ height: 'initial' }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="about-logo" style={{ textAlign: "center" }}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            to={"/"}
          >
            <img
              src="assets/img/Aerial_Belly_Final_Logo.png"
              alt="Aerial Belly"
            />
          </Link>
        </div>
        <h2>Registration</h2>
        <div className="form-group mt-4">
          <label htmlFor="username">Full Name :</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="name"
            type="text"
            id="username"
            required
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="email"
            type="email"
            id="email"
            required
            placeholder="Enter Your E-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="password"
            type="password"
            id="password"
            required
            placeholder="Enter Your Password"
          />
        </div>

        <div className="form-group">
          <label>Nationality</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="nationality"
            type="text"
            id="nationality"
            required
            placeholder="Enter your Nationality"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="city"
            type="text"
            id="city"
            required
            placeholder="Enter your city"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            onChange={handleInputChange}
            name="address"
            id="address"
            required
            placeholder="Enter Your Address"
          />
        </div>

        <div class="phone-container" style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
          <select className="form-control" onChange={(e) => (setData((prevData) => ({ ...prevData, code: e.target.value })))} style={{ width: '30%', marginRight: '10px' }}>
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
          </select>
          <input onChange={handleInputChange} className="form-control" name="phone" style={{ width: '70%' }} type="tel" placeholder="Phone number" />
        </div>

        <div className="siderbar-toggle">
          <label className="switch">
            <input
              type="checkbox"
              name="w_number"
              onChange={handleOptionChange}
            />
            <span className="slider round"></span>
            <span style={{ paddingLeft: '60px' }}>Your Phone Number and WhatsApp number are same?</span>
          </label>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="w_number">Whatsapp Number</label>
          <input
            className="form-control"
            value={data.w_number}
            disabled={wnum ? false : true}
            onChange={handleInputChange}
            name="w_number"
            type="tel"
            id="w_number"
            required
            placeholder="Whatsapp Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="dob"
            type="date"
            id="dob"
            required
            max="2004-12-31"
            placeholder="Date of Birth"
          />
        </div>
        <p style={{ fontSize: "17px", color: "black" }}>Select your gender:</p>

        <div className="radio-buttons">
          <div className="form-groups">
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={data.gender === "Male"}
                onChange={handleOptionChange}
                style={{ height: "26px" }}
              />
              <span>Male</span>
            </label>
          </div>

          <div className="input-groups">
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={data.gender === "Female"}
                onChange={handleOptionChange}
                style={{ height: "26px" }}
              />
              <span>Female</span>
            </label>
          </div>
          <div className="input-groups">
            <label className="gender-option">
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={data.gender === "Other"}
                onChange={handleOptionChange}
                style={{ height: "26px" }}
              />
              <span>Other</span>
            </label>
          </div>
        </div>

        <p style={{ fontSize: "17px", color: "black" }}>Any health issues?</p>

        <div className="siderbar-toggle">
          <label className="switch">
            <span>No</span>
            <input
              type="checkbox"
              name="health"
              onChange={handleOptionChange}
            />
            <span className="slider round" style={{ marginLeft: '30px' }}></span>
            <span style={{ paddingLeft: '60px' }}>Yes</span>
          </label>
        </div>

        <div className="form-group">
          <label>Describe Your Health Issues</label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="h_issue"
            disabled={hisu ? false : true}
            type="text"
            id="h_issue"
            required
            placeholder="Describe Your Health Issues"
          />
        </div>

        <div className="form-group">
          <label>Date of joining classes </label>
          <input
            className="form-control"
            onChange={handleInputChange}
            name="start_date"
            type="date"
            id="start_date"
            placeholder="Describe Your Health Issues"
          />
        </div>

        <button className="th-btn gold-btn" type="submit">
          Submit
        </button>
        <div className="signup-text my-2">
          <p>
            Have an account?{" "}
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              to={"/loginpage"}
            >
              Log in
            </Link>
          </p>
        </div>
      </form >
    </div >
  );
}
