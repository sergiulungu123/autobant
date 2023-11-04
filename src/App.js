import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes

import Cards from './routes/cards';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;