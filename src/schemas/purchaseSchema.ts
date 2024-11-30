import { Schema } from "mongoose";

export const PurchaseSchema = new Schema({
    name:String,
    product:String,
    quantity:Number,
    rate:Number,
    amount:Number,
    paymentmode:String,
    due:Number,
    purchaseDate:{
        type:Date,
        default:Date.now
    }
});

module.exports={PurchaseSchema}