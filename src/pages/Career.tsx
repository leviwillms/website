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
      Product and Engineering Manager with a strong engineering background and <b><u>7+ years</u></b> of hands-on experience building cloud-native, data-heavy SaaS platforms from 0-1. Leading end-to-end delivery of complex systems from design to rollout, with strengths in scalable backend services, automation, and engineering quality (testing, CI/CD, reliability). Known for bridging Product and Engineering to ship high-impact features and raise technical standards.
    </div>

    <div className="fieldset">
      <legend>Current Position</legend>
      <div className="job-entry">
        <div className="job-header">
          <h3>Product and Engineering Manager</h3>
          <span className="company">ThreatIQ</span>
          <span className="duration">June 2025 - Present</span>
        </div>
        <div className="text-box">
          <p>ThreatIQ is a cybersecurity service provider based in Toronto, Canada and operates with 20+ employees. I joined the company midway through 2023 in what would eventually become the integral role of building their industry leading auditing platform Zelenix.</p>
          <ul>
            <li>Lead delivery across backend, frontend, and infrastructure teams for <b>Zelenix</b>, a cloud-native cybersecurity compliance and auditing platform.</li>
            <li>Own architecture and implementation for automated compliance reporting and data transformation workflows (<b>FastAPI</b>, <b>Redis</b>, <b>OpenAI API</b>), improving consistency and reducing <b>manual auditor effort by up to 33%</b></li>
            <li>Set and uphold engineering standards for readability, maintainability, testing, and reliability through design docs, reviews, and delivery practices</li>
            <li>Partner with security and business stakeholders to translate core business requirements into clear technical plans and prioritized work</li>
            <li>Establish delivery processes and success metrics to support scale and long-term platform growth</li>
            <li>Streamline engineering workflows by designing AI-first systems while ensuring software integrity</li>
            <li>Built a reusable compliance framework data layer that scaled platform support from <b>2 frameworks</b> (SOC 2, PCI DSS 4.0.1) to <b>80+</b>, enabling faster expansion of audit offerings.</li>
            <li>Refactored core project-service to reduce average <b>API response times by 33%</b>, improving application performance and user experience.</li>
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
            <li>Led early-stage product development and technical direction for <b>Zelenix</b> prior to a formal product management function</li>
            <li>Managed core application data team to map <b>600+ SOC 2 and PCI controls</b> across <b>1000+ evidence types</b>. Achieving confident data integrity across primary service offerings.</li>
            <li>Worked with business stakeholders to define product vision, scope, and requirements for a compliance-focused SaaS platform</li>
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
          <p>Starship dreams was a software solutions company where I worked among a small team of 7 developers on various software projects. Most notably was a project for Freightcom, one of the largest shipment aggregators in Canada, where we built out their core services platform.</p>
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
          <h4>DevTools</h4>
          <div className="skill-list">
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Postgres</span>
            <span className="skill-tag">MySQL</span>
            <span className="skill-tag">GCP</span>
            <span className="skill-tag">Azure</span>
            <span className="skill-tag">Claude Code</span>
            <span className="skill-tag">Codex</span>
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
