import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import locContext from "../context/locContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Addtocard() {
  const location = useContext(locContext);
  const navigate = useNavigate();

  const userRoll = JSON.parse(localStorage.getItem("aerialst"));
  const id = userRoll.id;
  const [data, setData] = useState([]);
  const [dataGst, setDataGst] = useState([]);
  console.log(dataGst);

  const [amount, setAmount] = useState({
    totalRupees: "",
    totalDoller: "",
    total_gstrupees: "",
    total_gstdoller: "",
  });

  const [gstamount, setGstamount] = useState({
    gstRupees: "",
    gstDoller: "",
  });
  const [teams, setTeams] = useState(true)

  const getAddtoCartData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/getAddToCart/${id}`
      );
      if (res.status === 200) {

        const fetchedData = res.data.data;

        const updatedData = fetchedData.map(item => {
          if (item.w_rupees !== null && item.w_doller !== null) {
            return {
              ...item,
              w_rupees: item.w_rupees * 1.18,
              w_doller: item.w_doller * 1.18,
            };
          } else if (item.doller !== null && item.rupees !== null) {
            return {
              ...item,
              doller: item.doller * 1.18,
              rupees: item.rupees * 1.18,
            };
          } else if (item.amount !== null) {
            return {
              ...item,
              amount: item.amount * 1.18
            };
          } else {
            return item;
          }
        })
        setDataGst(updatedData)
        setData(res.data.data);

        const totalRupees = fetchedData.reduce(
          (sum, item) => sum + item.rupees + (item.amount * item.quantity),
          0
        );
        const totalDoller = fetchedData.reduce(
          (sum, item) => sum + item.doller,
          0
        );

        const totalWorkRu = fetchedData.reduce(
          (sum, item) => sum + item.w_rupees,
          0
        )
        const totalWorkDol = fetchedData.reduce(
          (sum, item) => sum + item.w_doller,
          0
        )

        const gstru = (totalRupees * 18) / 100;
        const gstdo = (totalDoller * 18) / 100;
        const gstWoru = (totalWorkRu * 18) / 100;
        const gstWodol = (totalWorkDol * 18) / 100;

        const getamountrup = totalRupees + gstru + totalWorkRu + gstWoru;
        const getamountdol = totalDoller + gstdo + totalWorkDol + gstWodol;
        setAmount({
          totalRupees: (totalRupees + totalWorkRu).toFixed(2),
          totalDoller: (totalDoller + totalWorkDol).toFixed(2),
          total_gstrupees: getamountrup.toFixed(2),
          total_gstdoller: getamountdol.toFixed(2),
        });
        setGstamount({
          gstRupees: gstru + gstWoru,
          gstDoller: gstdo + gstWodol,
        });
      } else {
        setData([]);
        setAmount("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAddtoCartData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You want to remove this item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5000C0",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const res = await axios.delete(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/deleteAddToCart/` + id
        );
        if (res.status === 200) {
          getAddtoCartData();
        } else {
          Swal.fire({
            title: "Deleted failed!",
            text: "This item remove failed.",
            icon: "error",
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const headleSubmit = async (e) => {
    try {
      if (data > 0) {
        Swal.fire({
          title: "No data available",
          icon: "warning",
        });
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/createOrderItem`,
          dataGst
        );

        if (res.status === 200 && res.data.data) {
          Swal.fire({
            icon: "success",
            title: "Your order has been placed successfully",
            timer: 1500,
          }).then(() => {
            navigate("/orderlist");
          });
        } else {
          // Unsuccessful request
          Swal.fire({
            title: "Buy failed",
            icon: "error",
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleimg = (e) => {
    e.target.src = "/assets/img/Aerial_Belly_Final_Logo.png";
    e.target.alt = "Image not found";
  };

  //              Razorpay
  const loadRazorpayScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  };
  const initiatePayment = async () => {
    const order = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/create-order`, { amount: amount.total_gstrupees });

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,  // Replace with your Razorpay Key ID
      amount: order.data.amount,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order.data.id,
      handler: async function (response) {
        const datapy = {
          order_id: order.data.id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
          receiptNumber: order.data.receipt,
          user_id: id,
          amount: amount.total_gstrupees,
          status: "success"
        };
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/verify-payment`, datapy);
        if (result.status === 200) {
          headleSubmit()
        } else {
          alert("Payment failed");
        }
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
        contact: "9082514158"
      }
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  useEffect(() => {
    loadRazorpayScript();
  }, []);



  //             PayPal
  const [error, setError] = useState(null);
  const initialOptions = {
    "client-id": process.env.REACT_APP_PAYPAL_KEY_ID,
    currency: "USD",
    intent: "capture",
  };




  const handleOptionChange = (e) => {
    const { checked } = e.target
    if (checked) {
      setTeams(false)
    } else {
      setTeams(true)
    }
  }

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
              <li className="breadcrumb-item active" aria-current="page">
                My Cart
              </li>
            </ol>
          </nav>
          {data.length === 0
            ? <div style={{ textAlign: 'center' }}>
              <svg data-name="Layer 1" width="40%" height="40%" viewBox="0 0 888 741.04834"><path d="M521.89611,253.85607H517.8642v-110.453a63.92718,63.92718,0,0,0-63.92738-63.92726H219.92738A63.92718,63.92718,0,0,0,156,143.40309V749.35675A63.92719,63.92719,0,0,0,219.92738,813.284H453.93682a63.92719,63.92719,0,0,0,63.92738-63.92726V332.47837h4.03191Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M456.51633,96.10749h-30.546a22.68123,22.68123,0,0,1-20.99971,31.24733H270.90951a22.68123,22.68123,0,0,1-20.99972-31.24733h-28.53a47.74011,47.74011,0,0,0-47.74018,47.74005V748.91223a47.74012,47.74012,0,0,0,47.74018,47.74012H456.51633a47.74012,47.74012,0,0,0,47.74018-47.74012V143.84754A47.74011,47.74011,0,0,0,456.51633,96.10749Z" transform="translate(-156 -79.47583)" fill="#fff" /><path d="M269.67241,219.11054H255.63313a1.86134,1.86134,0,0,0-1.86133,1.86133v6.16225a1.86134,1.86134,0,0,0,1.86133,1.86133h2.32651v9.23317h9.38625v-9.23317h2.32652a1.86133,1.86133,0,0,0,1.86132-1.86133v-6.16225A1.86133,1.86133,0,0,0,269.67241,219.11054Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M283.73425,275.50749a72.178,72.178,0,0,1-12.55683-42.79357,1.52226,1.52226,0,0,0-1.18821-1.5191v-2.66269H255.16187v2.62568h-.2043a1.52142,1.52142,0,0,0-1.51944,1.52339q.00006.05544.00418.11074,1.75218,24.42494-11.83339,43.8076a4.19288,4.19288,0,0,0-.75883,2.541l1.62129,50.15132a4.34147,4.34147,0,0,0,4.30433,4.19019h33.53723a4.343,4.343,0,0,0,4.30692-4.26409l.62478-48.69283A8.78784,8.78784,0,0,0,283.73425,275.50749Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M278.42523,292.16618H249.23369a2.997,2.997,0,0,0-2.96218,3.45275l4.41126,28.67321h25.33006l5.3581-28.5766a2.997,2.997,0,0,0-2.9457-3.54936Z" transform="translate(-156 -79.47583)" fill="#fff" /><path d="M425.95669,369.34511H411.91741a1.86133,1.86133,0,0,0-1.86133,1.86132v6.16226a1.86134,1.86134,0,0,0,1.86133,1.86133h2.32651v9.23316h9.38625V379.23h2.32652a1.86133,1.86133,0,0,0,1.86132-1.86133v-6.16226A1.86132,1.86132,0,0,0,425.95669,369.34511Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M440.01853,425.74206a72.178,72.178,0,0,1-12.55683-42.79357,1.52226,1.52226,0,0,0-1.1882-1.5191V378.7667H411.44615v2.62568h-.2043a1.52141,1.52141,0,0,0-1.51944,1.52339q.00007.05542.00418.11074,1.75218,24.42492-11.83339,43.8076a4.19294,4.19294,0,0,0-.75883,2.541l1.62129,50.15132a4.34145,4.34145,0,0,0,4.30433,4.19018h33.53723a4.343,4.343,0,0,0,4.30692-4.26409l.62479-48.69283A8.78789,8.78789,0,0,0,440.01853,425.74206Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M434.70951,442.40074H405.518a2.997,2.997,0,0,0-2.96218,3.45276l4.41126,28.6732h25.33006l5.35811-28.57659a2.9971,2.9971,0,0,0-2.94571-3.54937Z" transform="translate(-156 -79.47583)" fill="#fff" /><path d="M249.935,581.73267h-6.65947a.88292.88292,0,0,0-.88292.88291v2.923a.88292.88292,0,0,0,.88292.88291h1.10357v4.37972h4.45233v-4.37972H249.935a.88291.88291,0,0,0,.88291-.88291v-2.923A.88291.88291,0,0,0,249.935,581.73267Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M256.60519,608.48432a34.2373,34.2373,0,0,1-5.95627-20.29895.72208.72208,0,0,0-.56363-.72057v-1.263H243.052v1.24548h-.09691a.72168.72168,0,0,0-.72074.72262q0,.02628.002.05252a31.24565,31.24565,0,0,1-5.61312,20.77995,1.98884,1.98884,0,0,0-.35994,1.20529l.769,23.78907a2.05934,2.05934,0,0,0,2.04174,1.98759h15.90824a2.06007,2.06007,0,0,0,2.043-2.02265l.29636-23.09723A4.1684,4.1684,0,0,0,256.60519,608.48432Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><rect x="83.13662" y="537.75318" width="15.17906" height="7.58953" fill="#fff" /><path d="M280.935,581.73267h-6.65947a.88292.88292,0,0,0-.88292.88291v2.923a.88292.88292,0,0,0,.88292.88291h1.10357v4.37972h4.45233v-4.37972H280.935a.88291.88291,0,0,0,.88291-.88291v-2.923A.88291.88291,0,0,0,280.935,581.73267Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M287.60519,608.48432a34.2373,34.2373,0,0,1-5.95627-20.29895.72208.72208,0,0,0-.56363-.72057v-1.263H274.052v1.24548h-.09691a.72168.72168,0,0,0-.72074.72262q0,.02628.002.05252a31.24565,31.24565,0,0,1-5.61312,20.77995,1.98884,1.98884,0,0,0-.35994,1.20529l.769,23.78907a2.05934,2.05934,0,0,0,2.04174,1.98759h15.90824a2.06007,2.06007,0,0,0,2.043-2.02265l.29636-23.09723A4.1684,4.1684,0,0,0,287.60519,608.48432Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><rect x="114.13662" y="537.75318" width="15.17906" height="7.58953" fill="#fff" /><path d="M311.935,581.73267h-6.65947a.88292.88292,0,0,0-.88292.88291v2.923a.88292.88292,0,0,0,.88292.88291h1.10357v4.37972h4.45233v-4.37972H311.935a.88291.88291,0,0,0,.88291-.88291v-2.923A.88291.88291,0,0,0,311.935,581.73267Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M318.60519,608.48432a34.2373,34.2373,0,0,1-5.95627-20.29895.72208.72208,0,0,0-.56363-.72057v-1.263H305.052v1.24548h-.09691a.72168.72168,0,0,0-.72074.72262q0,.02628.002.05252a31.24565,31.24565,0,0,1-5.61312,20.77995,1.98884,1.98884,0,0,0-.35994,1.20529l.769,23.78907a2.05934,2.05934,0,0,0,2.04174,1.98759h15.90824a2.06007,2.06007,0,0,0,2.043-2.02265l.29636-23.09723A4.1684,4.1684,0,0,0,318.60519,608.48432Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><rect x="145.13662" y="537.75318" width="15.17906" height="7.58953" fill="#fff" /><path d="M401.56726,523.61282H387.528a1.86132,1.86132,0,0,0-1.86133,1.86132v6.16226a1.86133,1.86133,0,0,0,1.86133,1.86133h2.32651v9.23316h9.38625v-9.23316h2.32651a1.86133,1.86133,0,0,0,1.86132-1.86133v-6.16226A1.86132,1.86132,0,0,0,401.56726,523.61282Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M415.6291,580.00977a72.178,72.178,0,0,1-12.55683-42.79357,1.52226,1.52226,0,0,0-1.1882-1.5191v-2.66269H387.05672v2.62568h-.2043a1.52141,1.52141,0,0,0-1.51944,1.52339q.00007.05542.00418.11074,1.75218,24.42492-11.83339,43.8076a4.19294,4.19294,0,0,0-.75883,2.541l1.62129,50.15132a4.34145,4.34145,0,0,0,4.30434,4.19018h33.53722a4.343,4.343,0,0,0,4.30693-4.26409l.62478-48.69283A8.78782,8.78782,0,0,0,415.6291,580.00977Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M410.32009,596.66845H381.12854a2.997,2.997,0,0,0-2.96218,3.45276l4.41127,28.6732h25.33006l5.3581-28.57659a2.9971,2.9971,0,0,0-2.9457-3.54937Z" transform="translate(-156 -79.47583)" fill="#fff" /><path d="M409.23171,339.93829H325.544c5.85094-31.63336,4.50485-69.83172,0-110.91142h83.68771C404.84668,270.1067,403.53635,308.305,409.23171,339.93829Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><circle cx="211.892" cy="201.98189" r="20.16571" fill="#fff" /><path d="M332.602,487.148H248.91429c5.85093-31.63337,4.50485-69.83173,0-110.91143H332.602C328.217,417.31641,326.90664,455.5147,332.602,487.148Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><circle cx="135.26229" cy="349.1916" r="20.16571" fill="#fff" /><path d="M456.62114,346.99629H372.93343c5.85093-31.63336,4.50485-69.83172,0-110.91142h83.68771C452.2361,277.1647,450.92578,315.363,456.62114,346.99629Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><circle cx="259.28142" cy="209.03989" r="20.16571" fill="#fff" /><path d="M456.62114,341.95487H372.93343c5.85093-31.63337,4.50485-69.83173,0-110.91143h83.68771C452.2361,272.12327,450.92578,310.32156,456.62114,341.95487Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><circle cx="259.28142" cy="203.99847" r="20.16571" fill="#fff" /><path d="M456.62114,346.99629H372.93343c5.85093-31.63336,4.50485-69.83172,0-110.91142h83.68771C452.2361,277.1647,450.92578,315.363,456.62114,346.99629Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><circle cx="259.28142" cy="209.03989" r="20.16571" fill="#fff" /><rect x="45.52486" y="254.41275" width="274.25371" height="30.24857" fill="#e6e6e6" /><rect x="45.52486" y="404.64732" width="274.25371" height="30.24857" fill="#e6e6e6" /><rect x="45.52486" y="554.88188" width="274.25371" height="30.24857" fill="#e6e6e6" /><path d="M952.85457,757.07471l-68.32479-48.32553c23.04357-22.44766,44.00226-54.41107,64.04589-90.55092l68.32478,48.32553C989.59882,697.53027,966.4714,727.95969,952.85457,757.07471Z" transform="translate(-156 -79.47583)" fill="#bd934c" /><circle cx="796.87342" cy="605.9822" r="20.16571" fill="#fff" /><path d="M623.26239,536.554h-7.5a.99435.99435,0,0,0-.99435.99435v3.292a.99434.99434,0,0,0,.99435.99434h1.24285v4.93249h5.01427v-4.93249h1.24285a.99435.99435,0,0,0,.99435-.99434v-3.292A.99436.99436,0,0,0,623.26239,536.554Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M630.77443,566.68205a38.55843,38.55843,0,0,1-6.708-22.86093.81323.81323,0,0,0-.63476-.81152v-1.42245h-7.921v1.40268h-.10914a.81275.81275,0,0,0-.8117.81381q0,.02961.00223.05916a35.18922,35.18922,0,0,1-6.32157,23.40264,2.23989,2.23989,0,0,0-.40537,1.35741l.86611,26.79155a2.31928,2.31928,0,0,0,2.29944,2.23846h17.91606a2.32008,2.32008,0,0,0,2.30082-2.27794l.33376-26.0124A4.69456,4.69456,0,0,0,630.77443,566.68205Z" transform="translate(-156 -79.47583)" fill="#bd934c" /><path d="M621.69892,537.62665a2.14526,2.14526,0,0,1-4.29053,0" transform="translate(-156 -79.47583)" opacity="0.2" style={{ isolation: 'isolate' }} /><rect x="456.16063" y="492.36817" width="15.12429" height="10.08286" fill="#fff" /><path d="M860.60239,641.21767H846.56312a1.86134,1.86134,0,0,0-1.86134,1.86133v6.16226a1.86134,1.86134,0,0,0,1.86134,1.86132h2.32651v9.23317h9.38625v-9.23317h2.32651a1.86132,1.86132,0,0,0,1.86132-1.86132V643.079A1.86133,1.86133,0,0,0,860.60239,641.21767Z" transform="translate(-156 -79.47583)" fill="#e6e6e6" /><path d="M874.66423,697.61463a72.178,72.178,0,0,1-12.55683-42.79358,1.52224,1.52224,0,0,0-1.1882-1.51909v-2.6627H846.09185v2.62568h-.2043a1.52142,1.52142,0,0,0-1.51944,1.5234q.00008.05543.00418.11073,1.75218,24.42493-11.83339,43.80761a4.19289,4.19289,0,0,0-.75883,2.54095l1.62129,50.15132a4.34146,4.34146,0,0,0,4.30434,4.19019h33.53722a4.343,4.343,0,0,0,4.30692-4.26409l.62479-48.69283A8.7878,8.7878,0,0,0,874.66423,697.61463Z" transform="translate(-156 -79.47583)" fill="#bd934c" /><path d="M857.67571,643.22557a4.01574,4.01574,0,0,1-8.03148,0" transform="translate(-156 -79.47583)" opacity="0.2" style={{ isolation: 'isolate' }} /><path d="M869.35522,714.27331H840.16367a2.997,2.997,0,0,0-2.96218,3.45275l4.41126,28.67321h25.33007l5.3581-28.5766a2.9971,2.9971,0,0,0-2.9457-3.54936Z" transform="translate(-156 -79.47583)" fill="#fff" /><path d="M820.546,756.99571H736.85827c5.85094-31.63336,4.50486-69.83172,0-110.91142H820.546C816.161,687.16411,814.85062,725.36241,820.546,756.99571Z" transform="translate(-156 -79.47583)" fill="#bd934c" /><circle cx="623.20627" cy="619.03931" r="20.16571" fill="#fff" /><polygon points="322.243 328.466 341.03 326.758 352.986 297.724 331.637 285.768 322.243 328.466" fill="#ffb8b8" /><path d="M650.66043,487.64986v0a10.59328,10.59328,0,0,0-9.20188-14.51664l-29.16988-1.73941-4.2949,14.28206,30.02882,8.24691A10.59326,10.59326,0,0,0,650.66043,487.64986Z" transform="translate(-156 -79.47583)" fill="#ffb8b8" /><path d="M619.33866,494.16267l-.32093-26.79954-64.79286-10.33856L504.30953,399.777a16.33816,16.33816,0,0,0-21.29428-2.91186l0,0a16.33815,16.33815,0,0,0-2.84636,24.922l41.17966,50.67767Z" transform="translate(-156 -79.47583)" fill="#575a89" /><path d="M463.72552,795.64251h17.07932L523.168,604.10914l43.88737,59.16871,25.619,128.09483h16.22535l-3.41586-137.48845-57.2157-146.88208H491.90639c-15.40224,27.87449-27.48462,56.60826-13.66345,86.25052Z" transform="translate(-156 -79.47583)" fill="#2f2e41" /><path d="M582.20449,807.27611a4.45733,4.45733,0,0,0,3.4756,5.71828l41.79324,7.41672a6.87646,6.87646,0,0,0,7.8008-4.71314h0a6.83384,6.83384,0,0,0-3.34222-8.12572,63.9022,63.9022,0,0,1-23.04833-20.0382c-4.59335,4.27726-9.7273,3.875-15.179.72281l-5.78247.72281Z" transform="translate(-156 -79.47583)" fill="#2f2e41" /><path d="M455.81759,807.27611a4.45733,4.45733,0,0,0,3.4756,5.71828l41.79324,7.41672a6.87646,6.87646,0,0,0,7.8008-4.71314h0a6.83384,6.83384,0,0,0-3.34222-8.12572,63.9022,63.9022,0,0,1-23.04833-20.0382c-4.59335,4.27726-9.7273,3.875-15.179.72281l-5.78247.72281Z" transform="translate(-156 -79.47583)" fill="#2f2e41" /><circle cx="353.41268" cy="284.48709" r="23.91104" fill="#ffb8b8" /><path d="M488.06354,513.40689,550.403,511.699l-18.30772-57.61963c11.37738-18.23924-.073-36.46-16.27789-54.67684l-12.80948-8.53965-20.49517-1.70793h0a50.3141,50.3141,0,0,0-13.54915,35.0504C469.36939,452.03191,474.29652,482.324,488.06354,513.40689Z" transform="translate(-156 -79.47583)" fill="#575a89" /><path d="M631.29146,552.19152h0a10.59327,10.59327,0,0,0-2.74926-16.96611L602.4085,522.15112l-9.567,11.441,24.36342,19.395A10.59327,10.59327,0,0,0,631.29146,552.19152Z" transform="translate(-156 -79.47583)" fill="#ffb8b8" /><path d="M599.933,545.85758l10.24759-24.765-55.50168-34.99377-23.37023-72.268a16.33817,16.33817,0,0,0-18.43188-11.054h0a16.33815,16.33815,0,0,0-12.42089,21.79283l17.92341,62.79126Z" transform="translate(-156 -79.47583)" fill="#575a89" /><path d="M470.13027,354.5693c0,9.30389,6.04222,23.7124,13.66345,29.8888,5.12781,4.15568,11.90457,3.98066,14.51741-1.70793,2.68032-5.83557,11.91945-19.55229,28.18086-28.18087,21.67761-11.50252-7.68756-31.18152-28.18086-28.18086C482.9115,328.64329,470.13027,339.00544,470.13027,354.5693Z" transform="translate(-156 -79.47583)" fill="#2f2e41" /><circle cx="328.64768" cy="245.20468" r="17.07931" fill="#2f2e41" /><path d="M504.28889,318.70275a17.06865,17.06865,0,0,0-15.79836-17.01463c.42437-.03158.84854-.06468,1.28094-.06468a17.07931,17.07931,0,0,1,0,34.15862c-.4324,0-.85657-.0331-1.28094-.06468A17.06869,17.06869,0,0,0,504.28889,318.70275Z" transform="translate(-156 -79.47583)" fill="#2f2e41" /><ellipse cx="353.83966" cy="287.90296" rx="3.84284" ry="5.12379" fill="#ffb8b8" /><polygon points="837.751 684.845 571.879 684.845 515.578 418.694 467.529 418.694 467.529 406.752 525.258 406.752 581.559 672.902 837.751 672.902 837.751 684.845" fill="#3f3d56" /><circle cx="610.84102" cy="707.87676" r="25.59138" fill="#3f3d56" /><circle cx="801.92331" cy="707.87676" r="25.59138" fill="#3f3d56" /><path d="M988.90348,758.69673H730.22506L684.58373,533.14489h347.15138a12.2655,12.2655,0,0,1,12.11592,14.16689l-42.8333,201.0251A12.20374,12.20374,0,0,1,988.90348,758.69673Zm-255.86937-3.41219H988.90348a8.80568,8.80568,0,0,0,8.74205-7.47748l42.8333-201.0251a8.85014,8.85014,0,0,0-8.74372-10.22489H688.72567Z" transform="translate(-156 -79.47583)" fill="#3f3d56" /><polygon points="624.513 678.499 594.623 455.653 597.989 455.097 627.879 677.943 624.513 678.499" fill="#3f3d56" /><polygon points="790.712 676.788 787.343 676.242 816.36 455.102 819.729 455.648 790.712 676.788" fill="#3f3d56" /><rect x="708.11491" y="455.37515" width="3.41218" height="222.84575" fill="#3f3d56" /><rect x="865.45079" y="431.52231" width="3.41219" height="330.29569" transform="translate(112.38887 1382.90398) rotate(-89.86127)" fill="#3f3d56" /><rect x="718.83766" y="700.96181" width="290.1779" height="3.41226" transform="translate(-160.7831 -73.5538) rotate(-0.39166)" fill="#3f3d56" /><ellipse cx="472.64757" cy="411.01676" rx="18.76701" ry="10.23655" fill="#3f3d56" /></svg>
              <h6 className="mt-4">
                Your cart’s feeling a little lonely—time to fill it with
                something fabulous!
              </h6>
            </div>
            : <>
              <form className="woocommerce-cart-form mt-5">

                <table className="cart_table">
                  <thead>
                    <tr>
                      <th className="cart-col-image">Image</th>
                      <th className="cart-col-productname">Product Name</th>
                      <th className="cart-col-price">Level</th>
                      <th className="cart-col-total">Duration</th>
                      <th className="cart-col-quantity">Size</th>
                      <th className="cart-col-quantity">Color</th>
                      <th className="cart-col-quantity">Quantity</th>
                      <th className="cart-col-remove">Amount</th>
                      <th className="cart-col-remove"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length === 0 ? (
                      <tr>
                        <td colSpan="12">
                          Your cart’s feeling a little lonely—time to fill it with
                          something fabulous!
                        </td>
                      </tr>
                    ) : (
                      data.map((dataa, index) => {
                        return (
                          <tr className="cart_item" key={index}>
                            <td data-title="Image">
                              <div className="cart-productimage">
                                <img
                                  src={`${process.env.REACT_APP_BACKEND_BASE_URL}/uploads/${dataa.photo ? dataa.photo : dataa.w_photo}`}
                                  width="91"
                                  height="91"
                                  style={{ objectFit: 'contain' }}
                                  draggable={false}
                                  onError={handleimg}
                                />
                              </div>
                            </td>
                            <td data-title="Product Name">
                              <div className="cart-productname">
                                {/* {dataa.table_name === null ? (dataa.title === null ? dataa.w_name : dataa.title) : dataa.table_name} */}
                                {dataa.table_name || dataa.w_name || dataa.title}
                              </div>
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
                            <td data-title="Quantity">
                              <span className="amount">
                                {dataa.quantity === null ? '-' : dataa.quantity}
                              </span>
                            </td>
                            <td data-title="Amount">
                              <span className="amount">
                                {dataa.amount === null
                                  ? (location === "IN" ? "₹" + (dataa.rupees === null ? dataa.w_rupees : dataa.rupees) : "$" + (dataa.doller === null ? dataa.w_doller : dataa.doller))
                                  : "₹" + dataa.amount * dataa.quantity}
                              </span>
                            </td>
                            <td data-title="Remove">
                              <Link
                                onClick={() => handleDelete(dataa.id)}
                                className="remove"
                              >
                                <i className="fal fa-trash-alt"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })
                    )}
                    <tr>
                      <td colspan="6" className="actions">
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          to={"/shop"}
                        >
                          <button type="submit" className="th-btn">
                            Continue Shopping
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div className="row justify-content-space-between">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  {location === "IN"
                    ? <>
                      <h5 className="h5 summary-title">Delivery Address</h5>
                      <p>{data[0].de_address}</p>
                    </> : ""}
                </div>
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <h2 className="h4 summary-title">Cart Totals</h2>
                  <table className="cart_totals">
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "initial" }}>Cart Subtotal</td>
                        <td
                          data-title="Cart Subtotal"
                          style={{ textAlign: "initial" }}
                        >
                          <span className="amount">
                            {location === "IN"
                              ? "₹" + " " + amount.totalRupees
                              : "$" + amount.totalDoller}
                          </span>
                        </td>
                      </tr>
                      <tr className="shipping">
                        <th>GST 18%</th>
                        <td
                          data-title="Shipping and Handling"
                          style={{ textAlign: "initial" }}
                        >
                          {location === "IN"
                            ? "₹" + " " + gstamount.gstRupees
                            : "$" + gstamount.gstDoller}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr className="order-total">
                        <td style={{ textAlign: "initial" }}>Order Total</td>
                        <td data-title="Total" style={{ textAlign: "initial" }}>
                          <strong>
                            <span className="amount">
                              {location === "IN"
                                ? "₹" + " " + amount.total_gstrupees
                                : "$" + amount.total_gstdoller}
                            </span>
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="siderbar-toggle">
                    <label className="switch">
                      <input
                        type="checkbox"
                        name="w_number"
                        onChange={handleOptionChange}
                      />
                      <span className="slider round"></span>
                      <span style={{ paddingLeft: '60px' }}>I agree to the  <Link to={'/terms-&-conditions'} onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}> Terms & conditions</Link> and acknowledge the Privacy Policy
                      </span>
                    </label>
                  </div>
                  <div className="wc-proceed-to-checkout mt-3 mb-30"                  >
                    {location === "IN" ?
                      <button className="razorpaybut" disabled={teams ? true : false} onClick={initiatePayment}>
                        <img src="/assets/img/Razorpay.png" />
                      </button>
                      : ""}
                    {location === "IN"
                      ? ""
                      : <div className="mt-3" >
                        <PayPalScriptProvider options={initialOptions}>
                          <div>
                            <PayPalButtons
                              disabled={teams ? true : false}
                              createOrder={(dataa, actions) => {
                                const items = data.map(item => {
                                  const dollerValue = item.doller ? (item.doller * 1.18).toFixed(2) : null;
                                  const wDollerValue = item.w_doller ? (item.w_doller * 1.18).toFixed(2) : null;

                                  return {
                                    name: item.table_name || item.w_name,
                                    unit_amount: {
                                      currency_code: "USD",
                                      value: dollerValue || wDollerValue || "0.00" // Default to "0.00" if both are null/undefined
                                    },
                                    quantity: "1"
                                  };
                                });

                                return actions.order.create({
                                  purchase_units: [
                                    {
                                      amount: {
                                        currency_code: "USD",
                                        value: amount.total_gstdoller.toString(), // Ensure this is a string
                                        breakdown: {
                                          item_total: {
                                            currency_code: "USD",
                                            value: amount.total_gstdoller.toString() // Ensure this is a string
                                          }
                                        }
                                      },
                                      items: items
                                    }
                                  ]
                                });
                              }}
                              onApprove={(data, actions) => {
                                return actions.order.capture().then(function (details) {
                                  console.log(details);
                                  // setPaid(true);
                                  headleSubmit()
                                  alert("Transaction completed by " + details.payer.name.given_name);
                                });
                              }}
                              onError={(err) => {
                                setError(err);
                                console.error("PayPal Checkout error:", err);
                              }}
                            />
                            {/* {error && <div>Error occurred: {error.message}</div>} */}
                          </div>
                        </PayPalScriptProvider>
                      </div>}
                  </div>
                </div>
              </div>
            </>}
        </div>
      </div>

      <style jsx>{`
        td {
          padding: 8px;
        }
        .shipping-radio {
          height: auto;
          width: auto;
          margin-right: 10px;
        }
      `}</style>
    </>
  );
}

export default Addtocard;
