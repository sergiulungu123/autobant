import "bootstrap/dist/css/bootstrap.min.css"

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import BackOffice from "./components/back-office";
import Cards from './routes/cards';
import FrameworkCard from './components/back-office';
import React from 'react';
import Userfront from '@userfront/toolkit/react';

Userfront.init('7n84wr7n');
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/back-office" element={<BackOffice />} />
      </Routes>
    </Router>
  );
}

export default App;
