const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In another the middleware');
    res.send('<h1>This is the HOME PAGE</h1>')
});

module.exports = router;