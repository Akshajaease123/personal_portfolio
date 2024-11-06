import React from "react";
import "./App.css";
import myImage from "./image1.jpeg"; // Import your custom image

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Display your image */}
        <img src={myImage} className="App-image" alt="My Project" />

        {/* Add a heading */}
        <h1>Welcome to My Projects Page</h1>

        {/* Add some descriptive text */}
        <p>Here are some of the projects I've been working on:</p>

        {/* Add links to your projects */}
        <ul className="project-list">
          <li>
            <a
              href="https://github.com/Akshajaease123/image_to_pdf_editor_savor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 1: Java Desktop App
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Akshajaease123/kannadatranslatespeechassist"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project 2: Python Translation Tool
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
