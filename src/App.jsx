import './App.css';
import React, { useState, useEffect } from 'react';
import nLogo from './assets/n-logo.png';
import gurujiImg from './assets/guruji-tm.png';
import Footr from './footr';
import { MdSelfImprovement, MdHealthAndSafety, MdEventAvailable, MdPsychology, MdVisibility, MdGroups, MdArrowForward, MdWarning } from 'react-icons/md';

// Emoji/SVG icon helpers
const Icons = {
  eye: <span role="img" aria-label="eye" className="icon-eye">👁️</span>,
  alert: <span role="img" aria-label="alert" className="icon-alert">⚠️</span>,
  check: <span role="img" aria-label="check" className="icon-check">✅</span>,
  star: <span role="img" aria-label="star" className="icon-star">⭐</span>,
  users: <span role="img" aria-label="users" className="icon-users">👥</span>,
  heart: <span role="img" aria-label="heart" className="icon-heart">❤️</span>,
  zap: <span role="img" aria-label="zap" className="icon-zap">⚡</span>,
  shield: <span role="img" aria-label="shield" className="icon-shield">🛡️</span>,
  chevronDown: <span role="img" aria-label="down" className="icon-chevron">⬇️</span>,
  chevronUp: <span role="img" aria-label="up" className="icon-chevron">⬆️</span>,
  facebook: <span role="img" aria-label="facebook" className="icon-facebook">📘</span>,
  sparkles: <span role="img" aria-label="sparkles" className="icon-sparkles">✨</span>,
  crown: <span role="img" aria-label="crown" className="icon-crown">👑</span>,
  lightbulb: <span role="img" aria-label="lightbulb" className="icon-lightbulb">💡</span>,
};

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
      <span className="faq-question-static" title={question}>{question}</span>
      <span className="faq-toggle-icon">{isOpen ? '-' : '+'}</span>
    </button>
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
);

