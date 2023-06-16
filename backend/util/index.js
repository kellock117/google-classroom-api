import { google } from "googleapis";

export const googleClassroom = (auth) =>
  google.classroom({
    version: "v1",
    headers: {
      Authorization: auth,
    },
  });
