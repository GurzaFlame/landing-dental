/* ============================================
   СТОМАТОЛОГИЯ «БЕЛАЯ УЛЫБКА» — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAV SCROLL EFFECT ---------- */
  const nav = document.getElementById('nav');
  const navBurger = document.getElementById('navBurger');
  const navMobile = document.getElementById('navMobile');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* Mobile menu toggle */
  if (navBurger && navMobile) {
    navBurger.addEventListener('click', () => {
      navBurger.classList.toggle('active');
      navMobile.classList.toggle('open');
    });

    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navBurger.classList.remove('active');
        navMobile.classList.remove('open');
      });
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  initReveal();

  /* ---------- FAQ TOGGLE ---------- */
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item.active').forEach(open => {
        open.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  /* ---------- BEFORE / AFTER SLIDER ---------- */
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const handle = slider.querySelector('.ba-slider__handle');
    const beforeLayer = slider.querySelector('.ba-slider__before');
    const afterLayer = slider.querySelector('.ba-slider__after');
    if (!handle || !beforeLayer || !afterLayer) return;

    let isDragging = false;

    function setPosition(x) {
      const rect = slider.getBoundingClientRect();
      let pos = ((x - rect.left) / rect.width) * 100;
      pos = Math.max(5, Math.min(95, pos));

      handle.style.left = pos + '%';
      afterLayer.style.clipPath = `inset(0 0 0 ${pos}%)`;
      beforeLayer.style.clipPath = `inset(0 ${100 - pos}% 0 0)`;
    }

    /* Mouse events */
    slider.addEventListener('mousedown', (e) => {
      isDragging = true;
      setPosition(e.clientX);
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) setPosition(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    /* Touch events */
    slider.addEventListener('touchstart', (e) => {
      isDragging = true;
      setPosition(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      if (isDragging) setPosition(e.touches[0].clientX);
    }, { passive: true });

    document.addEventListener('touchend', () => {
      isDragging = false;
    });
  });

  /* ---------- FORM HANDLING ---------- */
  document.querySelectorAll('#heroForm, #bookingForm').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Отправка...';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = '✓ Извините, заявки временно не принимаются';
        btn.style.background = 'linear-gradient(135deg, #888, #666)';
        form.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    });
  });

  /* ---------- SMOOTH SCROLL for nav links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

