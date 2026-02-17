import React from 'react';
import { Project } from '../data/projects';

interface DesktopIconProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ project, isSelected, onClick }) => {
  const isEmoji = project.icon.length <= 2;

  return (
    <div
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {isEmoji ? (
        <div className="desktop-icon-emoji">{project.icon}</div>
      ) : (
        <img
          src={project.icon}
          alt={project.name}
          className="desktop-icon-image"
        />
      )}
      <span className="desktop-icon-label">{project.name}</span>
    </div>
  );
};

export default DesktopIcon;
