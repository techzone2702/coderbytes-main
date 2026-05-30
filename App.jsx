import React from 'react';
// 1. Remove BrowserRouter from this import
import { Routes, Route } from 'react-router-dom'; 
import "./styles/layout.css";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Elearning from "./pages/Elearning";
import Setting from "./pages/Setting";
import Auction from "./pages/Auction";
import Tracking from "./pages/Tracking";
import Reports from "./pages/Reports";
import Marketplace from "./pages/Marketplace";


  // const Tracking = () => <div className="page"><h2>Tracking Page Content</h2></div>;
  // const Reports = () => <div className="page"><h2>Reports Page Content</h2></div>;
  // const Marketplace = () => <div className="page"><h2>Marketplace Content</h2></div>;

export default function App() {
  return (
    // 2. Remove the <BrowserRouter> tags from here
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/E-learning" element={<Elearning />} />
          <Route path="/setting" element={<Setting />} />

        </Routes>
      </main>
    </div>
  );
}