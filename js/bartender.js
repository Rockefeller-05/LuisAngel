// Bartender services - testimonials, nav, contact
(function(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scrollMode = () => reduceMotion.matches ? 'auto' : 'smooth';

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
        if(el){ e.preventDefault(); el.scrollIntoView({behavior: scrollMode(), block:'start'}); }
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

  // Donde estuvimos - 9 fotos reales imagenessss
  const eventos = [
    {img:"images/eventos/evento-01.jpg", titulo:"Boda — Salón Los Andes", lugar:"Juliaca", fecha:"18 May 2026", plan:"Premium · 140 invit.", alt:"Boda Juliaca barra Premium"},
    {img:"images/eventos/evento-02.jpg", titulo:"Corporativo — Hotel Hacienda", lugar:"Puno", fecha:"02 Jun 2026", plan:"Clásica · 90 invit.", alt:"Corporativo Puno barra Clásica"},
    {img:"images/eventos/evento-03.jpg", titulo:"Quinceañero — Local Villa Sur", lugar:"Juliaca", fecha:"20 Jun 2026", plan:"Premium · 110 invit.", alt:"Quinceañero Juliaca"},
    {img:"images/eventos/evento-04.jpg", titulo:"Festival — Plaza de Armas", lugar:"Puno", fecha:"05 Jul 2026", plan:"Élite · 300 invit.", alt:"Festival Puno Élite"},
    {img:"images/eventos/evento-05.jpg", titulo:"Privado — Terraza Arequipa", lugar:"Arequipa", fecha:"12 Jul 2026", plan:"Clásica · 60 invit.", alt:"Terraza Arequipa"},
    {img:"images/eventos/evento-06.jpg", titulo:"Aniversario — Centro Convenciones", lugar:"Cusco", fecha:"28 Jul 2026", plan:"Élite · 200 invit.", alt:"Aniversario Cusco"},
    {img:"images/eventos/evento-07.jpg", titulo:"Inauguración — Local Tacna", lugar:"Tacna", fecha:"08 Ago 2026", plan:"Premium · 80 invit.", alt:"Tacna Premium"},
    {img:"images/eventos/evento-08.jpg", titulo:"Matrimonio — Salón Imperial", lugar:"Juliaca", fecha:"15 Ago 2026", plan:"Premium · 130 invit.", alt:"Matrimonio Juliaca Premium"},
    {img:"images/eventos/evento-09.jpg", titulo:"Corporativo — Moquegua Centro", lugar:"Moquegua", fecha:"22 Ago 2026", plan:"Clásica · 70 invit.", alt:"Corporativo Moquegua Clásica"}
  ];
  const eTrack = document.getElementById('eventsTrack');
  const eDots = document.getElementById('eventsDots');
  const ePrev = document.getElementById('eventsPrev');
  const eNext = document.getElementById('eventsNext');
  if(eTrack){
    eTrack.innerHTML = eventos.map(ev=>`
      <article class="event-card">
        <img src="${ev.img}" alt="${ev.alt}" loading="lazy" onerror="this.src='images/mojito.jpg'">
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
    function eventIndex(){
      const max = eTrack.scrollWidth - eTrack.clientWidth;
      if(eTrack.scrollLeft <= 2) return 0;
      if(max > 0 && eTrack.scrollLeft >= max - 2) return eTrack.children.length - 1;
      const pad = parseFloat(getComputedStyle(eTrack).scrollPaddingLeft) || 0;
      const left = eTrack.getBoundingClientRect().left + pad;
      let idx = 0, min = Infinity;
      [...eTrack.children].forEach((c,i)=>{
        const d = Math.abs(c.getBoundingClientRect().left - left);
        if(d < min){ min = d; idx = i; }
      });
      return idx;
    }
    function eventGoTo(index){
      const card = eTrack.children[index];
      if(!card) return;
      const pad = parseFloat(getComputedStyle(eTrack).scrollPaddingLeft) || 0;
      const left = card.getBoundingClientRect().left - eTrack.getBoundingClientRect().left + eTrack.scrollLeft - pad;
      eTrack.scrollTo({left, behavior: scrollMode()});
    }
    if(eDots){
      eventos.forEach((_,i)=>{
        const d=document.createElement('span');
        if(i===0) d.classList.add('active');
        d.addEventListener('click', ()=> eventGoTo(i));
        eDots.appendChild(d);
      });
      eTrack.addEventListener('scroll', ()=>{
        const idx = eventIndex();
        [...eDots.children].forEach((d,i)=> d.classList.toggle('active', i===idx));
      }, {passive:true});
    }
    function eventStep(dir){
      const cards = [...eTrack.children];
      if(!cards.length) return;
      const idx = eventIndex();
      const next = (idx + dir + cards.length) % cards.length;
      eventGoTo(next);
    }
    function scrollNext(){ eventStep(1); }
    function scrollPrev(){ eventStep(-1); }
    ePrev?.addEventListener('click', scrollPrev);
    eNext?.addEventListener('click', scrollNext);
    const autoEnabled = () => !window.matchMedia('(max-width: 768px)').matches && !reduceMotion.matches;
    let auto = setInterval(()=>{ if(autoEnabled()) scrollNext(); }, 3500);
    eTrack.addEventListener('mouseenter', ()=> clearInterval(auto));
    eTrack.addEventListener('mouseleave', ()=> { auto = setInterval(()=>{ if(autoEnabled()) scrollNext(); }, 3500); });
    // pause when tab hidden
    document.addEventListener('visibilitychange', ()=>{ if(document.hidden) clearInterval(auto); else auto = setInterval(()=>{ if(autoEnabled()) scrollNext(); }, 3500); });
  }

  // Rails horizontales genéricos (móvil)
  const railLabels = { servicios:'Servicios', planes:'Planes', beneficios:'Beneficios', resenas:'Reseñas', carta:'Carta de cócteles' };
  const railMobile = window.matchMedia('(max-width: 768px)');

  function initRail(track, dotsContainer){
    const cards = [...track.children];
    if(!cards.length) return;
    const key = track.dataset.rail;
    track.setAttribute('role', 'region');
    track.setAttribute('aria-label', railLabels[key] || 'Carrusel');
    const progressBar = key === 'carta' ? document.querySelector('[data-rail-progress="carta"] span') : null;
    const dots = [];

    function goTo(index){
      const card = cards[index];
      if(!card) return;
      const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
      const left = card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft - pad;
      track.scrollTo({ left, behavior: scrollMode() });
    }

    function activeIndex(){
      const max = track.scrollWidth - track.clientWidth;
      if(track.scrollLeft <= 2) return 0;
      if(max > 0 && track.scrollLeft >= max - 2) return cards.length - 1;
      const pad = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
      const left = track.getBoundingClientRect().left + pad;
      let active = 0, min = Infinity;
      cards.forEach((c,i)=>{
        const d = Math.abs(c.getBoundingClientRect().left - left);
        if(d < min){ min = d; active = i; }
      });
      return active;
    }

    function update(){
      const active = activeIndex();
      dots.forEach((d,i)=>{
        d.classList.toggle('active', i === active);
        if(i === active) d.setAttribute('aria-current', 'true');
        else d.removeAttribute('aria-current');
      });
      if(progressBar){
        const max = track.scrollWidth - track.clientWidth;
        const pct = max > 0 ? (track.scrollLeft / max) : 0;
        progressBar.style.width = `${Math.max(12, pct * 100)}%`;
      }
    }

    if(dotsContainer){
      dotsContainer.innerHTML = '';
      cards.forEach((card,i)=>{
        const b = document.createElement('button');
        b.type = 'button';
        const label = card.querySelector('h3, .testimonial-card__name')?.textContent?.trim() || `elemento ${i+1}`;
        b.setAttribute('aria-label', `Ir a ${label}`);
        b.addEventListener('click', ()=> goTo(i));
        dotsContainer.appendChild(b);
        dots.push(b);
      });
    }

    let raf = null;
    track.addEventListener('scroll', ()=>{
      if(raf) return;
      raf = requestAnimationFrame(()=>{ raf = null; update(); });
    }, {passive:true});

    track.addEventListener('keydown', (e)=>{
      if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = Math.min(cards.length - 1, Math.max(0, activeIndex() + (e.key === 'ArrowRight' ? 1 : -1)));
      goTo(next);
    });

    update();
  }

  function syncRailTabindex(){
    document.querySelectorAll('[data-rail]').forEach(track=>{
      if(railMobile.matches) track.setAttribute('tabindex', '0');
      else track.removeAttribute('tabindex');
    });
  }

  document.querySelectorAll('[data-rail]').forEach(track=>{
    initRail(track, document.querySelector(`[data-rail-dots="${track.dataset.rail}"]`));
  });
  syncRailTabindex();
  if(railMobile.addEventListener) railMobile.addEventListener('change', syncRailTabindex);
  else if(railMobile.addListener) railMobile.addListener(syncRailTabindex);

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
