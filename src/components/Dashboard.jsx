import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          {/* Stats Cards Row */}
          <div className="stats-row">
            <div className="stat-card">
              <h3>560</h3>
              <p>Students</p>
            </div>
            <div className="stat-card">
              <h3>25,000</h3>
              <p>Today Transaction</p>
            </div>
            <div className="stat-card">
              <h3>2,50,750</h3>
              <p>Wallet Balance</p>
            </div>
            <div className="stat-card">
              <h3>Pancake</h3>
              <p>Low Stock Alert</p>
            </div>
            <div className="stat-card">
              <h3>250/570</h3>
              <p>Inventory Stock</p>
            </div>
          </div>
          
          {/* Widgets Grid */}
          <div className="widgets-grid">
            <div className="widget">
              <h4>STUDENT</h4>
              <div className="widget-content">
                <div className="image-placeholder">IMAGE</div>
              </div>
              <h4>UPI MANUAL</h4>
              <div className="widget-content">
                <div className="widget-btn">Recharge Entry</div>
              </div>
            </div>
            
            <div className="widget">
              <h4>VENDOR/MENU</h4>
              <div className="widget-content">
                <div className="widget-btn">Manage Menu</div>
              </div>
              <h4>REPORT</h4>
              <div className="widget-content">
                <div className="widget-btn">Generate</div>
              </div>
            </div>
            
            <div className="widget">
              <h4>INVENTORY/STOCK</h4>
              <div className="widget-content">
                <div className="widget-btn">View Stock</div>
              </div>
              <h4>RFID</h4>
              <div className="widget-content">
                <div className="widget-btn">Manage Cards</div>
              </div>
            </div>
            
            <div className="widget">
              <h4>TRANSACTION/WALLET</h4>
              <div className="widget-content">
                <div className="widget-btn">View Records</div>
              </div>
              <h4>USER ROLE</h4>
              <div className="widget-content">
                <div className="widget-btn">Access Control</div>
              </div>
            </div>
          </div>
          
          {/* Recent Transactions */}
          <div className="recent-transactions">
            <h3>Recent Transactions</h3>
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>ID</th>
                  <th>Amount</th>
                  <th>Items</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>S001</td>
                  <td>₹50</td>
                  <td>Sandwich</td>
                  <td>10:30 AM</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>S002</td>
                  <td>₹35</td>
                  <td>Juice</td>
                  <td>11:15 AM</td>
                </tr>
                <tr>
                  <td>Mike Johnson</td>
                  <td>S003</td>
                  <td>₹75</td>
                  <td>Lunch Combo</td>
                  <td>12:45 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;