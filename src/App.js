import "bootstrap/dist/css/bootstrap.min.css";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

import BackOffice from "./components/back-office";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/back-office" element={<BackOffice />} />
      </Routes>
    </Router>
  );
}

export default App;
