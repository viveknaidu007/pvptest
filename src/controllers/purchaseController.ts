import { Request,Response} from "express";
const {PurchaseModel} = require("../model/PurchaseModel")

export const getPurchases = async (req:Request,res:Response):Promise<void> =>{
    try {
        let findAllPurchases = PurchaseModel.find({});
        res.json(findAllPurchases)
    } catch (error) {
        res.status(500).json({message:"Error when creating sale!!"})
    }
}

export const postpurchase = async (req:Request,res:Response):Promise<void>=>{
    try {

        let createPurchase = new PurchaseModel({
            name:req.body.name,
            product:req.body.product,
            quantity:req.body.quantity,
            rate:req.body.rate,
            amount:req.body.amount,
            paymentmode:req.body.payment,
            due:req.body.due
        });
        await createPurchase.save();

        res.status(201).json({message:"Order Placed Successfully!!"})
        
    } catch (error) {
        res.status(500).json({message:"Error when creating sale!!"})
    }
    
};