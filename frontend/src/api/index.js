import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

API.interceptors.request.use((req) => {
  let item = localStorage.getItem(process.env.REACT_APP_KEY);
  if (item) {
    item = JSON.parse(item);
    req.headers.Authorization = `Bearer ${item.access_token}`;
    req.headers.refresh_token = item.refresh_token;
  }

  return req;
});

export const viewClass = () => API.get("/class/view");
export const createClass = () => API.post("/class/create");
export const deleteClass = (id) =>
  API.delete(`/class/delete`, { data: { id } });

export const viewAnnouncement = (courseId) =>
  API.get(`/announcement/view/${courseId}`);
export const createAnnouncement = (courseId) =>
  API.post("/announcement/create", { courseId: courseId });
export const deleteAnnouncement = (courseId, announcementId) =>
  API.delete(`/announcement/delete`, {
    data: {
      courseId,
      announcementId,
    },
  });
