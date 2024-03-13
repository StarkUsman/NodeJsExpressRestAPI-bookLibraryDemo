import express from 'express';
import LibrarySchema from '../models/library.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', async (req, res) =>{
    res.json("Welcome")
});

// User registration
router.post('/register', async (req, res) => {
try {
const { userName, password } = req.body;
const hashedPassword = await bcrypt.hash(password, 10);
const user = await LibrarySchema.create({ userName, password: hashedPassword });
// await user.save();
res.status(201).json({ message: `${user} User registered successfully` });
} catch (error) {
res.status(500).json({ error: `${error} Registration failed` });
}
});

// User login
router.post('/login', async (req, res) => {
try {
const { userName, password } = req.body;
const user = await LibrarySchema.findOne({ userName });
if (!user) {
return res.status(401).json({ error: 'Authentication failed' });
}
const passwordMatch = await bcrypt.compare(password, user.password);
if (!passwordMatch) {
return res.status(401).json({ error: 'Authentication failed' });
}
const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
expiresIn: '1h',
});
res.status(200).json({ token });
} catch (error) {
res.status(500).json({ error: 'Login failed' });
}
});

// module.exports = router;
export default router;