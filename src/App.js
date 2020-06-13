import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          {/* <Route exact path="/contact" component={Contact} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
