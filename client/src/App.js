import React from 'react';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/Login_page';
import RegisterPage from './Pages/Register_page';
import TaskPage from './Pages/Task_page'; 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
