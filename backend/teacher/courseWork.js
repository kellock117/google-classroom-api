import { authorize } from "./index.js";
import { google } from "googleapis";

const auth = await authorize();
const classroom = google.classroom({ version: "v1", auth });
const courseId = 612946613686;

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

const createCourseWork = async (courseWork) => {
  const res = await classroom.courses.courseWork.create({
    courseId: courseId,
    requestBody: courseWork,
  });

  console.log(res);
};

const listCourseWorks = async () => {
  const res = await classroom.courses.courseWork.list({
    courseId: courseId,
  });
  const courses = res.data.courses;
  if (!courses || courses.length === 0) {
    console.log("No courses found.");
    return;
  }
  console.log("Courses:");
  courses.forEach((course) => {
    console.log(course);
    // console.log(course.name, course.id);
  });
};

createCourseWork(courseWork);
// listCourses();
