import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle toolbar-button"
      onClick={toggleTheme}
      title={theme === 'light' ? 'Switch to High Contrast mode' : 'Switch to Standard mode'}
    >
      {theme === 'light' ? 'High Contrast' : 'Standard'}
    </button>
  );
};

export default ThemeToggle;
