const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./models/user.js');
const config = require('config');

router.get('/', async (req, res) => {
    const Users = await User.find();
    res.json(Users);
});

router.post('/', async (req, res) => {
    const { username, Firtsname, lastname, email, imgurl, password } = req.body;
    if (!username || !Firtsname || !lastname || !email || !imgurl || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }
    // User.findOne({ username })
    //     .then(tryuser => {
    //         if (tryuser) return res.status(400).json({ msg: 'User already exists' });

    const user = new User({ username, Firtsname, lastname, email, imgurl, password });
    await user.save()
        .then(user => {
            jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    imgurl: user.imgurl
                },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            imgurl: user.imgurl
                        }
                    });
                }
            )
        });

    res.json({ msg: 'Registered (Y)' });
})

router.post('/google', async (req, res) => {
    const { username, Firtsname, lastname, email, imgurl, password } = req.body;
    User.findOne({ username })
        .then(tryuser => {
            if (tryuser) return jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    imgurl: user.imgurl
                },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            username: user.username,
                            imgurl: user.imgurl
                        }
                    });
                }
            )
        });

    const user = new User({ username, Firtsname, lastname, email, imgurl, password });
    await user.save()
        .then(user => {
            jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    imgurl: user.imgurl
                },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            username: user.username,
                            imgurl: user.imgurl
                        }
                    });
                }
            )
        });

    res.json({ msg: 'Registered (Y)' });
})

module.exports = router;