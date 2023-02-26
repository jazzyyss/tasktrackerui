import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Home from './pages/home/Home'
import Register from "./pages/register/Register";

function App() {
  return (<>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/register' exact element={<Register />}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
    </>);
}

export default App;
