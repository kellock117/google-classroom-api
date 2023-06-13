import { OAuth2Client } from "google-auth-library";

class ClassController {
  static async login(req, res) {
    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "postmessage"
    );

    const { tokens } = await oAuth2Client.getToken(req.body.code);
    console.log("code ", tokens);
    res.send(tokens);
  }
}

export default ClassController;
