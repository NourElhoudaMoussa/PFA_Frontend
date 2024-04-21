import React, {} from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import DashboardMain from '../components/DashboardMain';
function Dashboard() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <SideBar/>
      <DashboardMain/>
      <Footer/>
    </div>

  );
}
export default Dashboard;
