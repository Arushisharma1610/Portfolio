/* ============================================================
   script.js — Arushi Sharma Portfolio
   ============================================================

   HOW TO UPDATE THIS FILE
   ───────────────────────
   All your personal content lives in the DATA object below.
   Edit only that section — the renderer below it handles
   building and injecting HTML into the page automatically.

   Quick reference:
     • Add a project     → DATA.projects[]
     • Add a skill bar   → DATA.skillBars[]
     • Add a tech tag    → DATA.techTags[]
     • Add a job         → DATA.experience[]
     • Add achievement   → DATA.achievements[]
     • Change links      → DATA.links{}
     • Change PDF file   → DATA.resumePDF
   ============================================================ */


/* ============================================================
   ✏️  YOUR DATA — Edit freely inside this object
   ============================================================ */
const DATA = {

  /* ── Personal ── */
  name:      "Arushi Sharma",
  role:      "Full Stack Web Developer",
  tagline:   "Building scalable web applications — from RESTful APIs to real-time WebSocket systems. Clean architecture, competitive C++ problem solving, code that ships.",
  email:     "arushisharma2003bly@gmail.com",
  location:  "Bareilly, Uttar Pradesh",
  status:    "Open to Opportunities",   // shown in the nav badge
  resumePDF: "Arushi_Sharma.pdf",      // keep this PDF in the same folder

  /* ── Social links ── */
  links: {
    github:    "https://github.com/Arushisharma1610",
    linkedin:  "https://linkedin.com/in/arushi-sharma-574192228",
    leetcode:  "https://leetcode.com/u/arushi1610",
  },

  /* ── Hero stat cards (max 3) ── */
  heroStats: [
    { value: "300K+", label: "Competitors beaten — TCS CodeVita Global Rank" },
    { value: "20+",   label: "Open Source PRs merged across 5+ projects" },
    { value: "40%",   label: "API speed boost at TechTorch internship" },
  ],

  /* ── Skill progress bars ── */
  skillBars: [
    { name: "React.js / Next.js",             level: "Expert",       pct: 92 },
    { name: "Node.js / Express.js",           level: "Expert",       pct: 90 },
    { name: "C++ & DSA / Competitive Prog.",  level: "Advanced",     pct: 88 },
    { name: "MongoDB / PostgreSQL",           level: "Advanced",     pct: 85 },
    { name: "TypeScript",                     level: "Advanced",     pct: 80 },
    { name: "AWS / Cloud & DevOps",           level: "Intermediate", pct: 65 },
  ],

  /* ── Tech tag cloud ── */
  techTags: [
    "C++", "C", "DSA", "JavaScript", "TypeScript", "HTML5 / CSS3",
    "React.js", "Next.js", "Redux", "Tailwind CSS",
    "Node.js", "Express.js", "REST APIs", "WebSockets",
    "MongoDB", "PostgreSQL", "MySQL", "Sequelize",
    "JWT / OAuth", "Git / GitHub", "CI/CD", "Jest",
    "AWS", "Postman", "Python", "TensorFlow",
    "Stripe API", "OpenAI API",
  ],

  /* ── Work experience ── */
  experience: [
    {
      role:    "Web Developer Intern",
      company: "TechTorch Solutions Pvt. Ltd.",
      type:    "Full-Stack · Web",
      period:  "Jul 2024 – Dec 2024",
      mode:    "Remote",
      points: [
        "Architected scalable full-stack web application — reduced data retrieval time by <strong>40%</strong> through DB indexing, query optimization, and caching strategies",
        "Engineered responsive React + Tailwind CSS UI; implemented <strong>JWT/OAuth</strong> authentication for secure access control",
        "Achieved <strong>99% test coverage</strong> with Jest & React Testing Library, cutting post-release bugs by 15%",
        "Automated CI/CD pipelines with GitHub Actions — <strong>deployment time down 30%</strong>",
      ],
      chips: ["React.js", "Node.js", "JWT/OAuth", "99% Coverage", "GitHub Actions", "40% Faster APIs"],
    },
    {
      role:    "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      type:    "Open Source",
      period:  "May 2024 – Aug 2024",
      mode:    "Remote",
      points: [
        "Delivered <strong>20+ merged pull requests</strong> across 5+ projects — features, bug fixes, and documentation",
        "Resolved <strong>10+ critical bugs</strong> via international pair programming, improving delivery speed by 20%",
        "Contributed to repositories with <strong>50,000+ GitHub stars</strong>",
      ],
      chips: ["20+ PRs Merged", "50K★ Repos", "International Teams", "Code Review"],
    },
  ],

  /* ── Projects ── */
  /* Set featured: true on ONE project to make it span 2 columns */
  projects: [
    {
      name:     "Tasty-Treat",
      stack:    ["React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "Stripe"],
      desc:     "Full-stack food ordering platform with user & admin dashboards. Microservices for menu management, order tracking, and payment processing. Stripe integration achieving 25% higher payment success rate for 10K+ concurrent users.",
      metrics:  [{ v: "10K+", l: "Concurrent Users" }, { v: "25%", l: "Payment Success ↑" }, { v: "30%", l: "Faster APIs" }],
      github:   "https://github.com/Arushisharma1610/Tasty_Treat",
      featured: true,
    },
    {
      name:     "True-Feedback",
      stack:    ["Next.js", "WebSockets", "MongoDB", "OpenAI API"],
      desc:     "Real-time anonymous messaging platform with WebSocket tech, secure auth, email verification, and AI-powered message suggestions. Supports 1,000+ concurrent connections.",
      metrics:  [{ v: "1K+", l: "WS Connections" }, { v: "AI", l: "Powered" }],
      github:   "https://github.com/Arushisharma1610/True-Feedback",
    },
    {
      name:     "ScholarHub",
      stack:    ["React.js", "Node.js", "MongoDB", "Express.js"],
      desc:     "Academic management system for 500+ students to track assignments, scores & leave applications. Admin dashboard reducing teacher overhead by 40%.",
      metrics:  [{ v: "500+", l: "Students" }, { v: "40%", l: "Less Overhead" }],
      github:   "https://github.com/Arushisharma1610",
    },
    {
      name:     "DecideFast",
      stack:    ["MongoDB", "Express.js", "React.js", "Node.js", "Vite"],
      desc:     "Full-stack web decision poll app — create polls, vote, see live results with percentage bars. Features expiry logic, winner highlighting, skeleton loading states, and filterable feed.",
      metrics:  [{ v: "Web", l: "Full Stack" }, { v: "100%", l: "Responsive" }],
      github:   "https://github.com/Arushisharma1610/Decision-Maker",
    },
    {
      name:     "Tour & Travel",
      stack:    ["React.js", "JSX", "CSS"],
      desc:     "React SPA showcasing travel destinations with dynamic UI components — props, state management, and clean reusable component patterns.",
      metrics:  [{ v: "SPA", l: "Architecture" }, { v: "React", l: "Components" }],
      github:   "https://github.com/Arushisharma1610/React-mini-projects/tree/main/tour-travel",
    },
    {
      name:     "Weather App",
      stack:    ["JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
      desc:     "Vanilla JS weather app with live data and clean Tailwind UI. Zero frameworks — showcasing pure JavaScript and DOM manipulation skills.",
      metrics:  [{ v: "0", l: "Frameworks" }, { v: "Live", l: "Weather Data" }],
      github:   "https://github.com/Arushisharma1610/Weather-App",
    },
  ],

  /* ── Achievements ── */
  achievements: [
    {
      icon:   "🏆",
      name:   "TCS CodeVita 2024",
      year:   "2024",
      detail: "Global Rank <strong>4503</strong> among 300,000+ participants — solved complex algorithmic problems in <strong>C++</strong>, demonstrating strong DSA mastery.",
    },
    {
      icon:   "🛒",
      name:   "Walmart Sparkathon 2024",
      year:   "2024",
      detail: "Advanced to Round 2 with an IoT + predictive analytics waste management solution from thousands of competing teams.",
    },
    {
      icon:   "📦",
      name:   "Flipkart GRiD 6.0",
      year:   "2024",
      detail: "Selected for the Software Development Track from <strong>50,000+</strong> participants nationwide.",
    },
    {
      icon:   "🤖",
      name:   "AI/ML Trainee — Livewire India",
      year:   "Training",
      detail: "Completed training in computer vision & speech recognition using Python & TensorFlow.",
    },
    {
      icon:   "💡",
      name:   "District-Level Hackathon",
      year:   "Local",
      detail: "Semi-finalist at SRMS, clearing three competitive rounds with agile team-based solutions.",
    },
    {
      icon:   "🎤",
      name:   "Tech Club + Literary Club",
      year:   "Leadership",
      detail: "Organized <strong>10+</strong> coding competitions & workshops. Led <strong>15+</strong> events as Joint Secretary of Literary Club.",
    },
  ],

  /* ── Education ── */
  education: {
    degree:  "B.Tech — Computer Science & Engineering",
    college: "Shri Ram Murti Smarak College of Engineering, Bareilly",
    period:  "Nov 2021 – May 2025",
    gpa:     "GPA: 7.42 / 10",
  },

  /* ── Contact info cards ── */
  contactInfo: [
    { label: "Current Status",  value: "Open to Opportunities", highlight: true },
    { label: "Preferred Roles", value: "Full Stack Dev · ASDE · Frontend Dev · Backend Dev" },
    { label: "Work Mode",       value: "Remote · Hybrid · On-site (Relocate OK)" },
    { label: "Response Time",   value: "Within 24 hours" },
  ],

};


/* ============================================================
   ⚙️  RENDERER — Do not edit below unless you know JavaScript
   ============================================================ */

/* ── Small helper: get element by ID ── */
const $ = id => document.getElementById(id);

/* ── NAV ── */
$('nav').innerHTML = `
  <a href="#" class="nav-logo"><b>{</b> ${DATA.name.split(' ')[0]} <b>}</b></a>
  <ul class="nav-links">
    ${['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact']
      .map(s => `<li><a href="#${s.toLowerCase()}">${s}</a></li>`)
      .join('')}
  </ul>
  <div class="nav-right">
    <div class="status-badge">
      <span class="status-dot"></span>${DATA.status}
    </div>
    <a href="#resume" class="btn-resume-nav">&#8595; Resume</a>
  </div>`;

/* ── HERO ── */
$('hero-content').innerHTML = `
  <div class="hero-grid">
    <div>
      <div class="eyebrow reveal">
        <div class="eyebrow-bar"></div>
        <span class="eyebrow-txt">${DATA.role} &middot; B.Tech CSE 2025</span>
      </div>
      <h1 class="hero-name reveal" style="transition-delay: .1s">
        <span class="outline">${DATA.name.split(' ')[0]}</span>
        <span class="italic">${DATA.name.split(' ')[1]}</span>
      </h1>
      <p class="hero-tagline reveal" style="transition-delay: .2s">${DATA.tagline}</p>
      <div class="hero-buttons reveal" style="transition-delay: .3s">
        <a href="mailto:${DATA.email}" class="btn btn-primary">Hire Me</a>
        <a href="#projects"            class="btn btn-ghost">View Projects &rarr;</a>
        <a href="#resume"              class="btn btn-ghost">&#8595; Resume</a>
      </div>
      <div class="hero-socials reveal" style="transition-delay: .4s">
        <a href="${DATA.links.github}"   target="_blank" class="social-pill">GitHub</a>
        <a href="${DATA.links.linkedin}" target="_blank" class="social-pill">LinkedIn</a>
        <a href="${DATA.links.leetcode}" target="_blank" class="social-pill">LeetCode</a>
        <a href="mailto:${DATA.email}"               class="social-pill">Email</a>
      </div>
    </div>
    <div class="stat-cards reveal" style="transition-delay: .2s">
      ${DATA.heroStats.map(s => `
        <div class="stat-card">
          <div class="stat-val">${s.value}</div>
          <div class="stat-lbl">${s.label}</div>
        </div>`).join('')}
    </div>
  </div>`;

/* ── TICKER ── */
const tickerItems = DATA.techTags
  .map(t => `<span class="ticker-item"><b>+</b>${t}</span>`)
  .join('');
$('ticker-wrap').innerHTML = `
  <div class="ticker-track">${tickerItems}${tickerItems}</div>`;

/* ── ABOUT GRID ── */
const aboutCells = [
  {
    label: 'Education',
    value: 'B.Tech &middot; Computer Science',
    sub:   `${DATA.education.college.split(',')[0]} &middot; ${DATA.education.period} &middot; ${DATA.education.gpa}`,
  },
  {
    label: 'Specialization',
    value: DATA.role,
    sub:   'React &middot; Node &middot; MongoDB &middot; Express &middot; Next.js &middot; C++',
  },
  {
    label: 'Location',
    value: DATA.location,
    sub:   'Open to remote &amp; relocation opportunities',
  },
  {
    label:     'Status',
    value:     '&#9679; ' + DATA.status,
    sub:       'Actively seeking full-time SDE / Web Dev roles',
    highlight: true,
  },
];
$('about-grid').innerHTML = aboutCells.map(c => `
  <div class="about-cell">
    <div class="about-cell-label">${c.label}</div>
    <div class="about-cell-value" ${c.highlight ? 'style="color: var(--lime)"' : ''}>${c.value}</div>
    <div class="about-cell-sub">${c.sub}</div>
  </div>`).join('');

/* ── SKILLS ── */
$('skills-layout').innerHTML = `
  <div>
    ${DATA.skillBars.map(s => `
      <div class="skill-row">
        <div class="skill-header">
          <span class="skill-name">${s.name}</span>
          <span class="skill-level">${s.level}</span>
        </div>
        <div class="skill-track">
          <div class="skill-fill" data-pct="${s.pct / 100}"></div>
        </div>
      </div>`).join('')}
  </div>
  <div>
    <div class="tech-cloud-label">All Technologies</div>
    <div class="tech-cloud">
      ${DATA.techTags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>
  </div>`;

/* ── EXPERIENCE ── */
$('timeline').innerHTML = DATA.experience.map(e => `
  <div class="timeline-item reveal">
    <div class="tl-period">
      <span class="tl-badge">${e.period}</span>
      <span class="tl-mode">${e.mode}</span>
    </div>
    <div class="tl-role">${e.role}</div>
    <div class="tl-company">
      ${e.company}<span class="tl-dot"></span>${e.type}
    </div>
    <ul class="tl-points">
      ${e.points.map(p => `<li>${p}</li>`).join('')}
    </ul>
    <div class="tl-chips">
      ${e.chips.map(c => `<span class="tl-chip">${c}</span>`).join('')}
    </div>
  </div>`).join('');

/* ── PROJECTS ── */
$('projects-grid').innerHTML = DATA.projects.map((p, i) => {
  const num     = String(i + 1).padStart(3, '0');
  const tagHtml = p.stack.map(t => `<span class="pj-tag">${t}</span>`).join('');
  const metHtml = p.metrics.map(m => `
    <div>
      <div class="metric-val">${m.v}</div>
      <div class="metric-lbl">${m.l}</div>
    </div>`).join('');

  if (p.featured) {
    return `
      <div class="project-card featured">
        <div class="pj-accent-bar"></div>
        <div class="pj-top">
          <span class="pj-num featured-tag">${num} &mdash; Featured</span>
          <a href="${p.github}" target="_blank" class="pj-link" title="View on GitHub">&#8667;</a>
        </div>
        <div class="pj-name">${p.name}</div>
        <div class="pj-stack">${tagHtml}</div>
        <p class="pj-desc">${p.desc}</p>
        <div class="pj-metrics">${metHtml}</div>
      </div>`;
  }

  return `
    <div class="project-card reveal" style="transition-delay: ${i * .07}s">
      <div class="pj-top">
        <span class="pj-num">${num}</span>
        <a href="${p.github}" target="_blank" class="pj-link" title="View on GitHub">&#8667;</a>
      </div>
      <div class="pj-name">${p.name}</div>
      <div class="pj-stack">${tagHtml}</div>
      <p class="pj-desc">${p.desc}</p>
      <div class="pj-metrics">${metHtml}</div>
    </div>`;
}).join('');

/* ── ACHIEVEMENTS ── */
$('ach-grid').innerHTML = DATA.achievements.map((a, i) => `
  <div class="ach-card reveal" style="transition-delay: ${i * .07}s">
    <div class="ach-year">${a.year}</div>
    <div class="ach-icon">${a.icon}</div>
    <div class="ach-name">${a.name}</div>
    <div class="ach-detail">${a.detail}</div>
  </div>`).join('');

/* ── RESUME ── */
$('resume-box').innerHTML = `
  <div>
    <div class="resume-label">06 &mdash; Resume</div>
    <h2 class="resume-title">Download my <em>CV</em></h2>
    <p class="resume-desc">
      Get a complete overview of my experience, projects, skills and education —
      in a clean, ATS-optimized one-page format ready for any recruiter.
    </p>
    <div class="resume-stats">
      <div><div class="rs-val">0.6</div><div class="rs-lbl">Year Experience</div></div>
      <div><div class="rs-val">16+</div><div class="rs-lbl">Projects Built</div></div>
      <div><div class="rs-val">20+</div><div class="rs-lbl">OSS PRs</div></div>
      <div><div class="rs-val">B.Tech</div><div class="rs-lbl">CSE 2025</div></div>
    </div>
  </div>
  <div class="resume-actions">
    <a href="${DATA.resumePDF}" download="Arushi_Sharma_Resume.pdf" class="btn-download">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
        <polyline points="7,10 12,15 17,10"/>
        <line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
      Download Resume (PDF)
    </a>
    <a href="mailto:${DATA.email}?subject=Opportunity for ${DATA.name}" class="btn-email-alt">
      Email me instead
    </a>
    <div class="resume-note">PDF &middot; ATS-Friendly &middot; Updated 2025</div>
  </div>`;

/* ── CONTACT ── */
$('contact-layout').innerHTML = `
  <div class="reveal">
    <div class="contact-heading">Let's<br/><em>work</em><br/>together.</div>
    <p class="contact-sub">
      I'm actively looking for full-time web development roles.
      Internship experience, open-source track record, and 6 shipped projects —
      ready to contribute from day one.
    </p>
    <div class="contact-links-list">
      <a href="mailto:${DATA.email}" class="contact-link">
        <span>${DATA.email}</span><span class="contact-arrow">&#8599;</span>
      </a>
      <a href="${DATA.links.linkedin}" target="_blank" class="contact-link">
        <span>${DATA.links.linkedin.replace('https://', '')}</span>
        <span class="contact-arrow">&#8599;</span>
      </a>
      <a href="${DATA.links.github}" target="_blank" class="contact-link">
        <span>${DATA.links.github.replace('https://', '')}</span>
        <span class="contact-arrow">&#8599;</span>
      </a>
    </div>
  </div>
  <div class="reveal" style="transition-delay: .15s">
    <div class="contact-info-cards">
      ${DATA.contactInfo.map(c => `
        <div class="info-card">
          <div class="info-label">${c.label}</div>
          <div class="info-value ${c.highlight ? 'highlight' : ''}">${c.value}</div>
        </div>`).join('')}
      <div class="edu-card">
        <div class="edu-degree">${DATA.education.degree}</div>
        <div class="edu-college">${DATA.education.college}</div>
        <div class="edu-meta">${DATA.education.period} &middot; ${DATA.education.gpa}</div>
      </div>
    </div>
  </div>`;

/* ── FOOTER ── */
$('footer').innerHTML = `
  <div class="footer-name"><span>{</span> ${DATA.name} <span>}</span></div>
  <div class="footer-links">
    <a href="${DATA.links.github}"   target="_blank">GitHub</a>
    <a href="${DATA.links.linkedin}" target="_blank">LinkedIn</a>
    <a href="${DATA.links.leetcode}" target="_blank">LeetCode</a>
    <a href="#resume">Resume</a>
  </div>
  <div class="footer-copy">&copy; ${new Date().getFullYear()} ${DATA.name} &middot; Built with care</div>`;


/* ============================================================
   INTERACTIONS — Cursor, scroll, reveal, skill bars
   ============================================================ */

/* ── Custom cursor ── */
const cursor  = document.getElementById('cursor');
const curRing = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

(function animateRing() {
  ringX += (mouseX - ringX) * 0.1;
  ringY += (mouseY - ringY) * 0.1;
  curRing.style.left = ringX + 'px';
  curRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateRing);
})();

document.addEventListener('mouseover', e => {
  const hoverable = e.target.closest('a, button, .project-card, .ach-card, .stat-card');
  if (hoverable) {
    cursor.style.width   = '18px';
    cursor.style.height  = '18px';
    curRing.style.width  = '56px';
    curRing.style.height = '56px';
    curRing.style.opacity = '.7';
  } else {
    cursor.style.width   = '10px';
    cursor.style.height  = '10px';
    curRing.style.width  = '38px';
    curRing.style.height = '38px';
    curRing.style.opacity = '.4';
  }
});

/* ── Scroll progress bar ── */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  document.getElementById('scroll-bar').style.width = scrolled + '%';
});

/* ── Reveal elements on scroll ── */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Animate skill bars when scrolled into view ── */
const skillObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.transform = `scaleX(${bar.dataset.pct})`;
      });
    }
  }),
  { threshold: 0.3 }
);
document.querySelectorAll('#skills-layout > div').forEach(el => skillObserver.observe(el));
