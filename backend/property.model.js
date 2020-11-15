const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Property = new Schema({
    property_description : {
        type: String
    },
    property_city : {
        type: String
    },
    property_state : {
        type: String
    },
    property_zip : {
        type: Number
    },
    property_responsibility : {
        type: String
    },
    property_completed : {
        type: Boolean
    }
});

module.exports = mongoose.model('Property', Property);