import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Main1 from "./NewPro/Main1";
import Login from "./NewPro/Login";
import Signup from "./NewPro/Signup";
import SubmitResume from "./NewPro/SubmitResume";
import JobDetail from "./NewPro/JobDetail";
import About from "./NewPro/About";
import SearchJob from "./NewPro/SearchJob";
import Contact from "./NewPro/Contact";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Routes>
          <Route exact path="/" element={<Main1 />}></Route>
            <Route exact path="/main1" element={<Main1 />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/submitresume" element={<SubmitResume />}></Route>
            <Route exact path="/jobdetail" element={<JobDetail />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/searchjob" element={<SearchJob />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route> 
            </Routes>
        </Router>
    </>
  );
}

export default App;



