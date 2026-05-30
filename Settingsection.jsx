import React, { useState } from 'react';
import '../styles/setting.css';

export default function Settingsection() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="settings-container">
      <header className="settings-header">
        
      </header>

      <div className="settings-layout">
        {/* Left Sidebar Tabs */}
        <aside className="settings-sidebar">
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button 
            className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            🔔 Notifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            🔒 Security
          </button>
          <button 
            className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            🤖 AI & Model
          </button>
        </aside>

        {/* Right Content Area */}
        <section className="settings-content">
          {activeTab === 'profile' && (
            <div className="settings-card">
              <h3>Profile Information</h3>
              <div className="profile-upload">
                <div className="avatar-preview">JS</div>
                <button className="change-photo-btn">Change Photo</button>
              </div>
              <div className="input-group">
                <label>Full Name</label>
                <input type="text" placeholder="Akshat Patel" />
              </div>
              <div className="input-group">
                <label>Email Address</label>
                <input type="email" placeholder="Akshat@example.com" />
              </div>
              <button className="save-btn">Update Profile</button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-card">
              <h3>Notification Preferences</h3>
              <div className="toggle-item">
                <div>
                  <h4>Email Notifications</h4>
                  <p>Receive weekly reports and marketplace updates.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="toggle-item">
                <div>
                  <h4>AI Alert Tags</h4>
                  <p>Get notified when AI identifies hazardous waste.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="settings-card ai-config">
              <h3>TensorFlow.js Configuration</h3>
              <div className="input-group">
                <label>Confidence Threshold (Current: 85%)</label>
                <input type="range" min="0" max="100" defaultValue="85" className="range-slider" />
              </div>
              <div className="toggle-item">
                <div>
                  <h4>Edge Computing</h4>
                  <p>Process images locally for faster identification.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <button className="save-btn secondary">Reload AI Model</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}