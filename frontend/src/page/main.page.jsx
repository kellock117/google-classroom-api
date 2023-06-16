import {
  viewClass,
  createClass,
  deleteClass,
  createAnnouncement,
  viewAnnouncement,
  deleteAnnouncement,
} from "../api/index.js";

const MainPage = () => {
  return (
    <div className="App">
      <h1>welcome</h1>
      <button onClick={createClass}>Create Class</button>

      <button onClick={viewClass}>View Classes</button>

      <button
        onClick={() => {
          deleteClass(`614400296816`);
        }}
      >
        Delete Classes
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          createAnnouncement("614400296816");
        }}
      >
        Create Announcement
      </button>
      <button
        onClick={() => {
          viewAnnouncement("614400296816");
        }}
      >
        View Announcements
      </button>
      <button
        onClick={() => {
          deleteAnnouncement("614400296816", "614411704340");
        }}
      >
        Delete Announcement
      </button>
    </div>
  );
};

export default MainPage;
