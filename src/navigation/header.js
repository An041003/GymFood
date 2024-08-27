import React, { useState, useEffect } from "react";
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';
import axios from 'axios';

export const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState(''); 

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userName');
    setLoggedIn(false);
    setUserName('');
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const storedUserName = localStorage.getItem('userName');

    if (isLoggedIn && userId) {
      axios.get(`https://66cbf7394290b1c4f19b816c.mockapi.io/user`)
        .then(response => {
          setLoggedIn(true);
          setUserName(response.data.name);
        })
        .catch(error => {
          console.error('Lỗi khi lấy thông tin người dùng:', error);
        });
    }
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={Logo} />
      </div>
      <nav className="navbar">
        <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/menu">Thực đơn</Link></li>
            <li><Link to="/order">Đặt hàng</Link></li>
            <li><Link to="/diet">Xây dựng chế độ ăn</Link></li>
          </ul>
      </nav>
      <div className="user">
        {loggedIn ? (
          <div>
            <span>Xin chào, {userName}</span>
            <button onClick={handleLogout}>Đăng xuất</button>
          </div>
        ) : (
          <div>
            <Link to="/log-in">Đăng nhập</Link>/<Link to="/sign-up">Đăng ký</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;