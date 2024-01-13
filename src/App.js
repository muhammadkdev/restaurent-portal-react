import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainPage from "./AnayaProject/MainPage";
import Booking from "./AnayaProject/Booking";
import About from "./AnayaProject/About";
import Contact from "./AnayaProject/Contact";
import Menu from "./AnayaProject/Menu";

import Service from "./AnayaProject/Service";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
        <Router>
          <Routes>
          <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/mainpage" element={<MainPage />}></Route>
            <Route exact path="/service" element={<Service />}></Route>
            <Route exact path="/menu" element={<Menu />}></Route>
            <Route exact path="/booking" element={<Booking />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;



