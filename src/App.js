import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Main from './components/Main';
import Publications from './components/publications';
import People from './components/people';
import News from './components/news';
import Opportunity from './components/oppotunity';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className={`app-container ${menuOpen ? 'shifted' : ''}`}>
        <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/people" element={<People />} />
            <Route path="/news" element={<News />} />
            <Route path="/opportunity" element={<Opportunity />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
