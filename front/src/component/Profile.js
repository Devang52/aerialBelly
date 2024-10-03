import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
    const userRoll = JSON.parse(localStorage.getItem("aerialst"))
    const id = userRoll ? userRoll.id : null

    const [data, setData] = useState([]);
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
            <section className="bg-white" style={{margin: '5% 0'}}>
                <div className="container">
                    <div className="about-card">
                        <div className="row">
                            <div className="col-xl-5">
                                <div className="about-card_img">
                                    <img className="w-100"
                                        src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${data.photo}`}
                                        draggable={false}
                                        onError={data.gender === 'Male' ? handleimgMe : handleimgFe}
                                        alt="team image" />
                                </div>
                            </div>
                            <div className="col-xl-7 mt-2">
                                <div className="about-card_content">
                                    <h3 className="about-card_title">{data.name}</h3>
                                </div>
                                <div className="about-card_box mt-4">
                                    {/* <h4 className="widget_title">Contact Info</h4> */}
                                    <div className="row">
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-solid fa-phone"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">Phone</h4>
                                                <div className="info-box_link" >{data.phone}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-brands fa-whatsapp"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">WhatsApp Number</h4>
                                                <div className="info-box_link" >{data.w_number}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon col-2"><i className="fa-solid fa-envelope"></i></div>
                                            <div className="media-body col-9">
                                                <h4 className="info-box_title">Email</h4>
                                                <div className="info-box_link">{data.email}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-solid fa-map-location"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">Nationality</h4>
                                                <div className="info-box_link">{data.nationality}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-solid fa-city"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">City</h4>
                                                <div className="info-box_link">{data.city}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-solid fa-calendar"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">DOB</h4>
                                                <div className="info-box_link">{data.dob}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-solid fa-address-card"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">Address</h4>
                                                <div className="info-box_link">{data.address}</div>
                                            </div>
                                        </div>
                                        <div className="info-box col-md-6">
                                            <div className="info-box_icon"><i className="fa-solid fa-truck"></i></div>
                                            <div className="media-body">
                                                <h4 className="info-box_title">Delivery Address</h4>
                                                <div className="info-box_link">{data.de_address}</div>
                                            </div>
                                        </div>
                                        <div className="about-btn2 mt-4">
                                            <Link className="th-btn style7" to={'/editprofile'}>Edit Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
