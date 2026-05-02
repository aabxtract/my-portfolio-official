'use client';

import { useEffect, useRef, useState } from 'react';

const data = {
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  badges: [
    'Talent Protocol Top 50',
    'Base Certified & Rewarded',
    '5+ Hackathon Wins',
    'CMX Akure · Community Builder',
  ],
  marquee: [
    'Product Strategy', 'Web3 Development', 'UI/UX Design', 'Graphic Design',
    'Community Building', 'Open Source', 'Smart Contracts', 'Brand Identity', 'Growth',
  ],
  pillars: [
    { title: 'Product', desc: 'I own products end-to-end — from problem definition to shipped solution' },
    { title: 'Development', desc: 'Web3, smart contracts, frontend — I can build what I envision' },
    { title: 'Design', desc: 'UI/UX, graphic design, brand identities, logos — Paycrypt is mine end-to-end' },
    { title: 'Community', desc: 'CMX Akure member, Web3Nova community contributor, growth builder' },
  ],
  stats: [
    { num: '5', suffix: '+', label: 'Hackathon Wins' },
    { num: '3', suffix: '', label: 'Products Launched' },
    { num: '10', suffix: '+', label: 'Merged OSS PRs' },
    { num: '3', suffix: '+', label: 'Years in Design' },
  ],
  projects: [
    { num: '01', tag: 'Founder · Product · Brand · Farcaster', name: 'Paycrypt', problem: 'Problem: Crypto holders can\'t pay for utilities without cash-out friction and third-party fees', detail: 'Built the full product, brand identity, logo, and UI from scratch. Converts crypto directly to internet, electricity, and fiat — no intermediary. Distributed as a Farcaster mini-app.', href: 'http://paycrypt.org', images: ['/Screenshot 2026-05-01 151615.png', '/Screenshot 2026-05-01 151634.png', '/Screenshot 2026-05-01 151700.png'] },
    { num: '02', tag: 'Hackathon Winner · Dreamspace · Remittance', name: 'RemitApp', problem: 'Problem: Cross-border crypto transfers have fragmented UX and poor accessibility for non-technical users', detail: 'Designed and built a crypto distribution and remittance app. Won at Dreamspace. Live at remitapp.dream.space', href: 'https://remitapp.dream.space/home', images: ['/Screenshot 2026-05-01 151803.png', '/Screenshot 2026-05-01 151820.png'] },
    { num: '03', tag: 'UI/UX Design · EdTech · Kenya', name: 'Walure Capital Kenya', problem: 'Problem: EdTech platform needed a complete user experience designed for Kenyan learners', detail: 'End-to-end design — user research, wireframes, high-fidelity Figma, developer handoff. Live at kenya.walurecapital.com', href: 'https://kenya.walurecapital.com', images: ['/Screenshot 2026-05-01 150922.png', '/Screenshot 2026-05-01 150942.png'] },
    { num: '04', tag: 'Frontend · AI Product · Startup', name: 'Cliqi.bot', problem: 'Problem: Early-stage AI bot startup needed a production frontend shipped fast', detail: 'Built and delivered production-ready frontend for an AI-powered bot in a fast-moving early-stage team', href: 'https://cliqi.bot', images: ['/Screenshot 2026-05-02 081410.png', '/Screenshot 2026-05-02 082303.png', '/Screenshot 2026-05-02 142519.png', '/Screenshot 2026-05-02 142932.png'] },
    { num: '05', tag: 'Farcaster · Social · Growth', name: 'MemeVibe', problem: 'Problem: Web3 social content lacked a native engagement loop tied to protocol-level distribution', detail: 'Social content mini-app leveraging Farcaster\'s decentralized social graph for viral, protocol-native growth', href: '#', images: ['/Screenshot 2026-05-01 152405.png', '/Screenshot 2026-05-01 152511.png', '/Screenshot 2026-05-01 152625.png'] },
    { num: '06', tag: 'Open Source · Stellar · Enterprise', name: 'Stellar Ecosystem Contributions', problem: 'Problem: Enterprise anchor infrastructure needed compliant, reliable SEP protocol implementations', detail: 'SEP-38, SEP-12 KYC, circuit breakers, integration tests — 10+ merged PRs across AnchorPoint, stellar-stream, StellerCraft', href: 'https://github.com/aabxtract', images: ['/Screenshot 2026-05-01 153406.png', '/Screenshot 2026-05-01 153433.png'] },
  ],
  skillCategories: [
    { icon: '/product-development.png', title: 'Product & Strategy', tags: ['Product Roadmapping', 'GTM Strategy', 'User Story Writing', 'Market Research', 'Growth Hacking', 'Agile / Scrum', 'Product-Market Fit'] },
    { icon: '/vector.png', title: 'Design', tags: ['UI/UX Design', 'Figma', 'Graphic Design', 'Brand Identity', 'Logo Design', 'Social Media Design', 'Flyer Design', 'Prototyping'] },
    { icon: '/code.png', title: 'Development', tags: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Solidity', 'Clarity', 'Soroban', 'dApp Dev'] },
    { icon: '/blockchain.png', title: 'Web3 & Blockchain', tags: ['Stellar / SEP Protocols', 'Stacks / Clarity', 'Base / EVM', 'Farcaster', 'Smart Contract Auditing', 'DeFi', 'ZK Proofs'] },
    { icon: '/people.png', title: 'Community & Growth', tags: ['Community Strategy', 'CMX Member', 'Event Hosting', 'Tech Education', 'Social Media', 'Web3 Onboarding', 'Community Ops'] },
    { icon: '/computer.png', title: 'Tools & Platforms', tags: ['Figma', 'GitHub', 'Notion', 'Drips Wave', 'Talent Protocol', 'Farcaster', 'Vercel', 'Prisma'] },
  ],
  communityCards: [
    { icon: '🏛', title: 'CMX Akure — Member & Contributor', desc: 'Active member of CMX\'s Akure chapter — the global community for community professionals. Contributing to local community strategy and peer learning.' },
    { icon: <img src="/communities.png" alt="Communities" />, title: 'Web3Nova — Community & Education', desc: 'Helped host community hangouts teaching students Web3 and tech skills. Part of Nigeria\'s leading blockchain academy with 500+ alumni backed by Coinbase and Base.' },
    { icon: <img src="/globe.png" alt="Globe" />, title: 'Open Source Ecosystem Builder', desc: '273 followers on Talent Protocol, Drips Wave top contributor. Active in Stellar, Base, and Stacks ecosystems.' },
  ],
  experience: [
    { period: '2024 — Present', company: 'Web3Nova', role: 'Intern Developer & Community Contributor', desc: 'Nigeria\'s leading blockchain academy backed by Coinbase, Base, and Polygon. Shipping Web3 products, contributing to smart contract work, and helping grow the student community through events and tech education.' },
    { period: '2025 — Present', company: 'Paycrypt', role: 'Founder · Product · Design · Brand', desc: 'Founded a crypto-to-utility payments product. Owns the full stack — product strategy, brand identity, logo design, UI, and development. Built on Farcaster for decentralized distribution.', images: ['/Screenshot 2026-05-01 151615.png', '/Screenshot 2026-05-01 151634.png', '/Screenshot 2026-05-01 151700.png'] },
    { period: '2025', company: 'Walure Capital Kenya', role: 'UI/UX Designer', desc: 'Designed the full user experience for Walure\'s EdTech platform serving Kenyan learners. End-to-end design ownership from research through high-fidelity Figma to developer handoff.', images: ['/Screenshot 2026-05-01 150922.png', '/Screenshot 2026-05-01 150942.png'] },
    { period: '2026', company: 'Cliqi.bot', role: 'Frontend Developer', desc: 'Built production frontend for an AI-powered bot product in a fast-moving early-stage startup.', images: ['/Screenshot 2026-05-02 081410.png', '/Screenshot 2026-05-02 082303.png', '/Screenshot 2026-05-02 142519.png', '/Screenshot 2026-05-02 142932.png'] },
  ],
  recognitions: [
    { value: 'Top 50', title: 'Talent Protocol', sub: 'Recognized among the top 50 builders globally in the Web3 talent ecosystem' },
    { value: '5+', title: 'Hackathon Wins', sub: 'Base · Stacks · Talent Protocol · WalletConnect · Dreamspace' },
    { value: '1,500+', title: 'Drips Wave Points', sub: 'All from verified, merged open source contributions — not just submissions' },
    { value: '✓', title: 'Base Certified & Rewarded', sub: 'Certified and rewarded developer in the Base (Coinbase L2) ecosystem. Recognized as a top 10 percent builder' },
  ],
  certifications: [
    { issuer: 'Cyfrin Updraft', name: 'Fundamentals of Zero-Knowledge Proofs', date: 'Feb 2026' },
    { issuer: 'Cyfrin Updraft', name: 'Blockchain Basics', date: 'Jan 2026' },
    { issuer: 'HP LIFE', name: 'Agile Project Management', date: 'Jun 2025' },
    { issuer: 'HP LIFE', name: 'Social Media Marketing', date: 'Jul 2025' },
    { issuer: 'HP LIFE', name: 'Social Entrepreneurship & Effective Leadership', date: 'Jun 2025' },
    { issuer: 'Unilever FJCAP LevelUp', name: 'Lean Entrepreneurship', date: 'Dec 2024' },
  ],
  links: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/theafolamianu/' },
    { label: 'GitHub', href: 'https://github.com/aabxtract' },
    { label: 'Talent Protocol', href: 'https://talent.app/aabxtract' },
    { label: 'Drips', href: 'https://www.drips.network/wave/users/c5e62257-0566-46e8-9e9d-f176a46dcc27' },
    { label: 'Paycrypt', href: 'http://paycrypt.org' },
  ],
};

