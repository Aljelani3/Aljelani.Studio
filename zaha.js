// Simple reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
},{threshold:.1});
document.querySelectorAll('.tile,.ethos__inner,.panel').forEach(el=>{
  el.classList.add('reveal'); io.observe(el);
});
