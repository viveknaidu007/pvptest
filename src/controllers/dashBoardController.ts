import { Request,Response } from "express";
const {SaleModel}= require("../model/saleModel");
const {PurchaseModel} = require("../model/PurchaseModel");
const {CustomerModel}= require("../model/CustomerModel");

export const getDashBoard = async (req:Request,res:Response):Promise<void>=>{
try {
   
    const salesSummary = await SaleModel.find({
        // take:5,
        // orderBy:{
        //     amount:"desc",
        // },
    });

    const purchaseSummary = await PurchaseModel.find({
        // take:5,
        // orderBy:{
        //     amount:"desc",
        // },
    });
    const customerSummary = await CustomerModel.find({
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

    
} catch (error) {
    res.status(500).json({message:"Error retriving Dashboard Data"})
}
};