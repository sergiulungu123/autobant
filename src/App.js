import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Routes

import AccordionSteps from '../src/components/accordion'
import Cards from './routes/cards';
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/learn-more" element={<AccordionSteps />} /> 
      </Routes>
    </Router>
  );
}

export default App;