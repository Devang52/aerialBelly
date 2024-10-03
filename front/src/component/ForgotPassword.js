import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function ForgotPassword() {
    const navigate = useNavigate();
    const [firstFormClass, setFirstFormClass] = useState('login-form first flip-card');
    const [secondFormClass, setSecondFormClass] = useState('login-form second');
    const [thirdFormClass, setThirdFormClass] = useState('login-form third');

    const [data, setData] = useState({
        email: ''
    });
    const [verify, setVerify] = useState({})
    const [password, setPassword] = useState({});
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([]);


    const handleChange = (element, index) => {
        const value = element.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setVerify({
            email: data.email,
            otp: newOtp.join('')
        })

        if (value && index < 3) {
            inputRefs.current[index + 1].focus();
        }
    };
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };


    //      send OTP 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const emailValid = validateEmail(data.email);

            if (!data.email) {
                Swal.fire({
                    title: "Please enter Email",
                    icon: "warning",
                });
            } else if (!emailValid) {
                Swal.fire({
                    title: "Please enter valid email",
                    icon: "warning",
                });
            } else {
                // setFirstFormClass('login-form first');
                // setSecondFormClass('login-form second flip-card');
                // setThirdFormClass('login-form third');
                const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/reqOTP`, data);
                if (res.status === 200) {
                    // Swal.fire({
                    //     icon: "success",
                    //     title: "OTP Sent Successfully",
                    //     timer: 1000,
                    // })
                    setFirstFormClass('login-form first');
                    setSecondFormClass('login-form second flip-card');
                    setThirdFormClass('login-form third');
                } else if (res.status === 201) {
                    Swal.fire({
                        title: "This Email is not Register",
                        icon: "warning",
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        title: "OTP Sent Failed",
                        icon: "error",
                    });
                }
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: true,
            });
        }
    }

    //      OTP verify
    const handleSubmitVerify = async (e) => {
        e.preventDefault();
        try {
            // setFirstFormClass('login-form first');
            // setSecondFormClass('login-form second');
            // setThirdFormClass('login-form third flip-card');
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/verifyOTP`, verify);
            if (res.status === 200) {
                // Swal.fire({
                //     icon: "success",
                //     title: "OTP Verification Successfully",
                //     timer: 1500,
                // })
                setFirstFormClass('login-form first');
                setSecondFormClass('login-form second');
                setThirdFormClass('login-form third flip-card');
            } else if (res.status === 201) {
                Swal.fire({
                    title: "Invalid OTP",
                    icon: "warning",
                });
            } else {
                Swal.fire({
                    title: "OTP Verification Failed",
                    icon: "error",
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: true,
            });
        }
    }

    console.log(password);

    //      change Password
    const handleSubmitPassword = async (e) => {
        e.preventDefault();

        try {

            if (!password.password) {
                Swal.fire({
                    title: "Please enter data",
                    icon: "warning",
                });
            } else {
                const res = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/forgetPassword`, password);
                if (res.status === 200 && res.data.data) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Password is Forgot Successfully",
                        timer: 1500,
                    }).then(() => {
                        navigate("/loginpage");
                    });
                } else {
                    // Unsuccessful request
                    Swal.fire({
                        title: "Password Forgot failed",
                        icon: "error",
                    });
                }
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Something went wrong",
                showConfirmButton: true,
            });
        }
    }




    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="login-page">
                <form className={firstFormClass} onSubmit={handleSubmit}>
                    <div className="table-actions d-flex">
                        <Link
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            to={"/loginpage"}
                            className="delete-table me-2"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="about-logo" style={{ textAlign: "center" }}>
                        <Link
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            to={"/"}
                        >
                            <img
                                src="/assets/img/Aerial_Belly_Final_Logo.png"
                                alt="Aerial Belly"
                            />
                        </Link>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className="form-group">
                            <label>Email</label>
                            <div className='d-flex justify-content-between gap-3'>
                                <input
                                    type="email"
                                    name="user_id"
                                    className="form-control"
                                    placeholder="Enter Your Email Id"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    style={{ width: '70%' }}
                                />
                                <button className="btn btn-cancel small-long" style={{ height: '45px', fontSize: '15px' }}>OTP</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form className={secondFormClass} onSubmit={handleSubmitVerify}>
                    <div className="table-actions d-flex">
                        <div
                            onClick={() => {
                                setFirstFormClass('login-form first flip-card')
                                setSecondFormClass('login-form second')
                            }}
                            className="delete-table me-2"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </div>
                    </div>
                    <div className="about-logo" style={{ textAlign: "center" }}>
                        <Link
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            to={"/"}
                        >
                            <img
                                src="/assets/img/Aerial_Belly_Final_Logo.png"
                                alt="Aerial Belly"
                            />
                        </Link>
                    </div>

                    <div className='col-12 mt-5'>
                        <div className="form-group">
                            <div className='d-flex mt-4 justify-content-center gap-3'>
                                {otp.map((data, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        required
                                        maxLength="1"
                                        value={data}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        style={{
                                            width: '40px',
                                            padding: '1px',
                                            height: '50px',
                                            fontSize: '24px',
                                            textAlign: 'center',
                                        }}
                                    />
                                ))}
                                <button className="btn btn-cancel small-long" style={{ height: '45px', fontSize: '15px' }}>Verify</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form className={thirdFormClass} onSubmit={handleSubmitPassword}>
                    <div className="about-logo" style={{ textAlign: "center" }}>
                        <Link
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            to={"/"}
                        >
                            <img
                                src="/assets/img/Aerial_Belly_Final_Logo.png"
                                alt="Aerial Belly"
                            />
                        </Link>
                    </div>

                    <div className='col-12 mt-4'>
                        <div className="form-group">
                            <label>Password</label>
                            <div className='d-flex justify-content-between gap-3'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    className="form-control"
                                    required
                                    placeholder="Enter Your Password"
                                    onChange={(e) => {
                                        setPassword({
                                            email: data.email,
                                            password: e.target.value
                                        })
                                    }}
                                    style={{ width: '100%' }}
                                />
                                <div className="btn btn-cancel small-long" onClick={handleTogglePassword} style={{ height: '45px' }}>
                                    {showPassword
                                        ? <i class="fa-solid fa-eye-slash" style={{ color: '#ffffff', position: 'initial' }}></i>
                                        : <i class="fa-solid fa-eye" style={{ color: '#ffffff', position: 'initial' }}></i>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="th-btn gold-btn my-4" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}
