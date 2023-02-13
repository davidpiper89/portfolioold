import React from "react";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact"

function App() {
  return (
    <>
      <Header />
      <div className="content_container">
        <div className="nav_container">
          <Nav />
        </div>
        <div className="card_container">
          <About />
          <div className="portfolio_container">
            <Portfolio />
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
