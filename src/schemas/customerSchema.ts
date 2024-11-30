import { Schema } from "mongoose";

export const CustomerSchema = new Schema({
    name:String,
    mobile:Number
});

module.exports={CustomerSchema}