// routes/protectedRoute.js
import express from 'express';
const router = express.Router();
import LibrarySchema from '../models/library.models.js';
import verifyToken from '../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key';
// Protected route
router.get('/', verifyToken, async (req, res) => {
    const userId = req.userId;
    const isUser = await LibrarySchema.findById(userId);
    // console.log(isUser);
    if (isUser.role !== 'admin') {
        return res.status(403).json({ message: `You are not admin, not authorized to access this route` });
    }
    const users = await LibrarySchema.find();
    res.status(200).send({ message: 'Protected route accessed', users });
    // res.json(users);
    // res.send(users);
});

// module.exports = router;
export default router;