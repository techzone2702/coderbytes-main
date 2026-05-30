import React, { useState } from 'react';
import '../styles/Auction.css';

const auctionData = [
  {
    id: 1,
    title: "High-Grade Electronic Waste",
    aiScore: 94,
    desc: "Sorted electronic waste with high precious metal content.",
    timeLeft: "2h 15m",
    location: "Central Dumping Ground",
    category: "E-Waste",
    currentBid: "₹1,250",
    quantity: "850 kg",
    totalBids: 12
  },
  {
    id: 2,
    title: "Premium Plastic Collection",
    aiScore: 87,
    desc: "Mixed high-quality plastic waste, AI-verified for recycling.",
    timeLeft: "5h 42m",
    location: "North Processing Center",
    category: "Plastic",
    currentBid: "₹980",
    quantity: "1200 kg",
    totalBids: 8
  },
  {
    id: 3,
    title: "Sorted Paper Waste",
    aiScore: 92,
    desc: "Clean and sorted paper waste suitable for recycling.",
    timeLeft: "1h 30m",
    location: "East Recycling Hub",
    category: "Paper",
    currentBid: "₹750",
    quantity: "600 kg",
    totalBids: 15
  },
  {
    id: 4,
    title: "Metal Scrap Bundle",
    aiScore: 89,
    desc: "Assorted metal scrap, AI-assessed for quality and purity.",
    timeLeft: "3h 20m",
    location: "West Metal Yard",
    category: "Metal",
    currentBid: "₹2,300",
    quantity: "400 kg",
    totalBids: 6
  },
  {
    id: 5,
    title: "Glass Waste Collection",
    aiScore: 85,
    desc: "Clean glass waste, AI-verified for recyclability.",
    timeLeft: "4h 10m",
    location: "South Glass Facility",
    category: "Glass",
    currentBid: "₹600",
    quantity: "900 kg",
    totalBids: 9
  }
];

export default function Auction() {
  const [selected, setSelected] = useState(auctionData[0]);

  return (
    <div className="auction-wrapper">
      {/* Pink/Purple Hero Header */}
      <header className="auction-hero">
        <div className="hero-content">
          <div className="title-row">
            <span className="ai-icon">⚡</span>
            <h1>AI-Powered Recyclable Auction</h1>
          </div>
          <p>Smart auctions using AI to assess waste quality and match buyers.</p>
          
          <div className="auction-stats">
            <div className="a-stat">
              <span>Live Auctions</span>
              <strong>4</strong>
            </div>
            <div className="a-stat">
              <span>Total Bids</span>
              <strong>41</strong>
            </div>
            <div className="a-stat">
              <span>Avg AI Score</span>
              <strong>91%</strong>
            </div>
          </div>
        </div>
      </header>

      <div className="auction-layout">
        {/* Left Side: Cards */}
        <div className="auction-list">
          {auctionData.map(item => (
            <div 
              key={item.id} 
              className={`auction-card ${selected.id === item.id ? 'active' : ''}`}
              onClick={() => setSelected(item)}
            >
              <div className="card-top">
                <h3>{item.title}</h3>
                <span className="ai-tag">⚡ AI: {item.aiScore}%</span>
              </div>
              <p className="card-desc">{item.desc}</p>
              <div className="card-meta">
                <span>⏱️ {item.timeLeft}</span>
                <span>📍 {item.location}</span>
                <span className="cat-pill">{item.category}</span>
              </div>
              <div className="card-pricing">
                <div className="price-box">
                  <label>Current Bid</label>
                  <span className="price-val">{item.currentBid}</span>
                </div>
                <div className="price-box">
                  <label>Quantity</label>
                  <span>{item.quantity}</span>
                </div>
                <div className="price-box">
                  <label>Bids</label>
                  <span>{item.totalBids}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Bid Action Panel */}
        <aside className="bid-panel">
          <div className="panel-inner">
             <div className="gavel-icon">🔨</div>
             <h3>Place Your Bid</h3>
             <p>Selected: <strong>{selected.title}</strong></p>
             <div className="bid-input-group">
                <input type="number" placeholder="Enter Amount" />
                <button className="place-bid-btn">Place Bid</button>
             </div>
             <p className="small-text">Minimum increment: ₹50</p>
          </div>
        </aside>
      </div>
    </div>
  );
}