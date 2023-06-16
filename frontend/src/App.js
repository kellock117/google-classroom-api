import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./page/login.page";
import MainPage from "./page/main.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
