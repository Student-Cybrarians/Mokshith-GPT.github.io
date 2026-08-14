const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

if(!prefersReduced){
  const glow=document.querySelector('.cursor-glow');
  window.addEventListener('pointermove',e=>{if(glow){glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`}});
  const hero=document.querySelector('.hero');
  const visual=document.querySelector('.hero-visual');
  if(hero&&visual){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;visual.style.transform=`translate3d(${x*8}px,${y*7}px,0)`});hero.addEventListener('pointerleave',()=>visual.style.transform='')}
}

document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:prefersReduced?'auto':'smooth'})}}));

async function loadGitHub(){
  const count=document.getElementById('repo-count');
  const note=document.getElementById('github-note');
  try{
    const res=await fetch('https://api.github.com/orgs/Student-Cybrarians/repos?per_page=100&sort=updated');
    if(!res.ok)throw new Error('GitHub unavailable');
    const repos=await res.json();
    const publicRepos=repos.filter(r=>!r.private);
    if(count)count.textContent=publicRepos.length;
    if(note){
      const names=publicRepos.slice(0,4).map(r=>r.name.replace(/-/g,' '));
      note.textContent=names.length?`Recent: ${names.join(' · ')}`:'Public projects are available on GitHub.';
    }
  }catch(e){
    if(count)count.textContent='10+';
    if(note)note.textContent='Explore selected projects and repositories on GitHub.';
  }
}
loadGitHub();

const answers={
 ai:'AI/ML work includes IntelliHire, Human Detection and AI-IDS-ES. The portfolio labels each project by its actual development stage.',
 security:'Cybersecurity focus includes SOC concepts, incident response principles, alert triage, SIEM fundamentals, log analysis, IDS/IPS basics, IOC identification, network security and introductory NIST/MITRE ATT&CK knowledge.',
 intellihire:'IntelliHire is an AI-assisted recruitment and placement project exploring resume analysis, candidate screening, assessments, interview practice, performance insights and recommendations. Multiple versions show its iterative development.',
 stack:'Core technologies include Python, Java, JavaScript, Git/GitHub, NumPy, Pandas and Scikit-learn, with Linux/Ubuntu and Windows exposure. The portfolio itself uses lightweight HTML, CSS and JavaScript for GitHub Pages.'
};
document.querySelectorAll('.question-grid button').forEach(button=>button.addEventListener('click',()=>{const answer=document.getElementById('answer');if(answer)answer.textContent=answers[button.dataset.q]||'See the project and profile sections for verified details.'}));
