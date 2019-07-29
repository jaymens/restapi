var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

var GeoSchema = new mongoose.Schema({
    type:{
        type: String,
        default: "points"
    },
    coordinates:{
        type:[Number],
        index: "2dsphere"
    }
});

var Schema = mongoose.Schema;

var NinjaSchema = new Schema({
    name: {
        type: String,
        required:[true, 'Please enter name'],
    },
    rank:{
        type: String,
        level: Number
    },
    available:{
        type: Boolean,
        default: false
    },
    geometry: GeoSchema

});

var Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;