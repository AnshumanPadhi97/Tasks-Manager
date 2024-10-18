import Task from "./components/Task.jsx";
import AllTasks from "./components/AllTasks.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllTasks />} />
          <Route path="/add-task" element={<Task />} />
          <Route path="/edit-task/:id" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
