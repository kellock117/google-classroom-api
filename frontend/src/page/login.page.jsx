import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const MainPage = () => {
  const googleSocialLogin = useGoogleLogin({
    scope: `https://www.googleapis.com/auth/classroom.courses https://www.googleapis.com/auth/classroom.announcements`,
    onSuccess: async (res) => {
      axios
        .post("http://localhost:5000/teacher/login", { code: res.code })
        .then(
          ({
            data: { refresh_token, access_token, expiry_date, id_token },
          }) => {
            localStorage.setItem(
              process.env.REACT_APP_KEY,
              JSON.stringify({
                refresh_token,
                access_token,
                expiry_date,
                id_token,
              })
            );
          }
        )
        .then(() => {
          window.location.href = "/home";
        });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  return (
    <div className="App">
      <button onClick={googleSocialLogin}>Google Button</button>
    </div>
  );
};

export default MainPage;
