const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const quotesSchema = new Schema({
    quote: {
        type: String,
        trim:true
    },
    artist: {
        type: String,
        trim:true,
    }

});

const Quote = mongoose.model('Quotes', quotesSchema);

module.exports = Quote;