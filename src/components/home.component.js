import React from 'react';
import './home.component.css'; // Optional: Create a CSS file for styling if needed

const Home = () => {
  return (
    <div className="home-container">
      <div className="video-container">
        <video className="home-video" autoPlay muted loop>
          <source src="/assets/Landing-Page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and get to know more about me!</p>
      </div>
    </div>
  );
};

export default Home;
