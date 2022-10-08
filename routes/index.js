const express = require('express');
const router = express.Router();

let options = {
    explorer: true
  };
  
// router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options)

router.get('/', (req, res) => {
    res.send("Stewart Rowley")
})

router.use('/', require('./swagger'));

router.use('/contacts', require('./contacts'))

module.exports = router