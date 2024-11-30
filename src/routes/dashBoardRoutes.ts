import { Router } from "express";
import { getDashBoard } from "../controllers/dashBoardController";
const router=Router();

router.get("/",getDashBoard)

export default router;