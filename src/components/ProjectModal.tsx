import React, { useEffect, useState } from 'react';
import { Project } from '../data/projects';
import RetroPDFViewer from './RetroPDFViewer';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [showPDF, setShowPDF] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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
              {project.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
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
              <div className="project-modal-screenshot" onClick={() => setFullscreenImage(project.screenshot!)}>
                <img src={project.screenshot} alt={`${project.name} screenshot`} />
              </div>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <div className="fieldset">
              <legend>Screenshots</legend>
              <div className="project-modal-screenshots">
                {project.screenshots.map((src, index) => (
                  <div key={index} className="project-modal-screenshot" onClick={() => setFullscreenImage(src)}>
                    <img src={src} alt={`${project.name} screenshot ${index + 1}`} />
                  </div>
                ))}
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

      {fullscreenImage && (
        <div className="image-lightbox-overlay" onClick={(e) => { e.stopPropagation(); setFullscreenImage(null); }}>
          <img src={fullscreenImage} alt="Full size" />
          <button className="image-lightbox-close" onClick={() => setFullscreenImage(null)}>✕</button>
        </div>
      )}

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
