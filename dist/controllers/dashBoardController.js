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
exports.getDashBoard = void 0;
const { SaleModel } = require("../model/saleModel");
const { PurchaseModel } = require("../model/PurchaseModel");
const { CustomerModel } = require("../model/CustomerModel");
const getDashBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salesSummary = yield SaleModel.find({
        // take:5,
        // orderBy:{
        //     amount:"desc",
        // },
        });
        const purchaseSummary = yield PurchaseModel.find({
        // take:5,
        // orderBy:{
        //     amount:"desc",
        // },
        });
        const customerSummary = yield CustomerModel.find({
        // take:5,
        // orderBy:{
        //     date:"desc",
        // },
        });
        res.json({
            salesSummary,
            purchaseSummary,
            customerSummary
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error retriving Dashboard Data" });
    }
});
exports.getDashBoard = getDashBoard;
