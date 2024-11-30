"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.SaleSchema = new mongoose_1.Schema({
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
