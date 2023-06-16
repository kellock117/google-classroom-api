import express from "express";

import ClassController from "../controller/class.controller.js";

const router = express.Router();

router.get("/view", ClassController.viewClass);
router.post("/create", ClassController.createClass);
router.delete("/delete", ClassController.deleteClass);

export default router;
