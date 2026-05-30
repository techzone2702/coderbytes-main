import Stats from "../components/Stats";
import WasteTable from "../components/WasteTable";
import Charts from "../components/Charts";
import "../styles/dashboard.css";
import Auctionsection from "../components/Auctionsection";


export default function Auction() {
return (
<main className="Auction">
<header className="Auction-header">
<h1>Auction</h1>
<p>Real-time monitoring from source to disposal</p>
</header>


<Auctionsection />

</main>
);
}