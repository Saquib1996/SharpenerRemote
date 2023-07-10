const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
    console.log('In another the middleware');
    res.send('<h1>This is the HOME PAGE</h1>')
    next();
});

module.exports = router;