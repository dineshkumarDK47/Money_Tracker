const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
text:{
    type:String,
    required:[true, 'please add some text'],
    trim:true
},
amount:{
    type:Number,
    required:[true, 'please add some amount']
},
createdAt:{
    type:Date,
    default:Date.now
}
});

module.exports = mongoose.model('Transaction', TransactionSchema);