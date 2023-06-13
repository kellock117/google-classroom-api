import express from "express";

import ClassRouter from "./class.route.js";
import UserRouter from "./user.route.js";

const router = express.Router();

router.use("/class", ClassRouter);
router.use("/", UserRouter);

export default router;
