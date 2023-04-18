import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import Choose from './pages/Choose';
import Curlup from './pages/Curlup';
import Situp from './pages/Situp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/start' element={<Choose />} />
        <Route path='/begin/curlup' element={<Curlup />} />
        <Route path='/begin/situp' element={<Situp />} />
      </Routes>
    </Router>
  );
}
