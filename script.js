const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!prefersReduced){
  const hero=document.querySelector('.hero');
  const visual=document.querySelector('.hero-visual');
  if(hero&&visual){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;visual.style.transform=`translate3d(${x*10}px,${y*8}px,0)`});hero.addEventListener('pointerleave',()=>{visual.style.transform=''})}
}

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:prefersReduced?'auto':'smooth'})}}));
