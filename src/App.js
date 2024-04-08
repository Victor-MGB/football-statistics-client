// App.js
import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./comp/layouts/Home"
import Country from "./comp/football/country/Country"
import Leagues from "./comp/football/leagues/Leagues"
import Fixtures from "./comp/football/fixtures/Fixtures"
import H2H from "./comp/football/h2h/H2H";
import LiveScore from "./comp/football/livescore/LiveScore";
import Standings from "./comp/football/standings/Standings";
// import About from "./About";
// import Contact from "./Contact";

const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/country" element={<Country/>}/>
          <Route path="/leagues" element={<Leagues/>}/>
          <Route path="/fixtures" element={<Fixtures/>}/>
          <Route path="/h2h" element={<H2H/>}/>
          <Route path="/livescore" element={<LiveScore/>}/>
          <Route path="/standings" element={<Standings/>}/>
        </Routes>
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
};

export default App;
