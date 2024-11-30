import { Schema } from "mongoose";
export const SaleSchema=new Schema({
    customer:String,
    product:String,
    quantity:Number,
    rate:Number,
    amount:Number,
    paymentmode:String,
    due:Number,
    saleDate: { 
        type: Date, 
        default: Date.now
      },
});

module.exports={SaleSchema}