import { Schema } from "mongoose";

export const PurchaseSchema = new Schema({
    customer:String,
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