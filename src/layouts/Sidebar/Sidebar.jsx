import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogue" activeClassName="active">
              Catalogue
            </NavLink>
          </li>
          <li>
            <NavLink to="/designs" activeClassName="active">
              Designs
            </NavLink>
          </li>
          <li>
            <NavLink to="/materials" activeClassName="active">
              Materials
            </NavLink>
          </li>
          <li>
            <NavLink to="/stock" activeClassName="active">
              Stock
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" activeClassName="active">
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="active">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" activeClassName="active">
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName="active">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
