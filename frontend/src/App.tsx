import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Career from './pages/Career';
import Interests from './pages/Interests';
import BlogLayout from './components/BlogLayout';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="window">
        <div className="window-body">
          <div className="banner">
            <img
              src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1350&q=80"
              alt="Retro landscape banner"
            />
          </div>
          <menu role="tablist">
            <li role="tab">
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </li>
            <li role="tab">
              <NavLink to="/career" className={({ isActive }) => isActive ? 'active' : ''}>Career</NavLink>
            </li>
            <li role="tab">
              <NavLink to="/interests" className={({ isActive }) => isActive ? 'active' : ''}>Interests</NavLink>
            </li>
            <li role="tab">
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
            </li>
          </menu>

          <div className="window" role="tabpanel">
            <div className="window-body">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/blog" element={<BlogLayout />}> 
                  <Route index element={<div className="blog-content"><p>Select a blog.</p></div>} />
                  <Route path=":slug" element={<BlogPost />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