function PortfolioPage() {
  const heroImages = [
    '/Professional headshot1.2 trans.png',
    '/Professional headshot1.2 cool.png'
  ];
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof data.projects[0] | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;
    let rafId: number;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateFollower = () => {
      posX += (mouseX - posX) * 0.12;
      posY += (mouseY - posY) * 0.12;
      follower.style.transform = `translate(${posX}px, ${posY}px)`;
      rafId = requestAnimationFrame(animateFollower);
    };

    const onEnter = () => {
      cursor.classList.add('cursor-hover');
      follower.classList.add('cursor-follower-hover');
    };

    const onLeave = () => {
      cursor.classList.remove('cursor-hover');
      follower.classList.remove('cursor-follower-hover');
    };

    const attachCursorEvents = () => {
      document.querySelectorAll('a, button').forEach((element) => {
        element.addEventListener('mouseenter', onEnter);
        element.addEventListener('mouseleave', onLeave);
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    attachCursorEvents();

    // Re-attach when modal state changes
    const observer = new MutationObserver(() => {
      attachCursorEvents();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    animateFollower();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button').forEach((element) => {
        element.removeEventListener('mouseenter', onEnter);
        element.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startAnimations = () => {
      setFontsLoaded(true);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.reveal, .skill-category').forEach((el) => {
        observer.observe(el);
      });

      return observer;
    };

    let observer: IntersectionObserver;

    if (typeof document !== 'undefined' && 'fonts' in document) {
      (document as any).fonts.ready.then(() => {
        observer = startAnimations();
      });
    } else {
      observer = startAnimations();
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />

      <nav>
        <a href="#" className="nav-logo">AABXTRACT</a>
        <ul className="nav-links">
          {data.navLinks.map((link) => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </nav>

      <main className={fontsLoaded ? 'fonts-loaded' : ''}>
        {/* ── HERO (unchanged) ── */}
        <section className="hero" id="hero">
          <h1 className="hero-title-bg">ANUOLUWAPO</h1>

          <div className="hero-content-layer">
            <div className="hero-left-text">
              I build products, shape strategy,<br />
              and grow communities — with a<br />
              background in Web3 development,<br />
              UI/UX &amp; graphic design, and open source.
            </div>

            <div className="hero-image-wrapper">
              {heroImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt="Anuoluwapo Afolami"
                  className={`hero-image ${currentImageIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>

            <div className="hero-right-text">
              Based in Nigeria,<br />
              building for the world.
            </div>
          </div>

          <div className="hero-bottom-row">
            <a href="/Anuoluwapo_Afolami_cv(m).pdf" target="_blank" className="hero-bottom-right">Download CV <span className="arrow">↓</span></a>
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="marquee-section">
          <div className="marquee-track">
            {data.marquee.concat(data.marquee).map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                {i < data.marquee.length * 2 - 1 && <span className="dot">✦</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section className="about" id="about">
          <div className="section-label reveal">{'// Who I Am'}</div>
          <div className="about-grid">
            <div className="reveal">
              <h2 className="about-heading">I Don&apos;t Pick <em>One</em> Lane.</h2>
            </div>
            <div className="about-right reveal">
              <p>I&apos;m Anuoluwapo — a <strong>Product Manager and Strategist</strong> with a background in Web3 development, design, and community building. Computer Engineering student at FUTA who has been building real products since before most people figure out what they want to do.</p>
              <p>I&apos;ve founded Paycrypt, shipped open source code live in production, won 5+ hackathons, designed brand identities and social media systems, and helped grow tech communities. I don&apos;t just build features — I think about who they&apos;re for, why they matter, and how they reach people.</p>
              <div className="about-pillars">
                {data.pillars.map((p) => (
                  <div key={p.title} className="pillar reveal">
                    <div className="pillar-title">{p.title}</div>
                    <div className="pillar-desc">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-stats reveal">
            {data.stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}{s.suffix && <span>{s.suffix}</span>}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="projects" id="projects">
          <div className="section-label gold reveal">{'// Selected Work'}</div>
          <h2 className="projects-heading reveal">Selected <span>Work</span></h2>
          <div className="projects-list">
            {data.projects.map((p) => (
              <div 
                key={p.name} 
                className="project-row reveal"
                onClick={() => setSelectedProject(p)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-num">{p.num}</div>
                <div>
                  <div className="project-tag">{p.tag}</div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-problem">{p.problem}</div>
                </div>
                <div className="project-detail">{p.detail}</div>
                <div className="project-arrow">↗</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECT MODAL ── */}
        {selectedProject && (
          <div className="project-modal-overlay active" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={() => setSelectedProject(null)}>×</button>
              
              <div className="project-modal-header">
                <div className="project-modal-tag">{selectedProject.tag}</div>
                <h3 className="project-modal-title">{selectedProject.name}</h3>
              </div>
              
              <div className="project-modal-body">
                <div className="project-modal-media-collage">
                  {selectedProject.images && selectedProject.images.length > 0 ? (
                    selectedProject.images.map((img, idx) => (
                      <button 
                        key={idx} 
                        className={`collage-item collage-item-${idx + 1}`}
                        onClick={() => setFullScreenImage(img)}
                        aria-label="View full screen"
                      >
                        <img src={img} alt={`${selectedProject.name} screenshot ${idx + 1}`} />
                      </button>
                    ))
                  ) : (
                    <div className="project-modal-image-placeholder">
                      <div className="placeholder-text">Media coming soon</div>
                    </div>
                  )}
                </div>
                
                <div className="project-modal-info">
                  <div className="project-modal-section">
                    <h4>The Problem</h4>
                    <p>{selectedProject.problem.replace('Problem: ', '')}</p>
                  </div>
                  
                  <div className="project-modal-section">
                    <h4>The Solution & Impact</h4>
                    <p>{selectedProject.detail}</p>
                  </div>
                </div>
              </div>
              
              <div className="project-modal-footer">
                <a href={selectedProject.href} target="_blank" rel="noreferrer" className="project-modal-link">
                  Visit Project <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ── LIGHTBOX MODAL ── */}
        {fullScreenImage && (
          <div className="lightbox-overlay active" onClick={() => setFullScreenImage(null)}>
            <button className="lightbox-close" onClick={() => setFullScreenImage(null)}>×</button>
            <img 
              src={fullScreenImage} 
              alt="Fullscreen preview" 
              className="lightbox-image" 
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        )}

        {/* ── SKILLS ── */}
        <section className="skills" id="skills">
          <div className="skills-intro">
            <div className="reveal">
              <div className="section-label gold">{'// Skills & Tools'}</div>
              <div className="section-big">Everything<br />I Work With</div>
            </div>
            <p className="skills-desc reveal">I operate across product, design, development, and community. These aren&apos;t aspirational — they&apos;re what I&apos;ve used to ship real work.</p>
          </div>
          <div className="skills-grid">
            {data.skillCategories.map((cat) => (
              <div key={cat.title} className="skill-category reveal">
                <div className="skill-cat-icon"><img src={cat.icon} alt={cat.title} /></div>
                <div className="skill-cat-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMMUNITY ── */}
        <section className="community">
          <div className="community-inner">
            <div className="community-left reveal">
              <div className="section-label" style={{ marginBottom: '1rem' }}>{'// Community'}</div>
              <h2>I Don&apos;t Just Build.<br />I Grow People.</h2>
              <p>Community is part of how I think about products. You can&apos;t build for people you&apos;re not connected to. I&apos;ve been in rooms, hosted events, and helped people find their footing in tech.</p>
              <p>That context makes me a better PM — I understand adoption from the ground up, not just from a dashboard.</p>
            </div>
            <div className="community-cards">
              {data.communityCards.map((card) => (
                <div key={card.title} className="community-card reveal">
                  <div className="community-card-icon">{card.icon}</div>
                  <div>
                    <div className="community-card-title">{card.title}</div>
                    <div className="community-card-desc">{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="experience" id="experience">
          <div className="section-label reveal">{'// Experience'}</div>
          <div className="section-big reveal" style={{ marginTop: '1rem', color: 'var(--black)' }}>Where I&apos;ve Worked</div>
          <div className="exp-list">
            {data.experience.map((item) => (
              <div 
                key={item.company} 
                className={`exp-item reveal ${'images' in item ? 'clickable' : ''}`}
                onClick={() => {
                  if ('images' in item) {
                    const project = data.projects.find(p => p.name.toLowerCase().includes(item.company.toLowerCase()));
                    if (project) {
                      setSelectedProject({ ...project, images: (item as any).images });
                    } else {
                      setSelectedProject({
                        num: '',
                        tag: item.role,
                        name: item.company,
                        problem: 'Experience at ' + item.company,
                        detail: item.desc,
                        href: '#',
                        images: (item as any).images
                      });
                    }
                  }
                }}
                style={'images' in item ? { cursor: 'pointer' } : {}}
              >
                <div className="exp-period">{item.period}</div>
                <div>
                  <div className="exp-company">{item.company}</div>
                  <div className="exp-role">{item.role}</div>
                  <div className="exp-detail">{item.desc}</div>
                </div>
                <div className="exp-arrow">{'images' in item ? '↗' : '→'}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RECOGNITION ── */}
        <section className="recognition">
          <div className="section-label gold reveal">{'// Recognition'}</div>
          <div className="section-big reveal" style={{ marginTop: '1rem' }}>Proof of Work.</div>
          <div className="rec-grid">
            {data.recognitions.map((item) => (
              <div key={item.title} className="rec-card reveal">
                <div className="rec-num">{item.value}</div>
                <div className="rec-title">{item.title}</div>
                <div className="rec-sub">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="opensource">
          <div className="section-label gold reveal">{'// Certifications'}</div>
          <div className="section-big reveal">Always Learning.</div>
          
          <div className="skills-grid" style={{ marginTop: '4rem' }}>
            {data.certifications.map((cert, i) => (
              <div key={i} className="skill-category reveal">
                <div style={{ 
                  fontFamily: 'var(--font-mono), "DM Mono", monospace', 
                  fontSize: '0.72rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  textTransform: 'uppercase', 
                  color: 'var(--yellow)', 
                  marginBottom: '1rem' 
                }}>
                  {cert.issuer}
                </div>
                <div style={{ 
                  fontSize: '0.95rem', 
                  fontWeight: 600, 
                  marginBottom: '0.4rem', 
                  color: 'var(--white)', 
                  lineHeight: 1.4 
                }}>
                  {cert.name}
                </div>
                <div style={{ 
                  fontSize: '0.78rem', 
                  color: 'var(--gray)' 
                }}>
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact" id="contact">
          <div className="contact-label reveal">{'// Let\'s Connect'}</div>
          <h2 className="reveal">Got a Product<br />to Build?</h2>
          <div className="contact-btns reveal" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a href="mailto:the.afolami.anu@gmail.com" className="contact-btn">Start a Conversation →</a>
            <a href="/Anuoluwapo_Afolami_cv(m).pdf" target="_blank" className="contact-btn" style={{ background: 'transparent', border: '2px solid var(--yellow)', color: 'var(--yellow)' }}>Download CV ↓</a>
          </div>
          <div className="contact-links reveal">
            {data.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="contact-link">
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-logo">AABXTRACT</div>
        <div className="footer-copy">© Anuoluwapo Afolami 2026 · Product Manager &amp; Builder</div>
      </footer>
    </>
  );
}

export default PortfolioPage;
