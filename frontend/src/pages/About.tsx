import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import AnimatedProgressBar from '../components/AnimatedProgressBar';
import RetroPDFViewer from '../components/RetroPDFViewer';
import aboutContent from '../data/about.md?raw';

const About: React.FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="page-content">
      <div className="window-header">
        <h2>About Me - Personal Information</h2>
      </div>

      <div className="fieldset">
        <legend>Personal Details</legend>
        <div className="about-profile-section">
          <div className="profile-photo-container">
            <img
              src="/levi.png"
              alt="Levi Willms"
              className="profile-photo"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="profile-photo-placeholder hidden">
              <span>👤</span>
            </div>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <strong>Name:</strong> Levi Willms
            </div>
            <div className="info-item">
              <strong>Location:</strong> Toronto, Canada
            </div>
            <div className="info-item">
              <strong>Current Role:</strong> Product/Engineering Manager
            </div>
            <div className="info-item">
              <strong>Interests:</strong> Technology, reading, sports, faith and my family :)
            </div>
          </div>
        </div>
      </div>

      <div className="fieldset">
        <legend>About Me</legend>
        <div className="text-box markdown-content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {aboutContent}
          </ReactMarkdown>
        </div>
      </div>

      <div className="fieldset">
        <legend>Quick Stats</legend>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-label">Coffee Consumed Today:</div>
            <AnimatedProgressBar targetWidth={75} delay={100} />
            <div className="stat-value">3 cups</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Lines of Code Written:</div>
            <AnimatedProgressBar targetWidth={60} delay={250} />
            <div className="stat-value">1,247</div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Nostalgia Level:</div>
            <AnimatedProgressBar targetWidth={100} delay={400} />
            <div className="stat-value">Maximum</div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <a
          href="mailto:leviwillms@gmail.com?subject=Hello from your website!"
          className="retro-button"
          style={{ textDecoration: 'none' }}
        >
          Send Message
        </a>
        <button className="retro-button" onClick={() => setShowResume(true)}>
          View Resume
        </button>
        <a
          href="https://www.linkedin.com/in/leviwillms/"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-button"
          style={{ textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <button className="retro-button" onClick={() => setShowContact(true)}>
          Contact Info
        </button>
      </div>

      {showResume && (
        <RetroPDFViewer
          pdfUrl="/levi-willms-resume.pdf"
          title="Resume - Levi Willms"
          onClose={() => setShowResume(false)}
        />
      )}

      {showContact && (
        <div className="contact-dialog-overlay" onClick={() => setShowContact(false)}>
          <div className="contact-dialog" onClick={e => e.stopPropagation()}>
            <div className="contact-dialog-titlebar">
              <span>📇 Contact Information</span>
              <button className="contact-dialog-close" onClick={() => setShowContact(false)}>
                ✕
              </button>
            </div>
            <div className="contact-dialog-body">
              <div className="contact-dialog-icon">👤</div>
              <div className="contact-dialog-info">
                <div className="contact-dialog-name">Levi Willms</div>
                <div className="contact-dialog-details">
                  <div className="contact-dialog-row">
                    <strong>📧 Email:</strong>
                    <a href="mailto:leviwillms@gmail.com">leviwillms@gmail.com</a>
                  </div>
                  <div className="contact-dialog-row">
                    <strong>💼 LinkedIn:</strong>
                    <a href="https://www.linkedin.com/in/leviwillms/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/leviwillms
                    </a>
                  </div>
                  <div className="contact-dialog-row">
                    <strong>📍 Location:</strong>
                    <span>Toronto, Canada</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-dialog-buttons">
              <a
                href="mailto:leviwillms@gmail.com?subject=Hello from your website!"
                className="retro-button"
                style={{ textDecoration: 'none' }}
              >
                Send Email
              </a>
              <button className="retro-button" onClick={() => setShowContact(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="status-bar">
        <div className="status-item">👤 About Me</div>
        <div className="status-item">📍 Toronto, Canada</div>
        <div className="status-item">💼 Software Developer</div>
      </div>
    </div>
  );
};

export default About;
