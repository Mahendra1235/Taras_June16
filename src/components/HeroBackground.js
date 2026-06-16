function HeroBackground() {
  const dots = Array.from({ length: 64 }, (_, i) => <span key={i} />);

  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-accent" />
      <div className="hero-dots">{dots}</div>
      <svg
        className="circuit-svg"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="100" y="100" width="400" height="400" rx="4" stroke="#0a0a0a" strokeWidth="1.5" />
        <rect x="140" y="140" width="320" height="320" rx="4" stroke="#0a0a0a" strokeWidth="1" />
        <rect x="200" y="200" width="200" height="200" rx="4" stroke="#00AEEF" strokeWidth="2" />
        <line x1="100" y1="300" x2="0" y2="300" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="500" y1="300" x2="600" y2="300" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="300" y1="100" x2="300" y2="0" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="300" y1="500" x2="300" y2="600" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="100" y1="200" x2="40" y2="200" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="100" y1="400" x2="40" y2="400" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="500" y1="200" x2="560" y2="200" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="500" y1="400" x2="560" y2="400" stroke="#0a0a0a" strokeWidth="1" />
        <circle cx="100" cy="300" r="5" fill="#00AEEF" />
        <circle cx="500" cy="300" r="5" fill="#00AEEF" />
        <circle cx="300" cy="100" r="5" fill="#0a0a0a" />
        <circle cx="300" cy="500" r="5" fill="#0a0a0a" />
        <circle cx="40" cy="200" r="4" fill="#0a0a0a" />
        <circle cx="40" cy="400" r="4" fill="#0a0a0a" />
        <circle cx="560" cy="200" r="4" fill="#0a0a0a" />
        <circle cx="560" cy="400" r="4" fill="#0a0a0a" />
        <rect x="260" y="260" width="80" height="80" rx="2" fill="#0a0a0a" opacity="0.3" />
        <line x1="200" y1="260" x2="260" y2="260" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="200" y1="300" x2="260" y2="300" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="200" y1="340" x2="260" y2="340" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="340" y1="260" x2="400" y2="260" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="340" y1="300" x2="400" y2="300" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="340" y1="340" x2="400" y2="340" stroke="#00AEEF" strokeWidth="1.5" />
        <line x1="280" y1="200" x2="280" y2="260" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="300" y1="200" x2="300" y2="260" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="320" y1="200" x2="320" y2="260" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="280" y1="340" x2="280" y2="400" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="300" y1="340" x2="300" y2="400" stroke="#0a0a0a" strokeWidth="1.5" />
        <line x1="320" y1="340" x2="320" y2="400" stroke="#0a0a0a" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default HeroBackground;
