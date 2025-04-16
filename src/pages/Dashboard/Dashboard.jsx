import React from 'react';
import Catalogue from '../Catalogue/Catalogue';
import Navbar from '../../layouts/Navbar/Navbar';
import Sidebar from '../../layouts/Sidebar/Sidebar';
import './Dashboard.scss';
const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-content">
        <div className="sidebar-content">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <Catalogue />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;