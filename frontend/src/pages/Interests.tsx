import React, { useState } from 'react';
import AnimatedProgressBar from '../components/AnimatedProgressBar';

const Interests: React.FC = () => {
  const [selectedHobby, setSelectedHobby] = useState('programming');

  const hobbies = {
    programming: {
      title: 'Programming & Tech',
      description: 'Building software, exploring new languages, and creating digital solutions.',
      details: [
        'Full-stack web development',
        'Open source contributions',
        'Learning new programming paradigms',
        'Building side projects and tools'
      ]
    },
    retro: {
      title: 'Retro Computing',
      description: 'Collecting and restoring vintage computers and software.',
      details: [
        'Windows 95/98 nostalgia',
        'Classic arcade games',
        'Vintage hardware restoration',
        'Old-school programming languages'
      ]
    },
    music: {
      title: 'Reading',
      description: 'There is no better way to ease the mind than having a piece of classic literature in ones hand.',
      details: [
        'Classic literature (have been going through the 19th century Russians since 2023).',
        'Theology, specifically Christian Reformed Theology.',
        'All things Lewis and Tolkien. There is no better imagination than Tolkien in the 20th century, and no one articulated ideas better than C.S. Lewis himself.'
      ]
    },
    gaming: {
      title: 'Video Games',
      description: 'Playing and analyzing games across different platforms and eras.',
      details: [
        'Indie game development',
        'Retro gaming preservation',
        'Game design analysis',
        'Speedrunning classic titles'
      ]
    }
  };

  return (
    <div className="page-content">
      <div className="window-header">
        <h2>Interests.exe - Hobbies & Passions</h2>
      </div>

      <div className="interests-container">
        <div className="hobby-selector">
          <div className="fieldset">
            <legend>Categories</legend>
            <div className="listbox">
              {Object.entries(hobbies).map(([key, hobby]) => (
                <div
                  key={key}
                  className={`listbox-item ${selectedHobby === key ? 'selected' : ''}`}
                  onClick={() => setSelectedHobby(key)}
                >
                  {hobby.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hobby-details">
          <div className="fieldset">
            <legend>{hobbies[selectedHobby as keyof typeof hobbies].title}</legend>
            <div className="text-box">
              <p><strong>Description:</strong></p>
              <p>{hobbies[selectedHobby as keyof typeof hobbies].description}</p>
              
              <p><strong>Specific Interests:</strong></p>
              <ul>
                {hobbies[selectedHobby as keyof typeof hobbies].details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="fieldset">
        <legend>Current Projects</legend>
        <div className="project-list">
          <div className="project-item">
            <div className="project-icon">💻</div>
            <div className="project-info">
              <h4>Retro Website Framework</h4>
              <p>Building a CSS framework for creating Windows 98-style web interfaces</p>
              <div className="progress-container">
                <AnimatedProgressBar targetWidth={85} delay={200} />
                <span className="progress-text">85% Complete</span>
              </div>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-icon">🎵</div>
            <div className="project-info">
              <h4>Synthwave Album</h4>
              <p>Producing a collection of retro-inspired electronic music tracks</p>
              <div className="progress-container">
                <AnimatedProgressBar targetWidth={40} delay={350} />
                <span className="progress-text">40% Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="retro-button">View Projects</button>
        <button className="retro-button">Contact</button>
        <button className="retro-button">Collaborate</button>
      </div>
    </div>
  );
};

export default Interests;
