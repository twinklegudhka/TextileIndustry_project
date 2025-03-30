import React from 'react';
import './Sidebar.css'
import { NavLink } from 'react-router-dom';
export default function Sidebar(){
    return (
        <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/designs" activeClassName="active">Designs</NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName="active">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/materials" activeClassName="active">Materials</NavLink>
          </li>
          <li>
            <NavLink to="/colors" activeClassName="active">Colors</NavLink>
          </li>
          <li>
            <NavLink to="/orders" activeClassName="active">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="active">Users</NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active">Reports</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
    )
}