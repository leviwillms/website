import './styles/App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Career from './pages/Career';
import Interests from './pages/Interests';
import Portfolio from './pages/Portfolio';
import BlogLayout from './components/BlogLayout';
import BlogPost from './components/BlogPost';
import BlogLanding from './components/BlogLanding';
import CRTEffect from './components/CRTEffect';
import PageTransition from './components/PageTransition';
import StartupSequence from './components/StartupSequence';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

import windowIcon from './styles/icons/window.png';
import folderIcon from './styles/icons/folder.png';
import computerIcon from './styles/icons/computer.png';
import notepadIcon from './styles/icons/notepad.png';
import addressBookIcon from './styles/icons/address_book.png';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <CRTEffect />
      <ThemeToggle />
      <div className="window">
        <div className="window-body">
          <div className="banner">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80"
              alt="Retro landscape banner"
              className="banner-bg"
            />
            <img
              src="/LSRW_logo_gold_ink.png"
              alt="LSRW Logo"
              className="banner-logo"
            />
          </div>
          <menu role="tablist">
            <li role="tab">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                <img src={windowIcon} alt="About icon" className="menu-icon" />
                About
              </NavLink>
            </li>
            <li role="tab">
              <NavLink to="/career" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src={folderIcon} alt="Career icon" className="menu-icon" />
                Career
              </NavLink>
            </li>
            <li role="tab">
              <NavLink to="/interests" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src={addressBookIcon} alt="Interests icon" className="menu-icon" />
                Interests
              </NavLink>
            </li>
            <li role="tab">
              <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src={computerIcon} alt="Portfolio icon" className="menu-icon" />
                Portfolio
              </NavLink>
            </li>
            <li role="tab">
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                <img src={notepadIcon} alt="Blog icon" className="menu-icon" />
                Blog
              </NavLink>
            </li>
          </menu>

          <div className="window" role="tabpanel">
            <div className="window-body">
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={
                    <PageTransition><About /></PageTransition>
                  } />
                  <Route path="/career" element={
                    <PageTransition><Career /></PageTransition>
                  } />
                  <Route path="/interests" element={
                    <PageTransition><Interests /></PageTransition>
                  } />
                  <Route path="/portfolio" element={
                    <PageTransition><Portfolio /></PageTransition>
                  } />
                  <Route path="/blog" element={
                    <PageTransition><BlogLayout /></PageTransition>
                  }>
                    <Route index element={<BlogLanding />} />
                    <Route path=":slug" element={<BlogPost />} />
                  </Route>
                </Routes>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [showStartup, setShowStartup] = useState(() => {
    return !sessionStorage.getItem('hasBooted');
  });

  const handleStartupComplete = () => {
    sessionStorage.setItem('hasBooted', 'true');
    setShowStartup(false);
  };

  if (showStartup) {
    return (
      <ThemeProvider>
        <StartupSequence onComplete={handleStartupComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
