import { Router } from "express";
import { getCustomer,postCustomer } from "../controllers/customerControllers";

const router = Router();

router.get("/", getCustomer);
router.post("/", postCustomer);


export default router;