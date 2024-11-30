"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = void 0;
const mongoose_1 = require("mongoose");
const customerSchema_1 = require("../schemas/customerSchema");
exports.CustomerModel = (0, mongoose_1.model)("customer", customerSchema_1.CustomerSchema);
module.exports = { CustomerModel: exports.CustomerModel };
