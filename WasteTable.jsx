import React from "react";

const wasteData = [
  { id: "WC001", source: "Residential Zone A", location: "Main St, Sector 12", type: "Mixed Waste", weight: 450, status: "disposed", time: "2025-12-08 08:30" },
  { id: "WC002", source: "Commercial Complex B", location: "Park Avenue, Downtown", type: "Recyclable", weight: 780, status: "processing", time: "2025-12-08 09:15" },
  { id: "WC003", source: "School District", location: "Education Lane, Sector 5", type: "Organic", weight: 320, status: "in-transit", time: "2025-12-08 10:00" },
  { id: "WC004", source: "Hospital Zone", location: "Medical Road, Sector 8", type: "Medical Waste", weight: 125, status: "collected", time: "2025-12-08 10:45" },
  { id: "WC005", source: "Industrial Area C", location: "Factory Blvd, Sector 15", type: "Hazardous Waste", weight: 600, status: "processing", time: "2025-12-08 11:30" },
];

const statusColors = {
  disposed: { background: "#d1fae5", color: "#065f46" },      // green
  processing: { background: "#ffedd5", color: "#b45309" },    // orange
  "in-transit": { background: "#fef3c7", color: "#92400e" },  // yellow
  collected: { background: "#dbeafe", color: "#1e40af" },     // blue
};

const WasteTable = () => {
  return (
    <div style={{ padding: "24px", backgroundColor: "#e2f9db", minHeight: "60vh" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        <div style={{ padding: "16px", borderBottom: "1px solid #e5e7eb" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#111827" }}>Waste Collection Tracking</h2>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f3f4f6" }}>
            <tr>
              {["ID", "Source", "Location", "Type", "Weight (kg)", "Status", "Time"].map((head) => (
                <th
                  key={head}
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {wasteData.map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151" }}>{item.id}</td>
                <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151" }}>{item.source}</td>
                <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151" }}>{item.location}</td>
                <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151" }}>{item.type}</td>
                <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151" }}>{item.weight}</td>
                <td style={{ padding: "12px 16px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 8px",
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: 500,
                      backgroundColor: statusColors[item.status].background,
                      color: statusColors[item.status].color,
                    }}
                  >
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: "12px 16px", fontSize: "14px", color: "#374151" }}>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WasteTable;
