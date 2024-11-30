import { Router } from "express";
import { getsales,postsale } from "../controllers/saleControllers";

const router = Router();

router.get("/", getsales);
router.post("/", postsale);


export default router;