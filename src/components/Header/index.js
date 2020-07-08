import React from "react";
import { Nav } from "react-bootstrap"
import "./style.css";

const styles = {
  headerStyle: {
    background: "#c4e3ed"
  },
  headingStyle: {
    fontSize: 35
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
 
    <header style={styles.headerStyle} className="header">  
      <h1 style={styles.headingStyle}>Sylvia Ramirez-Soto</h1>
      
        <Nav defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="https://github.com/sylviadiane69?tab=repositories">GitHub</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/in/sylviaramirezsoto/">LinkedIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="ReactResume.pdf">Resume</Nav.Link>
            </Nav.Item>
        </Nav>
        
    </header>    
   
  );
}

export default Header;
