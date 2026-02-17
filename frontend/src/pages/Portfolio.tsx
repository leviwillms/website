import React, { useState } from 'react';
import { projects, Project } from '../data/projects';
import DesktopIcon from '../components/DesktopIcon';
import ProjectModal from '../components/ProjectModal';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleIconClick = (project: Project) => {
    if (selectedProject?.id === project.id) {
      // Double-click behavior: open modal
      setModalProject(project);
    } else {
      // Single-click: select
      setSelectedProject(project);
    }
  };

  const handleDesktopClick = (e: React.MouseEvent) => {
    // Deselect when clicking empty desktop area
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
    <div className="desktop" onClick={handleDesktopClick}>
      {projects.map(project => (
        <DesktopIcon
          key={project.id}
          project={project}
          isSelected={selectedProject?.id === project.id}
          onClick={() => handleIconClick(project)}
        />
      ))}

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
