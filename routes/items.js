const express = require('express');
const ExpressError = require("../expressError");

const itemsList = require('../fakeDB'); 

const router = new express.Router();


router.get("/items", function(req, res, next) {
    try {
        return res.json(itemsList);
    } catch(err) {
        return next(err)
    }
});


module.exports = router