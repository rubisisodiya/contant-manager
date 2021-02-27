const mongoose = require('mongoose')
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    body: {
        type:String
    },
    tags: {
        type:[String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type:Schema.Types.ObjectId,
        ref:'Note'
    }
})
const Note = mongoose.model('Note',noteSchema)

module.exports = {
    Note
}