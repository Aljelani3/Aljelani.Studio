// Subtle reveal on scroll + parallax drift for hero ribbons
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); }
  });
},{threshold:.1});

document.querySelectorAll('.tile,.ethos__inner,.panel').forEach(el=>{
  el.classList.add('reveal');
  io.observe(el);
});

const hero = document.querySelector('.hero__bg');
let lastY = 0;
window.addEventListener('scroll', ()=>{
  const y = window.scrollY || 0;
  const dy = (y - lastY) * 0.04;
  lastY = y;
  hero.style.transform = `translateY(${y*0.05}px) skewY(${dy}deg)`;
});
