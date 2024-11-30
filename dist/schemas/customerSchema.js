"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CustomerSchema = new mongoose_1.Schema({
    name: String,
    mobile: Number
});
module.exports = { CustomerSchema: exports.CustomerSchema };
