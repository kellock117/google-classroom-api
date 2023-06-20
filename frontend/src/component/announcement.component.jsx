import {
  createAnnouncement,
  viewAnnouncement,
  deleteAnnouncement,
} from "../api/index.js";

const AnnoncementComponent = () => {
  return (
    <>
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
    </>
  );
};

export default AnnoncementComponent;
