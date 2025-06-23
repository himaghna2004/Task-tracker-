import React, { useState } from 'react';
import { loginUser } from '../Services/api';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.userId);
      navigate('/');
    } catch (err) {
      alert('Login failed');
    }
  };
  return (
  <div className="container mt-5">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <input className="form-control mb-2" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-2" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
  </div>
);
}




export default LoginPage;
