const express = require("express");
const cors = require('cors');
const { PORT, REACT_BASE_URL } = require("./config/envConfig");
const db = require('./db/connection');
const adminRoute = require("./routes/adminRoutes");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [REACT_BASE_URL],
    credentials: true
}));

// Verify User Middleware
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Message: 'We need a token, please provide it.' });
    } else {
        jwt.verify(token, 'our-jsonwebtoken-secret-key', (err, decoded) => {
            if (err) {
                res.clearCookie('token');
                return res.json({ Message: 'Authentication Error.', redirect: '/loginpage' });
            } else {
                req.name = decoded.name;
                next();
            }
        });
    }
};

// Routes
app.get('/', verifyUser, (req, res) => {
    return res.json({ Status: 'Success', name: req.name });
});

const sessionRoute = (req, res) => {
    res.header('Access-Control-Allow-Origin', REACT_BASE_URL);
    res.header('Access-Control-Allow-Credentials', true);
    res.json({ Status: 'Success', name: req.name });
};

app.get('/session', verifyUser, sessionRoute);

// Logout Route
app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.json({ Status: 'Success', Message: 'Logged out successfully.' });
});

app.use(adminRoute);
app.use("/uploads", express.static("./uploads"));

app.listen(PORT, () => {
    console.log(`Server running at Port ${PORT}`);
});
