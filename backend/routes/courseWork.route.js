import express from "express";

import CourseWorkController from "../controller/courseWork.controller.js";

const router = express.Router();

router.get("/view/:courseId", CourseWorkController.listCourseWorks);
router.post("/create", CourseWorkController.createCourseWork);
// router.delete("/delete", CourseWorkController.deleteClass);

export default router;
