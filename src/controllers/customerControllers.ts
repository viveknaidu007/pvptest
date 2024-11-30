import { Request, Response } from "express";
import { CustomerModel } from "../model/CustomerModel";



export const getCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
   let findAllCustomer = await CustomerModel.find({});
   res.json(findAllCustomer);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};

export const postCustomer = async (req: Request, res: Response): Promise<void> => {
  try {
   let newcustomer = new CustomerModel({
    name:req.body.name,
    mobile:req.body.mobile
   });
   newcustomer.save();
   res.send("order Saved!!")
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};