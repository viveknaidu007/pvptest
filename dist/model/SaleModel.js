"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModel = void 0;
const mongoose_1 = require("mongoose");
const saleSchema_1 = require("../schemas/saleSchema");
exports.SaleModel = (0, mongoose_1.model)("sale", saleSchema_1.SaleSchema);
module.exports = { SaleModel: exports.SaleModel };
