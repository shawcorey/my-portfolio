import logo from './logo.svg';
import './App.css';
import About from './components/About'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Navbar from './components/Navbar'; // Optional navigation bar




function App() {
  return (
    <div className="App">
        <Router>
            <div className="App">
                {/* Optional: Navigation bar */}
                <Navbar />

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </Router> 



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <div className="App">
            {/* Other components */}
            <About />
            {/* Other components */}
        </div>


          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
