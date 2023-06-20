import { googleClassroom } from "../util/index.js";

const courseWork = {
  title: "Ant colonies",
  description: `Read the article about ant colonies
                      and complete the quiz.`,
  materials: [
    { link: { url: "http://example.com/ant-colonies" } },
    { link: { url: "http://example.com/ant-quiz" } },
  ],
  workType: "ASSIGNMENT",
  state: "PUBLISHED",
};

const CourseWorkController = {
  createCourseWork: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);
    const courseId = req.body.courseId;

    const { data } = await classroom.courses.courseWork.create({
      courseId: courseId,
      requestBody: courseWork,
    });

    res.send(data);
  },
  listCourseWorks: async (req, res) => {
    const classroom = googleClassroom(req.headers.authorization);
    const courseId = req.params.courseId;

    const {
      data: { courses },
    } = await classroom.courses.courseWork.list({
      courseId: courseId,
    });

    res.send(courses);
  },
};

export default CourseWorkController;
