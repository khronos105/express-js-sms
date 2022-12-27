const {Schema, model} = require('mongoose')

const newSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    from: {
        type: String
    },
    to: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model('sms', newSchema)