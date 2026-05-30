import React from "react";
import Marketplacesection from "../components/Marketplacesection";
import "../styles/marketplace.css";


export default function Marketplace() {
    return (
        <main className="Marketplace">
            <header className="Marketplace-header">
                <h1> Marketplace</h1>
                <p>Real-time monitoring from source to disposal</p>
            </header>
            <Marketplacesection />
        </main>
    );
}
