import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Benefits from './benefits';
import Voting from './voting';
import Badges from './badges';
import "../css/memberhub.css"
// import { ArrowLeftIcon } from '@heroicons/react/solid'
function MemberHub(){
    
    return(
        <div>
          <header>
              MEMBERSHIP
          </header>
            <Router>
                <div>
                    <nav className="nav">
                        <Link to="/">Benefits</Link>
                        <Link to="/voting">Voting</Link>
                        <Link to="/badges">Badges</Link>
                    </nav>
                    <hr />
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
export default MemberHub;