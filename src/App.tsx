import { Route, Routes } from "react-router-dom";
import "./App.css";
import Answers from "./pages/Answers";
import Question from "./pages/Question";

function App() {
  return (
    <div className="bg-slate-100 w-screen h-full px-14 pb-14">
      <Routes>
        <Route path="/" element={<Question />} />
        <Route path="/:id" element={<Answers />} />
      </Routes>
    </div>
  );
}

export default App;
