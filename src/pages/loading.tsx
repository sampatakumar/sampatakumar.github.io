import { useEffect, useState } from 'react';
import '../styles/loading.css';

interface LoadingProps {
  isExiting?: boolean;
}

export default function Loading({ isExiting = false }: LoadingProps) {
  const [progress, setProgress] = useState(15);
  const name = 'SAMPATAKUMAR'.split('');

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(45), 250);
    const timer2 = setTimeout(() => setProgress(82), 650);
    const timer3 = setTimeout(() => setProgress(100), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className={`loading-screen ${isExiting ? 'loading-screen--exit' : ''}`} aria-label="Loading portfolio">
      {/* Background ambient glow */}
      <div className="loading-ambient-glow" />

      <div className="loading-content">
        {/* Monogram emblem with glowing ring */}
        <div className="loading-emblem">
          <div className="loading-ring loading-ring--outer" />
          <div className="loading-ring loading-ring--inner" />
          <div className="loading-logo-box">
            <span className="loading-logo-text">SV</span>
          </div>
        </div>

        {/* Animated Name */}
        <div className="loading-letters" aria-hidden="true">
          {name.map((char, index) => (
            <span
              key={index}
              className="loading-char"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Status Line */}
        <div className="loading-status">
          <span className="loading-status-dot" />
          <span className="loading-status-text">INITIALIZING SYSTEM ARCHITECTURE</span>
          <span className="loading-status-pct">{progress}%</span>
        </div>

        {/* Cyber Progress Bar */}
        <div className="loading-progress-track">
          <div
            className="loading-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
