import { createCourseWork, viewCourseWorks } from "../api/index.js";

const CourseWorkComponent = () => {
  return (
    <>
      <button
        onClick={() => {
          createCourseWork("614400296816");
        }}
      >
        Create CourseWork
      </button>
      <button
        onClick={() => {
          viewCourseWorks("614400296816");
        }}
      >
        View CourseWorks
      </button>
      {/* <button
          onClick={() => {
            deleteCourseWork("614400296816", "614411704340");
          }}
        >
          Delete CourseWork
        </button> */}
    </>
  );
};

export default CourseWorkComponent;
