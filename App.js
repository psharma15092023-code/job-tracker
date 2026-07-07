import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Application";
import AddJob from "./pages/AddJob";
import JobList from "./pages/Joblist";
import { useState ,useEffect} from "react";


function App() {
const [job, setJob] = useState(() => {
  const savedJob = localStorage.getItem("job");
  
  return savedJob ? JSON.parse(savedJob) : [];
  
});
console.log("Current job", job);

useEffect(() => {
  console.log("saving",job)
  localStorage.setItem("job", JSON.stringify(job));
}, [job]);

  return (
    <>
    
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Dashboard job={job} />} />
        <Route path="/application" element={<Applications />} />
        <Route
        path="/addjob"
        element={<AddJob job={job} setJob={setJob} />}
        
      />
      <Route
      path="/joblist"
      element={<JobList job={job} setJob={setJob}/>}
    />
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>
  );
}

export default App;