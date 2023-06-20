import express from "express";

import ClassRouter from "./class.route.js";
import UserRouter from "./user.route.js";
import AnnouncementRouter from "./announcement.route.js";
import CourseWorkRouter from "./courseWork.route.js";

const router = express.Router();

router.use("/class", ClassRouter);
router.use("/announcement", AnnouncementRouter);
router.use("/courseWork", CourseWorkRouter);
router.use("/", UserRouter);

export default router;
