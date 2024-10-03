import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import locContext from "../context/locContext";
import Swal from "sweetalert2";

function Aerialbellyart() {

    const location = useContext(locContext);
    const userRoll = JSON.parse(localStorage.getItem("aerialst"))
    const user_id = userRoll ? userRoll.id : null


    //          Silks
    const [group, setGroup] = useState([]);
    const getSubsriptionData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/5`
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

    const [privatea, setPrivatea] = useState([]);
    const getPrivateData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/6`
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

    //          Yoga
    const [yoga, setYoga] = useState([]);
    const getYogaData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/9`
            );
            if (res.status === 200) {
                setYoga(res.data.data);
            } else {
                setYoga([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [pryoga, setPrYoga] = useState([]);
    const getPrYogaData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/16`
            );
            if (res.status === 200) {
                setPrYoga(res.data.data);
            } else {
                setPrYoga([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //          Hammock
    const [hammock, setHammock] = useState([]);
    const getHammockData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/10`
            );
            if (res.status === 200) {
                setHammock(res.data.data);
            } else {
                setHammock([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [prhammock, setPrHammock] = useState([]);
    const getPrHammockData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/17`
            );
            if (res.status === 200) {
                setPrHammock(res.data.data);
            } else {
                setPrHammock([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //          Hoop
    const [hoop, setHoop] = useState([]);
    const getHoopData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/11`
            );
            if (res.status === 200) {
                setHoop(res.data.data);
            } else {
                setHoop([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [prhoop, setPrHoop] = useState([]);
    const getPrHoopData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/18`
            );
            if (res.status === 200) {
                setPrHoop(res.data.data);
            } else {
                setPrHoop([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //          Trapeze
    const [trapeze, setTrapeze] = useState([]);
    const getTrapezeData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/12`
            );
            if (res.status === 200) {
                setTrapeze(res.data.data);
            } else {
                setTrapeze([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [prtrapeze, setPrTrapeze] = useState([]);
    const getPrTrapezeData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/19`
            );
            if (res.status === 200) {
                setPrTrapeze(res.data.data);
            } else {
                setPrTrapeze([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //          Cube
    const [cube, setCube] = useState([]);
    const getCubeData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/13`
            );
            if (res.status === 200) {
                setCube(res.data.data);
            } else {
                setCube([]);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const [prcube, setPrCube] = useState([]);
    const getPrCubeData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/20`
            );
            if (res.status === 200) {
                setPrCube(res.data.data);
            } else {
                setPrCube([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    //          Combo
    const [combo, setCombo] = useState([]);
    const getComboData = async () => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_BASE_URL}/getsubscriptionbytitle/14`
            );
            if (res.status === 200) {
                setCombo(res.data.data);
            } else {
                setCombo([]);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const addGroupcart = async (id) => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/addToCart/${id}`, { user_id });
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
        getYogaData();
        getHammockData();
        getHoopData();
        getTrapezeData();
        getCubeData();
        getComboData();
        //  Private
        getPrYogaData();
        getPrHammockData();
        getPrHoopData();
        getPrTrapezeData();
        getPrCubeData();
    }, []);

    return (
        <div>
            <div className="dempp" style={{ backgroundImage: "url('/assets/img/hero/aerial_art_header_img.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <h2 className="arts-belly" style={{ paddingTop: '170px' }}>Aerial Arts Classes</h2>
                <p><Link onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                    to={'/'} style={{ color: 'white' }}>Home </Link> / Aerial Arts Classes</p>
            </div>

            <div className="container my-5">
                {/* About Aerial Arts Classes */}
                <div className="dance bgring1">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tab-img1">
                                <img src="\assets\img\dance\art.jpeg" alt="Aerial Belly" />
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="tab-text1">
                                <h4><b>About Aerial Arts Classes</b></h4>
                                <p>Embark on a journey of aerial grace and strength amidst the lush greenery of our outdoor haven. Elevate your fitness and artistic pursuits with our unparalleled<span style={{ color: '#bd934c', fontWeight: '600' }} > Aerial Silks, <a href="#aerial_yoga">Aerial Yoga</a>, <a href="#aerial_hammock" >Aerial Hammock</a>, <a href="#aerial_hoop" >Aerial Hoop / Lyra</a>, <a href="#aerial_trapeze" >Aerial Trapeze</a> and <a href="#aerial_cube" >Aerial Cube</a> classes</span> at AerialBelly Studio in Ahmedabad. Nestled in India's most extraordinary setting, our five Aerial silk setups, reaching a height of 22 ft, offer a breathtaking backdrop for your aerial adventures. Open to everyone aged 5 and above, with no restrictions on age, size, or gender, our classes welcome all enthusiasts. No prior dance or exercise experience required - our classes cater to beginners and advanced levels alike. Join us to defy gravity and discover the thrill of aerial arts in an environment where the sky is the limit for your potential. Our each class is of 60 minutes focusing on
                                    increasing strength, flexibility, body balancing and Aerial elements. We provide group classes and Private classes, later we train each student to do professional shows with us globally.</p>
                                <a className="th-btn gold-btn bookbut bounce-slide" href='#time-table' style={{ marginTop: '15px' }}>Schedules</a>
                            </div>
                        </div>
                    </div>

                    {location === "IN"
                        ? <div className="my-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">

                                        <div className="class-schedule-wrapper">

                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <h3 style={{ textAlign: 'center' }}>Group Class Fees Structure Aerial Silks</h3>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>DEMO CLASS</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Months (8 CLASSES)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>2 Months (16 CLASSES)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Months (24 CLASSES)</th>
                                                            </tr>
                                                            {group.map((dataa, idex) => {
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
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataa.rupees_4 : "$" + dataa.doller_4}
                                                                        <button type="button" onClick={() => addGroupcart(dataa.le_4_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}

                    {location === 'IN'
                        ? <div className="my-4" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">

                                        <div className="class-schedule-wrapper">

                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <h3 style={{ textAlign: 'center' }}>Private Class Fees Structure Aerial Silks</h3>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>DEMO CLASS</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>12 CLASSES (with in 45 days) </th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>24 CLASSES (width in 90 days)</th>
                                                            </tr>
                                                            {privatea.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}

                </div>

                {/* Aerial Yoga Classes */}
                <div className="dance bgring1 mt-5" id="aerial_yoga">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tab-img1">
                                <img src="\assets\img\dance\art.jpeg" style={{ height: '300px' }} alt="Aerial Belly" />
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="tab-text1">
                                <h3>Aerial Yoga Classes</h3>
                                <p>Best For adults above the age of 42. Aerial Yoga Classes will work wonders for those who love to add fun and swings to their daily workouts. Best for increasing mobility in the body, effortless and painless flexibility and strength training. Classes will be refreshing and rejuvenating who peaceful music and nature frindly ambience.</p>
                                <a className="th-btn gold-btn bookbut bounce-slide" href='#time-table' style={{ marginTop: '15px' }}>Schedules</a>
                            </div>
                        </div>
                    </div>
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Group Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo Class</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>2 Month (16 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {yoga.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_4 : "$" + dataaa.doller_4}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_4_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Private Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo Class</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {pryoga.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                </div>

                {/* Hammock Classes */}
                <div className="dance bgring1 mt-5" id="aerial_hammock">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tab-img1">
                                <img src="\assets\img\dance\art.jpeg" style={{ height: '300px' }} alt="Aerial Belly" />
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="tab-text1">
                                <h3>Aerial Hammock Classes</h3>
                                <p>Best for people below the age of 45. Aerial Hammock Classes definitely works on the mobility, strength, flexibility and inversions but apart from that it will add some spins and drops and some advanced yoga poses in he air. The Hammock is suspended from the height of 22 ft. So it will not be a normal regular class of Hammock.</p>
                                <a className="th-btn gold-btn bookbut bounce-slide" href='#time-table' style={{ marginTop: '15px' }}>Schedules</a>
                            </div>
                        </div>
                    </div>
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Group Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>2 Month (16 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {hammock.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }} >{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_4 : "$" + dataaa.doller_4}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_4_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Private Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {prhammock.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }} >{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                </div>

                {/* Hoop / Lyra Classes */}
                <div className="dance bgring1 mt-5" id="aerial_hoop">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tab-img1">
                                <img src="\assets\img\dance\art.jpeg" style={{ height: '300px' }} alt="Aerial Belly" />
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="tab-text1">
                                <h3>Aerial Hoop / Lyra Classes</h3>
                                <p>Kids love to do Aerial Hoop / Lyra! Best for the age below 45. Hoop looks angelic yet powerful when performing! The spins and rolls in the hoop make this aerial apparatus  unique and mind boggling! Includes full body workout and body balancing training!</p>
                                <a className="th-btn gold-btn bookbut bounce-slide" href='#time-table' style={{ marginTop: '15px' }}>Schedules</a>
                            </div>
                        </div>
                    </div>
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Group Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>2 Month (16 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>
                                                            {hoop.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_4 : "$" + dataaa.doller_4}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_4_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Private Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>
                                                            {prhoop.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                </div>

                {/* Trapeze Classes */}
                <div className="dance bgring1 mt-5" id="aerial_trapeze">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tab-img1">
                                <img src="\assets\img\dance\trapeze.jpeg" style={{ width: '100%', height: '400px', objectFit: 'contain' }} alt="Aerial Belly" />
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="tab-text1">
                                <h3>Aerial Trapeze Classes</h3>
                                <p>First time in India, Aerial Trapeze Classes! This apparatus will become kids most loved activity in india! This is the most exciting and mesmerising aerial apparatus! Best for entire body workout! Anybody age of 40 can join Trapeze Classes! You have seen this circus and now it is your time to do this yourself! Keep swinging while you are your audiences breath away!</p>
                                <a className="th-btn gold-btn bookbut bounce-slide" href='#time-table' style={{ marginTop: '15px' }}>Schedules</a>
                            </div>
                        </div>
                    </div>
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Group Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>2 Month (16 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {trapeze.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_4 : "$" + dataaa.doller_4}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_4_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Private Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {prtrapeze.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                </div>

                {/* Cube Classes */}
                <div className="dance bgring1 mt-5" id="aerial_cube">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="tab-img1">
                                <img src="\assets\img\dance\art.jpeg" style={{ height: '300px' }} alt="Aerial Belly" />
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="tab-text1">
                                <h3>Aerial Cube Classes</h3>
                                <p>Best for everyone below the age of 45 and for people having a littel experience in Aerial Silks. Cube is huge unique Aerial apparatus which looks absolutely stunning when performing! This super sturdy apparatus is very unique in India and is tricky yet exciting!</p>
                                <a className="th-btn gold-btn bookbut bounce-slide" href='#time-table' style={{ marginTop: '15px' }}>Schedules</a>
                            </div>
                        </div>
                    </div>
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Group Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>2 Month (16 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {cube.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_4 : "$" + dataaa.doller_4}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_4_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                    {location === 'IN'
                        ? <div className="my-2" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7 col-xl-7 col-xxl-12">
                                        <div className="class-schedule-wrapper">
                                            <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                                <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                    <h3>Private Classes</h3>
                                                    <div className="schedule-details">
                                                        <table style={{ textAlign: 'center' }}>
                                                            <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>Demo</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>1 Month (8 Classes)</th>
                                                                <th className="time mb-0" style={{ fontWeight: '700' }}>3 Month (24 Classes)</th>
                                                            </tr>

                                                            {prcube.map((dataaa, idexx) => {
                                                                return <tr className="schedule-content" key={idexx}>
                                                                    <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_2 : "$" + dataaa.doller_2}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_2_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
                                                                    </td>
                                                                    <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                        {location === "IN" ? "₹" + dataaa.rupees_3 : "$" + dataaa.doller_3}
                                                                        <button type="button" onClick={() => addGroupcart(dataaa.le_3_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                        : <></>}
                </div>

                {/* Combo Classes */}
                {location === 'IN'
                    ? <div className="mt-4" style={{ paddingBottom: '0px !important', paddingTop: '0px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-xl-7 col-xxl-12">
                                    <div className="class-schedule-wrapper">
                                        <div className="tab-content tab-schedule-content" id="nav-tabContent" style={{ width: '100%' }}>
                                            <h3 style={{ textAlign: 'center' }}>Aerial Arts Combo Classes</h3>
                                            <div className="tab-pane fade active show" id="nav-step1" role="tabpanel">
                                                <div className="schedule-details">
                                                    <table style={{ textAlign: 'center' }}>
                                                        <tr className="schedule-content" style={{ backgroundColor: '#bd934c' }}>
                                                            <th className="time mb-0" style={{ fontWeight: '700' }}> </th>
                                                            <th className="time mb-0" style={{ fontWeight: '700' }}>LEVEL</th>
                                                            <th className="time mb-0" style={{ fontWeight: '700' }}>Price</th>
                                                        </tr>

                                                        {combo.map((dataaa, idexx) => {
                                                            return <tr className="schedule-content" key={idexx}>
                                                                <td className="time mb-0" style={{ textAlign: 'center' }}> </td>
                                                                <td className="time mb-0" style={{ textAlign: 'center' }}>{dataaa.level_name}</td>
                                                                <td className="title mb-0" style={{ textAlign: 'center' }}>
                                                                    {location === "IN" ? "₹" + dataaa.rupees_1 : "$" + dataaa.doller_1}
                                                                    <button type="button" onClick={() => addGroupcart(dataaa.le_1_id)} className="btn btn-primary btn-xsm" style={{ padding: '3px 8px', marginLeft: '8%', fontSize: '11px' }}><i class="fa-solid fa-cart-shopping"></i></button>
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
                    : <></>}
                <div class="space">
                    <div class="container">
                        <div class="row mt-5" id="time-table">
                            <div class="col-lg-7 col-xl-7 col-xxl-6 mt-5">
                                <div class="title-area mt-n1"><span class="sub-title style2">Class Schedules</span>
                                    <h2 class="sec-title">Aerial Arts Classes at AerialBelly Studio</h2>
                                </div>
                                <div class="class-schedule-wrapper">
                                    <div class="nav nav-tabs schedule-tabs" id="nav-tab" role="tablist">
                                        {/* <button class="nav-link active" id="nav-step1-tab" data-bs-toggle="tab" data-bs-target="#nav-step1" type="button">Monday</button> */}
                                        <button class="nav-link active" id="nav-step8-tab" data-bs-toggle="tab" data-bs-target="#nav-step8" type="button">Monday</button>
                                        <button class="nav-link" id="nav-step2-tab" data-bs-toggle="tab" data-bs-target="#nav-step2" type="button">Tuesday</button>
                                        <button class="nav-link" id="nav-step3-tab" data-bs-toggle="tab" data-bs-target="#nav-step3" type="button">Wednesday</button>
                                        <button class="nav-link" id="nav-step4-tab" data-bs-toggle="tab" data-bs-target="#nav-step4" type="button">Thursday</button>
                                        <button class="nav-link" id="nav-step5-tab" data-bs-toggle="tab" data-bs-target="#nav-step5" type="button">Friday</button>
                                        <button class="nav-link" id="nav-step6-tab" data-bs-toggle="tab" data-bs-target="#nav-step6" type="button">Saturday</button>
                                        <button class="nav-link" id="nav-step7-tab" data-bs-toggle="tab" data-bs-target="#nav-step7" type="button">Sunday</button>
                                    </div>
                                    <div class="tab-content tab-schedule-content" id="nav-tabContent">
                                        <div class="tab-pane active" id="nav-step8" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="nav-step2" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">Trapeze</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">Hoop</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="nav-step3" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">Hoop</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">Hammock / Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">Hammock / Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="nav-step4" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">Hoop</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">Trapeze</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">Hoop</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="nav-step5" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">Hammock / Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">Hammock / Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="nav-step6" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">Aerial Yoga</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">Trapeze</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">Hammock / Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">Cube</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="nav-step7" role="tabpanel">
                                            <div class="schedule-details">
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">11 AM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">12 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">4 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">5 PM</p></li>
                                                        <li><p class="title mb-0">Trapeze</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">6:30 PM</p></li>
                                                        <li><p class="title mb-0">Hammock / Silks</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">7:30 PM</p></li>
                                                        <li><p class="title mb-0">Cube</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                                <div class="schedule-content">
                                                    <ul>
                                                        <li><p class="time mb-0">8:30 PM</p></li>
                                                        <li><p class="title mb-0">-</p></li>
                                                        <li><p class="title mb-0"></p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 col-xl-5 col-xxl-6">
                                <div class="class-schedule-image bounce-slide"><img src="assets/img/normal/class_schedules.png" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <style jsx>{`
                .ab_report th, td {
                    padding: 8px;
                    text-align: initial;
                    }

            `}</style>
        </div >
    );
}
export default Aerialbellyart;



// INSERT INTO `subscription` (`id`, `table_id`, `level_id`, `duration`, `rupees`, `doller`) VALUES
// (NULL, '9', '71', '2 Month', 7030, 0),
// (NULL, '9', '72', '2 Month', 7030, 0),
// (NULL, '9', '73', '2 Month', 7980, 0),
// (NULL, '10', '74', '2 Month', 6080, 0),
// (NULL, '10', '75', '2 Month', 7030, 0),
// (NULL, '10', '76', '2 Month', 8550, 0),
// (NULL, '11', '77', '2 Month', 6650, 0),
// (NULL, '11', '78', '2 Month', 8550, 0),
// (NULL, '11', '79', '2 Month', 10450, 0),
// (NULL, '12', '80', '2 Month', 9500, 0),
// (NULL, '12', '81', '2 Month', 11400, 0),
// (NULL, '12', '82', '2 Month', 15200, 0),
// (NULL, '13', '83', '2 Month', 6650, 0),
// (NULL, '13', '84', '2 Month', 8550, 0),
// (NULL, '13', '85', '2 Month', 10450, 0);