import { Router } from "express";
import { getPurchases,postpurchase } from "../controllers/purchaseController";

const router = Router();
router.get("/",getPurchases);
router.post("/",postpurchase);

export default router;