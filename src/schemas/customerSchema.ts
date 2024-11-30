const {Schema}= require("mongoose");

const CustomerSchema = new Schema({
    name:String,
    mobile:Number
});

module.exports={CustomerSchema}