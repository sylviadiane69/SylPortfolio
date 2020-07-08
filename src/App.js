import React from "react";
import "./App.css"
import About from "./components/About"
import Footer from "./components/Footer";

import Header from "./components/Header";
import Card from "./components/Card";




function App() {
  return (
    <div className="App">
      <Header />
      <About />
          <Card />
          <Footer />
    </div>

  );
}

export default App;



