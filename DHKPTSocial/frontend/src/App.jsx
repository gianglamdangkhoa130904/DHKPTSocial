import { useState } from 'react'
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

import RegistSeller from './pages_e_commerce/seller/RegistSeller'
import SellerHome from './pages_e_commerce/seller/SellerHome'
import SellerProducts from './pages_e_commerce/seller/SellerProducts'
import LoginEcommerce from './pages_e_commerce/Login.jsx'
import CustomerHomePage from './pages_e_commerce/customer/CustomerHomePage.jsx'
import ListStoreEcommerce from './pages_e_commerce/seller/ListStore.jsx'
import ViewStore from './pages_e_commerce/seller/ViewStore.jsx'
import SellerAds from './pages_e_commerce/seller/SellerAds.jsx'
import SellerVoucher from './pages_e_commerce/seller/SellerVoucher.jsx'
import SellerRevenue from './pages_e_commerce/seller/SellerRevenue.jsx'
import SellerTax from './pages_e_commerce/seller/SellerTax.jsx'
import SellerOrder from './pages_e_commerce/seller/SellerOrder.jsx'
import ProductDetail from './pages_e_commerce/components/ProductDetail.jsx'
import CartPage from './pages_e_commerce/components/CartPage.jsx'
import InforPayment from './pages_e_commerce/customer/InforPayment.jsx'
import PaymentPage from './pages_e_commerce/customer/PaymentPage.jsx'
import ReturnPayment from './pages_e_commerce/customer/ReturnPayment.jsx'
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
        <Route path='/comments/reports' element={<CommentsReports/>}/>
        <Route path='/posts/reports' element={<PostsReports/>}/>

        {/* E-Commerce */}
        <Route path='/e-commerce' element={<LoginEcommerce/>}/>
        <Route path='/e-commerce/login' element={<LoginEcommerce/>}/>
        {/* Customer */}
        <Route path='/e-commerce/customer/home' element={<CustomerHomePage/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/e-commerce/customer/infor-payment' element={<InforPayment/>}/>
        <Route path='/e-commerce/customer/payment' element={<PaymentPage/>}/>
        <Route path='/e-commerce/customer/return-payment' element={<ReturnPayment/>}/>
        {/* Seller */}
        <Route path='/e-commerce/seller/view-store/:id' element={<ViewStore/>}/>
        <Route path='/e-commerce/seller/list-store' element={<ListStoreEcommerce/>}/>
        <Route path='/e-commerce/seller/home' element={<SellerHome/>}/>
        <Route path='/e-commerce/seller/regist-seller' element={<RegistSeller/>}/>
        <Route path='/e-commerce/seller/products' element={<SellerProducts/>}/>
        <Route path='/e-commerce/seller/ads' element={<SellerAds/>}/>
        <Route path='/e-commerce/seller/voucher' element={<SellerVoucher/>}/>
        <Route path='/e-commerce/seller/revenue' element={<SellerRevenue/>}/>
        <Route path='/e-commerce/seller/tax' element={<SellerTax/>}/>
        <Route path='/e-commerce/seller/order' element={<SellerOrder/>}/>
        {/* Shipper */}

        {/* Admin */}

      </Routes>
  )
}

export default App
