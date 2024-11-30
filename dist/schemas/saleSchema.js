"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleSchema = void 0;
const { Schema } = require("mongoose");
exports.SaleSchema = new Schema({
    customer: String,
    product: String,
    quantity: Number,
    rate: Number,
    amount: Number,
    paymentmode: String,
    due: Number,
    saleDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = { SaleSchema: exports.SaleSchema };
