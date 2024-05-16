import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import UserPosts from './components/UserPosts';
import UserToDo from './components/UserToDo';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Userposts/:id" element={<UserPosts />} />
        <Route path="Usertodo/:id" element={<UserToDo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
