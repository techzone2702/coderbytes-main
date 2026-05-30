import React from 'react';
import "../styles/elearning.css";

const courses = [
  {
    id: 1,
    title: "Introduction to Recycling",
    instructor: "Dr. A. Sharma",
    duration: "2 hrs",
    level: "Beginner",
    color: "#22c55e", // Green
    icon: "♻️"
  },
  {
    id: 2,
    title: "Advanced Composting Techniques",
    instructor: "Green Earth Co.",
    duration: "3.5 hrs",
    level: "Intermediate",
    color: "#3b82f6", // Blue
    icon: "🫐"
  },
  {
    id: 3,
    title: "Industrial Waste Regulations",
    instructor: "Legal Waste Experts",
    duration: "5 hrs",
    level: "Advanced",
    color: "#a855f7", // Purple
    icon: "🏭"
  },
    {
    id: 4,
    title: "E-Waste Management",
    instructor: "TechRecycle Inc.",
    duration: "4 hrs",
    level: "Intermediate",
    color: "#ef4444", // Red    
    icon: "💻",
    },
    {
    id: 5,
    title: "Hazardous Waste Handling",
    instructor: "SafeWaste Solutions",
    duration: "6 hrs",
    level: "Advanced",
    color: "#eab308", // Yellow
    icon: "☣️",
    },
    {
    id: 6,
    title: "Plastic Waste Reduction Strategies",
    instructor: "Eco Warriors",
    duration: "2.5 hrs",
    level: "Beginner",  
    color: "#6b7280", // Gray
    icon: "🌍",
    },
    {
        id: 7,
        title: "Sustainable Waste to Energy",
        instructor: "Energy Green Ltd.",
        duration: "4 hrs",
        level: "Advanced",
        color: "#f97316", // Orange
        icon: "⚡",
      },
      {
        id: 8,
        title: "Community Waste Management",
        instructor: "Local Green Initiatives",
        duration: "3 hrs",
        level: "Beginner",
        color: "#14b8a6", // Teal
        icon: "🏘️",
      },
      { 
        id: 9,
        title: "Waste Auditing and Reporting",
        instructor: "AuditPro Services",
        duration: "3.5 hrs",
        level: "Intermediate",
        color: "#8b5cf6", // Violet
        icon: "📊",
      },
      {
        id: 10,
        title: "Medical Waste Management",
        instructor: "HealthSafe Co.",
        duration: "5 hrs",
        level: "Advanced",
        color: "#f43f5e", // Pink
        icon: "🏥",
      },
      {
        id: 11,
        title: "Construction & Demolition Waste",
        instructor: "BuildGreen Experts",   
        duration: "4 hrs",
        level: "Intermediate",
        color: "#22d3ee", // Cyan
        icon: "🏗️",
    },  {
        id: 12,
        title: "Zero Waste Lifestyle",
        instructor: "Sustainable Living Org.",
        duration: "2 hrs",
        level: "Beginner",
        color: "#84cc16", // Lime
        icon: "🌱",
      },
];

export default function Elearningsection() {
  return (
    <div className="academy-container">
      {/* Academy Header */}
      <div className="academy-header">
        <div className="header-content">
          <h1>Waste Management Academy</h1>
          <p>Empowering you with knowledge for a sustainable future.</p>
          
          <div className="academy-stats">
            <div className="academy-stat-box">
              <span className="stat-label">Active Courses</span>
              <span className="stat-value">12</span>
            </div>
            <div className="academy-stat-box">
              <span className="stat-label">Certified Learners</span>
              <span className="stat-value">450</span>
            </div>
            <div className="academy-stat-box">
              <span className="stat-label">Video Content</span>
              <span className="stat-value">24 hrs.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="academy-controls">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search courses, topics..." />
        </div>
        <div className="filter-group">
          <button className="filter-icon">⚙️</button>
          <select className="level-dropdown">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-body">
              <div className="course-header">
                <div className="course-icon" style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                  {course.icon}
                </div>
                <h3>{course.title}</h3>
              </div>
              
              <div className="course-meta">
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Level:</strong> {course.level}</p>
              </div>

              <button className="start-btn" style={{ backgroundColor: course.color }}>
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}