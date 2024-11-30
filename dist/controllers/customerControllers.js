"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCustomer = exports.getCustomer = void 0;
const { CustomerModel } = require("../model/CustomerModel");
const getCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let findAllCustomer = yield CustomerModel.find({});
        res.json(findAllCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
});
exports.getCustomer = getCustomer;
const postCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newcustomer = new CustomerModel({
            name: req.body.name,
            mobile: req.body.mobile
        });
        newcustomer.save();
        res.send("order Saved!!");
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
});
exports.postCustomer = postCustomer;
