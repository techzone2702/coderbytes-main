import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Charts() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Organic", "Recyclable", "Medical", "E-Waste", "Hazardous", "Plastic"],
        datasets: [{
          label: "Waste Volume (Tons)",
          data: [820, 1180, 825, 995, 290, 745],
          backgroundColor: [
            ctx.createLinearGradient(0,0,0,400),
            ctx.createLinearGradient(0,0,0,400),
            ctx.createLinearGradient(0,0,0,400),
            ctx.createLinearGradient(0,0,0,400),
            ctx.createLinearGradient(0,0,0,400),
            ctx.createLinearGradient(0,0,0,400),
          ].map((grad, i) => {
            grad.addColorStop(0, ["#22c55e","#3b82f6","#ef4444","#a855f7","#eab308","#6b7280"][i]);
            grad.addColorStop(1, "rgba(255,255,255,0.2)");
            return grad;
          }),
          borderRadius: 12,
          borderWidth: 0,
          barPercentage: 0.6,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1500,
          easing: 'easeOutBounce'
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `${context.label}: ${context.raw} Tons`
            }
          }
        },
        scales: {
          y: { 
            beginAtZero: true,
            grid: { color: 'rgba(200,200,200,0.1)' },
          },
          x: { grid: { display: false } },
        },
      },
    });

    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 mt-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Waste Distribution</h2>
          <p className="text-xs text-gray-500">Weekly collection analysis</p>
        </div>
        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full animate-pulse">
          LIVE DATA
        </span>
      </div>

      <div className="h-64 relative">
        <canvas ref={chartRef}></canvas>
      </div>

     <div className="stats-container">
  {/* Total Waste Section */}
  <div className="stat-box">
    <span className="stat-label">Total Volume</span>
    <div className="stat-value-group">
      <span className="stat-number">1,225</span>
      <span className="stat-unit">tons</span>
    </div>
    <div className="stat-bar-bg">
      <div className="stat-bar-fill indigo"></div>
    </div>
  </div>

  {/* Target/Efficiency Section with Circular Visual */}
  <div className="stat-box border-sides">
    <div className="progress-circle">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path className="circle-fill" strokeDasharray="85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      </svg>
      <span className="percentage">85%</span>
    </div>
    <span className="stat-label mt-5">Target Met</span>
  </div>

  {/* Change Section with Dynamic Badge */}
  <div className="stat-box">
    <span className="stat-label">Growth</span>
    <div className="badge-wrapper">
      <div className="trend-badge">
        <span className="arrow">↑</span>
        <span className="trend-number">12%</span>
      </div>
    </div>
    <span className="stat-subtext">vs. last month</span>
  </div>
</div>
    </div>
  );
}
