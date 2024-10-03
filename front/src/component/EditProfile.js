import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export default function EditProfile() {
    const userRoll = JSON.parse(localStorage.getItem("aerialst"))
    const id = userRoll ? userRoll.id : null

    const [data, setData] = useState({
        name: "",
        email: "",
        address: "",
        de_address: "",
        nationality: "",
        city: "",
        phone: "",
        w_number: "",
        dob: "",
        photo: null
    });
    const navigate = useNavigate();
    const getSubsriptionData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getStudentbyID/${id}`
            );

            if (res.status === 200) {
                setData(res.data.data[0]);
            } else {
                setData([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getSubsriptionData();
    }, []);

    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            setSelectedFile(URL.createObjectURL(file));
            setData({
                ...data,
                [name]: file
            })
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };


    const headleSubmit = async (e) => {
        e.preventDefault();

        try {
            const trimmedData = {
                name: data.name.trim(),
                email: data.email.trim(),
                address: data.address.trim(),
                de_address: data.de_address.trim(),
                city: data.city.trim()
            };

            if (!trimmedData.name || !trimmedData.email || !trimmedData.address || !trimmedData.de_address || !data.dob) {
                Swal.fire({
                    title: "Please enter data",
                    icon: "warning",
                });
            } else {
                const formDataObject = new FormData();
                for (const key in data) {
                    formDataObject.append(key, data[key])
                }
                const res = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/editusers/${id}`, formDataObject);

                if (res.status === 200 && res.data.data) {
                    Swal.fire({
                        icon: "success",
                        title: "Event Inserted Successfully",
                        timer: 1500,
                    }).then(() => {
                        navigate("/profile");
                    });
                } else {
                    // Unsuccessful request
                    Swal.fire({
                        title: "Event Inserted failed",
                        icon: "error",
                    });
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleimgFe = (e) => {
        e.target.src = "/assets/img/avtar_fe.jpg";
        e.target.alt = "Image not found";
    };
    const handleimgMe = (e) => {
        e.target.src = "/assets/img/avtar_ma.jpg";
        e.target.alt = "Image not found";
    };
    return (
        <>
            <div className="space-bottom overflow-hidden" id="contact-sec" style={{ marginTop: '1%' }}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <div className="contact-image"><img src="/assets/img/normal/class_schedules.png" alt="" /></div>
                        </div>
                        <div className="col-lg-6">
                            <div className="title-area mt-n1 mb-35">
                                <h2 className="sec-title">Edit Profile</h2>
                            </div>
                            <form className="contact-us-form ajax-contact" onSubmit={headleSubmit}>
                                <div className="row">
                                    {/* <div className="form-group col-md-6">
                                        <img
                                            src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${data.photo}`}
                                            style={{
                                                width: "190px",
                                                height: "200px",
                                                borderRadius: "15px",
                                                margin: "5px 0",
                                            }}
                                            draggable={false}
                                            onError={handleimg}
                                        />
                                    </div> */}
                                    <div className="form-group col-md-6">
                                        {selectedFile
                                            ? (
                                                <div>
                                                    <img
                                                        src={selectedFile}
                                                        style={{
                                                            width: "190px",
                                                            height: "200px",
                                                            borderRadius: "15px",
                                                            margin: "5px 0",
                                                            objectFit: 'cover'
                                                        }}
                                                        draggable={false}
                                                        onError={data.gender === 'Male' ? handleimgMe : handleimgFe}
                                                    />
                                                </div>
                                            )
                                            : (
                                                <div>
                                                    <img
                                                        src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${data.photo}`}
                                                        alt="Selected"
                                                        style={{
                                                            width: "190px",
                                                            height: "200px",
                                                            borderRadius: "15px",
                                                            margin: "5px 0",
                                                            objectFit: 'cover'
                                                        }}
                                                        draggable={false}
                                                        // onError={data.gender === 'Male' ? handleimgMe : handleimgFe}
                                                        onError={data.gender === 'Male' ? handleimgFe : handleimgMe}
                                                    />
                                                </div>
                                            )}
                                        <div className="file-input mt-2">
                                            <input
                                                type="file"
                                                name="photo"
                                                id="file-input"
                                                accept="image/*"
                                                className="file-input__input"
                                                onChange={handleFileChange} // Handle file selection
                                            />
                                            <label className="file-input__label" htmlFor="file-input" style={{ width: '190px', display: 'flex', justifyContent: 'space-evenly' }}>
                                                <i className="fa-solid fa-upload"></i>
                                                <span style={{ color: 'white' }}>Upload Profile</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6" style={{ marginBottom: '0px' }}>
                                        <input type="text" className="form-control"
                                            value={data.name}
                                            onChange={handleInputChange} name="name" id="name" placeholder="Your Full Name" />
                                        <i className="fal fa-user"></i>

                                        <div className="form-group mt-4">
                                            <input type="email" className="form-control"
                                                value={data.email}
                                                onChange={handleInputChange} name="email" id="email" placeholder="Your Email" />
                                            <i className="fal fa-envelope"></i>
                                        </div>
                                        <div className="form-group mt-4">
                                            <input type="date"
                                                value={data.dob}
                                                onChange={handleInputChange} className="form-control" name="dob" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="tel" className="form-control"
                                            value={data.phone}
                                            onChange={handleInputChange} name="phone" placeholder="Your Phone Number" />
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="tel" className="form-control"
                                            value={data.w_number}
                                            onChange={handleInputChange} name="w_number" placeholder="WhatsApp Number" />
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control"
                                            value={data.nationality}
                                            onChange={handleInputChange} name="nationality" placeholder="Your Nationality" />
                                        <i className="fa-solid fa-map-location"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control"
                                            value={data.city}
                                            onChange={handleInputChange} name="city" placeholder="Your City" />
                                        <i className="fa-solid fa-city"></i>
                                    </div>
                                    <div className="form-group col-12">
                                        <input type='text' name="address" className="form-control"
                                            value={data.address}
                                            onChange={handleInputChange} placeholder="Enter Your Address" />
                                        <i className="fa-solid fa-address-card"></i>
                                    </div>
                                    <div className="form-group col-12">
                                        <input name="de_address" style={{ height: '150px !important' }}
                                            value={data.de_address}
                                            onChange={handleInputChange} className="form-control" placeholder="Your Message" />
                                        <i className="fa-solid fa-truck"></i>
                                    </div>
                                    <div className="btn-path">
                                        <Link to={'/profile'} className="btn btn-cancel me-3">Back</Link>
                                        <button type="submit" className="btn btn-primaryy">Submit</button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="shape-mockup ripple-animation d-none d-xl-block" style={{ top: '33%' }}>
                    <img src="/assets/img/shape/shape_7.png" alt="shape" />
                </div>
            </div>
        </>
    )
}
