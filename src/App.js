import "bootstrap/dist/css/bootstrap.min.css"

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BackOffice from "./components/back-office";

import FrameworkCard from './components/back-office';
import React from 'react';
import Main from "./components/main";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/back-office" element={<BackOffice />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
