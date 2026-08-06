import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

const ModernPortfolio = () => {
  const [isNavActive, setIsNavActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Observe elements for fade-in effect
      const elements = document.querySelectorAll('[data-fade]');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleElements(prev => new Set(prev).add(el.id));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = (id) => visibleElements.has(id);

  return (
    <div style={{ backgroundColor: '#0a0e27', color: '#fff', fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(10, 14, 39, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(170, 107, 228, 0.2)' : 'none',
          padding: '1rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>
            <span style={{ color: '#AA6BE4' }}>H</span>addi
          </h1>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  style={{
                    textDecoration: 'none',
                    color: isNavActive === item ? '#AA6BE4' : '#999',
                    textTransform: 'capitalize',
                    fontSize: '0.95rem',
                    fontWeight: isNavActive === item ? 600 : 400,
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={() => setIsNavActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '80px',
          background: 'linear-gradient(135deg, #0a0e27 0%, #1a0a35 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient Background Elements */}
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(170, 107, 228, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '-100px',
            right: '-100px',
            zIndex: 0,
          }}
        />

        <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            {/* Text Content */}
            <div
              data-fade
              id="hero-text"
              style={{
                opacity: fadeIn('hero-text') ? 1 : 0,
                transform: fadeIn('hero-text') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease',
              }}
            >
              <p style={{ fontSize: '1rem', color: '#AA6BE4', fontWeight: 600, margin: '0 0 1rem 0', letterSpacing: '1px' }}>
                WELCOME TO MY PORTFOLIO
              </p>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.2, margin: '0.5rem 0', letterSpacing: '-1px' }}>
                Hi, I'm <span style={{ color: '#AA6BE4' }}>Haddi</span>
              </h1>
              <p style={{ fontSize: '1.3rem', color: '#ccc', margin: '1.5rem 0', lineHeight: 1.6, fontWeight: 300 }}>
                Full-stack developer, videographer & content creator. Passionate about building beautiful digital experiences.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button
                  style={{
                    backgroundColor: '#AA6BE4',
                    color: '#fff',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(170, 107, 228, 0.3)',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(170, 107, 228, 0.5)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(170, 107, 228, 0.3)';
                  }}
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </button>
                <button
                  style={{
                    backgroundColor: 'transparent',
                    color: '#AA6BE4',
                    border: '2px solid #AA6BE4',
                    padding: '0.9rem 2rem',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(170, 107, 228, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div
              data-fade
              id="hero-image"
              style={{
                opacity: fadeIn('hero-image') ? 1 : 0,
                transform: fadeIn('hero-image') ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.8s ease',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '350px',
                  height: '350px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(170, 107, 228, 0.3)',
                  background: 'linear-gradient(135deg, rgba(170, 107, 228, 0.1), rgba(170, 107, 228, 0.05))',
                  boxShadow: '0 20px 60px rgba(170, 107, 228, 0.2)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounce 2s infinite',
              cursor: 'pointer',
            }}
          >
            <ChevronDown size={28} color="#AA6BE4" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ minHeight: '100vh', padding: '6rem 2rem', backgroundColor: '#0a0e27' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            data-fade
            id="about-title"
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              textAlign: 'center',
              opacity: fadeIn('about-title') ? 1 : 0,
              transform: fadeIn('about-title') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease',
            }}
          >
            About <span style={{ color: '#AA6BE4' }}>Me</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem', alignItems: 'start' }}>
            {/* Experience */}
            <div
              data-fade
              id="experience"
              style={{
                opacity: fadeIn('experience') ? 1 : 0,
                transform: fadeIn('experience') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.1s',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: '#AA6BE4' }}>Experience</h3>
              
              {[
                {
                  title: 'Junior Web Developer',
                  company: 'Tech Startup',
                  period: '2024 - Present',
                  desc: 'Building responsive web applications with React and modern web technologies.',
                },
                {
                  title: 'Verification Officer',
                  company: 'Trinity BPO',
                  period: '2023',
                  desc: 'Ensured data accuracy and compliance with company policies.',
                },
              ].map((exp, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(170, 107, 228, 0.05)',
                    borderLeft: '3px solid #AA6BE4',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(170, 107, 228, 0.1)';
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(170, 107, 228, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.5rem 0', color: '#fff' }}>{exp.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#AA6BE4', margin: '0 0 0.5rem 0', fontWeight: 500 }}>{exp.company}</p>
                  <p style={{ fontSize: '0.85rem', color: '#999', margin: '0 0 0.7rem 0' }}>{exp.period}</p>
                  <p style={{ fontSize: '0.95rem', color: '#ccc', margin: 0, lineHeight: 1.6 }}>{exp.desc}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div
              data-fade
              id="skills"
              style={{
                opacity: fadeIn('skills') ? 1 : 0,
                transform: fadeIn('skills') ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease 0.2s',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem', color: '#AA6BE4' }}>Skills</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {['HTML & CSS', 'JavaScript', 'React.js', 'Git & GitHub', 'Responsive Design', 'Microsoft Office'].map((skill, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(170, 107, 228, 0.1)',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontWeight: 500,
                      color: '#ccc',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(170, 107, 228, 0.2)',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(170, 107, 228, 0.2)';
                      e.currentTarget.style.borderColor = '#AA6BE4';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(170, 107, 228, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(170, 107, 228, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '2rem 0 1.5rem 0', color: '#AA6BE4' }}>Certifications</h3>
              <div style={{ padding: '1.5rem', backgroundColor: 'rgba(170, 107, 228, 0.05)', borderRadius: '8px', borderLeft: '3px solid #AA6BE4' }}>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>MS Office Specialist</h4>
                <p style={{ fontSize: '0.9rem', color: '#ccc', margin: 0, lineHeight: 1.6 }}>
                  Certified in Microsoft Word, Excel, and PowerPoint with expertise in data analysis and professional document creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ minHeight: '100vh', padding: '6rem 2rem', backgroundColor: '#1a0a35' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            data-fade
            id="projects-title"
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              textAlign: 'center',
              opacity: fadeIn('projects-title') ? 1 : 0,
              transform: fadeIn('projects-title') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease',
            }}
          >
            Featured <span style={{ color: '#AA6BE4' }}>Projects</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {[
              {
                title: 'Music Player Clone',
                desc: 'A fully functional music player built with HTML, CSS, and JavaScript with interactive controls.',
                link: 'https://musicplayerclone8626.netlify.app/',
                icon: '🎵',
              },
              {
                title: 'Student Record System',
                desc: 'A comprehensive system for managing student records with create, read, update, delete operations.',
                link: 'https://studentrecordsystemproject.netlify.app/',
                icon: '📚',
              },
              {
                title: 'Coming Soon',
                desc: 'More innovative projects are in development. Stay tuned for exciting updates!',
                link: '#',
                icon: '🚀',
              },
            ].map((project, idx) => (
              <div
                key={idx}
                data-fade
                id={`project-${idx}`}
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(170, 107, 228, 0.2)',
                  transition: 'all 0.3s ease',
                  opacity: fadeIn(`project-${idx}`) ? 1 : 0,
                  transform: fadeIn(`project-${idx}`) ? 'translateY(0)' : 'translateY(20px)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(170, 107, 228, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = '#AA6BE4';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(170, 107, 228, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(170, 107, 228, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{project.icon}</div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem', color: '#fff' }}>{project.title}</h3>
                <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>{project.desc}</p>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#AA6BE4',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.gap = '0.8rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.gap = '0.5rem';
                    }}
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ minHeight: '100vh', padding: '6rem 2rem', backgroundColor: '#0a0e27', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h2
            data-fade
            id="contact-title"
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1rem',
              textAlign: 'center',
              opacity: fadeIn('contact-title') ? 1 : 0,
              transform: fadeIn('contact-title') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease',
            }}
          >
            Get in <span style={{ color: '#AA6BE4' }}>Touch</span>
          </h2>

          <div
            data-fade
            id="contact-content"
            style={{
              marginTop: '3rem',
              textAlign: 'center',
              opacity: fadeIn('contact-content') ? 1 : 0,
              transform: fadeIn('contact-content') ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease 0.1s',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '3rem', lineHeight: 1.8 }}>
              I'd love to hear from you! Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {[
                { icon: Github, link: 'https://github.com/haddi1016', label: 'GitHub' },
                { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, link: 'mailto:your.email@example.com', label: 'Email' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: 'rgba(170, 107, 228, 0.1)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(170, 107, 228, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      color: '#AA6BE4',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#AA6BE4';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(170, 107, 228, 0.3)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(170, 107, 228, 0.1)';
                      e.currentTarget.style.color = '#AA6BE4';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>

            {/* Direct Contact */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div
                data-fade
                id="contact-email"
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(170, 107, 228, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(170, 107, 228, 0.2)',
                  opacity: fadeIn('contact-email') ? 1 : 0,
                  transform: fadeIn('contact-email') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease 0.2s',
                }}
              >
                <Mail color="#AA6BE4" size={32} style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Email</h3>
                <p style={{ color: '#ccc', margin: 0 }}>your.email@example.com</p>
              </div>

              <div
                data-fade
                id="contact-phone"
                style={{
                  padding: '2rem',
                  backgroundColor: 'rgba(170, 107, 228, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(170, 107, 228, 0.2)',
                  opacity: fadeIn('contact-phone') ? 1 : 0,
                  transform: fadeIn('contact-phone') ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease 0.3s',
                }}
              >
                <Phone color="#AA6BE4" size={32} style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Phone</h3>
                <p style={{ color: '#ccc', margin: 0 }}>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000', padding: '2rem', textAlign: 'center', borderTop: '1px solid rgba(170, 107, 228, 0.2)' }}>
        <p style={{ color: '#999', fontSize: '0.9rem', margin: 0 }}>
          © 2024 Haddi's Portfolio. Designed & built with <span style={{ color: '#AA6BE4' }}>❤️</span> using React & CSS.
        </p>
      </footer>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        @media (max-width: 768px) {
          nav { padding: 0.8rem 1rem; }
          nav h1 { font-size: 1.2rem; }
          nav ul { gap: 1rem; font-size: 0.85rem; }
          
          section { padding: 4rem 1rem !important; }
          h2 { font-size: 2rem !important; }
          
          #home > div > div {
            grid-template-columns: 1fr !important;
          }
          
          #about > div > div {
            grid-template-columns: 1fr !important;
          }
          
          #hero-image {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolio;
