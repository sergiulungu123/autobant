import "bootstrap/dist/css/bootstrap.min.css"

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BackOffice from "./components/back-office";
import Main from "./components/main";
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/adm" element={<BackOffice />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
