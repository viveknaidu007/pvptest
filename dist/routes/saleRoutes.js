"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const saleControllers_1 = require("../controllers/saleControllers");
const router = (0, express_1.Router)();
router.get("/", saleControllers_1.getsales);
router.post("/", saleControllers_1.postsale);
exports.default = router;
