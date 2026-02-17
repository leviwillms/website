import React, { useState, useEffect, useCallback } from 'react';

interface StartupSequenceProps {
  onComplete: () => void;
}

const StartupSequence: React.FC<StartupSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Phase 1: Show logo for 600ms before progress bar
    const logoTimer = setTimeout(() => {
      setShowProgress(true);
    }, 600);

    return () => clearTimeout(logoTimer);
  }, []);

  useEffect(() => {
    if (!showProgress) return;

    // Phase 2: Animate progress bar with chunky Windows 98-style increments
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 20 + 10; // Random 10-30% chunks
        const next = prev + increment;

        if (next >= 100) {
          clearInterval(progressInterval);
          // Small delay before completing
          setTimeout(handleComplete, 300);
          return 100;
        }

        return next;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [showProgress, handleComplete]);

  return (
    <div className="startup-screen">
      <div className="startup-logo">
        <img
          src="/LSRW_logo_gold_ink_transparent.png"
          alt="LSRW Logo"
          className="startup-logo-image"
        />
        <div className="startup-subtitle">Personal Website</div>
      </div>

      {showProgress && (
        <div className="startup-progress">
          <div className="startup-progress-bar">
            <div
              className="startup-progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="startup-text">
            Loading personal website...
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupSequence;
