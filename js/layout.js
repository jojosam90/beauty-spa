/* ==========================================================
   layout.js — shared header + footer injected on every page
   Set window.BASE_PATH before including this script:
     index.html  → BASE_PATH = ''
     sub-pages   → BASE_PATH = '../'
   ========================================================== */
(function () {
  'use strict';
  const bp = (typeof BASE_PATH !== 'undefined') ? BASE_PATH : '';

  /* ---- Build nav HTML ------------------------------------ */
  const nav = `
  <header class="header" id="header">
    <nav class="nav container">
      <a href="${bp}index.html" class="nav__logo">
        <span class="logo-estre">Esthe</span><span class="logo-clinic">Clinic</span>
      </a>
      <button class="nav__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav__menu" id="navMenu">

        <li class="nav__item">
          <a href="${bp}treatments/head-eye-spa.html" class="nav__link" data-i18n="nav_head_eye">Head &amp; Eye Spa</a>
        </li>

        <li class="nav__item">
          <a href="${bp}treatments/facial-spa.html" class="nav__link" data-i18n="nav_facial">Facial Spa</a>
        </li>

        <li class="nav__item">
          <a href="${bp}treatments/body-mud-therapy.html" class="nav__link" data-i18n="nav_body_mud">Body Mud Therapy</a>
        </li>

        <li class="nav__item">
          <a href="${bp}index.html#contact" class="nav__link" data-i18n="nav_contact">Contact</a>
        </li>

        <!-- Language switcher -->
        <li class="nav__item nav__lang">
          <button class="lang-btn active" data-lang="en" onclick="switchLang('en')">EN</button>
          <button class="lang-btn" data-lang="zh" onclick="switchLang('zh')">CN</button>
        </li>

        <li class="nav__item nav__item--cta">
          <a href="${bp}index.html#contact" class="btn btn--primary" data-i18n="btn_book">Book Now</a>
        </li>
      </ul>
    </nav>
  </header>`;

  /* ---- Build footer HTML --------------------------------- */
  const footer = `
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="${bp}index.html" class="footer__logo"><span>Esthe</span>Clinic</a>
            <p data-i18n="ft_tagline">Over 10 years of trusted facial &amp; spa expertise in Singapore.</p>
          </div>
          <div class="footer__col">
            <h4 data-i18n="ft_col_treat">Treatments</h4>
            <ul>
              <li><a href="${bp}treatments/head-eye-spa.html" data-i18n="nav_head_eye">Head &amp; Eye Spa</a></li>
              <li><a href="${bp}treatments/facial-spa.html" data-i18n="nav_facial">Facial Spa</a></li>
              <li><a href="${bp}treatments/body-mud-therapy.html" data-i18n="nav_body_mud">Body Mud Therapy</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4 data-i18n="ft_col_contact">Contact</h4>
            <ul>
              <li>Blk 8, Selegie Road, #01-06, Singapore 180008</li>
              <li>+65 8941 0482</li>
              <li data-i18n="ft_hrs1">Daily: 10.30am - 10.30pm (By appointment only)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p data-i18n="ft_copy">&copy; 2026 EstheClinic. All rights reserved.</p>
        <div class="footer__legal">
          <button class="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">&#8593; Back to top</button>
        </div>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/6589410482?text=Hi%2C%20I%20want%20to%20make%20an%20appointment%0A%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A2%84%E7%BA%A6" class="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.121 1.523 5.858L0 24l6.335-1.502C8.044 23.445 9.985 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.908 0-3.692-.524-5.217-1.434l-.375-.223-3.884.921.987-3.793-.245-.39C2.493 15.575 2 13.848 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm5.472-7.618c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    </svg>
  </a>`;

  /* ---- Inject into DOM ----------------------------------- */
  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);

  /* ---- Sticky header ------------------------------------- */
  const header  = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  /* ---- Mobile nav toggle --------------------------------- */
  const toggle  = document.getElementById('navToggle');
  const menu    = document.getElementById('navMenu');
  const hbars   = toggle.querySelectorAll('span');

  function closeMenu() {
    menu.classList.remove('open');
    document.body.style.overflow = '';
    hbars[0].style.transform = hbars[2].style.transform = '';
    hbars[1].style.opacity = '';
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      hbars[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      hbars[1].style.opacity   = '0';
      hbars[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      hbars[0].style.transform = hbars[2].style.transform = '';
      hbars[1].style.opacity = '';
    }
  });

  /* Close menu when a real link is clicked (anchor tags only — excludes span toggles) */
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });


  /* ---- FAQ accordion ------------------------------------- */
  document.addEventListener('click', e => {
    const q = e.target.closest('.faq-q');
    if (!q) return;
    const item = q.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });

  /* ---- Smooth scroll for on-page hash links -------------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
      closeMenu();
    });
  });

})();
