const mongoose = require('mongoose');

const userInfo = mongoose.Schema({
    name: String,
    description: String,
    exrcise: String,
    date: String,
    duration: Number
});

var fitbit = mongoose.model("athlete", userInfo);

module.exports = fitbit;