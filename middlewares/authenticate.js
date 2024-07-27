const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;

    if (!token) {
        return res.status(401).json({ message: "Access token is required" })
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid or expired token" });
        }
        req.user = decoded

        next()
    })
}

module.exports = authenticate