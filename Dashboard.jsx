import Stats from "../components/Stats";
import WasteTable from "../components/WasteTable";
import Charts from "../components/Charts";
import "../styles/dashboard.css";


export default function Dashboard() {
return (
<main className="dashboard">
<header className="dashboard-header">
<h1>Waste Management Dashboard</h1>
<p>Real-time monitoring from source to disposal</p>
</header>
<Stats />
<Charts />

</main>
);
}