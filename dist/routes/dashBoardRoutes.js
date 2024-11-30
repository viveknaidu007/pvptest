"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashBoardController_1 = require("../controllers/dashBoardController");
const router = (0, express_1.Router)();
router.get("/", dashBoardController_1.getDashBoard);
exports.default = router;
