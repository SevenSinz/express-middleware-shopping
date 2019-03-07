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

router.post("/items", function(req, res, next) {
    try {
        item = req.body;
        console.log(item)
        itemsList.push(item);
        return res.json({'response': item})
    } catch(err) {
        return next(err)
    }
});


module.exports = router