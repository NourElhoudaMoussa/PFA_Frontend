import React,{} from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

 function Pfa_frontend() {
  return (
    <div className='wrapper'>
        <NavBar/>
        <Footer/>
        <Dashboard/>
        <SideBar/>
    </div>
  );
}
export default Pfa_frontend;