const mongoose = require('mongoose');
const { Schema, model } = mongoose

const authSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        required: true
    },

})

module.exports = model('Auth', authSchema)