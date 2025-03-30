import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import DesignDashboard from '../pages/DesignDashboard'

function DashboardLayout() {
    const [activePage, setActivePage] = useState('DesignDashboard');
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-container">
        <Sidebar  />
        <DesignDashboard />
      </div>
    </div>
  )
}

export default DashboardLayout