"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customerControllers_1 = require("../controllers/customerControllers");
const router = (0, express_1.Router)();
router.get("/", customerControllers_1.getCustomer);
router.post("/", customerControllers_1.postCustomer);
exports.default = router;
