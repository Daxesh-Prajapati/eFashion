import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './assets/adminlte.css';
import './assets/adminlte.min.css';
import { UserNavbar } from './components/layouts/UserNavbar';
import { UserSidebar } from './components/layouts/UserSidebar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/common/Login';
import { Signup } from './components/common/Signup';
import { AddProduct } from './components/vendor/AddProduct';
import { VendorSidebar } from './components/vendor/VendorSidebar';
import { VendorNavbar } from './components/vendor/VendorNavbar';
// import './App.css'

function App() {
  return (
    <body className="layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded sidebar-open">
      <div className="app-wrapper">
        <Routes>
          <Route path="/user" element={<UserSidebar />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/VendorSidebar" element={<VendorSidebar />}></Route>
          <Route path="/VendorNavbar" element={<VendorNavbar />}></Route>
        </Routes>
      </div>
    </body>
  );
}

export default App;
