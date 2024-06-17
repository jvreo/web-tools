import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Error from "../pages/Error404.jsx";
import Stopwatch from "../pages/Stopwatch.jsx";

const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/stopwatch" element={<Stopwatch/>}  />
      <Route path="*" element={<Error/>}  />
    </Routes>
  </Router>
);

export default RoutesComponent;
