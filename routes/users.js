var express = require('express')
var router = express.Router();

/* GET home page */
router.get("/users", function(req, res, next){
    res.render("users", {title: "Here's where the user's at"})
})

/* GET a new resource */
router.get('/newEndpoint2', function(req, res, next) {
    res.send({ myParameter: req.query.someParam });
});


module.exports = router;