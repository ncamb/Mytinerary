const express = require('express');
const router = express.Router();

const User = require('./models/user.js');
;

router.get('/', async (req, res) => {
    console.log('sipadrito');
    const Users = await User.find();
    res.json(Users);
});

router.post('/', async (req, res) => {
    const { username, name, email, imgurl, password } = req.body;
    if (!username || !name || !email || !imgurl || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    // User.findOne({ username })
    //     .then(tryuser => {
    //         if (tryuser) return res.status(400).json({ msg: 'User already exists' });



    const user = new User({ username, name, email, imgurl, password });
    await user.save();
    res.json({ msg: 'Registered (Y)' });
})

module.exports = router;