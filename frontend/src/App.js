import "./App.css";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
  const { user, setUser } = useContext(UserContext);

  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async (res) => {
      console.log(res);
      axios
        .post("http://localhost:5000/teacher/login", { code: res.code })
        .then(({ data }) => {
          setUser();
        });
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });

  console.log(user);

  return (
    <div className="App">
      <button onClick={googleSocialLogin}>Google Button</button>
    </div>
  );
}

export default App;
