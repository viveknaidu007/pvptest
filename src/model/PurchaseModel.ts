import {model } from "mongoose";
import { PurchaseSchema } from "../schemas/purchaseSchema";

export const PurchaseModel = model("purchase",PurchaseSchema);
module.exports={PurchaseModel}
