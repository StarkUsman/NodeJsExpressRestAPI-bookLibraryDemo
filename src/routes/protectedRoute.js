// routes/protectedRoute.js
import express from 'express';
const router = express.Router();
import LibrarySchema from '../models/library.models.js';
import verifyToken from '../middleware/authMiddleware.js';

// Protected route
router.get('/', verifyToken, async (req, res) => {
    const users = await LibrarySchema.find();
    res.status(200).send({ message: 'Protected route accessed', users });
    // res.json(users);
    // res.send(users);
});

// module.exports = router;
export default router;