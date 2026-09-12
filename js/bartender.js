// Bartender services - testimonials, nav, contact
(function(){
  // NAV burger
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if(burger && links){
    burger.addEventListener('click', ()=> links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> links.classList.remove('open')));
  }
  // Nav scroll bg
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 40) nav.style.boxShadow = '0 4px 20px var(--shadow)';
    else nav.style.boxShadow = 'none';
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        const el = document.querySelector(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      }
    });
  });

  // Testimonials
  const testimonials = [
    {name:"María & Jorge", role:"Boda · Puno", stars:5, text:"La barra fue el alma de la fiesta. Puntuales, elegantes y los chilcanos volaron. ¡Todos preguntaron por el bartender!"},
    {name:"Gerencia HR", role:"Corporativo · Juliaca", stars:5, text:"Servicio impecable para 120 personas. Contrato al día y barra branding con nuestro logo. Repetiremos en diciembre."},
    {name:"Camila R.", role:"Cumpleaños · Juliaca", stars:5, text:"Pedimos Barra Premium y superó expectativas. El show de flair y los cócteles sin alcohol para los niños fueron un detalleazo."},
    {name:"Local Andino", role:"Festival · Desaguadero", stars:4, text:"Alto flujo y nunca colapsaron. Stock perfecto y control de caja transparente."},
  ];
  function starsSVG(n){
    let s='';
    for(let i=0;i<5;i++){
      if(i<n) s+='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l1.8 3.6l3.9 .6l-2.8 2.7l.7 3.9l-3.6 -1.9l-3.6 1.9l.7 -3.9l-2.8 -2.7l3.9 -.6z"/></svg>';
      else s+='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3l1.8 3.6l3.9 .6l-2.8 2.7l.7 3.9l-3.6 -1.9l-3.6 1.9l.7 -3.9l-2.8 -2.7l3.9 -.6z"/></svg>';
    }
    return s;
  }
  const tTrack = document.getElementById('testimonialsTrack');
  const tDots = document.getElementById('testimonialsDots');
  if(tTrack){
    tTrack.innerHTML = testimonials.map(t=>`
      <article class="testimonial-card">
        <div class="testimonial-card__head">
          <div class="testimonial-card__avatar">${t.name.charAt(0)}</div>
          <div><div class="testimonial-card__name">${t.name}</div><div class="testimonial-card__role">${t.role}</div></div>
        </div>
        <div class="testimonial-card__stars">${starsSVG(t.stars)}</div>
        <p>"${t.text}"</p>
      </article>
    `).join('');
  }
  if(tDots){
    testimonials.forEach((_,i)=>{
      const s=document.createElement('span');
      if(i===0) s.classList.add('active');
      tDots.appendChild(s);
    });
  }

  // Donde estuvimos - carrusel con fotos temporales internet (sur Perú)
  const eventos = [
    {img:"https://picsum.photos/seed/boda-juliaca/800/600", titulo:"Boda — Salón Los Andes", lugar:"Juliaca", fecha:"18 May 2026", plan:"Premium · 140 invit.", alt:"Boda Juliaca barra Premium"},
    {img:"https://picsum.photos/seed/puno-hotel/800/600", titulo:"Corporativo — Hotel Hacienda", lugar:"Puno", fecha:"02 Jun 2026", plan:"Clásica · 90 invit.", alt:"Corporativo Puno barra Clásica"},
    {img:"https://picsum.photos/seed/quince-juliaca/800/600", titulo:"Quinceañero — Local Villa Sur", lugar:"Juliaca", fecha:"20 Jun 2026", plan:"Premium · 110 invit.", alt:"Quinceañero Juliaca"},
    {img:"https://picsum.photos/seed/festival-puno/800/600", titulo:"Festival — Plaza de Armas", lugar:"Puno", fecha:"05 Jul 2026", plan:"Élite · 300 invit.", alt:"Festival Puno Élite"},
    {img:"https://picsum.photos/seed/arequipa-terraza/800/600", titulo:"Privado — Terraza Arequipa", lugar:"Arequipa", fecha:"12 Jul 2026", plan:"Clásica · 60 invit.", alt:"Terraza Arequipa"},
    {img:"https://picsum.photos/seed/cusco-aniversario/800/600", titulo:"Aniversario — Centro Convenciones", lugar:"Cusco", fecha:"28 Jul 2026", plan:"Élite · 200 invit.", alt:"Aniversario Cusco"},
    {img:"https://picsum.photos/seed/tacna-local/800/600", titulo:"Inauguración — Local Tacna", lugar:"Tacna", fecha:"08 Ago 2026", plan:"Premium · 80 invit.", alt:"Tacna Premium"}
  ];
  const eTrack = document.getElementById('eventsTrack');
  const eDots = document.getElementById('eventsDots');
  const ePrev = document.getElementById('eventsPrev');
  const eNext = document.getElementById('eventsNext');
  if(eTrack){
    eTrack.innerHTML = eventos.map(ev=>`
      <article class="event-card">
        <img src="${ev.img}" alt="${ev.alt}" loading="lazy" onerror="this.src='images/mojito.jpg'" referrerpolicy="no-referrer">
        <div class="event-card__overlay">
          <h3>${ev.titulo}</h3>
          <div class="event-card__meta">
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7 -5 7 -11a7 7 0 1 0 -14 0c0 6 7 11 7 11z"/><circle cx="12" cy="10" r="3"/></svg> ${ev.lugar}</span>
            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="1"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> ${ev.fecha}</span>
            <span>${ev.plan}</span>
          </div>
        </div>
      </article>
    `).join('');
    if(eDots){
      eventos.forEach((_,i)=>{
        const d=document.createElement('span');
        if(i===0) d.classList.add('active');
        d.addEventListener('click', ()=> eTrack.children[i].scrollIntoView({behavior:'smooth', inline:'start', block:'nearest'}));
        eDots.appendChild(d);
      });
      eTrack.addEventListener('scroll', ()=>{
        const idx = Math.round(eTrack.scrollLeft / 356);
        [...eDots.children].forEach((d,i)=> d.classList.toggle('active', i===idx));
      });
    }
    function scrollNext(){ const atEnd = eTrack.scrollLeft + eTrack.clientWidth >= eTrack.scrollWidth - 10; if(atEnd) eTrack.scrollTo({left:0, behavior:'smooth'}); else eTrack.scrollBy({left:360, behavior:'smooth'}); }
    function scrollPrev(){ const atStart = eTrack.scrollLeft <= 10; if(atStart) eTrack.scrollTo({left: eTrack.scrollWidth, behavior:'smooth'}); else eTrack.scrollBy({left:-360, behavior:'smooth'}); }
    ePrev?.addEventListener('click', scrollPrev);
    eNext?.addEventListener('click', scrollNext);
    let auto = setInterval(scrollNext, 3500);
    eTrack.addEventListener('mouseenter', ()=> clearInterval(auto));
    eTrack.addEventListener('mouseleave', ()=> auto = setInterval(scrollNext, 3500));
    // pause when tab hidden
    document.addEventListener('visibilitychange', ()=>{ if(document.hidden) clearInterval(auto); else auto = setInterval(scrollNext,3500); });
  }

  // Contact form -> WhatsApp
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      const fd = new FormData(form);
      const nombre = fd.get('nombre')||'';
      const tel = fd.get('telefono')||'';
      const tipo = fd.get('tipo')||'';
      const fecha = fd.get('fecha')||'';
      const invitados = fd.get('invitados')||'';
      const plan = fd.get('plan')||'';
      const msg = fd.get('mensaje')||'';
      const text = `Hola Luis Angel, quiero cotizar barra:%0A- Nombre: ${nombre}%0A- Tel: ${tel}%0A- Evento: ${tipo}%0A- Fecha: ${fecha}%0A- Invitados: ${invitados}%0A- Plan: ${plan}%0A- Detalle: ${msg}`;
      window.open(`https://wa.me/51969434750?text=${text}`, '_blank');
    });
  }
})();
