// import React from "react";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
// import Home from "./component/Home";
// import BellyDance from "./component/BellyDance";
// import About from "./component/About";
// import BellyDanceWorkShop from "./component/BellyDanceWorkShop";
// import PreRecordingClasses from "./component/PreRecordingClasses";
// import Aerialbellyart from "./component/Aerialbellyart";
// import Shop from "./component/Shop";
// import ProductDetails from "./component/ProductDetails";
// import OurLiveShow from "./component/OurLiveShow";
// import Studiorental from "./component/Studiorental";
// import Omi from "./component/Omi";
// import LoginPage from "./component/Loginpage";
// import Registration from "./component/Registration";
// import Packages from "./component/Packages";
// import Annualmember from "./component/Annualmember";
// import LocState from "./context/LocState";
// import Student from "./component/panel/Student";
// import Event from "./component/panel/Event";
// import CreateEvent from "./component/panel/CreateEvent";
// import EditEvent from "./component/panel/EditEvent";
// import Product from "./component/panel/Product";
// import CreateProduct from "./component/panel/CreateProduct";
// import EditProduct from "./component/panel/EditProduct";
// import SubscriptionPlan from "./component/panel/SubscriptionPlan";
// import CreateSubscriptionPlan from "./component/panel/CreateSubscriptionPlan";
// import EditSubscriptionPlan from "./component/panel/EditSubscriptionPlan";
// import TableName from "./component/panel/TableName";
// import Level from "./component/panel/Level";
// import CreateLevel from "./component/panel/CreateLevel";
// import EditLevel from "./component/panel/EditLevel";
// import Addtocard from "./component/Addtocard";

// const PrivateRoute = ({ element }) => {
//   const userRoll = JSON.parse(localStorage.getItem("adminRoll"))

//   if (userRoll != "admin") {
//     return <Navigate to="/loginpage" />;
//   }
//   return element;
// };
// const PrivateRouteUser = ({ element }) => {
//   const userRoll = JSON.parse(localStorage.getItem("aerialst"))
//   const user_type = userRoll ? userRoll.user_type : null
//   console.log(user_type);

//   if (user_type != "student") {
//     return <Navigate to="/loginpage" />;
//   }
//   return element;
// };

// function App() {

//   const location = useLocation();
//   const hideNavAndFooter = ['/loginpage', '/registration'].includes(location.pathname);

//   return (
//     <>
//       {!hideNavAndFooter && <Navbar />}

//       <LocState>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/bellydance" element={<BellyDance />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/bellydanceworkshop" element={<BellyDanceWorkShop />}></Route>
//           <Route path="/prerecordingclasses" element={<PreRecordingClasses />}></Route>
//           <Route path="/aerialbellyart" element={<Aerialbellyart />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/productdetails/:id" element={<ProductDetails />} />
//           <Route path="/ourliveshow" element={<OurLiveShow />} />
//           <Route path="/studiorental" element={<Studiorental />} />
//           <Route path="/omi" element={<Omi />} />
//           <Route path="/loginpage" element={<LoginPage />} />
//           <Route path="/registration" element={<Registration />} />
//           <Route path="/packages" element={<Packages />} />
//           <Route path="/annualmember" element={<Annualmember />} />

//           <Route path="/student" element={<PrivateRoute element={<Student />} />} />
//           <Route path="/event" element={<PrivateRoute element={<Event />} />} />
//           <Route path="/createevent" element={<PrivateRoute element={<CreateEvent />} />} />
//           <Route path="/editenevnt/:id" element={<PrivateRoute element={<EditEvent />} />} />
//           <Route path="/product" element={<PrivateRoute element={<Product />} />} />
//           <Route path="/createproduct" element={<PrivateRoute element={<CreateProduct />} />} />
//           <Route path="/editproduct/:id" element={<PrivateRoute element={<EditProduct />} />} />
//           <Route path="/subscription-plan" element={<PrivateRoute element={<SubscriptionPlan />} />} />
//           <Route path="/create-subscription-plan" element={<PrivateRoute element={<CreateSubscriptionPlan />} />} />
//           <Route path="/edit-subscription-plan/:id" element={<PrivateRoute element={<EditSubscriptionPlan />} />} />
//           <Route path="/tablename" element={<PrivateRoute element={<TableName />} />} />
//           <Route path="/level" element={<PrivateRoute element={<Level />} />} />
//           <Route path="/createlevel" element={<PrivateRoute element={<CreateLevel />} />} />
//           <Route path="/editlevel/:id" element={<PrivateRoute element={<EditLevel />} />} />
//           <Route path="/addtocard" element={<PrivateRouteUser element={<Addtocard />} />} />

