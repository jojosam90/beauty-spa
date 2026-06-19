/* ============================================================
   main.js — homepage-only interactive components
   Nav / footer / FAQ / scroll-reveal are handled by layout.js.
   ============================================================ */

/* ---- Counters — show final values immediately ------------- */
document.querySelectorAll('.hero__stat-num[data-count]').forEach(el => {
  el.textContent = parseInt(el.getAttribute('data-count')).toLocaleString();
});

/* ---- Testimonials Slider (homepage only) ------------------ */
const track   = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('sliderPrev');
const nextBtn = document.getElementById('sliderNext');

if (track && prevBtn && nextBtn) {
  const dotBtns = document.querySelectorAll('.sdot');
  const cards   = document.querySelectorAll('.review');
  const total   = cards.length;
  let current   = 0;
  let perView   = calcPerView();
  let autoTimer = null;

  function calcPerView() {
    if (window.innerWidth <= 768)  return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }
  function maxSlide() { return Math.max(0, total - perView); }

  function setWidths() {
    const gap   = 24;
    const avail = track.parentElement.offsetWidth;
    const w     = (avail - gap * (perView - 1)) / perView;
    cards.forEach(c => { c.style.flex = `0 0 ${w}px`; c.style.minWidth = `${w}px`; });
  }

  function render() {
    const gap = 24;
    const w   = cards[0].offsetWidth;
    track.style.transform = `translateX(-${current * (w + gap)}px)`;
    dotBtns.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function goTo(i)    { current = Math.max(0, Math.min(i, maxSlide())); render(); }
  function advance()  { goTo(current >= maxSlide() ? 0 : current + 1); }
  function retreat()  { goTo(current <= 0 ? maxSlide() : current - 1); }
  function startAuto(){ autoTimer = setInterval(advance, 5000); }
  function resetAuto(){ clearInterval(autoTimer); startAuto(); }

  prevBtn.addEventListener('click', () => { retreat(); resetAuto(); });
  nextBtn.addEventListener('click', () => { advance(); resetAuto(); });
  dotBtns.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.idx); resetAuto(); }));

  /* Touch / swipe */
  let tx = 0;
  track.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = tx - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 50) { dx > 0 ? advance() : retreat(); resetAuto(); }
  });

  window.addEventListener('resize', () => {
    perView = calcPerView(); current = 0; setWidths(); render();
  });

  setWidths(); render(); startAuto();
}

/* ---- Form helpers ----------------------------------------- */
function handleForm(formId, successTextEN, successTextZH, resetDelayMs) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn  = this.querySelector('button[type="submit"]') || this.querySelector('.btn');
    const orig = btn.textContent;
    const lang = localStorage.getItem('ec_lang') || 'en';
    btn.textContent  = lang === 'zh' ? successTextZH : successTextEN;
    btn.style.background  = '#4caf50';
    btn.style.borderColor = '#4caf50';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent  = orig;
      btn.style.background  = '';
      btn.style.borderColor = '';
      btn.disabled = false;
      this.reset();
    }, resetDelayMs);
  });
}

handleForm(
  'newsletterForm',
  '✓ Check your inbox!',
  '✓ 请查收您的邮件！',
  4500
);

handleForm(
  'contactForm',
  "✓ Sent! We'll be in touch soon.",
  '✓ 已发送！我们将尽快与您联系。',
  5000
);
