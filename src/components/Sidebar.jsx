import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item active">
        <span>Dashboard Overview (Home)</span>
      </div>
      <div className="sidebar-item">
        <span>Student Management</span>
      </div>
      <div className="sidebar-item">
        <span>Vendor/Menu Management</span>
      </div>
      <div className="sidebar-item">
        <span>Inventory/Stock Management</span>
      </div>
      <div className="sidebar-item">
        <span>Transactions/Wallet Management</span>
      </div>
      <div className="sidebar-item">
        <span>UPI Manual Recharge Entry</span>
      </div>
      <div className="sidebar-item">
        <span>Report & Exports</span>
      </div>
      <div className="sidebar-item">
        <span>RFID Management</span>
      </div>
      <div className="sidebar-item">
        <span>User Roles & Access Control</span>
      </div>
      <div className="sidebar-item">
        <span>School Settings</span>
      </div>
    </div>
  );
}

export default Sidebar;