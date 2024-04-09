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
import TopScorer from "./comp/football/topscorer/TopScorer"
import Team from "./comp/football/team/Team";
import Players from "./comp/football/players/Players";
import Video from "./comp/football/video/Video";
import Odd from "./comp/football/odd/Odd";
import LiveOdd from "./comp/football/liveodd/LiveOdd";
import Comment from "./comp/football/comments/Comment";
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
          <Route path="/topscorer" element={<TopScorer/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/players" element={<Players/>}/>
          <Route path="/videos" element={<Video/>}/>
          <Route path="/odds" element={<Odd/>}/>
          <Route path="/liveodd" element={<LiveOdd/>}/>
          <Route path="/comment" element={<Comment/>}/>
        </Routes>
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
};

export default App;
