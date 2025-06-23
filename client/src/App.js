import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login_page';
import RegisterPage from './Pages/Register_page';
import TaskPage from './Pages/Task_page';npm 

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
