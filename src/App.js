import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import './App.css';

import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
