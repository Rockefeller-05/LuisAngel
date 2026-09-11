// Bartender services - carousel, testimonials, nav, contact
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

  // Wait for cocktails to be defined (app.js loads before)
  function initCarousel(){
    if(typeof cocktails === 'undefined' || !Array.isArray(cocktails) || cocktails.length===0){
      setTimeout(initCarousel, 100);
      return;
    }
    const track = document.getElementById('carouselTrack');
    if(!track) return;

    function shuffle(arr){
      const a=[...arr];
      for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
      return a;
    }
    function render(){
      const picks = shuffle(cocktails).slice(0,6);
      track.innerHTML='';
      picks.forEach((c, idx)=>{
        const card=document.createElement('article');
        card.className='cocktail-card visible';
        card.style.transitionDelay = (idx*60)+'ms';
        card.innerHTML=`
          <div class="cocktail-card__image-wrapper">
            <img class="cocktail-card__image" src="${c.image}" alt="${c.name}" loading="lazy">
            <span class="cocktail-card__number">${c.id}</span>
          </div>
          <div class="cocktail-card__content">
            <h3 class="cocktail-card__name">${c.name}</h3>
            ${c.slogan?`<p class="cocktail-card__slogan">${c.slogan}</p>`:''}
            <p class="cocktail-card__description">${c.description}</p>
            <span class="cocktail-card__view">Ver receta <span>→</span></span>
          </div>`;
        card.addEventListener('click', ()=>{
          // reuse modal from app.js if available
          if(typeof showModal === 'function') showModal(c);
          else window.scrollTo({top: document.getElementById('carta').offsetTop, behavior:'smooth'});
        });
        track.appendChild(card);
      });
    }
    render();
    document.getElementById('carouselShuffle')?.addEventListener('click', render);
    document.getElementById('carouselPrev')?.addEventListener('click', ()=> track.scrollBy({left:-320, behavior:'smooth'}));
    document.getElementById('carouselNext')?.addEventListener('click', ()=> track.scrollBy({left:320, behavior:'smooth'}));
    // auto shuffle every 10s
    setInterval(render, 10000);
  }
  initCarousel();

  // Testimonials
  const testimonials = [
    {name:"María & Jorge", role:"Boda · Puno", stars:"★★★★★", text:"La barra fue el alma de la fiesta. Puntuales, elegantes y los chilcanos volaron. ¡Todos preguntaron por el bartender!"},
    {name:"Gerencia HR", role:"Corporativo · Juliaca", stars:"★★★★★", text:"Servicio impecable para 120 personas. Facturación al día y barra branding con nuestro logo. Repetiremos en diciembre."},
    {name:"Camila R.", role:"Cumpleaños · Yunguyo", stars:"★★★★★", text:"Pedimos Barra Premium y superó expectativas. El show de flair y los cócteles sin alcohol para los niños fueron un detalleazo."},
    {name:"Local Andino", role:"Festival · Desaguadero", stars:"★★★★☆", text:"Alto flujo y nunca colapsaron. Stock perfecto y control de caja transparente."},
  ];
  const tTrack = document.getElementById('testimonialsTrack');
  const tDots = document.getElementById('testimonialsDots');
  if(tTrack){
    tTrack.innerHTML = testimonials.map(t=>`
      <article class="testimonial-card">
        <div class="testimonial-card__head">
          <div class="testimonial-card__avatar">${t.name.charAt(0)}</div>
          <div><div class="testimonial-card__name">${t.name}</div><div class="testimonial-card__role">${t.role}</div></div>
        </div>
        <div class="testimonial-card__stars">${t.stars}</div>
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
