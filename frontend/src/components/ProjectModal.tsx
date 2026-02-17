import React, { useEffect, useState } from 'react';
import { Project } from '../data/projects';
import RetroPDFViewer from './RetroPDFViewer';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showPDF, setShowPDF] = useState(false);

  const isPDF = project.screenshot?.toLowerCase().endsWith('.pdf');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const isEmoji = project.icon.length <= 2;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-window" onClick={e => e.stopPropagation()}>
        <div className="project-modal-titlebar">
          <span>
            {isEmoji ? project.icon : '📁'} {project.name}
          </span>
          <button className="project-modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="project-modal-toolbar">
          <button className="toolbar-button">📁 File</button>
          <button className="toolbar-button">✏️ Edit</button>
          <button className="toolbar-button">❓ Help</button>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-header">
            <div className="project-modal-icon">
              {isEmoji ? (
                <span className="project-modal-emoji">{project.icon}</span>
              ) : (
                <img src={project.icon} alt={project.name} />
              )}
            </div>
            <div className="project-modal-title-info">
              <h2>{project.name}</h2>
              <span className="project-modal-year">{project.year}</span>
            </div>
          </div>

          <div className="fieldset">
            <legend>Description</legend>
            <div className="text-box">
              <p>{project.description}</p>
            </div>
          </div>

          <div className="fieldset">
            <legend>Technologies</legend>
            <div className="skill-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="skill-tag">{tech}</span>
              ))}
            </div>
          </div>

          {(project.githubUrl || project.liveUrl) && (
            <div className="fieldset">
              <legend>Links</legend>
              <div className="project-modal-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button"
                  >
                    📂 View Source
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button"
                  >
                    🌐 Live Demo
                  </a>
                )}
              </div>
            </div>
          )}

          {project.screenshot && !isPDF && (
            <div className="fieldset">
              <legend>Screenshot</legend>
              <div className="project-modal-screenshot">
                <img src={project.screenshot} alt={`${project.name} screenshot`} />
              </div>
            </div>
          )}

          {project.screenshot && isPDF && (
            <div className="fieldset">
              <legend>Document</legend>
              <div className="project-modal-links">
                <button className="retro-button" onClick={() => setShowPDF(true)}>
                  📄 View PDF
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="project-modal-statusbar">
          <span>Ready</span>
          <span>{project.year}</span>
        </div>
      </div>

      {showPDF && project.screenshot && (
        <RetroPDFViewer
          pdfUrl={project.screenshot}
          title={`${project.name} - Document`}
          onClose={() => setShowPDF(false)}
        />
      )}
    </div>
  );
};

export default ProjectModal;
