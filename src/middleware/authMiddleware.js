// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';
function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Token not found. Access denied' });
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.userId = decoded.userId;
        // console.log('Id', decoded.userId);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// module.exports = verifyToken;
export default verifyToken;