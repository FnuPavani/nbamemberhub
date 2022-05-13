import React from "react";
import Header  from "./header";
import Benefits from './benefits';
import Voting from "./voting";
import Badges from './badges';
import "../css/memberhub.css";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

function MemHub() {
    return (
        <div>
            <Router>
            <Header />
                <div className="memberhub-container">
                    <Routes>
                        <Route path="/" element={<Benefits />} />
                        <Route path="/voting" element={<Voting />} />
                        <Route path="/badges" element={<Badges />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default MemHub;
