import React from 'react';

const CRTEffect: React.FC = () => (
  <div className="crt-overlay" aria-hidden="true">
    <div className="crt-scanlines" />
    <div className="crt-flicker" />
  </div>
);

export default CRTEffect;
