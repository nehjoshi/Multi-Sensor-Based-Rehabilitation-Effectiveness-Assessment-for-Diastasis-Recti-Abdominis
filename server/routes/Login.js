const router = require('express').Router();
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(400).send('Invalid Email');
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).send('Invalid Password');
    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY);
    return res.status(200).json({token});
});
module.exports = router;