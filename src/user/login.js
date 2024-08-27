import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://66cbf7394290b1c4f19b816c.mockapi.io/user/', {
        username,
        password,
      });

      
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('userName', response.data.name);

      
      window.location.href = '/sign-up';
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      setMessage('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;