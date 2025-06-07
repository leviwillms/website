import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
          <menu role="tablist">
            <li role="tab"><Link to="/">About</Link></li>
            <li role="tab"><Link to="/career">Career</Link></li>
            <li role="tab"><Link to="/interests">Interests</Link></li>
            <li role="tab"><Link to="/blog">Blog</Link></li>
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
