import React from 'react';

const Career: React.FC = () => (
  <div className="page-content">
    <div className="window-header">
      <h2>Career.exe - Professional Experience</h2>
    </div>

    <div className="toolbar">
      <button className="toolbar-button">📁 File</button>
      <button className="toolbar-button">✏️ Edit</button>
      <button className="toolbar-button">👁️ View</button>
      <button className="toolbar-button">❓ Help</button>
    </div>

    <div className="fieldset">
      <legend>Current Position</legend>
      <div className="job-entry">
        <div className="job-header">
          <h3>Product Manager</h3>
          <span className="company">ThreatIQ</span>
          <span className="duration">June 2025 - Present</span>
        </div>
        <div className="text-box">
          <ul>
            <li>Lead delivery across backend, frontend, and infrastructure teams for CyberIQ365, a cloud-native cybersecurity compliance platform</li>
            <li>Drive architecture and implementation for automated compliance reporting and data transformation workflows</li>
            <li>Set and uphold engineering standards for readability, maintainability, testing, and reliability through design docs, reviews, and delivery practices</li>
            <li>Partner with security and business stakeholders to translate requirements into clear technical plans</li>
            <li>Streamline engineering workflows through use of AI-assisted tooling and automation</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="fieldset">
      <legend>Previous Experience</legend>

      <div className="job-entry">
        <div className="job-header">
          <h3>Lead Software Developer</h3>
          <span className="company">ThreatIQ</span>
          <span className="duration">April 2024 - June 2025</span>
        </div>
        <div className="text-box">
          <ul>
            <li>Led early-stage product development and technical direction for CyberIQ365 prior to a formal product management function</li>
            <li>Worked with business stakeholders to define product vision, scope, and requirements for a compliance-focused SaaS platform</li>
            <li>Designed functional and non-functional system requirements for multi-tenant workflows and scalable delivery</li>
            <li>Coordinated and mentored engineers during early platform build-out and foundational architecture decisions</li>
          </ul>
        </div>
      </div>

      <div className="job-entry">
        <div className="job-header">
          <h3>Cybersecurity Analyst / Researcher</h3>
          <span className="company">ThreatIQ</span>
          <span className="duration">May 2023 - April 2024</span>
        </div>
        <div className="text-box">
          <ul>
            <li>Conducted applied research across blockchain systems, distributed platforms, and secure remote work environments</li>
            <li>Sole developer of internal security tools used for analysis and operational support</li>
            <li>Claroty-certified OT Cybersecurity Analyst</li>
          </ul>
        </div>
      </div>

      <div className="job-entry">
        <div className="job-header">
          <h3>Full-stack Software Developer</h3>
          <span className="company">Starship Dreams</span>
          <span className="duration">April 2021 - May 2023</span>
        </div>
        <div className="text-box">
          <ul>
            <li>Developed large-scale data synchronization and migration tooling to safely transition a major shipping aggregator from a legacy platform to a new system</li>
            <li>Built data validation and repair pipelines to ensure business continuity during platform migration</li>
            <li>Designed and implemented backend APIs, frontend interfaces, and database schemas for a social media platform hosted on AWS</li>
            <li>Led a small team in designing scalable, structured system architecture</li>
            <li>Contributed to security architecture across server, data, and API layers to protect data in transit and at rest</li>
            <li>Implemented CI/CD pipelines to maintain reliable, automated production deployments</li>
          </ul>
        </div>
      </div>

      <div className="job-entry">
        <div className="job-header">
          <h3>Principal Investigator / Research Assistant</h3>
          <span className="company">Durham College</span>
          <span className="duration">September 2020 - May 2023</span>
        </div>
        <div className="text-box">
          <ul>
            <li>Led security-focused software research projects at Durham College's Centre for Cybersecurity Innovation</li>
            <li>Directed a blockchain consortium project to validate student documentation and credentials in the education sector</li>
            <li>Owned project planning and execution, including proposal writing, hiring, task planning, and delivery management</li>
            <li>Developed a real estate application with an interactive site-plan (SVG) to reserve homes by lot and model</li>
            <li>Implemented integrations for DocuSign and Stripe to support digital contracting and payments</li>
            <li>Tech: Angular, Google Firebase, Blockchain</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="fieldset">
      <legend>Technical Skills</legend>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Languages</h4>
          <div className="skill-list">
            <span className="skill-tag">Go</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">C#</span>
            <span className="skill-tag">SQL</span>
          </div>
        </div>
        <div className="skill-category">
          <h4>Frontend / Backend</h4>
          <div className="skill-list">
            <span className="skill-tag">React</span>
            <span className="skill-tag">Angular</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Express</span>
            <span className="skill-tag">ASP.NET</span>
            <span className="skill-tag">FastAPI</span>
          </div>
        </div>
        <div className="skill-category">
          <h4>Cloud & DevOps</h4>
          <div className="skill-list">
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Postgres</span>
            <span className="skill-tag">MySQL</span>
          </div>
        </div>
      </div>
    </div>

    <div className="status-bar">
      <div className="status-item">💼 Ready</div>
      <div className="status-item">📊 Experience: 5+ years</div>
      <div className="status-item">⏰ Last Updated: 2026</div>
    </div>
  </div>
);

export default Career;
