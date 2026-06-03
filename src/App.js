import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation.component';
import Footer from './components/footer.component';
import Home from './components/home.component';
import About from './components/about.component';
import Projects from './components/projects.component';
import Blog from './components/blog.component';
import Fitness from './components/fitness.component';
import Gaming from './components/gaming.component';
import './App.css';

function MainLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="app-main">{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/about" element={<MainLayout><About /></MainLayout>} />
          <Route path="/projects" element={<MainLayout><Projects /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
          <Route path="/fitness" element={<MainLayout><Fitness /></MainLayout>} />
          <Route path="/gaming" element={<Gaming />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
