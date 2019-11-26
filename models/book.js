const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String, 
        required: true
    },
    summary: {
        type: String,
        required: true
,
    }, 
    image: {
        type: Image,
    
    },
    link: {
        type: String,
        required: true
    }
})


exports = bookSchema