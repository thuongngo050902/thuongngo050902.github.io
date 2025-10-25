// Theme toggle (dark/light)
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved === 'light') root.classList.add('light');
  document.getElementById('themeToggle')?.addEventListener('click', ()=>{
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });
})();

// Mobile nav
(function(){
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('menu');
  if(!btn || !menu) return;
  btn.addEventListener('click', ()=>{
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
})();

// Footer year
(function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
})();

// Form validation (friendly message)
(function(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if(!form || !note) return;
  form.addEventListener('submit', (e)=>{
    if(!form.checkValidity()){
      e.preventDefault();
      form.querySelector(':invalid')?.focus();
      note.textContent = 'Please check the highlighted fields and try again.';
    } else {
      e.preventDefault();
      note.textContent = 'Thanks! Your message has been (mock) submitted.';
    }
  });
})();
