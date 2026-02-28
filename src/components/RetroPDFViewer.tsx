import React, { useState, useEffect, useCallback } from 'react';

interface RetroPDFViewerProps {
  pdfUrl: string;
  onClose: () => void;
  title?: string;
}

const RetroPDFViewer: React.FC<RetroPDFViewerProps> = ({
  pdfUrl,
  onClose,
  title = 'Document Viewer'
}) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    // Simulate retro loading experience
    const loadingDuration = 2000; // 2 seconds
    const interval = 100;
    const steps = loadingDuration / interval;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      // Chunky, non-linear progress like old Windows
      const baseProgress = (step / steps) * 100;
      const jitter = Math.random() * 10 - 5;
      setProgress(Math.min(Math.max(baseProgress + jitter, 0), 100));

      if (step >= steps) {
        clearInterval(progressInterval);
        setProgress(100);
        setTimeout(handleLoadComplete, 200);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, [handleLoadComplete]);

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

  return (
    <div className="pdf-viewer-overlay" onClick={onClose}>
      <div className="pdf-viewer-window" onClick={e => e.stopPropagation()}>
        <div className="pdf-viewer-titlebar">
          <span>📄 {title}</span>
          <button className="pdf-viewer-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="pdf-viewer-toolbar">
          <button className="toolbar-button">📁 File</button>
          <button className="toolbar-button">🔍 View</button>
          <button className="toolbar-button">❓ Help</button>
        </div>

        <div className="pdf-viewer-body">
          {loading ? (
            <div className="pdf-viewer-loading">
              <div className="pdf-viewer-loading-icon">📄</div>
              <div className="pdf-viewer-loading-text">
                Loading document...
              </div>
              <div className="pdf-viewer-loading-bar">
                <div
                  className="pdf-viewer-loading-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="pdf-viewer-loading-text">
                {Math.round(progress)}% complete
              </div>
            </div>
          ) : (
            <iframe
              src={pdfUrl}
              className="pdf-viewer-iframe"
              title={title}
            />
          )}
        </div>

        <div className="pdf-viewer-statusbar">
          <span>{loading ? 'Loading...' : 'Ready'}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default RetroPDFViewer;
