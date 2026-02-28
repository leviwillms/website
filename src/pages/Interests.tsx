import React, { useState } from 'react';
import AnimatedProgressBar from '../components/AnimatedProgressBar';

const Interests: React.FC = () => {
  const [selectedHobby, setSelectedHobby] = useState('reading');

  const hobbies = {
    reading: {
      title: 'Reading',
      description: 'There is no better way to ease the mind than having a piece of classic literature in ones hand.',
      details: [
        'Classic literature (have been going through the 19th century Russians since 2023).',
        'Theology, specifically Christian Reformed Theology.',
        'All things Lewis and Tolkien. There is no better imagination than Tolkien in the 20th century, and no one articulated ideas better than C.S. Lewis himself.'
      ]
    },
    sports: {
      title: 'Sports',
      description: 'Watching sports, playing sports, and holding a generally useless amount of player/team statistics in my head.',
      details: [
        'Playing hockey, basketball, and baseball.',
        'Can name every Stanley Cup winner back to the 90s in order. Working on Larry O Brian',
        'Know the true pain of being a Leafs fan.. :/'
      ]
    },
    programming: {
      title: 'Programming & Tech',
      description: 'Tinkering, collecting, and learning of the history of computation :)',
      details: [
        'Full-stack web development',
        'Collecting classic computers (somewhat of a Lenovo-maxi with my x200)',
        'Finding the intersection between technology and real-life uses',
        'Building side projects and tools'
      ]
    },
    retro: {
      title: 'Woodwork',
      description: 'Building things with my hands.. because we all need to get away from the screens',
      details: [
        'Want to one day have my own shop to build furniture'
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
              <h4>PPX: Parsed Page eXplorer</h4>
              <p>Building the best document processing OCR framework in the world.</p>
              <div className="progress-container">
                <AnimatedProgressBar targetWidth={45} delay={200} />
                <span className="progress-text">45% Complete</span>
              </div>
            </div>
          </div>
          
          <div className="project-item">
            <div className="project-icon">📖</div>
            <div className="project-info">
              <h4>Reading</h4>
              <p>George Orwells splendid 1984.</p>
              <div className="progress-container">
                <AnimatedProgressBar targetWidth={95} delay={350} />
                <span className="progress-text">95% Complete</span>
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

      <div className="status-bar">
        <div className="status-item">🎯 Interests</div>
        <div className="status-item">Categories: {Object.keys(hobbies).length}</div>
        <div className="status-item">Selected: {hobbies[selectedHobby as keyof typeof hobbies].title}</div>
      </div>
    </div>
  );
};

export default Interests;
