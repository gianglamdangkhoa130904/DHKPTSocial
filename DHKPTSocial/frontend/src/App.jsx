import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home';
import Register from './pages/Register';
import ListUser from './pages/ListUser';
import Login from './pages/Login'
import EditProfilePage from'./pages/customer/EditProfilePage';
import UserProfilePage from'./pages/customer/UserProfilePage';
import PostDetails from './pages/customer/PostDetails'
import AdminLoginPage from './pages/admin/AdminLoginPage'
import AdminPage from './pages/admin/AdminPage'
import CommentsReports from './pages/admin/CommentsReports'
import PostsReports from './pages/admin/PostsReports'

const App = () => {
  return (
      <Routes>
        {/* Social Media */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* User */}
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/users/list' element={<ListUser/>}/>
        <Route path='/edit/:id' element={<EditProfilePage/>}/>
        <Route path='/users/:id' element={<UserProfilePage/>}/>
        <Route path='/article' element={<PostDetails/>}/>
        {/* Admin */}
        <Route path='/admin/login' element={<AdminLoginPage/>}/>
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='comments/reports' element={<CommentsReports/>}/>
        <Route path='/posts/reports' element={<PostsReports/>}/>

        {/* E-Commerce */}

        {/* Customer */}

        {/* Seller */}

        {/* Shipper */}

        {/* Admin */}

      </Routes>
  )
}

export default App
