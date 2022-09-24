const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Stewart Rowley")
})

router.use('/contacts', require('./contacts'))

module.exports = router