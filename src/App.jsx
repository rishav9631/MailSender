import "./App.css";
import {Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   </div>
  );
}

export default App;
