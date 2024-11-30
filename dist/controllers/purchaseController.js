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
exports.postpurchase = exports.getPurchases = void 0;
const PurchaseModel_1 = require("../model/PurchaseModel");
const getPurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let findAllPurchases = PurchaseModel_1.PurchaseModel.find({});
        res.json(findAllPurchases);
    }
    catch (error) {
        res.status(500).json({ message: "Error when creating sale!!" });
    }
});
exports.getPurchases = getPurchases;
const postpurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let createPurchase = new PurchaseModel_1.PurchaseModel({
            name: req.body.name,
            product: req.body.product,
            quantity: req.body.quantity,
            rate: req.body.rate,
            amount: req.body.amount,
            paymentmode: req.body.payment,
            due: req.body.due
        });
        yield createPurchase.save();
        res.status(201).json({ message: "Order Placed Successfully!!" });
    }
    catch (error) {
        res.status(500).json({ message: "Error when creating sale!!" });
    }
});
exports.postpurchase = postpurchase;
