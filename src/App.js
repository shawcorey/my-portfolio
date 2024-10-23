import logo from './logo.svg';
import './App.css';
import About from './components/about.component'; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.component'; // Import the Home component
import Projects from './components/projects.component';
import Blog from './components/blog.component';
import Navigation from './components/navigation.component'; // Optional navigation bar
import Footer from './components/footer.component'; // Adjust the path if needed



function App() {
  return (
    <div className="App">
      <Navigation />
      <div class="app-content">
        <Router>
            
                {/* Optional: Navigation bar */}
                

                {/* Define Routes */}
                
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home component with the video */}
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
                
            
        </Router> 
        </div>
      


      

      

         {/* Footer component */}
      <Footer />



    </div>
  );
}

export default App;
