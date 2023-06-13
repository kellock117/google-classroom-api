import express from "express";

import UserController from "../controller/user.controller.js";

const router = express.Router();

router.post("/teacher/login", UserController.login);

export default router;
