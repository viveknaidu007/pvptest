"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PurchaseSchema = new mongoose_1.Schema({
    name: String,
    product: String,
    quantity: Number,
    rate: Number,
    amount: Number,
    paymentmode: String,
    due: Number,
    purchaseDate: {
        type: Date,
        default: Date.now
    }
});
module.exports = { PurchaseSchema: exports.PurchaseSchema };
