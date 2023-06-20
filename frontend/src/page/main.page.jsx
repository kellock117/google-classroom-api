import ClassComponent from "../component/class.component";
import AnnouncementComponent from "../component/announcement.component";
import CourseWorkComponent from "../component/courseWork.component";

const MainPage = () => {
  return (
    <div className="App">
      <h1>welcome</h1>
      <ClassComponent />
      <br />
      <br />
      <AnnouncementComponent />
      <br />
      <br />
      <CourseWorkComponent />
    </div>
  );
};

export default MainPage;
