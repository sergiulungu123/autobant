import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Cards from './routes/cards';
import FrameworkCard from './components/frameworkCard';
import React from 'react';
import Userfront from '@userfront/toolkit/react';

Userfront.init('7n84wr7n');
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/test" element={<FrameworkCard />} />
      </Routes>
    </Router>
  );
}

export default App;
