const mongoose = require('../../database/index');

const VehicleSchema = new mongoose.Schema({
    vehicle: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        required: true,
        enum: ['Chevrolet', 'Ford']
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    sold: {
        type: Boolean,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated: {
        type: Date,
        required: false,
        default: Date.now
    }
});

const Vehicle = mongoose.model('Vehicle', VehicleSchema);

module.exports = Vehicle;
