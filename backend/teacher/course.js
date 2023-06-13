import { authorize } from "../index.js";
import { google } from "googleapis";

/**
 * Lists the first 10 courses the user has access to.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */

const auth = await authorize();

const listCourses = async () => {
  const classroom = google.classroom({ version: "v1", auth });
  const res = await classroom.courses.list({
    pageSize: 10,
  });
  const courses = res.data.courses;
  if (!courses || courses.length === 0) {
    console.log("No courses found.");
    return;
  }
  console.log("Courses:");
  courses.forEach((course) => {
    // console.log(course);
    console.log(course.name, course.id);
  });
};

let course = {
  name: "10th Grade Biology",
  section: "Period 2",
  descriptionHeading: "Welcome to 10th Grade Biology",
  description: `We'll be learning about the structure of living creatures from a combination 
        of textbooks, guest lectures, and lab work. Expect to be excited!`,
  room: "301",
  ownerId: "me",
  courseState: "PROVISIONED",
};

const createCourse = async (course) => {
  const classroom = google.classroom({ version: "v1", auth: auth });
  const res = await classroom.courses.create({
    resource: course,
  });
  console.log(`Created course ${res.data.name}`);
};

// const updateCourse = async (course, courseId) => {
//   const classroom = google.classroom({ version: "v1", auth: auth });

//   let course = classroom.courses.get(courseId);
//   course.name = "changed name";
//   course.room = "changed room";

//   const res = await classroom.courses.update({
//     course,
//     courseId,
//   });
//   console.log(`Updated course ${res.data.name}`);
// };

// createCourse(auth, course);
listCourses(auth);
