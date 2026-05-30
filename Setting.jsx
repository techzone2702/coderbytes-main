
import Charts from "../components/Charts";
import React from "react";
import Settingsection from "../components/Settingsection";
import "../styles/setting.css";


export default function Setting() {
return (
<main className="Setting">
<header className="Setting-header">
<h1>Setting</h1>
<p>Real-time monitoring from source to disposal</p>
</header>


<Settingsection />


</main>
);
}