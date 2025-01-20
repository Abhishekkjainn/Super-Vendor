import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './pages/header';
import Page1 from './pages/page1';
import Inventory from './pages/inventory';
import Bills from './pages/bills';
import AISuggestions from './pages/AISuggestions';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/AISuggestions" element={<AISuggestions />} />
        {/* <Route path="/page2" element={<Page2 />} /> */}
        {/* <Route path="*" element={<NotFound />} /> 404 fallback */}
      </Routes>
    </Router>
  );
}

export default App;
