import './App.css';
import React, { useEffect, useState } from 'react';

function Navigation() {
  return (
    <nav className="App-nav">
      <div className="logo">
        <div className="logo-icon">
          <div className="nest-circle">
            <div className="clock-face">
              <div className="clock-hand"></div>
              <div className="clock-center"></div>
            </div>
          </div>
        </div>
        <span className="logo-text">TimeNest</span>
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
            <div className="feature-icon">📸</div>
            <h3>개인 맞춤 회상 스토리</h3>
            <p>AI가 당신의 소중한 추억을 분석하여 맞춤형 스토리를 제공합니다</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>디지털화 키트</h3>
            <p>오래된 사진과 영상을 디지털로 변환하여 영원히 보관하세요</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3>시대별 추억 소품</h3>
            <p>각 시대의 특별했던 물건들로 추억을 더욱 생생하게 되살려보세요</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💌</div>
            <h3>가족 메시지</h3>
            <p>소중한 가족들과 추억을 공유하고 따뜻한 마음을 전달하세요</p>
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
              우리는 추억을 담는 따뜻한 둥지입니다.<br/><br/>
              <strong className="emphasis-text">TimeNEst는 "시간(Time)"과 "둥지(Nest)"를 결합한 이름입니다.</strong><br/>
              삶의 조각들을 안전하게 품고, 추억을 따뜻하게 보관하는 기억의 보금자리가 되고자 합니다.<br/><br/>
              <strong className="emphasis-text">TimeNEst는 단순한 구독 서비스가 아닙니다.</strong><br/>
              고객 한 사람 한 사람의 인생을 기록하고, 가족과 함께 공유할 수 있도록 구성된 '인생 회상 프로젝트' 입니다.<br/><br/>
              <strong className="emphasis-text">매달 감성 가득한 패키지를 받아보세요.</strong><br/>
              AI가 분석한 고객의 생애 데이터를 바탕으로,<br/>
              그 시절의 향기와 감정이 살아 숨쉬는 추억을 다시 만나게 해드립니다.<br/><br/>
              <strong>TimeNest는 프로젝트형 구독입니다</strong><br/>
              '12개월 인생 프로젝트'<br/>
              → 매달 회상 스토리와 콘텐츠를 받고,<br/>
              → 마지막에는 내 삶을 정리한 '나만의 자서전'이 완성됩니다.<br/>
              → PDF, USB, 가족용 영상으로 최종 선물까지.<br/><br/>
              한 번의 구독이, 가족 전체의 감동이 됩니다.<br/>
              Love your Time
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
