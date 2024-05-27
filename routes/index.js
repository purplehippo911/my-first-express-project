var express = require('express')
var router = express.Router();

/* GET home page */
router.get("/", function(req, res, next){
    res.render("index", {title: 'My first express site'})
})

/* GET a new resource */
router.get('/newEndpoint', function(req, res, next) {
    res.send({ myParameter: req.query.someParam });
});



module.exports = router;