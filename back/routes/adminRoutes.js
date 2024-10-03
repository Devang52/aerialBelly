const express = require("express");
const multer = require("multer");
const router = express.Router();
const {
    mailsend,
    reqOTP,
    verifyOTP,
    forgetPassword,

    login,
    user,
    updateusers,
    deleteusers,
    getStudent,
    getStudentbyID,

    createWorkshop,
    getAllWorkshops,
    getWorkshopById,
    updateWorkshop,
    deleteWorkshop,

    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,

    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct,

    createSubscription,
    getAllSubscription,
    getSubscriptionByTitle,
    updateSubscription,
    deleteSubscription,

    createLevel,
    getAllLevel,
    getLevelById,
    updateLevel,
    deleteLevel,

    createTableName,
    getAllTableName,
    getTableNameById,
    updateTableName,
    deleteTableName,

    addToCart,
    getAddToCart,
    deleteAddToCart,

    createOrderItem,
    getOrderItem,
    getOrderItemAll,

    PaymentHistory,

    createOrder,
    verifyPayment

} = require("../controller/adminController")

const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
})
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Only image is allowed"));
    }
}
const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})


router.post("/mailsend", mailsend)
router.post("/reqOTP", reqOTP)
router.post("/verifyOTP", verifyOTP)
router.put("/forgetPassword", forgetPassword)

router.post("/login", login)

router.post("/create-user", user)
router.put("/editusers/:id", upload.single("photo"), updateusers)
router.delete("/deleteusers/:id", deleteusers)
router.get("/getstudent", getStudent)
router.get("/getStudentbyID/:id", getStudentbyID)

router.post("/createWorkshop", upload.single("photo"), createWorkshop)
router.get("/getAllWorkshops", getAllWorkshops)
router.get("/getWorkshopById/:id", getWorkshopById)
router.put("/updateWorkshop/:id", upload.single("photo"), updateWorkshop)
router.delete("/delete/workshop/:id", deleteWorkshop)

router.post("/createevent", upload.single("photo"), createEvent)
router.get("/getallevents", getAllEvents)
router.put("/updateevent/:id", upload.single("photo"), updateEvent)
router.get("/geteventbyid/:id", getEventById)
router.delete("/delete/event/:id", deleteEvent);

router.post("/createproduct", upload.single("photo"), createProduct)
router.get("/getallproduct", getAllProduct)
router.put("/updateproduct/:id", upload.single("photo"), updateProduct)
router.get("/getproductbyid/:id", getProductById)
router.delete("/delete/product/:id", deleteProduct);

router.post("/createlevel", createLevel)
router.get("/getalllevel", getAllLevel)
router.put("/updatelevel/:id", updateLevel)
router.get("/getlevelbyid/:id", getLevelById)
router.delete("/delete/level/:id", deleteLevel);

router.post("/createsubscription", createSubscription)
router.get("/getallsubscription", getAllSubscription)
router.put("/updatesubscription/:id", updateSubscription)
router.get("/getsubscriptionbytitle/:id", getSubscriptionByTitle)
router.delete("/delete/subscription/:id", deleteSubscription);

router.post("/createtablename", createTableName)
router.get("/getalltablename", getAllTableName)
router.put("/updatetablename/:id", updateTableName)
router.get("/gettablenamebyid/:id", getTableNameById)
router.delete("/delete/tablename/:id", deleteTableName);

router.post("/addToCart/:id", addToCart)
router.get("/getAddToCart/:id", getAddToCart)
router.delete("/deleteAddToCart/:id", deleteAddToCart)

router.post("/createOrderItem", createOrderItem)
router.get("/getOrderItem/:id", getOrderItem)
router.get("/getOrderItemAll", getOrderItemAll)

router.get("/PaymentHistory/:id?", PaymentHistory)

//          Rezorpay
router.post("/create-order", createOrder)
router.post("/verify-payment", verifyPayment)

module.exports = router;