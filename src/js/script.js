/* ─────────────────────────────────────────────
   GERFESSON ABEL — PORTFOLIO JS
   ─────────────────────────────────────────────── */

/* ─── CUSTOM CURSOR ─── */
(function initCursor() {
  const dot   = document.getElementById('cursor-dot');
  const ring  = document.getElementById('cursor-ring');
  const canvas = document.getElementById('cursor-trail');
  const ctx   = canvas.getContext('2d');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX  = mouseX;
  let ringY  = mouseY;

  const particles = [];

  function resizeCanvas() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // dot follows instantly
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';

    // spawn particle
    particles.push({
      x: mouseX,
      y: mouseY,
      size: Math.random() * 3 + 1.5,
      alpha: 0.6,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      decay: Math.random() * 0.015 + 0.012,
      color: Math.random() > 0.8
        ? `rgba(245,166,35,`
        : `rgba(0,232,122,`,
    });
  });

  // hover effect on interactive elements
  const interactives = document.querySelectorAll('a, button, .skill-item, .stat-card, .project-card');
  interactives.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  function lerp(start, end, t) {
    return start + (end - start) * t;
  }

  function animate() {
    requestAnimationFrame(animate);

    // ring follows with lerp
    ringX = lerp(ringX, mouseX, 0.1);
    ringY = lerp(ringY, mouseY, 0.1);
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    // draw particles on canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.alpha -= p.decay;
      p.x += p.vx;
      p.y += p.vy;
      p.size *= 0.97;

      if (p.alpha <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.fill();
    }
  }

  animate();
})();

/* ─── SCROLL REVEAL ─── */
(function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
})();

/* ─── SMOOTH SCROLL ─── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

/* ─── NAV ACTIVE LINK ON SCROLL ─── */
(function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.style.color = 'var(--green)';
          }
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(s => observer.observe(s));
})();

/* ─── NAV SCROLL OPACITY ─── */
(function initNavScroll() {
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(6,13,9,0.97)';
    } else {
      nav.style.background = 'rgba(6,13,9,0.85)';
    }
  });
})();
