// App.js
import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./comp/layouts/Home"
import Country from "./comp/football/country/Country"
import Leagues from "./comp/football/leagues/Leagues"
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
        </Routes>
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </Router>
  );
};

export default App;
