import { Router } from "express";
import { getpurchases,postpurchase } from "../controllers/purchaseController";

const router = Router();
router.get("/",getpurchases);
router.post("/",postpurchase);

export default router;