import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Vikassinghrathor/Weather-app-assignment">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vikas-rathore-51ba91194/">
          Vikas Singh Rathore
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://www.htmlhints.com/">
          HTML HINTS
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;