import React, { useState, useEffect } from 'react';

interface AnimatedProgressBarProps {
  targetWidth: number;
  delay?: number;
}

const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({
  targetWidth,
  delay = 0
}) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(targetWidth);
    }, delay);

    return () => clearTimeout(timer);
  }, [targetWidth, delay]);

  return (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default AnimatedProgressBar;
