const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    dateEnrolled: {
        type: Date,
        required: true,
        default: Date.now

    }
})



module.exports = mongoose.model('Teacher', teacherSchema)
