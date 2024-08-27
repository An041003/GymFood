import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import SignUp from './user/signup';
import Login from './user/login';
function App() {


  return (
    <div>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}