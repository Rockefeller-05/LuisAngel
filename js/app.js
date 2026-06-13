const cocktails = [
    {
        id: 1,
        name: "Chilcano de Pisco",
        slogan: "El Refresco de Bandera",
        description: "El cóctel más ligero y refrescante del Perú, ideal para cualquier tarde de sol.",
        image: "images/chilcano-de-pisco.jpg",
        ingredients: [
            "2 oz de Pisco (Quebranta o Acholado)",
            "½ oz de Jugo de limón recién exprimido",
            "4 oz de Ginger Ale (bien helada)",
            "2 gotas de Amargo de Angostura",
            "Hielo en cubos grandes",
            "Decoración: Una rodaja de limón dentro del vaso"
        ]
    },
    {
        id: 2,
        name: "Mojito",
        subtitle: "Maracuyá, fresa y arándano",
        slogan: "El Clásico Tropical Reinterpretado",
        description: "Cambiamos el ron por pisco para darle un carácter más aromático y estructurado.",
        image: "images/mojito.jpg",
        ingredients: [
            "2 oz de ron blanco",
            "1 oz de Jugo de limón",
            "2 cucharaditas de Azúcar blanca (o 1 oz de jarabe de goma)",
            "8 a 10 hojas de Menta o Buena Hierba",
            "Agua con gas para completar"
        ]
    },
    {
        id: 3,
        name: "Tequila Sunrise",
        slogan: "El Amanecer en un Vaso",
        description: "Famoso por su degradado visual que imita los colores del sol saliendo en la playa.",
        image: "images/tequila-sunrise.jpg",
        ingredients: [
            "2 oz de Tequila Blanco o Reposado",
            "4 oz de Jugo de Naranja natural",
            "½ oz de Granadina",
            "Hielo",
            "Decoración: Rodaja de naranja y una cereza marrasquino"
        ]
    },
    {
        id: 4,
        name: "Piña Colada",
        slogan: "La Dulzura del Caribe",
        description: "Un cóctel cremoso tipo smoothie que es prácticamente un postre con alcohol.",
        image: "images/pina-colada.jpg",
        ingredients: [
            "2 oz de Ron Blanco",
            "2 oz de Crema de Coco",
            "4 oz de Jugo de Piña natural",
            "1 hielo",
            "Decoración: Triángulo de piña y cereza"
        ]
    },
    {
        id: 5,
        name: "Colada de Fresa",
        slogan: "El Capricho Tropical",
        description: "Una fusión perfecta entre la frescura de la fresa y la cremosidad de la piña colada. Se puede disfrutar con o sin alcohol.",
        image: "images/colada-de-fresa.jpg",
        ingredients: [
            "2 oz de Ron Blanco",
            "2 oz de Crema de Coco espesa",
            "4 oz de Jugo de Fresa natural",
            "1 hielo",
            "1 chorrito de Leche evaporada",
            "1 yogurt"
        ]
    },
    {
        id: 6,
        name: "Machu Picchu",
        slogan: "El Emblema Peruano",
        description: "Es uno de los cócteles más emblemáticos del Perú, famoso por su vibrante presentación en capas que utiliza los colores de la bandera del Tahuantinsuyo (el Imperio Inca). Fue creado en la década de 1980 y su base principal es el pisco.",
        image: "images/machu-picchu.jpg",
        ingredients: [
            "1 ½ oz de Pisco",
            "1 oz de Jarabe de granadina",
            "1 oz de Crema de menta verde",
            "Jugo de naranja",
            "Hielo"
        ]
    },
    {
        id: 7,
        name: "Rayo de Luna",
        slogan: "Oda a la Noche",
        description: "Este cóctel es una oda a la noche. Su color azul vibrante, logrado mediante el Curacao, evoca el reflejo de la luna sobre el océano, convirtiéndolo en un favorito para la coctelería de autor contemporánea.",
        image: "images/rayo-de-luna.jpg",
        ingredients: [
            "1 oz de Vodka",
            "2 oz de Ron Blanco",
            "1 oz de Licor de Menta blanca",
            "½ oz de Blue Curacao",
            "1 oz de Jarabe de goma o azúcar",
            "Completar con Gaseosa Sprite o 7Up",
            "Hielo picado"
        ]
    },
    {
        id: 8,
        name: "Espresso Martini",
        slogan: "Energía Nocturna",
        description: "Sofisticado, oscuro y con una energía inigualable, el Espresso Martini no es técnicamente un \"martini\" (ya que no lleva vermut), pero su servicio en la icónica copa de cristal lo ha convertido en un símbolo de la vida nocturna de alta gama.",
        image: "images/espresso-martini.jpg",
        ingredients: [
            "2 oz de Vodka",
            "1 oz de Licor de Café",
            "1 oz de Café Espresso recién hecho",
            "½ oz de Jarabe de goma",
            "3 granos de café para decorar"
        ]
    },
    {
        id: 9,
        name: "Pisco Sour",
        slogan: "Símbolo Cultural",
        description: "Más que un cóctel, es un símbolo cultural. Su origen en el histórico Morris' Bar de Lima lo posicionó como el aperitivo por excelencia, capaz de conquistar paladares internacionales con su elegancia minimalista y su corona de espuma blanca.",
        image: "images/pisco-sour.jpg",
        ingredients: [
            "3 oz de Pisco",
            "1 oz de Jugo de limón",
            "1 oz de Jarabe de goma",
            "1 Clara de huevo",
            "6-8 Cubos de hielo",
            "Garnish: 2 o 3 gotas de Amargo de Angostura"
        ]
    },
    {
        id: 10,
        name: "Orgasmo",
        slogan: "Aromático y Seductor",
        description: "Para los amantes de los frutos secos, esta versión es mucho más aromática.",
        image: "images/orgasmo.jpg",
        ingredients: [
            "1 oz de Whisky",
            "1 oz de Baileys (Crema Irlandesa)",
            "1 oz de Licor de Café (Kahlúa)",
            "1 oz de Amaretto (Licor de Almendras)"
        ]
    },
    {
        id: 11,
        name: "Daiquiri de Fresa",
        slogan: "Frescura Frutal",
        description: "Es uno de los cócteles más populares del mundo por su sabor refrescante, dulce y frutal. Se puede preparar tanto en coctelera como en versión frozen (licuado con hielo) para obtener una textura tipo frappé.",
        image: "images/daiquiri-de-fresa.jpg",
        ingredients: [
            "2 oz de Ron blanco",
            "1 oz de Jarabe de goma",
            "½ oz a 1 oz de Zumo de limón",
            "4 a 6 Fresas frescas o congeladas",
            "1 hielo"
        ]
    },
    {
        id: 12,
        name: "Saltamontes",
        slogan: "Digestivo de Menta",
        description: "Es el cóctel digestivo por excelencia. Se distingue por su vibrante color verde y un sabor que recuerda a los bombones de menta con chocolate.",
        image: "images/saltamontes.jpg",
        ingredients: [
            "1 oz de licor de Menta verde",
            "1 oz de Crema de chocolate",
            "1 oz de Crema de leche"
        ]
    },
    {
        id: 13,
        name: "Coco Loco",
        slogan: "Locura Tropical",
        description: "Es un cóctel tropical emblemático del Caribe, conocido por su mezcla de varios licores blancos y su cremosa base de coco. Aunque existen muchas variaciones regionales.",
        image: "images/coco-loco.jpg",
        ingredients: [
            "1 oz de Ron Dorado",
            "1 oz de jarabe de granadina",
            "2 oz de Crema de coco (endulzada)",
            "2 a 4 oz de jugo de mango"
        ]
    },
    {
        id: 14,
        name: "Blue Long Island Iced Tea",
        slogan: "Té Eléctrico",
        description: "También conocido como Electric Iced Tea o Adios Motherfucker, es una variante vibrante del clásico Long Island. Su color turquesa se debe a que se sustituye el triple seco por Blue Curaçao y la cola por agua tónica.",
        image: "images/blue-long-island.jpg",
        ingredients: [
            "½ oz de Vodka",
            "½ oz de Ron blanco",
            "½ oz de Ginebra",
            "½ oz de Tequila blanco",
            "½ oz de Blue Curaçao",
            "1 oz de limón",
            "2 oz Agua tónica"
        ]
    },
    {
        id: 15,
        name: "New York Sour",
        slogan: "Sofisticación en Capas",
        description: "Es una variante sofisticada del clásico Whiskey Sour que se distingue por una capa flotante de vino tinto en la parte superior. Aunque su nombre sugiere un origen neoyorquino, se cree que fue creado en Chicago alrededor de la década de 1880 bajo nombres como \"Continental Sour\" antes de popularizarse en Nueva York.",
        image: "images/new-york-sour.jpg",
        ingredients: [
            "2 oz de Whisky",
            "1 oz de zumo de limón",
            "¾ oz de Jarabe de goma",
            "½ oz de Vino tinto seco",
            "1 Clara de huevo"
        ]
    },
    {
        id: 16,
        name: "Moscow Mule",
        slogan: "Frescura en Cobre",
        description: "Es un cóctel ultra refrescante, famoso por servirse en una taza de cobre que mantiene el frío al máximo.",
        image: "images/moscow-mule.jpg",
        ingredients: [
            "2 oz de Vodka",
            "½ oz de Zumo de limón",
            "4 a 6 oz de Ginger Beer",
            "1 oz jarabe artesanal",
            "Hielo"
        ]
    },
    {
        id: 17,
        name: "Gin Tonic de Frutos Rojos",
        slogan: "Espectro Aromático",
        description: "Es una variante visualmente espectacular y aromática del clásico combinado. Se aleja del perfil puramente cítrico para ofrecer notas dulces y ligeramente ácidas.",
        image: "images/gin-tonic-frutos-rojos.jpg",
        ingredients: [
            "2 oz de Ginebra",
            "4 a 6 oz de Agua tónica",
            "Jarabe de frutos rojos",
            "Dash de limón"
        ]
    }
];

