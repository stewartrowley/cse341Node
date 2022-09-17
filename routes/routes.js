const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send("Emily Rowley")
})

module.exports = routes