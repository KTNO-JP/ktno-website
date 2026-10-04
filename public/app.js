const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => {const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'CLOSE' : 'MENU';});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='MENU';}));
if ('IntersectionObserver' in window) {document.documentElement.classList.add('js'); const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08}); document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
