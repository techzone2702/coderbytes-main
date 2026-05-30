import React, { useState } from 'react';
import "../styles/reports.css";

const ComplaintReports = () => {
  const [complaints, setComplaints] = useState([
    { 
      id: "TKT-102", 
      issue: "Illegal Dumping", 
      location: "Sector 4, Near Park", 
      status: "In Progress", 
      priority: "High",
      image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=200&q=80",
      time: "2 hours ago"
    },
    { 
      id: "TKT-098", 
      issue: "Overflowing Bin", 
      location: "Main Market Road", 
      status: "Resolved", 
      priority: "Medium",
      image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=200&q=80",
      time: "Yesterday"
    },
    { 
      id: "TKT-110", 
      issue: "Blocked Drainage",
        location: "River Side Area",
        status: "New",
        priority: "High",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80",
        time: "30 minutes ago"
    },
    
    {
        id: "TKT-125",
        issue: "E-Waste Dumping",
        location: "Tech Park Road", 
        status: "Resolved",
        priority: "Low",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80",
        time: "2 days ago"
    },
    
    
    {
        id: "TKT-140",
        issue: "Odor Complaint",
        location: "Sewage Treatment Plant",
        status: "Resolved",
        priority: "Medium",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80",
        time: "3 days ago"
    }
  ]);

  return (
    <div className="complaints-container">
      {/* Header with Search & Report Button */}
      <div className="complaints-header">
        <div>
          <h1>Issue Reporting</h1>
          <p>Report waste-related problems in your area with photo evidence.</p>
        </div>
        <button className="new-report-btn">
          <span>+</span> New Report
        </button>
      </div>

      {/* Stats Bar */}
      <div className="complaint-stats">
        <div className="c-stat-box red-glow"><h3>12</h3><p>Active Issues</p></div>
        <div className="c-stat-box blue-glow"><h3>45</h3><p>Total Resolved</p></div>
        <div className="c-stat-box green-glow"><h3>15 min</h3><p>Avg. Response</p></div>
      </div>

      {/* Grid of Complaint Cards */}
      <div className="complaints-grid">
        {complaints.map((item) => (
          <div key={item.id} className="issue-card">
            <div className="card-photo">
              <img src={item.image} alt="Waste Issue" />
              <span className={`priority-tag ${item.priority.toLowerCase()}`}>{item.priority}</span>
            </div>
            
            <div className="card-body">
              <div className="card-top">
                <span className="ticket-id">{item.id}</span>
                <span className="time-stamp">{item.time}</span>
              </div>
              <h3>{item.issue}</h3>
              <p className="location-text">📍 {item.location}</p>
              
              <div className="card-footer">
                <div className={`status-badge ${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </div>
                <button className="view-details">Details →</button>
              </div>
            </div>
          </div>
        ))}

        {/* Upload Placeholder Card */}
        <div className="issue-card upload-placeholder">
          <div className="upload-icon">📸</div>
          <p>Upload new photo to report an issue</p>
          <input type="file" id="upload" hidden />
          <label htmlFor="upload" className="upload-label">Browse Files</label>
        </div>
      </div>
    </div>
  );
};

export default ComplaintReports;