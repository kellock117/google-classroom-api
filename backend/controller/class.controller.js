import { googleClassroom } from "../util/index.js";

const ClassController = {
  viewClass: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);

    const {
      data: { courses },
    } = await classroom.courses.list();

    if (!courses || courses.length === 0) {
      console.log("No courses found.");
      return;
    }

    res.send(courses);
  },
  createClass: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);

    // request body parameters (all optional)
    // {
    //   "alternateLink": "my_alternateLink",
    //   "calendarId": "my_calendarId",
    //   "courseGroupEmail": "my_courseGroupEmail",
    //   "courseMaterialSets": [],
    //   "courseState": "my_courseState",
    //   "creationTime": "my_creationTime",
    //   "description": "my_description",
    //   "descriptionHeading": "my_descriptionHeading",
    //   "enrollmentCode": "my_enrollmentCode",
    //   "guardiansEnabled": false,
    //   "id": "my_id",
    //   "name": "my_name",
    //   "ownerId": "my_ownerId",
    //   "room": "my_room",
    //   "section": "my_section",
    //   "teacherFolder": {},
    //   "teacherGroupEmail": "my_teacherGroupEmail",
    //   "updateTime": "my_updateTime"
    // }

    let course = {
      name: "Chemistry",
      section: "Period 3",
      descriptionHeading: "Welcome to 11th chemistry course",
      description: `gonna study simple chemistry`,
      room: "444",
      ownerId: "me",
    };

    const { data } = await classroom.courses.create({ requestBody: course });

    res.send(data);
  },
  deleteClass: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);

    const { data } = await classroom.courses.delete({ id: req.body.id });
    res.send(data);
  },
};

export default ClassController;
