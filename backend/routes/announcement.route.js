import express from "express";

import AnnouncementController from "../controller/announcement.controller.js";

const router = express.Router();

router.get("/view/:courseId", AnnouncementController.viewAnnouncements);
router.post("/create", AnnouncementController.createAnnouncement);
router.delete("/delete", AnnouncementController.deleteAnnouncement);

export default router;
