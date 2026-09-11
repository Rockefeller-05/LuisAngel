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
    {name:"Gerencia HR", role:"Corporativo · Juliaca", stars:5, text:"Servicio impecable para 120 personas. Facturación al día y barra branding con nuestro logo. Repetiremos en diciembre."},
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
