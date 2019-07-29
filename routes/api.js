var express = require('express');
var router = express.Router();
var Ninja = require("../models/ninja");
var mongoose = require('mongoose');

router.get('/ninjas', function(req, res, next){
    // Ninja.geoNear({
    //     type: 'Point',
    //     coordinates: [parseFloat(req.body.lng), parseFloat(req.body.lat)]
    // },
    //     {maxDistance: 100000, spherical: true}    
    // ).then(function(ninjas){
    //     res.send(ninjas);
    // });

    Ninja.runCommand(
        {
          near: { type: "Point", coordinates: [ -73.9667, 40.78 ] },
          spherical: true
          
        }
     );


});

router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);

    }).catch(next);

    
    
    // console.log(req.body);
    // res.send({
    //     type: 'POST',
    //     name: req.body.name,
    //     rank: req.body.rank
    // });    
});
   
router.put('/ninjas/:id', function(req, res, next){
    mongoose.set('useFindAndModify', false);
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    });
    
    

});

router.delete('/ninjas/:id', function(req, res, next){
    mongoose.set('useFindAndModify', false);
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
   

});

module.exports = router;