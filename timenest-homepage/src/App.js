import './App.css';
import React, { useEffect, useState } from 'react';

function Navigation() {
  return (
    <nav className="App-nav">
      <div className="logo">
        <span className="logo-icon">⌚</span> TimeNest
      </div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = (hours * 30) + (minutes / 2);
  const minuteDegrees = (minutes * 6) + (seconds / 10);
  const secondDegrees = seconds * 6;

  return (
    <div className="floating-clock">
      <div className="time-circle"></div>
      <div className="time-numbers">12</div>
      <div className="time-numbers">3</div>
      <div className="time-numbers">6</div>
      <div className="time-numbers">9</div>
      <div 
        className="clock-hand hour-hand"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      ></div>
      <div 
        className="clock-hand minute-hand"
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      ></div>
      <div 
        className="clock-hand second-hand"
        style={{ transform: `rotate(${secondDegrees}deg)` }}
      ></div>
      <div className="clock-center"></div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <div className="header-background"></div>
        <div className="team-members">
          <p>16기 지정훈</p>
          <p>16기 현은수</p>
          <p>16기 김민주</p>
          <p>16기 김종혁</p>
        </div>
        <div className="hero-content">
          <div className="hero-text-content">
            <h1>Love your Time</h1>
            <p className="hero-text">
              Timenest는 당신의 추억을 찾아드립니다
            </p>
            <button className="primary-button">
              Start Your Journey
            </button>
          </div>
          <div className="hero-image">
            <Clock />
          </div>
        </div>
      </header>

      <section id="features" className="features-section">
        <h2>Why Choose TimeNest?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⏰</div>
            <h3>Smart Scheduling</h3>
            <p>AI-powered calendar management that adapts to your preferences</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Team Collaboration</h3>
            <p>Seamlessly coordinate with your team members in real-time</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics Dashboard</h3>
            <p>Gain insights into your productivity patterns and time usage</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Cross-Platform</h3>
            <p>Access your schedule from any device, anywhere, anytime</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-image">
            <div className="time-management-illustration">
              <div className="calendar-icon">📅</div>
              <div className="clock-icon">⏱️</div>
              <div className="task-icon">✓</div>
            </div>
          </div>
          <div className="about-text">
            <h2>About TimeNest</h2>
            <p>
              TimeNest is designed to help individuals and teams maximize their productivity
              through intelligent time management. Our platform combines cutting-edge
              technology with user-friendly design to create the perfect environment for
              your scheduling needs.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <div className="contact-form">
            <input type="email" placeholder="Enter your email" />
            <button className="primary-button">Subscribe to Updates</button>
          </div>
          <div className="time-zones">
            <div className="time-zone">
              <span className="time-icon">🌍</span>
              <span>New York</span>
            </div>
            <div className="time-zone">
              <span className="time-icon">🌏</span>
              <span>Tokyo</span>
            </div>
            <div className="time-zone">
              <span className="time-icon">🌍</span>
              <span>London</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="App-footer">
        <p>&copy; 2024 TimeNest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
