import React from 'react';


const WasteTracking = () => {
  const collectionSteps = [
    { id: 1, task: "Pickup Scheduled", area: "Sector 14, Lucknow", status: "Completed", time: "08:00 AM", active: true },
    { id: 2, task: "Waste Collection in Progress", area: "Main Market Road", status: "In Progress", time: "10:30 AM", active: true },
    { id: 3, task: "Transport to Sorting Facility", area: "City Outskirts", status: "Pending", time: "ETA 01:00 PM", active: false },
    { id: 4, task: "Disposal/Recycling", area: "Green-Tech Plant", status: "Pending", time: "Expected 04:00 PM", active: false },
  ];

  return (
    <div className="tracking-container">
      <header className="tracking-header">
        <h1>Waste Collection Tracking</h1>
        <p>Real-time monitoring of waste disposal vehicles</p>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Vehicle ID</h4>
          <p>UP-32-WM-4521</p>
        </div>
        <div className="stat-card">
          <h4>Waste Category</h4>
          <span className="badge dry">Dry Waste (Plastic/Paper)</span>
        </div>
        <div className="stat-card">
          <h4>Current Load</h4>
          <p>75% Capacity</p>
        </div>
      </div>

      <div className="tracking-card">
        <h3>Live Journey Timeline</h3>
        <div className="timeline">
          {collectionSteps.map((step) => (
            <div key={step.id} className={`timeline-item ${step.active ? 'active' : ''}`}>
              <div className="dot"></div>
              <div className="content">
                <div className="step-main">
                  <h4>{step.task}</h4>
                  <span className={`status-text ${step.status.replace(/\s+/g, '-').toLowerCase()}`}>
                    {step.status}
                  </span>
                </div>
                <p className="location-text">📍 {step.area}</p>
                <small className="time-text">🕒 {step.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WasteTracking;