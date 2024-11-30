import { Request, Response } from "express";
import { SaleModel } from "../model/SaleModel";

export const getsales =async (req:Request,res:Response):Promise<void> =>{
    try{
        let findAllSales = await SaleModel.find({});
        res.json(findAllSales);

    }catch(e){
        res.status(500).json({message:"Error fetching sales data"})
    }
}
export const postsale = async (req:Request,res:Response):Promise<void>=>{
    try {

        let createsale = new SaleModel({
            customer:req.body.customer,
            product:req.body.product,
            quantity:req.body.quantity,
            rate:req.body.rate,
            amount:req.body.amount,
            paymentmode:req.body.payment,
            due:req.body.due
        });
        await createsale.save();

        res.status(201).json({message:"Order Placed Successfully!!"})
        
    } catch (error) {
        res.status(500).json({message:"Error when creating sale!!"})
    }
    
};