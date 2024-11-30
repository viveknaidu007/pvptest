"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { PurchaseSchema } = require("../schemas/purchaseSchema");
const PurchaseModel = (0, mongoose_1.model)("purchase", PurchaseSchema);
module.exports = { PurchaseModel };
