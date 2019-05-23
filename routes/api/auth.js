/**
 * Created by agros on 22.05.2019.
 */
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

const User = require('../../models/User');

// @route GET api/auth
// @desc Test route
// @access Public
router.get('/', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/auth
// @desc Authenticate user & get token
// @access Public
router.post(
    '/',
    [
        check('email', 'Email is required').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
        //See if user exists
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials'}] });
        }

        const isMtch = await bcrypt.compare(password, user.password);
        if(!isMtch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid credentials'}] });
        }

        //Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token)=> {
            if (err) throw err;
        res.json({token});
    }
);

} catch (err) {
    console.error(err.messsage);
    res.status(500).send('Server error');
}
}
);

module.exports = router;