const { Schema, model } = require('mongoose');

const staffSchema = new Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    job: {
        type: String
    },
    age: {
        type: Number
    },
    image: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = model('staff', staffSchema);