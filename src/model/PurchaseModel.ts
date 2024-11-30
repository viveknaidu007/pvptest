import {model } from "mongoose";
const {PurchaseSchema}=require("../schemas/purchaseSchema")

const PurchaseModel = model("purchase",PurchaseSchema);
module.exports={PurchaseModel}