//         </Routes>
//       </LocState>
//       {!hideNavAndFooter && <Footer />}
//     </>
//   );
// }

// export default App;


// import React, { useEffect } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import BellyDance from "./component/BellyDance";
import About from "./component/About";
import BellyDanceWorkShop from "./component/BellyDanceWorkShop";
import PreRecordingClasses from "./component/PreRecordingClasses";
import Aerialbellyart from "./component/Aerialbellyart";
import Shop from "./component/Shop";
import ProductDetails from "./component/ProductDetails";
import OurLiveShow from "./component/OurLiveShow";
import Studiorental from "./component/Studiorental";
import Omi from "./component/Omi";
import LoginPage from "./component/Loginpage";
import Registration from "./component/Registration";
import Packages from "./component/Packages";
import Annualmember from "./component/Annualmember";
import LocState from "./context/LocState";
import Student from "./component/panel/Student";
import Event from "./component/panel/Event";
import CreateEvent from "./component/panel/CreateEvent";
import EditEvent from "./component/panel/EditEvent";
import Product from "./component/panel/Product";
import CreateProduct from "./component/panel/CreateProduct";
import EditProduct from "./component/panel/EditProduct";
import SubscriptionPlan from "./component/panel/SubscriptionPlan";
import CreateSubscriptionPlan from "./component/panel/CreateSubscriptionPlan";
import EditSubscriptionPlan from "./component/panel/EditSubscriptionPlan";
import TableName from "./component/panel/TableName";
import Level from "./component/panel/Level";
import CreateLevel from "./component/panel/CreateLevel";
import EditLevel from "./component/panel/EditLevel";
import Addtocard from "./component/Addtocard";
import OrderList from "./component/OrderList";
import PurchasePackages from "./component/panel/PurchasePackages";
import StudentDetails from "./component/panel/StudentDetails";
import ForgotPassword from "./component/ForgotPassword";
import Workshop from "./component/panel/Workshop";
import CreateWorkshop from "./component/panel/CreateWorkshop";
import EditWorkshop from "./component/panel/EditWorkshop";
import Profile from "./component/Profile";
import EditProfile from "./component/EditProfile";
import TeamAndConditions from './component/TeamAndConditions';
import PaymentHis from './component/PaymentHis';
import PaymentPanl from './component/panel/PaymentPanl';

const PrivateRoute = ({ element }) => {
  const userRoll = JSON.parse(localStorage.getItem("adminRoll"))

  if (userRoll !== "admin") {
    return <Navigate to="/loginpage" />;
  }
  return element;
};

const PrivateRouteUser = ({ element }) => {
  const userRoll = JSON.parse(localStorage.getItem("aerialst"))
  const user_type = userRoll ? userRoll.user_type : null

  if (user_type !== "student") {
    return <Navigate to="/loginpage" />;
  }
  return element;
};

