import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home ';
import Catalog from './pages/Catalog';
import DogDetail from './pages/DogDetail ';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/dog/:id" element={<DogDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;