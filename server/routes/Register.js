const router = require('express').Router();
const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    const {name, gender, email, password} = req.body;
    const exists = await User.findOne({email});
    if (exists) return res.status(400).send('Email already exists');
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
        name,
        gender,
        email,
        password: hashedPassword,
    });
    try {
        const saved = await user.save();
        const token = jwt.sign({id: saved._id}, process.env.SECRET_KEY);
        return res.status(200).json({token});
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
module.exports = router;