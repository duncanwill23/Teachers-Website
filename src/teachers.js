const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : String,
    className : String,
    classCode : String,
    semester : String,
    A : Number,
    B : Number,
    C : Number,
    D : Number,
    rateMyProff : String
});


module.exports = mongoose.model('Teachers', teacherSchema);