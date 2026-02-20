import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1 style={{ margin: 0 }}>Cosmic Dashboard</h1>
          <p style={{ color: '#888', marginTop: '0.5rem' }}>React + Vite Integration</p>
        </div>
        <a href="../../../index.html" className="back-link">← Exit to Portfolio</a>
      </header>

      <div className="grid">
        <div className="glass-card">
          <h3>System Status</h3>
          <div className="stat-value">Active</div>
          <p><span className="pulse"></span> All systems operational</p>
        </div>

        <div className="glass-card">
          <h3>Local Time</h3>
          <div className="stat-value">{time}</div>
          <p>Syncing with cosmic clock</p>
        </div>

        <div className="glass-card">
          <h3>Projects Analytics</h3>
          <div className="stat-value">12.5k</div>
          <p>Global interactions this month</p>
        </div>

        <div className="glass-card" style={{ gridColumn: 'span 2' }}>
          <h3>Recent Updates</h3>
          <ul style={{ paddingLeft: '1.2rem', color: '#ccc' }}>
            <li>Integrated Global Mouse Trail</li>
            <li>Restored Portfolio High-Contrast Theme</li>
            <li>Added .nojekyll bypass for GitHub Pages</li>
            <li>Initialized React Sub-Module</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