function App() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const faqs = [
    {
      question: "Will this webinar help me open my Third Eye?",
      answer: "Yes, this webinar provides the correct and safe guidance for Third Eye awakening. Guruji will share the proper process to avoid harmful activation and ensure balanced spiritual growth."
    },
    {
      question: "What if I already meditate or do healing work?",
      answer: "This webinar is perfect for existing practitioners. It will enhance your current practice and provide advanced techniques that are usually taught only in high-level spiritual initiations."
    },
    {
      question: "What is the language of the webinar?",
      answer: "The webinar will be conducted in Hindi and English to ensure maximum understanding and accessibility for all participants."
    },
    {
      question: "Will I get a recording?",
      answer: "Yes, all registered participants will receive access to the complete webinar recording for future reference and deeper understanding."
    },
    {
      question: "Will I get course details immediately after payment?",
      answer: "Yes, upon successful registration, you will immediately receive all webinar details, access links, and preparatory materials via email."
    }
  ];

  const courses = [
    "Third Eye Awakening",
    "Durga Reiki",
    "4th Dimensional Angels",
    "Child Development Program",
    "Bodhikala",
    "Free Darbar Healing",
    "Intuitive Oracle Card",
    "Past Life Regression",
    "Kundalini Awakening"
  ];

  return (
    <div className={`app-root${theme === 'dark' ? ' dark-theme' : ''}`}>
      {/* Header/Navbar */}
      <header className="navbar">
        <div className="navbar-inner">
          <img src={nLogo} alt="Logo" className="navbar-logo-img" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title gradient-text">Find Your Inner Peace</h1>
            <p className="hero-desc">Discover a journey of mindfulness, spiritual growth, and inner harmony through our guided meditations and wellness practices.</p>
            <div className="hero-btn-row">
              <button className="hero-btn-primary pulse">Start Your Journey</button>
              <button className="hero-btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card hero-card-glow">
              <img src="https://www.harigurus.com/static/media/Online%20Consultation.5ceae81eccb9e6cf5780.jpg" alt="Hero" className="hero-image-banner hero-image-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <h2 className="features-title gradient-text">Transform Your Life</h2>
        <p className="features-desc">Experience the power of mindfulness through our comprehensive wellness platform</p>
        <div className="features-cards">
          <div className="feature-card feature-card-hover">
            <div className="feature-icon"><MdSelfImprovement /></div>
            <h3>Mindful Meditation</h3>
            <p>Guided mindfulness sessions expertly to inspire peace and clarity in your daily life.</p>
          </div>
          <div className="feature-card feature-card-hover">
            <div className="feature-icon"><MdHealthAndSafety /></div>
            <h3>Wellness Coaching</h3>
            <p>Personalized guidance from certified wellness coaches to support your journey.</p>
          </div>
          <div className="feature-card feature-card-hover">
            <div className="feature-icon"><MdEventAvailable /></div>
            <h3>Daily Practices</h3>
            <p>Simple yet powerful daily practices to maintain wellness and spiritual balance.</p>
          </div>
          <div className="feature-card feature-card-hover">
            <div className="feature-icon"><MdPsychology /></div>
            <h3>Spiritual Guidance</h3>
            <p>Receive personalized spiritual advice and support for your unique journey.</p>
          </div>
        </div>
      </section>

      {/* Webinar Benefits Section */}
      <section className="features-section" style={{paddingTop: 0}}>
        <div className="features-cards" style={{gap: '2.5rem'}}>
          {/* Benefits Card */}
          <div className="feature-card feature-card-hover">
            <div className="feature-icon" style={{fontSize: '2rem'}}>🧠</div>
            <h3 style={{fontWeight: 700, fontSize: '1.15rem', marginBottom: '1rem'}}>Decode Hidden Energies, Heal Karmas & Awaken True Intuition Through Your Third Eye.</h3>
            <p style={{fontSize: '1rem', color: '#475569', marginBottom: '1rem', textAlign: 'left', fontWeight: '600'}}>The focus of our mission is:</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, textAlign: 'left'}}>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> What is the Third Eye from spiritual and energetic perspectives.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> The correct process of Third Eye Awakening – without harm or imbalance.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> What happens when the Third Eye is forcefully or wrongly activated.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> What is Unconscious Memory – and how it controls 90% of your life.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> The link between Unconscious Memory and Past Life Karmas.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> How Third Eye can help you heal relationships, emotions, karmas, and even health.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> How to activate your inner vision and decode hidden energies.</li>
              <li style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><MdArrowForward style={{color: '#7c3aed', marginRight: 10}} /> Powerful tools, practices & secrets that are usually taught in high-level spiritual initiations.</li>
            </ul>
          </div>
          {/* This is for you if Card */}
          <div className="feature-card feature-card-hover">
            <div className="feature-icon" style={{fontSize: '2rem'}}>💫</div>
            <h3 style={{fontWeight: 700, fontSize: '1.15rem', marginBottom: '1rem'}}>A Movement for Those Ready to Truly Awaken...</h3>
            <p style={{fontSize: '1rem', color: '#475569', marginBottom: '1rem', textAlign: 'left'}}>Third Eye Awakening is not a new-age fad — it's a sacred spiritual technology.</p>
            <p style={{fontSize: '1rem', color: '#475569', marginBottom: '1rem', textAlign: 'left'}}>But in today's world, many are unknowingly activating their third eye without guidance,</p>
            <p style={{fontSize: '1rem', color: '#475569', marginBottom: '1rem', textAlign: 'left', fontWeight: '600'}}>leading to:</p>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, textAlign: 'left'}}>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 10}}><MdWarning style={{color: '#dc2626', marginRight: 10, fontSize: '1.2rem', flexShrink: 0, marginTop: '2px'}} /><span>Psychic fear, over-sensitivity, emotional instability</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 10}}><MdWarning style={{color: '#dc2626', marginRight: 10, fontSize: '1.2rem', flexShrink: 0, marginTop: '2px'}} /><span>Unclear dreams, spiritual confusion, ungrounded experiences</span></li>
              <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: 10}}><MdWarning style={{color: '#dc2626', marginRight: 10, fontSize: '1.2rem', flexShrink: 0, marginTop: '2px'}} /><span>Disconnection from real purpose, energy fatigue, and isolation</span></li>
            </ul>
            <div style={{marginTop: 18, textAlign: 'center'}}>
              <span style={{fontSize: '1.5rem'}}>🕉️</span>
              <div style={{fontWeight: 600, margin: '0.7rem 0 0.3rem 0'}}>Join the Third Eye Awakening Webinar</div>
              <button className="cta-btn pulse" style={{marginTop: 8}}>Reserve My Spot Now</button>
              <div style={{fontSize: '0.98rem', color: '#64748b', marginTop: 6}}>Yes, I Want To Join!</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <h2 className="testimonials-title gradient-text">What Our Community Says</h2>
        <p className="testimonials-desc">Real stories from people who found their path to inner peace</p>
        <div className="testimonials-cards">
          <div className="testimonial-card testimonial-card-fade">
            <div className="testimonial-user">👤 Sarah Johnson<br/><span>Wellness Enthusiast</span></div>
            <p className="testimonial-text">“This platform has genuinely transformed my approach to mindfulness. The guided sessions are incredibly peaceful and have helped me find balance in my busy life.”</p>
          </div>
          <div className="testimonial-card testimonial-card-fade">
            <div className="testimonial-user">👤 Michael Chen<br/><span>Meditation Coach</span></div>
            <p className="testimonial-text">“The daily practices have become an essential part of my routine. I feel more centered and at peace than I have in years.”</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-new">
        <h2 className="faq-title-new">Frequently Asked Questions</h2>
        <div className="faq-list-new">
            {faqs.map((faq, idx) => (
            <div className="faq-card-new" key={idx}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === idx}
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              />
            </div>
            ))}
        </div>
      </section>

      {/* About Guruji Section */}
      <section className="about-section-guruji" id="about">
        <div className="about-header-guruji">
          <span className="about-icon-guruji">✷</span>
          <h2 className="about-title-guruji">About Guruji Manish Sharma Ji</h2>
        </div>
        <div className="about-card-guruji">
          <div className="guruji-photo-wrapper">
            <div className="dashed-rotate-border"></div>
            <img src={gurujiImg} alt="Guruji" className="guruji-photo" />
          </div>
          <div className="about-content-guruji">
            <p className="about-main-text">Guruji Manish Sharma Ji is a respected Spiritual Guru, Spiritual Researcher, and Multi-Modality Healer with over 14 years of deep experience in the spiritual field.</p>
            <p className="about-desc-text">He is the Founder of Second Sight Foundation, where he has guided and healed thousands of individuals facing complex spiritual challenges — even those they couldn't express to anyone.</p>
            <p className="about-desc-text">With mastery in 56+ healing modalities, Guruji has personally developed powerful and original courses based on deep research and divine insight, including:</p>
            <div className="about-courses-list">
              {courses.map((course, idx) => (
                <span className="about-course-pill" key={idx}>{course}</span>
              ))}
            </div>
            <div className="about-quote-guruji">
              Each course is unique, rooted in <b>truth</b>, and designed to awaken higher dimensions of energy, intuition, and healing.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2 className="cta-title gradient-text">Ready to Begin Your Journey?</h2>
        <p className="cta-desc">Join our community and unlock your true potential today.</p>
        <button className="cta-btn pulse">Get Started</button>
      </section>

      {/* Webinar Mission Section */}
      <section className="webinar-mission-section fade-in">
        <div className="webinar-mission-container">
          <div className="webinar-mission-quote">"Decode Hidden Energies, Heal Karmas & Awaken True Intuition Through Your Third Eye."</div>
          <h3 className="webinar-mission-title">The focus of our mission is:</h3>
          <div className="webinar-mission-cards">
            <div className="webinar-mission-card"><MdHealthAndSafety className="webinar-mission-icon" /> Healing and correcting improper third eye activation.</div>
            <div className="webinar-mission-card"><MdVisibility className="webinar-mission-icon" /> Building safe, guided intuition and inner vision.</div>
            <div className="webinar-mission-card"><MdPsychology className="webinar-mission-icon" /> Empowering healers, seekers, and empaths to grow spiritually with protection.</div>
            <div className="webinar-mission-card"><MdGroups className="webinar-mission-icon" /> Creating a vibrant sangha of light spiritual growth through community</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footr />
    </div>
  );
}

export default App;

