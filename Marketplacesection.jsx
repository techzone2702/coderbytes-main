import React from 'react';
import "../styles/marketplace.css";

const marketplaceData = [
  {
    id: 1,
    title: "PET Plastic Bottles",
    seller: "Green Recycling Co.",
    quantity: "500 kg",
    price: "₹25 / kg",
    location: "Industrial Zone A",
    category: "Plastic",
    verified: true,
    icon: "♻️"
  },
  {
    id: 2,
    title: "Scrap Aluminum",
    seller: "Metal Works Ltd.",
    quantity: "1200 kg",
    price: "₹180 / kg",
    location: "Sector 12",
    category: "Metal",
    verified: true,
    icon: "🏗️"
  },
  {
    id: 3,
    title: "Mixed Paper & Cardboard",
    seller: "Paper Mill Inc.",
    quantity: "800 kg",
    price: "₹15 / kg",
    location: "Downtown District",
    category: "Paper",
    verified: false,
    icon: "📦"
  }
  ,
  {
    id: 4,    
    title: "Used Electronics",
    seller: "E-Waste Solutions",
    quantity: "300 kg",
    price: "₹350 / kg",
    location: "Tech Park Area",
    category: "E-Waste",
    verified: true,
    icon: "💻",
    },
    {
      id: 5,  
      title: "Glass Bottles & Jars",
      seller: "ClearView Recycling",
      quantity: "650 kg", 
      price: "₹20 / kg",
      location: "Market Street",
      category: "Glass",
      verified: false,
      icon: "🍾",
        
      },
      {
        id: 6,
        title: "Copper Wiring Scrap",
        seller: "Copper Traders",
        quantity: "400 kg",
        price: "₹450 / kg",
        location: "Sector 9",
        category: "Metal",
        verified: true,
        icon: "🔌"
      },
      {
        id: 7,
        title: "HDPE Plastic Pellets",
        seller: "PlastiCycle Ltd.",
        quantity: "750 kg",
        price: "₹30 / kg",
        location: "Recycling Hub B",
        category: "Plastic",
        verified: false,
        icon: "🛢️"
      },
      {
        id: 8,
        title: "PET Plastic Bottles",
        seller: "Green Recycling Co.",
        quantity: "500 kg",
        price: "₹25 / kg",
        location: "Industrial Zone A",
        category: "Plastic",
        verified: true,
        icon: "♻️"
      } ,
      {
        id: 9,
        title: "Scrap Aluminum",
        seller: "Metal Works Ltd.", 
        quantity: "1200 kg",
        price: "₹180 / kg",
        location: "Sector 12",
        category: "Metal",
        verified: true,
        icon: "🏗️"
      }
      
];

export default function WasteMarketplace() {
  return (
    <div className="marketplace-container">
      {/* Header Section */}
      <div className="market-header-gradient">
        <div className="header-text">
          <h1>Waste Marketplace</h1>
          <p>Connect with buyers and sellers to create a circular economy for recyclable materials</p>
        </div>
        <div className="market-stats-row">
          <div className="m-stat-card">
            <span className="m-label">Active Listings</span>
            <h2 className="m-value">6</h2>
          </div>
          <div className="m-stat-card">
            <span className="m-label">Total Quantity</span>
            <h2 className="m-value">5450 kg</h2>
          </div>
          <div className="m-stat-card">
            <span className="m-label">Verified Sellers</span>
            <h2 className="m-value">4</h2>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="market-controls">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search by material type or seller..." />
        </div>
        <div className="filter-group">
          <button className="filter-btn">All Categories ▾</button>
          <button className="filter-icon-btn">⚙️</button>
        </div>
      </div>

      {/* Marketplace Grid */}
      <div className="market-grid">
        {marketplaceData.map((item) => (
          <div key={item.id} className="market-item-card">
            <div className="item-visual">
              <div className="item-icon-box">{item.icon}</div>
            </div>
            
            <div className="item-content">
              <div className="item-header">
                <h3 className="item-title">{item.title}</h3>
                {item.verified && <span className="verified-pill">Verified</span>}
              </div>
              <p className="seller-name">{item.seller}</p>
              
              <div className="item-details">
                <div className="detail-row">
                  <span>Quantity:</span>
                  <strong>{item.quantity}</strong>
                </div>
                <div className="detail-row">
                  <span>Price:</span>
                  <strong className="price-text">{item.price}</strong>
                </div>
                <div className="detail-row">
                  <span>Location:</span>
                  <strong>{item.location}</strong>
                </div>
              </div>
              
              <button className="interest-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}