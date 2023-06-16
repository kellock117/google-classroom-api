import { googleClassroom } from "../util/index.js";

const AnnouncementController = {
  createAnnouncement: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);
    const courseId = req.body.courseId;

    // request body parameters
    // {
    //   "alternateLink": "my_alternateLink",
    //   "assigneeMode": "my_assigneeMode",
    //   "courseId": "my_courseId",
    //   "creationTime": "my_creationTime",
    //   "creatorUserId": "my_creatorUserId",
    //   "id": "my_id",
    //   "individualStudentsOptions": {},
    //   "materials": [],
    //   "scheduledTime": "my_scheduledTime",
    //   "state": "my_state",
    //   "text": "my_text",
    //   "updateTime": "my_updateTime"
    // }

    const { data } = await classroom.courses.announcements.create({
      courseId: courseId,
      requestBody: {
        text: "hello",
        materials: [
          {
            link: {
              url: "https://googleapis.dev/nodejs/googleapis/latest/classroom/classes/Resource$Courses$Announcements.html#delete",
              title: "google api",
            },
          },
        ],
      },
    });

    res.send(data);
  },
  viewAnnouncements: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);
    const courseId = req.params.courseId;
    const { data } = await classroom.courses.announcements.list({
      courseId: courseId,
    });

    res.send(data);
  },
  deleteAnnouncement: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);
    console.log(req.body);
    const courseId = req.body.courseId;
    const announcementId = req.body.announcementId;

    const { data } = await classroom.courses.announcements.delete({
      courseId: courseId,
      id: announcementId,
    });

    res.send(data);
  },
};

export default AnnouncementController;
