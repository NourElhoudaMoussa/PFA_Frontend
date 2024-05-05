import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
export default function Layout() {
  return (
    <div>
        <SideBar/>
        <NavBar/>
       
        <Outlet/>

       
        <Footer/>
    </div>
  )
}