function App() {
  const location = useLocation();

  const adminRoutes = [
    "/student",
    "/event",
    "/createevent",
    "/editenevnt/:id",
    "/product",
    "/createproduct",
    "/editproduct/:id",
    "/subscription-plan",
    "/create-subscription-plan",
    "/edit-subscription-plan/:id",
    "/tablename",
    "/level",
    "/createlevel",
    "/editlevel/:id",
    "/purchasepackages",
    "/studentdetail/:id",
    "/workshop",
    "/create-workshop",
    "/edit-workshop/:id",
    "/all-payment-history"
  ];

  // const hideFooter = ['/loginpage', '/registration', '/forgot-password', ...adminRoutes].includes(location.pathname);
  const hideNav = ['/loginpage', '/registration', '/forgot-password'].includes(location.pathname);

  const editRoutes = adminRoutes.filter(route => route.includes('/edit') || route.includes('/edit-'));

  const hideFooter = ['/loginpage', '/registration', '/forgot-password', ...adminRoutes, ...editRoutes].some(route =>
    route.includes(':id')
      ? location.pathname.startsWith(route.replace(':id', ''))
      : location.pathname === route
  );


  // useEffect(() => {
  //   // Disable right-click
  //   document.addEventListener('contextmenu', (e) => {
  //     e.preventDefault();
  //   });

  //   // Disable Ctrl+C, Ctrl+X, Ctrl+V, and other key combinations
  //   document.addEventListener('keydown', (e) => {
  //     if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'p')) {
  //       e.preventDefault();
  //     }
  //   });

  //   // Cleanup event listeners on unmount
  //   return () => {
  //     document.removeEventListener('contextmenu', () => { });
  //     document.removeEventListener('keydown', () => { });
  //   };
  // }, []);

  return (
    <>

      <LocState>
        {!hideNav && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bellydance" element={<BellyDance />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/bellydanceworkshop" element={<BellyDanceWorkShop />}></Route>
          <Route path="/prerecordingclasses" element={<PreRecordingClasses />}></Route>
          <Route path="/aerialbellyart" element={<Aerialbellyart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/ourliveshow" element={<OurLiveShow />} />
          <Route path="/studiorental" element={<Studiorental />} />
          <Route path="/omi" element={<Omi />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/annualmember" element={<Annualmember />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path='/terms-&-conditions' element={<TeamAndConditions />} />

          <Route path="/student" element={<PrivateRoute element={<Student />} />} />
          <Route path="/event" element={<PrivateRoute element={<Event />} />} />
          <Route path="/createevent" element={<PrivateRoute element={<CreateEvent />} />} />
          <Route path="/editenevnt/:id" element={<PrivateRoute element={<EditEvent />} />} />
          <Route path="/product" element={<PrivateRoute element={<Product />} />} />
          <Route path="/createproduct" element={<PrivateRoute element={<CreateProduct />} />} />
          <Route path="/editproduct/:id" element={<PrivateRoute element={<EditProduct />} />} />
          <Route path="/subscription-plan" element={<PrivateRoute element={<SubscriptionPlan />} />} />
          <Route path="/create-subscription-plan" element={<PrivateRoute element={<CreateSubscriptionPlan />} />} />
          <Route path="/edit-subscription-plan/:id" element={<PrivateRoute element={<EditSubscriptionPlan />} />} />
          <Route path="/tablename" element={<PrivateRoute element={<TableName />} />} />
          <Route path="/level" element={<PrivateRoute element={<Level />} />} />
          <Route path="/createlevel" element={<PrivateRoute element={<CreateLevel />} />} />
          <Route path="/editlevel/:id" element={<PrivateRoute element={<EditLevel />} />} />
          <Route path="/studentdetail/:id" element={<PrivateRoute element={<StudentDetails />} />} />
          <Route path="/workshop" element={<PrivateRoute element={<Workshop />} />} />
          <Route path="/create-workshop" element={<PrivateRoute element={<CreateWorkshop />} />} />
          <Route path="/edit-workshop/:id" element={<PrivateRoute element={<EditWorkshop />} />} />
          <Route path="/purchasepackages" element={<PrivateRoute element={<PurchasePackages />} />} />
          <Route path='/all-payment-history' element={<PrivateRoute element={<PaymentPanl />} />} />

          <Route path="/addtocard" element={<PrivateRouteUser element={<Addtocard />} />} />
          <Route path="/orderlist" element={<PrivateRouteUser element={<OrderList />} />} />
          <Route path="/profile" element={<PrivateRouteUser element={<Profile />} />} />
          <Route path="/editprofile" element={<PrivateRouteUser element={<EditProfile />} />} />
          <Route path='/payment-history' element={<PrivateRouteUser element={<PaymentHis />} />} />
        </Routes>
      </LocState>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;