const grid = document.getElementById('cocktailGrid');
const cocktailCount = document.getElementById('cocktailCount');
const modal = document.getElementById('cocktailModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const themeToggle = document.getElementById('themeToggle');

let currentCocktail = null;

cocktailCount.textContent = cocktails.length;

function createCard(cocktail, index) {
    const card = document.createElement('article');
    card.className = 'cocktail-card';
    card.style.transitionDelay = `${index * 60}ms`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver detalles de ${cocktail.name}`);

    const displayName = cocktail.subtitle
        ? `${cocktail.name} <span style="font-size:0.75em; display:block; color:var(--text-muted); font-style:normal; font-family:var(--font-body); margin-top:4px;">${cocktail.subtitle}</span>`
        : cocktail.name;

    card.innerHTML = `
        <div class="cocktail-card__image-wrapper">
            <img class="cocktail-card__image" src="${cocktail.image}" alt="${cocktail.name}" loading="lazy">
            <div class="cocktail-card__overlay"></div>
            <span class="cocktail-card__number">${cocktail.id}</span>
        </div>
        <div class="cocktail-card__content">
            <h3 class="cocktail-card__name">${displayName}</h3>
            ${cocktail.slogan ? `<p class="cocktail-card__slogan">${cocktail.slogan}</p>` : ''}
            <p class="cocktail-card__description">${cocktail.description}</p>
            <span class="cocktail-card__view">Ver receta <span>→</span></span>
        </div>
    `;

    const openModal = () => showModal(cocktail);
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal();
        }
    });

    return card;
}

function renderCocktails() {
    grid.innerHTML = '';
    cocktails.forEach((cocktail, index) => {
        grid.appendChild(createCard(cocktail, index));
    });
}

function showModal(cocktail) {
    currentCocktail = cocktail;

    document.getElementById('modalImage').src = cocktail.image;
    document.getElementById('modalImage').alt = cocktail.name;
    document.getElementById('modalNumber').textContent = `N° ${cocktail.id.toString().padStart(2, '0')}`;
    document.getElementById('modalName').innerHTML = cocktail.subtitle
        ? `${cocktail.name} <span style="font-size:0.5em; display:block; color:var(--text-muted); font-style:normal; font-family:var(--font-body); margin-top:6px;">${cocktail.subtitle}</span>`
        : cocktail.name;
    document.getElementById('modalSlogan').textContent = cocktail.slogan || '';
    document.getElementById('modalDescription').textContent = cocktail.description;

    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = cocktail.ingredients
        .map(ingredient => `<li>${ingredient}</li>`)
        .join('');

    modalWhatsapp.onclick = openWhatsApp;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentCocktail = null;
    document.querySelector('.modal__body').scrollTop = 0;
}

function openWhatsApp() {
    if (!currentCocktail) return;
    const phone = '51969434750';
    const drinkName = currentCocktail.subtitle
        ? `${currentCocktail.name} (${currentCocktail.subtitle})`
        : currentCocktail.name;
    const text = `Hola, quiero pedir un ${drinkName}. ¿Podrían confirmarme?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
}

modalOverlay.addEventListener('click', hideModal);
modalClose.addEventListener('click', hideModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        hideModal();
    }
});

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('theme-tropical')) {
        body.classList.remove('theme-tropical');
        body.classList.add('theme-elegant');
        localStorage.setItem('theme', 'elegant');
    } else {
        body.classList.remove('theme-elegant');
        body.classList.add('theme-tropical');
        localStorage.setItem('theme', 'tropical');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'tropical') {
        document.body.classList.remove('theme-elegant');
        document.body.classList.add('theme-tropical');
    }
}

themeToggle.addEventListener('click', toggleTheme);

function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.cocktail-card').forEach(card => {
        observer.observe(card);
    });
}

function init() {
    loadTheme();
    renderCocktails();
    setupScrollReveal();
}

init();
