const db = require("../db/connection").db;
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const { randomInt } = require("crypto");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const login = (req, res) => {
    try {
        const sql = "SELECT id, name, user_type FROM users WHERE email = ? AND password = ?";
        db.query(sql, [req.body.email, req.body.password], (err, data) => {
            if (err) return res.json({ Message: "Server Side Error" });
            if (data.length > 0) {
                const userdata = data[0]
                const name = data[0].name;
                const roll = data[0].user_type;
                const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
                res.cookie('token', token);
                return res.json({ Status: "Success", roll, userdata });
            } else {
                return res.json({ Message: "No Records existed" });
            }
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ Message: "Internal Server Error" });
    }
};

function sendData(data) {
    const mailOptions = {
        from: 'devang@torbitmultisoft.com',
        to: 'torbitdevang2001@gmail.com',
        subject: 'Inquiry',
        text: `Inquiry from this email: ${data.email}, phone: ${data.phone}, classes: ${data.classes}`
    };

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'devang@torbitmultisoft.com',
            pass: 'fsgo nkfd nvrx fall' // Use environment variables for security
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log(`Data sent successfully`);
        }
    });
}

const mailsend = (req, res) => {
    const data = req.body;
    sendData(data);
    res.status(200).json({ message: `Data sent successfully` });
};


const otpCache = {}

function generatOTP() {
    const otp = randomInt(1000, 10000)
    return otp
}

