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
exports.postsale = exports.getsales = void 0;
const SaleModel_1 = require("../model/SaleModel");
const getsales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let findAllSales = yield SaleModel_1.SaleModel.find({});
        res.json(findAllSales);
    }
    catch (e) {
        res.status(500).json({ message: "Error fetching sales data" });
    }
});
exports.getsales = getsales;
const postsale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let createsale = new SaleModel_1.SaleModel({
            customer: req.body.customer,
            product: req.body.product,
            quantity: req.body.quantity,
            rate: req.body.rate,
            amount: req.body.amount,
            paymentmode: req.body.payment,
            due: req.body.due
        });
        yield createsale.save();
        res.status(201).json({ message: "Order Placed Successfully!!" });
    }
    catch (error) {
        res.status(500).json({ message: "Error when creating sale!!" });
    }
});
exports.postsale = postsale;
