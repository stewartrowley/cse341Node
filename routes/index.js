const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.send("Emily Rowley")
// })

// router.get('/name', (req, res) => {
//     res.send("Stewart Rowley")
// })

router.use('/contacts', require('./contacts'))

module.exports = router