function sendOTP(email, otp) {
    const mailOptions = {
        from: 'devang@torbitmultisoft.com',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP for verification is: ${otp}`
    }
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'devang@torbitmultisoft.com',
            pass: 'fsgo nkfd nvrx fall'
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('OTP Email send successfully');
        }
    })
}

const reqOTP = (req, res) => {
    try {
        const sql = `SELECT * FROM users WHERE email = ?`;
        const { email } = req.body;
        db.query(sql, [email], (err, result) => {
            if (err) {
                console.error('Error fetching users:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }

            if (result && result.length > 0) {
                const otp = generatOTP()
                otpCache[email] = otp;

                sendOTP(email, otp)
                res.cookie('otpCache', otpCache, { maxAge: 30000, httpOnly: true });
                return res.status(200).json({ success: true, error: null, msg: 'OTP sent successfully' });
            } else {
                return res.status(201).json({ success: 0, error: null, msg: 'This Email is not Register' });
            }
        });


    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
}
const verifyOTP = (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!otpCache.hasOwnProperty(email)) {
            return res.status(400).json({ message: 'Email not found' })
        }
        const enteredOtp = parseInt(otp.trim(), 10);

        if (otpCache[email] === enteredOtp) {
            delete otpCache[email];
            return res.status(200).json({ message: 'OTP Verification successfuly' })
        } else {
            return res.status(201).json({ message: 'Invalid OTP' })
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
}
const forgetPassword = (req, res) => {
    try {
        const sql = 'UPDATE users SET password = ? WHERE email = ?';
        const { email, password } = req.body;

        db.query(sql, [password, email], (err, result) => {
            if (err) {
                console.error('Error updating user:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};



//              student

const user = (req, res) => {
    try {

        const value = [
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.address,
            req.body.de_address,
            req.body.nationality,
            req.body.city,
            req.body.code,
            req.body.phone,
            req.body.w_number,
            req.body.gender,
            req.body.dob,
            req.body.health,
            req.body.h_issue,
            req.body.start_date,
            req.body.user_type
        ]

        const insertQuery = 'INSERT INTO users (`name`, `email`, `password`, `address`, `de_address`, `nationality`, `city`, `code`, `phone`, `w_number`, `gender`, `dob`, `health`, `h_issue`, `start_date`, `user_type`) VALUES  (?)';
        db.query(insertQuery, [value], (err, result) => {
            if (err) {
                console.error('Error creating user:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data insert Failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data insert Successfully' });
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

const getStudent = (req, res) => {
    try {
        const sql = `SELECT * FROM users WHERE user_type = 'student' ORDER BY id DESC`;
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching users:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const getStudentbyID = (req, res) => {
    try {
        const sql = `SELECT * FROM users WHERE user_type = 'student' AND id = ?`;
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching users:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};

// const updateusers = (req, res) => {
//     try {
//         const sql = 'UPDATE users SET name = ?, email = ?, password = ?, phone = ? WHERE id = ?';
//         const id = req.params.id;

//         db.query(sql, [req.body.name, req.body.email, req.body.password, req.body.phone, id], (err, result) => {
//             if (err) {
//                 console.error('Error updating user:', err);
//                 return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
//             }
//             return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
//         });
//     } catch (error) {
//         console.error('Unexpected error:', error);
//         return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
//     }
// };
const updateusers = (req, res) => {
    try {
        const id = req.params.id;
        const {
            name, email, address, de_address, nationality, city, phone, w_number, dob
        } = req.body;

        const photo = req.file ? req.file.filename : null;

        if (photo) {
            db.query('SELECT photo FROM users WHERE id = ?', [id], (selectErr, selectResult) => {
                if (selectErr) {
                    console.error('Error selecting users photo:', selectErr);
                    return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
                }

                const sqlph = 'UPDATE users SET name = ?, email = ?, address = ?, de_address = ?, nationality = ?, city = ?, phone = ?, w_number = ?, dob = ?, photo = ? WHERE id = ?'
                db.query(sqlph, [name, email, address, de_address, nationality, city, phone, w_number, dob, photo, id], (err, result) => {
                    if (err) {
                        console.error('Error updating product:', err);
                        return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                    }
                    const profileFilename = selectResult[0].photo;
                    if (profileFilename) {
                        const profilePath = `uploads/${profileFilename}`;
                        fs.unlink(profilePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error('Error deleting files:', unlinkErr);
                            }
                            return res.status(200).json({ success: 0, data: result, error: null, msg: 'product deleted successfully' });
                        });
                    } else {
                        return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
                    }
                })
            })
        } else {
            const sql = 'UPDATE users SET name = ?, email = ?, address = ?, de_address = ?, nationality = ?, city = ?, phone = ?, w_number = ?, dob = ? WHERE id = ?';
            db.query(sql, [name, email, address, de_address, nationality, city, phone, w_number, dob, id], (err, result) => {
                if (err) {
                    console.error('Error updating users:', err);
                    return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                }
                return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};

const deleteusers = (req, res) => {
    try {
        const sql = 'DELETE FROM users WHERE id = ?';
        const id = req.params.id; // Assuming id is passed as a parameter in the request
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error deleting user:', err);
                return res.status(500).json({ success: 0, data: null, error: err, msg: 'Data Delete Failed' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: 0, data: null, error: null, msg: 'User not found' });
            }
            return res.status(200).json({ success: 1, data: result, error: null, msg: 'User deleted successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 0, data: null, error: error, msg: 'Internal Server Error' });
    }
};

//              Event

const createEvent = (req, res) => {
    try {
        const values = [
            req.body.title,
            req.body.date,
            req.body.description,
            req.body.address,
            req.file.filename
        ]

        const insertQuery = 'INSERT INTO event (`title`, `date`, `description`, `address`, `photo`) VALUES (?)';
        db.query(insertQuery, [values], (err, result) => {
            if (err) {
                console.error('Error creating event:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Event insert Failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Event insert Successfully' });
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const getAllEvents = (req, res) => {
    try {
        const sql = 'SELECT * FROM event ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching events:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const getEventById = (req, res) => {
    try {
        const sql = 'SELECT * FROM event WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying event by ID:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const updateEvent = (req, res) => {
    try {
        const id = req.params.id;
        const {
            title, date, description, address
        } = req.body;

        const photo = req.file ? req.file.filename : null;

        if (photo) {
            db.query('SELECT photo FROM event WHERE id = ?', [id], (selectErr, selectResult) => {
                if (selectErr) {
                    console.error('Error selecting event photo:', selectErr);
                    return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
                }

                const sqlph = 'UPDATE event SET title = ?, date = ?, description = ?, address = ?, photo = ? WHERE id = ?'
                db.query(sqlph, [title, date, description, address, photo, id], (err, result) => {
                    if (err) {
                        console.error('Error updating product:', err);
                        return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                    }
                    const profileFilename = selectResult[0].photo;
                    if (profileFilename) {
                        const profilePath = `uploads/${profileFilename}`;
                        fs.unlink(profilePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error('Error deleting files:', unlinkErr);
                            }
                            return res.status(200).json({ success: 0, data: result, error: null, msg: 'product deleted successfully' });
                        });
                    } else {
                        return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
                    }
                })
            })
        } else {
            const sql = 'UPDATE event SET title = ?, date = ?, description = ?, address = ? WHERE id = ?';
            db.query(sql, [title, date, description, address, id], (err, result) => {
                if (err) {
                    console.error('Error updating event:', err);
                    return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                }
                return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const deleteEvent = (req, res) => {
    try {
        const id = req.params.id;

        db.query('SELECT photo FROM event WHERE id = ?', [id], (selectErr, selectResult) => {
            if (selectErr) {
                console.error('Error selecting user:', selectErr);
                return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
            }
            db.query('DELETE FROM event WHERE id = ?', [id], (deleteErr, deleteResult) => {
                if (deleteErr) {
                    console.error('Error deleting event:', deleteErr);
                    return res.status(500).json({ success: 1, data: null, error: deleteErr, msg: "Data delete Failed" });
                }
                const profileFilename = selectResult[0].photo;
                if (profileFilename) {
                    const profilePath = `uploads/${profileFilename}`;
                    fs.unlink(profilePath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error deleting files:', unlinkErr);
                        }
                        return res.status(200).json({ success: 0, data: null, error: null, msg: 'event deleted successfully' });
                    });
                } else {
                    return res.status(200).json({ success: 0, data: null, error: null, msg: 'event deleted successfully' });
                }
            });
        })
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error', });
    }
};


//              workshop

const createWorkshop = (req, res) => {
    try {
        const values = [
            req.body.title,
            req.body.date,
            req.body.city,
            req.body.location,
            req.body.rupees,
            req.body.doller,
            req.body.description,
            req.file.filename
        ]

        const insertQuery = 'INSERT INTO workshop (`title`, `date`, `city`, `location`, `rupees`, `doller`, `description`, `photo`) VALUES (?)';
        db.query(insertQuery, [values], (err, result) => {
            if (err) {
                console.error('Error creating workshop:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'workshop insert Failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'workshop insert Successfully' });
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const getAllWorkshops = (req, res) => {
    try {
        const sql = 'SELECT * FROM workshop ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching workshop:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const getWorkshopById = (req, res) => {
    try {
        const sql = 'SELECT * FROM workshop WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying workshop by ID:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const updateWorkshop = (req, res) => {
    try {
        const id = req.params.id;
        const {
            title, date, city, location, rupees, doller, description
        } = req.body;

        const photo = req.file ? req.file.filename : null;

        if (photo) {
            db.query('SELECT photo FROM workshop WHERE id = ?', [id], (selectErr, selectResult) => {
                if (selectErr) {
                    console.error('Error selecting workshop photo:', selectErr);
                    return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
                }

                const sqlph = 'UPDATE workshop SET title = ?, date = ?, city = ?, location = ?, rupees = ?, doller = ?, description = ?, photo = ? WHERE id = ?'
                db.query(sqlph, [title, date, city, location, rupees, doller, description, photo, id], (err, result) => {
                    if (err) {
                        console.error('Error updating product:', err);
                        return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                    }
                    const profileFilename = selectResult[0].photo;
                    if (profileFilename) {
                        const profilePath = `uploads/${profileFilename}`;
                        fs.unlink(profilePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error('Error deleting files:', unlinkErr);
                            }
                            return res.status(200).json({ success: 0, data: result, error: null, msg: 'product deleted successfully' });
                        });
                    } else {
                        return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
                    }
                })
            })
        } else {
            const sql = 'UPDATE workshop SET title = ?, date = ?, city = ?, location = ?, rupees = ?, doller = ?, description = ? WHERE id = ?';
            db.query(sql, [title, date, city, location, rupees, doller, description, id], (err, result) => {
                if (err) {
                    console.error('Error updating event:', err);
                    return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                }
                return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const deleteWorkshop = (req, res) => {
    try {
        const id = req.params.id;

        db.query('SELECT photo FROM workshop WHERE id = ?', [id], (selectErr, selectResult) => {
            if (selectErr) {
                console.error('Error selecting user:', selectErr);
                return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
            }
            db.query('DELETE FROM workshop WHERE id = ?', [id], (deleteErr, deleteResult) => {
                if (deleteErr) {
                    console.error('Error deleting workshop:', deleteErr);
                    return res.status(500).json({ success: 1, data: null, error: deleteErr, msg: "Data delete Failed" });
                }
                const profileFilename = selectResult[0].photo;
                if (profileFilename) {
                    const profilePath = `uploads/${profileFilename}`;
                    fs.unlink(profilePath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error deleting files:', unlinkErr);
                        }
                        return res.status(200).json({ success: 0, data: null, error: null, msg: 'workshop deleted successfully' });
                    });
                } else {
                    return res.status(200).json({ success: 0, data: null, error: null, msg: 'workshop deleted successfully' });
                }
            });
        })
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error', });
    }
};


//              Product

const createProduct = (req, res) => {
    try {
        const values = [
            req.body.title,
            req.body.description,
            req.body.amount,
            req.body.size,
            req.body.color,
            req.file.filename
        ]

        const insertQuery = 'INSERT INTO product (`title`, `description`, `amount`, `size`, `color`, `photo`) VALUES (?)';
        db.query(insertQuery, [values], (err, result) => {
            if (err) {
                console.error('Error creating product:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'product insert Failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'product insert Successfully' });
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const getAllProduct = (req, res) => {
    try {
        const sql = 'SELECT * FROM product ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching product:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const getProductById = (req, res) => {
    try {
        const sql = 'SELECT * FROM product WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying product by ID:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const {
            title, description, amount, size, color
        } = req.body;

        const photo = req.file ? req.file.filename : null;

        if (photo) {
            db.query('SELECT photo FROM product WHERE id = ?', [id], (selectErr, selectResult) => {
                if (selectErr) {
                    console.error('Error selecting user:', selectErr);
                    return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
                }

                const sql = 'UPDATE product SET title = ?, description = ?, amount = ?, size = ?, color = ?, photo = ? WHERE id = ?';
                db.query(sql, [title, description, amount, size, color, photo, id], (err, result) => {
                    if (err) {
                        console.error('Error updating product:', err);
                        return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                    }
                    const profileFilename = selectResult[0].photo;
                    if (profileFilename) {
                        const profilePath = `uploads/${profileFilename}`;
                        fs.unlink(profilePath, (unlinkErr) => {
                            if (unlinkErr) {
                                console.error('Error deleting files:', unlinkErr);
                            }
                            return res.status(200).json({ success: 0, data: result, error: null, msg: 'product deleted successfully' });
                        });
                    } else {
                        return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
                    }
                })
            });
        } else {
            const sqll = 'UPDATE product SET title = ?, description = ?, amount = ?, size = ?, color = ? WHERE id = ?';
            const id = req.params.id;

            db.query(sqll, [req.body.title, req.body.description, req.body.amount, req.body.size, req.body.color, id], (err, result) => {
                if (err) {
                    console.error('Error updating product:', err);
                    return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
                }
                return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const deleteProduct = (req, res) => {
    try {
        const id = req.params.id;

        db.query('SELECT photo FROM product WHERE id = ?', [id], (selectErr, selectResult) => {
            if (selectErr) {
                console.error('Error selecting user:', selectErr);
                return res.status(500).json({ success: 1, data: null, error: selectErr, msg: "Data Get Failed" });
            }
            db.query('DELETE FROM product WHERE id = ?', [id], (deleteErr, deleteResult) => {
                if (deleteErr) {
                    console.error('Error deleting product:', deleteErr);
                    return res.status(500).json({ success: 1, data: null, error: deleteErr, msg: "Data delete Failed" });
                }
                const profileFilename = selectResult[0].photo;
                if (profileFilename) {
                    const profilePath = `uploads/${profileFilename}`;
                    fs.unlink(profilePath, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error deleting files:', unlinkErr);
                        }

                        return res.status(200).json({ success: 0, data: null, error: null, msg: 'product deleted successfully' });
                    });
                } else {
                    return res.status(200).json({ success: 0, data: null, error: null, msg: 'product deleted successfully' });
                }
            });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error', });
    }
};





//              subscription

const createSubscription = (req, res) => {
    try {
        const { table_id, level_id, duration, rupees, doller } = req.body;

        const insertQuery = 'INSERT INTO subscription (table_id, level_id, duration, rupees, doller) VALUES (?, ?, ?, ?, ?)';
        db.query(insertQuery, [table_id, level_id, duration, rupees, doller], (err, result) => {
            if (err) {
                console.error('Error creating subscription:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'subscription insert Failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'subscription insert Successfully' });
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const getAllSubscription = (req, res) => {
    try {
        const sql = `
        SELECT
             su.* ,
             ta.name AS table_name,
             le.le_name AS level_name
        FROM 
            subscription AS su
        LEFT JOIN tablename AS ta ON su.table_id = ta.id 
        LEFT JOIN level AS le ON su.level_id = le.id 
        ORDER BY id DESC`;
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching subscription:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};

const getSubscriptionByTitle = (req, res) => {
    try {
        const sql = `
            SELECT 
                su.id, 
                su.table_id, 
                su.level_id, 
                su.duration, 
                su.rupees, 
                su.doller, 
                le.le_name AS level_name
            FROM 
                subscription AS su
            LEFT JOIN level AS le ON su.level_id = le.id
            WHERE su.table_id = ?`;
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying subscription by ID:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }

            // Process the result to get the desired format
            const data = [];
            const groupedData = {};

            result.forEach(item => {
                const key = `${item.table_id}_${item.level_id}`;

                if (!groupedData[key]) {
                    groupedData[key] = {
                        table_id: item.table_id,
                        level_id: item.level_id,
                        level_name: item.level_name,
                    };
                }

                const durationIndex = Object.keys(groupedData[key]).filter(key => key.startsWith('duration')).length + 1;

                groupedData[key][`le_${durationIndex}_id`] = item.id;
                groupedData[key][`duration_${durationIndex}`] = item.duration;
                groupedData[key][`rupees_${durationIndex}`] = item.rupees;
                groupedData[key][`doller_${durationIndex}`] = item.doller;
            });

            for (const key in groupedData) {
                data.push(groupedData[key]);
            }

            return res.status(200).json({ success: 0, data, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const updateSubscription = (req, res) => {
    try {
        const sql = 'UPDATE subscription SET table_id = ?, level_id = ?, duration = ?, rupees = ?, doller = ? WHERE id = ?';
        const id = req.params.id;

        db.query(sql, [req.body.table_id, req.body.level_id, req.body.duration, req.body.rupees, req.body.doller, id], (err, result) => {
            if (err) {
                console.error('Error updating subscription:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const deleteSubscription = (req, res) => {
    try {
        const sql = 'DELETE FROM subscription WHERE id =?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error deleting subscription:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Delete Failed ' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Delete Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error', });
    }
};


//       Level

const createLevel = (req, res) => {
    try {
        const { table_id, le_name } = req.body;

        const insertQuery = 'INSERT INTO level (table_id, le_name) VALUES (?, ?)';
        db.query(insertQuery, [table_id, le_name], (err, result) => {
            if (err) {
                console.error('Error creating level:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'level insert Failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'level insert Successfully' });
        });

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const getAllLevel = (req, res) => {
    try {
        const sql = 'SELECT * FROM level ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching level:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const getLevelById = (req, res) => {
    try {
        const sql = 'SELECT * FROM level WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying level by ID:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Get Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Get Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const updateLevel = (req, res) => {
    try {
        const sql = 'UPDATE level SET table_id = ?, le_name = ? WHERE id = ?';
        const id = req.params.id;

        db.query(sql, [req.body.table_id, req.body.le_name, id], (err, result) => {
            if (err) {
                console.error('Error updating product:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Update Failed' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Update Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error' });
    }
};
const deleteLevel = (req, res) => {
    try {
        const sql = 'DELETE FROM level WHERE id =?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error deleting level:', err);
                return res.status(500).json({ success: 1, data: null, error: err, msg: 'Data Delete Failed ' });
            }
            return res.status(200).json({ success: 0, data: result, error: null, msg: 'Data Delete Successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: 1, data: null, error: error, msg: 'Internal Server Error', });
    }
};


// name //


const createTableName = async (req, res) => {
    try {
        const { name } = req.body;
        const insertQuery = 'INSERT INTO tablename (name) VALUES (?)';
        db.query(insertQuery, [name], (err, result) => {
            if (err) {
                console.error('Error creating name:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'tablename insert failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'tablename inserted successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

const getAllTableName = async (req, res) => {
    try {
        const sql = 'SELECT * FROM tablename ORDER BY id DESC';
        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching tablename:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data fetched successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

const getTableNameById = async (req, res) => {
    try {
        const sql = 'SELECT * FROM tablename WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying tablename by ID:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data fetched successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

const updateTableName = async (req, res) => {
    try {
        const { title, date, description, address } = req.body;
        const sql = 'UPDATE tablename SET title = ?, date = ?, description = ?, address = ? WHERE id = ?';
        const id = req.params.id;

        db.query(sql, [title, date, description, address, id], (err, result) => {
            if (err) {
                console.error('Error updating tablename:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data update failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data updated successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

const deleteTableName = async (req, res) => {
    try {
        const sql = 'DELETE FROM tablename WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error deleting tablename:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data deletion failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data deleted successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};



const addToCart = async (req, res) => {
    try {
        const { cart_type } = req.body
        if (cart_type === 1) {
            const { user_id, quantity, size, color, text } = req.body
            const product_id = req.params.id;
            const sqlcart = 'SELECT * FROM add_to_cart WHERE user_id =? AND product_id = ?'
            db.query(sqlcart, [user_id, product_id], (errcart, resultproduct) => {
                if (errcart) {
                    console.error('Error querying tablename by ID:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
                }

                if (resultproduct.length > 0) {
                    return res.status(201).json({ success: true, data: null, error: null, msg: 'This Product is already selected' });
                }
                const insertQuery = 'INSERT INTO add_to_cart (user_id, product_id, quantity, size, text, color ) VALUES (?, ?, ?, ?, ?, ?)';
                db.query(insertQuery, [user_id, product_id, quantity, size, text, color], (err, result) => {
                    if (err) {
                        console.error('Error creating name:', err);
                        return res.status(500).json({ success: false, data: null, error: err, msg: 'tablename insert failed' });
                    }
                    return res.status(200).json({ success: true, data: result, error: null, msg: 'tablename inserted successfully' });
                });
            })
        } else if (cart_type === 2) {
            const { user_id } = req.body
            const workshop_id = req.params.id;
            const sqlcart = 'SELECT * FROM add_to_cart WHERE user_id =? AND workshop_id = ?'
            db.query(sqlcart, [user_id, workshop_id], (errcart, resultproduct) => {
                if (errcart) {
                    console.error('Error querying tablename by ID:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
                }

                if (resultproduct.length > 0) {
                    return res.status(201).json({ success: true, data: null, error: null, msg: 'This Product is already selected' });
                }
                const insertQuery = 'INSERT INTO add_to_cart (user_id, workshop_id ) VALUES (?, ?)';
                db.query(insertQuery, [user_id, workshop_id], (err, result) => {
                    if (err) {
                        console.error('Error creating name:', err);
                        return res.status(500).json({ success: false, data: null, error: err, msg: 'tablename insert failed' });
                    }
                    return res.status(200).json({ success: true, data: result, error: null, msg: 'tablename inserted successfully' });
                });
            })
        } else {
            const sql = 'SELECT * FROM subscription WHERE id = ?';
            const id = req.params.id;
            db.query(sql, [id], (err, result) => {
                if (err) {
                    console.error('Error querying tablename by ID:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
                }
                const { user_id } = req.body
                const subscription_id = result[0].id
                const sqlcart = 'SELECT * FROM add_to_cart WHERE user_id =? AND subscription_id = ?'
                db.query(sqlcart, [user_id, subscription_id], (errcart, resultcart) => {
                    if (errcart) {
                        console.error('Error querying tablename by ID:', err);
                        return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
                    }

                    if (resultcart.length > 0) {
                        return res.status(201).json({ success: true, data: null, error: null, msg: 'This Cart is already selected' });
                    }
                    const insertQuery = 'INSERT INTO add_to_cart (user_id, table_id, level_id, subscription_id ) VALUES (?, ?, ?, ?)';
                    const subscription_id = result[0].id
                    db.query(insertQuery, [user_id, result[0].table_id, result[0].level_id, subscription_id], (err, result) => {
                        if (err) {
                            console.error('Error creating name:', err);
                            return res.status(500).json({ success: false, data: null, error: err, msg: 'tablename insert failed' });
                        }
                        return res.status(200).json({ success: true, data: result, error: null, msg: 'tablename inserted successfully' });
                    });
                })
            });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const getAddToCart = async (req, res) => {
    try {
        const sql = `
        SELECT 
            ad.*,
            tn.name AS table_name,
            le.le_name AS level_name,
            su.duration AS duration,
            su.rupees AS rupees,
            su.doller AS doller,
            pr.title AS title,
            pr.amount AS amount,
            pr.photo AS photo,
            wo.title AS w_name,
            wo.rupees AS w_rupees,
            wo.doller AS w_doller,
            wo.photo AS w_photo,
            us.de_address AS de_address
        FROM 
            add_to_cart AS ad 
        LEFT JOIN tablename AS tn ON ad.table_id = tn.id
        LEFT JOIN level AS le ON ad.level_id = le.id
        LEFT JOIN subscription AS su ON ad.subscription_id = su.id
        LEFT JOIN product AS pr ON ad.product_id = pr.id
        LEFT JOIN workshop AS wo ON ad.workshop_id = wo.id
        LEFT JOIN users AS us ON ad.user_id = us.id
        WHERE user_id = ?`;
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying add_to_cart by ID:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data fetched successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};
const deleteAddToCart = async (req, res) => {
    try {
        const sql = 'DELETE FROM add_to_cart WHERE id = ?';
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error deleting tablename:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data deletion failed' });
            }
            return res.status(200).json({ success: true, data: result, error: null, msg: 'Data deleted successfully' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

//          Email for purchese 
function sendDataCart(data) {
    const mailOptions = {
        from: 'devang@torbitmultisoft.com',
        to: 'torbitdevang2001@gmail.com',
        subject: 'Inquiry from your student for',
        html: `
            <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background-color: #f9f9f9; border-radius: 8px; text-align: center;">
                <!-- Logo Section -->
                <div style="margin-bottom: 20px;">
                    <img src='http://localhost:8000/uploads/logo.png' alt="Aeril Belly Logo" style="width: 30%;" />
                </div>

                <!-- Welcome Message Section -->
                <div style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
                    <h1 style="color: #333; font-size: 24px; margin-bottom: 10px;">A Hearty Welcome to You!</h1>
                    <p style="color: #666; font-size: 16px; line-height: 1.6;">
                        Dear ${data.email || 'user'},<br><br>
                        Thrilled to have you join LightX, the ultimate AI-enhanced photo-video editor & generator, designed just for you!
                    </p>
                    <p style="color: #666; font-size: 16px; line-height: 1.6;">
                        We're all about empowering your creativity with advanced AI tools and are here to support your creative journey every step of the way.
                        If you have any questions, need inspiration, or just want to share your creations, our community is here for you.
                    </p>
                </div>

                <!-- Footer Section -->
                <div style="margin-top: 20px; color: #999; font-size: 14px;">
                    <p>If you no longer wish to receive these emails, you can <a href="#" style="color: #0056b3;">unsubscribe</a> at any time.</p>
                </div>
            </div>
        `
    };

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'devang@torbitmultisoft.com',
            pass: 'fsgo nkfd nvrx fall' // Use environment variables for security
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log(`Data sent successfully`);
        }
    });
}

const createOrderItem = (req, res) => {
    try {
        const items = req.body;

        let total_rupeesa = 0;
        let total_dollera = 0;
        let total_amount = 0;
        let total_w_rup = 0;
        let total_w_dol = 0;

        if (items.length > 0) {
            const { user_id } = items[0];
            items.forEach(item => {
                if (item.rupees) total_rupeesa += item.rupees;
                if (item.doller) total_dollera += item.doller;
                if (item.amount) total_amount += item.amount;
                if (item.w_rupees) total_w_rup += item.w_rupees;
                if (item.w_doller) total_w_dol += item.w_doller;
            });
            const payment_status = 1;

            let total_doller = total_dollera + total_w_dol
            let total_rupees = total_rupeesa + total_w_rup + total_amount

            const insertQuery = 'INSERT INTO buy (user_id, payment_status, total_rupees, total_doller) VALUES (?, ?, ?, ?)';
            db.query(insertQuery, [user_id, payment_status, total_rupees, total_doller], (err, result) => {
                if (err) {
                    console.error('Error creating order:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Order insert failed' });
                }

                if (!Array.isArray(items) || items.length === 0) {
                    return res.status(400).json({ success: false, data: null, error: 'Items array is required', msg: 'Invalid input data' });
                }
                const order_id = result.insertId
                const insertQueryOrder = 'INSERT INTO order_items ( order_id ,table_id, level_id, subscription_id, rupees, doller, product_id, quantity, workshop_id, amount, size, text, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

                items.forEach(item => {
                    const { table_id, level_id, subscription_id, rupees, doller, id, product_id, quantity, workshop_id, amount, size, text, color, w_rupees, w_doller } = item;
                    const rupeess = rupees !== null && rupees !== undefined ? rupees : w_rupees;
                    const dollerr = doller !== null && doller !== undefined ? doller : w_doller;

                    db.query(insertQueryOrder, [order_id, table_id, level_id, subscription_id, rupeess, dollerr, product_id, quantity, workshop_id, amount, size, text, color]);

                    const deleteQuery = 'DELETE FROM add_to_cart WHERE id = ?';
                    db.query(deleteQuery, [id]);
                });
                sendDataCart(items)
                return res.status(200).json({ success: true, data: result, error: null, msg: 'Order inserted successfully' });
            });
        } else {
            return res.status(400).json({ success: false, data: null, error: 'No items provided', msg: 'Request body should contain an array of items' });
        }

    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

const getOrderItem = async (req, res) => {
    try {
        const sql = `
        SELECT 
            bu.*,
            us.name AS user_name
        FROM 
            buy AS bu
        LEFT JOIN users AS us ON bu.user_id = us.id
        WHERE user_id = ?`;
        const id = req.params.id;
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error querying order items by ID:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
            }

            const items = result;

            if (items.length > 0) {
                const orderItems = [];
                const userName = items[0].user_name;

                let completedQueries = 0;

                items.forEach((item, index) => {
                    const orderId = item.id;
                    const sqlOrder = `
                    SELECT 
                        oi.*,
                        tn.name AS table_name,
                        lv.le_name AS level_name,
                        su.duration AS duration,
                        pr.title AS title,
                        pr.amount AS amount,
                        pr.photo AS photo,
                        wo.title AS w_name,
                        wo.rupees AS w_rupees,
                        wo.doller AS w_doller,
                        wo.photo AS w_photo 
                    FROM 
                        order_items AS oi 
                    LEFT JOIN tablename AS tn ON oi.table_id = tn.id  
                    LEFT JOIN level AS lv ON oi.level_id = lv.id  
                    LEFT JOIN subscription AS su ON oi.subscription_id = su.id
                    LEFT JOIN product AS pr ON oi.product_id = pr.id
                    LEFT JOIN workshop AS wo ON oi.workshop_id = wo.id
                    WHERE order_id = ?`;

                    db.query(sqlOrder, [orderId], (err, orderResult) => {
                        if (err) {
                            console.error('Error fetching order items:', err);
                            return res.status(500).json({ success: false, data: null, error: err, msg: 'Order items fetch failed' });
                        }
                        orderResult.forEach(orderItem => {
                            orderItem.user_name = userName;
                        });
                        orderItems.push(...orderResult);

                        completedQueries++;

                        if (completedQueries === items.length) {
                            return res.status(200).json({ success: true, data: orderItems, error: null, msg: 'Order items fetched successfully' });
                        }
                    });
                });
            } else {
                return res.status(400).json({ success: false, data: null, error: 'No items found', msg: 'No orders found for the user' });
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};


const getOrderItemAll = async (req, res) => {
    try {
        const sql = `
        SELECT 
            bu.*,
            us.name AS user_name,
            us.phone AS phone,
            us.w_number AS w_number
        FROM 
            buy AS bu
        LEFT JOIN users AS us ON bu.user_id = us.id
        ORDER BY id DESC`;

        db.query(sql, (err, result) => {
            if (err) {
                console.error('Error querying order items by ID:', err);
                return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
            }

            const items = result;

            if (items.length > 0) {
                const orderItems = [];
                let completedQueries = 0;

                items.forEach((item, index) => {
                    const orderId = item.id;
                    const userName = item.user_name;
                    const userPhone = item.phone;
                    const userWnumber = item.w_number;
                    const sqlOrder = `
                    SELECT 
                        oi.*,
                        tn.name AS table_name,
                        lv.le_name AS level_name,
                        su.duration AS duration,
                        pr.title AS title
                    FROM 
                        order_items AS oi 
                    LEFT JOIN tablename AS tn ON oi.table_id = tn.id  
                    LEFT JOIN level AS lv ON oi.level_id = lv.id  
                    LEFT JOIN subscription AS su ON oi.subscription_id = su.id
                    LEFT JOIN product AS pr ON oi.product_id = pr.id
                    WHERE oi.order_id = ?
                    ORDER BY id DESC`;

                    db.query(sqlOrder, [orderId], (err, orderResult) => {
                        if (err) {
                            console.error('Error fetching order items:', err);
                            return res.status(500).json({ success: false, data: null, error: err, msg: 'Order items fetch failed' });
                        }
                        orderResult.forEach(orderItem => {
                            orderItem.user_name = userName;
                            orderItem.w_number = userPhone;
                            orderItem.phone = userWnumber;
                        });
                        orderItems.push(...orderResult);

                        completedQueries++;

                        if (completedQueries === items.length) {
                            return res.status(200).json({ success: true, data: orderItems, error: null, msg: 'Order items fetched successfully' });
                        }
                    });
                });
            } else {
                return res.status(200).json({ success: true, data: result, error: null, msg: 'Order items fetched successfully' });
            }
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
};

//          Payment History
const PaymentHistory = (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const usersql = `SELECT * FROM buy WHERE user_id = ? ORDER BY id DESC`
            db.query(usersql, [id], (err, result) => {
                if (err) {
                    console.error('Error querying tablename by ID:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
                }
                return res.status(200).json({ success: true, data: result, error: null, msg: 'Data fetched successfully' });
            })
        } else {
            const allUser = `
            SELECT 
                bu.*,
                us.name AS user_name
            FROM
                buy AS bu
            LEFT JOIN users AS us ON bu.user_id = us.id
            ORDER BY id DESC`
            db.query(allUser, (err, result) => {
                if (err) {
                    console.error('Error querying tablename by ID:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Data fetch failed' });
                }
                return res.status(200).json({ success: true, data: result, error: null, msg: 'Data fetched successfully' });
            })
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
}


//              Razorpay 
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const createOrder = async (req, res) => {
    const receiptNumber = "rcpt_" + Math.floor(Math.random() * 1000000);
    const options = {
        amount: req.body.amount * 100,  // Amount in paise
        currency: "INR",
        receipt: receiptNumber  //  order_id
    };
    try {
        const order = await instance.orders.create(options);
        if (!order) {
            return res.status(500).send("Error")
        }
        return res.json(order);
    } catch (error) {
        res.status(500).send("Error creating order");
    }
}

const verifyPayment = (req, res) => {
    try {
        const { order_id, payment_id, signature, receiptNumber, user_id, amount, status } = req.body;

        const body = order_id + "|" + payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest('hex');

        if (expectedSignature === signature) {

            const sql = 'INSERT INTO payment (`user_id`, `order_id`, `payment_id`, `signature`, `receiptNumber`, `status`, `amount`) VALUES (?, ?, ?, ?, ?, ?, ?)'
            db.query(sql, [user_id, order_id, payment_id, signature, receiptNumber, status, amount], (err, result) => {
                if (err) {
                    console.error('Error creating name:', err);
                    return res.status(500).json({ success: false, data: null, error: err, msg: 'Payment insert failed' });
                }
                return res.status(200).json({ success: true, data: result, msg: 'Payment pay successfully' });
            })
        } else {
            res.status(400).send({ status: "failure" });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return res.status(500).json({ success: false, data: null, error: error.message, msg: 'Internal Server Error' });
    }
}






module.exports = {
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
};