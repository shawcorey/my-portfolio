import logo from './logo.svg';
import './App.css';
import About from './components/about.component'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.component'; // Import the Home component
import Projects from './components/projects.component';
import Blog from './components/blog.component';
import Navbar from './components/navbar.component'; // Optional navigation bar
import Footer from './components/footer.component'; // Adjust the path if needed



function App() {
  return (
    <div className="App">
        <Router>
            <div className="App">
                {/* Optional: Navigation bar */}
                <Navbar />

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home component with the video */}
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </Router> 



      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          
        </p>
        
      </header>

      <div className="App">
            {/* Other components */}
            
            {/* Other components */}
        </div>

         {/* Footer component */}
      <Footer />



    </div>
  );
}

export default App;
