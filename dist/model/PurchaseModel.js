"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseModel = void 0;
const mongoose_1 = require("mongoose");
const purchaseSchema_1 = require("../schemas/purchaseSchema");
exports.PurchaseModel = (0, mongoose_1.model)("purchase", purchaseSchema_1.PurchaseSchema);
module.exports = { PurchaseModel: exports.PurchaseModel };
