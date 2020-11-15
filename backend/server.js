const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const propertyRoutes = express.Router();
const PORT = 5000;
require('dotenv').config();

let Property = require('./property.model');


app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log("MongoDB connection established successfully.");
});

propertyRoutes.route('/').get(function(req, res){
    Property.find(function(err, properties) {
        if(err){
            console.log(err);
        } else{
            res.json(properties);
        }
    });
});

propertyRoutes.route('/:id').get((req,res) => {
    let id = req.params.id;
    Property.findById(id, (err, property) => {
        res.json(property);
    });
});

propertyRoutes.route('/add').post((req,res) => {
    let property = new Property(req.body);
    property.save()
            .then(todo => {
                res.status(200).json({'property': 'property added successfully'});
            })
            .catch(err => {
                res.status(400).send('adding new property failed');
            });
});

propertyRoutes.route('/update/:id').post((req, res) => {
    Property.findById(req.params.id, (err, property) => {
        if(!property)
            res.status(404).send('data is not found');
        else
            property.property_description = req.body.property_description;
            property.property_city = req.body.property_city;
            property.property_state = req.body.property_state;
            property.property_zip = req.body.property_zip;
            property.property_responsible = req.body.property_responsible;
            property.property_priority = req.body.property_priority;
            property.property_completed = req.body.property_completed;

            property.save().then(property => {
                res.json('Property updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/properties', propertyRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
