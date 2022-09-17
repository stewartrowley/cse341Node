const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send("Stewart Rowley")
})

module.exports = routes