// ============================================================
// DADOS DOS FILMES
// ============================================================
const MOVIES = [
  {
    id: 0, title: 'Interestelar', genre: ['scifi','drama'], rating: 4.9,
    duration: '2h 49min', year: 2014, director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine'],
    synopsis: 'Um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade. Uma obra-prima sobre amor, tempo e sobrevivência que redefine o cinema científico.',
    poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIe.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    color: '#1a2a3a', price: 38, badge: 'Obra-prima',
    sessions: [
      {time:'14:30', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'17:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'20:15', room:'Sala 2 — 4DX', date:'hoje'},
      {time:'22:45', room:'Sala 1 — IMAX', date:'hoje'},
    ]
  },
  {
    id: 1, title: 'Batman: O Cavaleiro das Trevas', genre: ['acao','thriller'], rating: 4.9,
    duration: '2h 32min', year: 2008, director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Maggie Gyllenhaal'],
    synopsis: 'Batman enfrenta o Coringa, um criminoso que instiga o caos em Gotham City. Heath Ledger entrega uma performance lendária num dos maiores filmes de super-heróis já feitos.',
    poster: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    color: '#0d1117', price: 36, badge: 'Lendário',
    sessions: [
      {time:'13:00', room:'Sala 2 — 4DX', date:'hoje'},
      {time:'16:30', room:'Sala 4 — VIP', date:'hoje'},
      {time:'19:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'22:00', room:'Sala 2 — 4DX', date:'hoje'},
    ]
  },
  {
    id: 2, title: 'Homem-Aranha: Sem Volta para Casa', genre: ['acao','scifi'], rating: 4.7,
    duration: '2h 28min', year: 2021, director: 'Jon Watts',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch', 'Willem Dafoe'],
    synopsis: 'Peter Parker pede ao Doutor Estranho um feitiço para que todos esqueçam sua identidade secreta — mas algo dá terrivelmente errado, abrindo as portas do multiverso.',
    poster: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
    color: '#1a0a2a', price: 34, badge: 'Multiverso',
    sessions: [
      {time:'15:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'18:00', room:'Sala 2 — 4DX', date:'hoje'},
      {time:'21:00', room:'Sala 4 — VIP', date:'hoje'},
    ]
  },
  {
    id: 3, title: 'Vingadores: Ultimato', genre: ['acao'], rating: 4.8,
    duration: '3h 02min', year: 2019, director: 'Anthony & Joe Russo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson', 'Josh Brolin'],
    synopsis: 'Os Vingadores sobreviventes se reúnem para reverter as ações de Thanos e restaurar a ordem no universo. O épico final de uma saga que durou mais de uma década.',
    poster: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    color: '#1a1a2e', price: 34, badge: 'Épico',
    sessions: [
      {time:'14:00', room:'Sala 2 — 4DX', date:'hoje'},
      {time:'18:30', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'22:30', room:'Sala 2 — 4DX', date:'hoje'},
    ]
  },
  {
    id: 4, title: 'Avatar: O Caminho da Água', genre: ['scifi','acao'], rating: 4.3,
    duration: '3h 12min', year: 2022, director: 'James Cameron',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang'],
    synopsis: 'Jake Sully vive com sua família em Pandora. Quando uma antiga ameaça retorna, ele precisa travar uma guerra difícil para proteger seu povo nas regiões oceânicas do planeta.',
    poster: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
    color: '#0a1a2a', price: 40, badge: 'IMAX 3D',
    sessions: [
      {time:'10:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'14:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'18:30', room:'Sala 1 — IMAX', date:'hoje'},
    ]
  },
  {
    id: 5, title: 'A Origem', genre: ['scifi','thriller'], rating: 4.8,
    duration: '2h 28min', year: 2010, director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
    synopsis: 'Um ladrão especializado em roubar segredos do subconsciente recebe a missão impossível de plantar uma ideia na mente de um empresário. Um mergulho fascinante nos labirintos da mente.',
    poster: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg',
    color: '#1a1520', price: 32, badge: 'Cult',
    sessions: [
      {time:'16:00', room:'Sala 4 — VIP', date:'hoje'},
      {time:'19:30', room:'Sala 3 — Convencional', date:'hoje'},
      {time:'22:00', room:'Sala 4 — VIP', date:'hoje'},
    ]
  },
  {
    id: 6, title: 'Duna: Parte Dois', genre: ['scifi','drama'], rating: 4.6,
    duration: '2h 46min', year: 2024, director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Austin Butler'],
    synopsis: 'Paul Atreides une forças com os Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Uma odisseia visual épica em um universo fascinante.',
    poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
    color: '#2a1a08', price: 36, badge: 'Oscar',
    sessions: [
      {time:'22:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'15:30', room:'Sala 4 — VIP', date:'hoje'},
    ]
  },
  {
    id: 7, title: 'O Rei Leão', genre: ['animacao','drama'], rating: 4.5,
    duration: '1h 58min', year: 2019, director: 'Jon Favreau',
    cast: ['Donald Glover', 'Beyoncé', 'Seth Rogen', 'Chiwetel Ejiofor'],
    synopsis: 'Simba, príncipe da savana, precisa superar a traição e se tornar o rei que seu povo precisa. Uma reimaginação deslumbrante do clássico da Disney.',
    poster: 'https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/9BuBbNmH9KPBR0QRSP7FbSFWFjP.jpg',
    color: '#2a1a00', price: 26, badge: 'Família',
    sessions: [
      {time:'10:00', room:'Sala 3 — Convencional', date:'hoje'},
      {time:'13:30', room:'Sala 3 — Convencional', date:'hoje'},
      {time:'16:00', room:'Sala 1 — IMAX', date:'hoje'},
    ]
  },
  {
    id: 8, title: 'Top Gun: Maverick', genre: ['acao','drama'], rating: 4.6,
    duration: '2h 11min', year: 2022, director: 'Joseph Kosinski',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm'],
    synopsis: 'Após 30 anos de serviço, Pete "Maverick" Mitchell treina os melhores pilotos do Top Gun para uma missão impossível — incluindo o filho de seu falecido melhor amigo.',
    poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/z4t5B5yHtXTJvp37G0pHRbXVbAH.jpg',
    color: '#0a1220', price: 34, badge: 'Aclamado',
    sessions: [
      {time:'15:30', room:'Sala 2 — 4DX', date:'hoje'},
      {time:'18:30', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'21:00', room:'Sala 2 — 4DX', date:'hoje'},
    ]
  },
  {
    id: 9, title: 'Guardiões da Galáxia Vol. 3', genre: ['acao','scifi'], rating: 4.4,
    duration: '2h 30min', year: 2023, director: 'James Gunn',
    cast: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Bradley Cooper'],
    synopsis: 'O passado misterioso de Rocket vem à tona, levando os Guardiões a uma aventura que os colocará frente ao poderoso Alto Evolucionário — numa missão da qual nem todos voltarão.',
    poster: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg',
    color: '#1a0a2a', price: 32, badge: null,
    sessions: [
      {time:'13:00', room:'Sala 3 — Convencional', date:'hoje'},
      {time:'16:30', room:'Sala 2 — 4DX', date:'hoje'},
      {time:'20:00', room:'Sala 1 — IMAX', date:'hoje'},
    ]
  },
  {
    id: 10, title: 'Oppenheimer', genre: ['drama','thriller'], rating: 4.8,
    duration: '3h 00min', year: 2023, director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    synopsis: 'A história do físico J. Robert Oppenheimer e de seu papel no Projeto Manhattan, que levou ao desenvolvimento da bomba atômica durante a Segunda Guerra Mundial.',
    poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    color: '#1a0a00', price: 36, badge: 'Oscar Melhor Filme',
    sessions: [
      {time:'14:00', room:'Sala 4 — VIP', date:'hoje'},
      {time:'18:00', room:'Sala 1 — IMAX', date:'hoje'},
      {time:'21:30', room:'Sala 4 — VIP', date:'hoje'},
    ]
  },
  {
    id: 11, title: 'Coringa', genre: ['thriller','drama'], rating: 4.6,
    duration: '2h 02min', year: 2019, director: 'Todd Phillips',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
    synopsis: 'Arthur Fleck, um comediante fracassado de Gotham City, desce à loucura e se transforma no icônico vilão Coringa. Joaquin Phoenix em uma performance que rendeu o Oscar.',
    poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    backdrop: 'https://image.tmdb.org/t/p/w1280/f5F4cRhCS855Ca5wst99MemwyIs.jpg',
    color: '#1a0a0a', price: 30, badge: 'Oscar',
    sessions: [
      {time:'20:00', room:'Sala 3 — Convencional', date:'hoje'},
      {time:'22:30', room:'Sala 4 — VIP', date:'hoje'},
    ]
  },
];

// ============================================================
// CATEGORIAS
// ============================================================
const CATEGORIES = [
  { id:'acao', label:'Ação', img:'https://image.tmdb.org/t/p/w500/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg' },
  { id:'drama', label:'Drama', img:'https://image.tmdb.org/t/p/w500/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg' },
  { id:'animacao', label:'Animação', img:'https://image.tmdb.org/t/p/w500/9BuBbNmH9KPBR0QRSP7FbSFWFjP.jpg' },
  { id:'terror', label:'Terror', img:'https://image.tmdb.org/t/p/w500/f5uNzHD5FMkNpRSdQGTp5m4LBmC.jpg' },
  { id:'scifi', label:'Sci-Fi', img:'https://image.tmdb.org/t/p/w500/xJHokMbljvjADYdit5fK5VQsXEG.jpg' },
  { id:'romance', label:'Romance', img:'https://image.tmdb.org/t/p/w500/oKt4J3TFjWurXx502svaj5KQLnW.jpg' },
  { id:'thriller', label:'Thriller', img:'https://image.tmdb.org/t/p/w500/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg' },
  { id:'comedia', label:'Comédia', img:'https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGkVA.jpg' },
  { id:'documentario', label:'Documentário', img:'https://image.tmdb.org/t/p/w500/z4t5B5yHtXTJvp37G0pHRbXVbAH.jpg' },
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let currentTab = 'inicio';
let carouselIndex = 0;
let carouselTimer = null;
let selectedSeats = [];
let currentMovieForSeats = null;
let currentSessionForSeats = null;
let activeDay = 0;
let occupiedSeats = {};

// ============================================================
// CURSOR CUSTOMIZADO
// ============================================================
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('button, a, [role=button], select, input, label').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '6px'; cursor.style.height = '6px';
    ring.style.width = '60px'; ring.style.height = '60px';
    ring.style.borderColor = 'rgba(232,199,107,0.6)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px'; cursor.style.height = '12px';
    ring.style.width = '40px'; ring.style.height = '40px';
    ring.style.borderColor = 'rgba(232,199,107,0.4)';
  });
});

// ============================================================
// PARTÍCULAS DO HERO
// ============================================================
function createParticles() {
  const cont = document.getElementById('particles-container');
  if (!cont) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${8 + Math.random() * 12}s;
      animation-delay:${Math.random() * 10}s;
    `;
    cont.appendChild(p);
  }
}
createParticles();

// ============================================================
// NAVEGAÇÃO POR ABAS (SPA)
// ============================================================
function showTab(tab) {
  if (tab === currentTab) return;
  const old = document.getElementById(`page-${currentTab}`);
  if (old) {
    old.style.opacity = '0';
    old.style.transform = 'translateY(8px)';
    setTimeout(() => { old.classList.remove('active'); }, 350);
  }
  currentTab = tab;
  setTimeout(() => {
    const newPage = document.getElementById(`page-${tab}`);
    if (newPage) {
      newPage.classList.add('active');
      requestAnimationFrame(() => {
        newPage.style.opacity = '1';
        newPage.style.transform = 'translateY(0)';
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    initReveal();
  }, tab === currentTab ? 0 : 200);

  // Update nav tabs
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', (t.dataset.tab === tab || t.dataset.tabM === tab));
  });
}

// ============================================================
// MOBILE MENU
// ============================================================
let mobileOpen = false;
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  const menu = document.getElementById('mobile-menu');
  menu.style.maxHeight = mobileOpen ? '300px' : '0';
  document.getElementById('m1').style.transform = mobileOpen ? 'rotate(45deg) translate(4px,4px)' : '';
  document.getElementById('m2').style.transform = mobileOpen ? 'rotate(-45deg) translate(4px,-4px)' : '';
});
function closeMobileMenu() {
  mobileOpen = false;
  document.getElementById('mobile-menu').style.maxHeight = '0';
  document.getElementById('m1').style.transform = '';
  document.getElementById('m2').style.transform = '';
}

// ============================================================
// CARROSSEL AUTOMÁTICO
// ============================================================
function goSlide(i) {
  carouselIndex = i;
  document.getElementById('carousel-track').style.transform = `translateX(-${i * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, di) => {
    d.style.width = di === i ? '24px' : '8px';
    d.style.background = di === i ? 'var(--gold)' : 'rgba(245,245,247,0.3)';
  });
}
function nextSlide() {
  goSlide((carouselIndex + 1) % 3);
  resetCarouselTimer();
}
function prevSlide() {
  goSlide((carouselIndex + 2) % 3);
  resetCarouselTimer();
}
function startCarouselTimer() {
  carouselTimer = setInterval(() => goSlide((carouselIndex + 1) % 3), 5000);
}
function resetCarouselTimer() {
  clearInterval(carouselTimer); startCarouselTimer();
}
startCarouselTimer();

// ============================================================
// RENDERIZAR GRID DE FILMES (EM CARTAZ)
// ============================================================
function buildMovieCard(movie, clickFn) {
  const el = document.createElement('div');
  el.className = 'movie-card reveal';
  const fallbackStyle = `background:linear-gradient(145deg, ${movie.color||'#1a1a2e'} 0%, #0a0a0a 100%); display:flex; align-items:flex-end; padding:1rem;`;
  el.innerHTML = `
    <div style="position:relative; aspect-ratio:2/3; overflow:hidden;">
      <img src="${movie.poster}" alt="${movie.title}" loading="lazy"
           referrerpolicy="no-referrer" crossorigin="anonymous"
           style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s;"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      />
      <div style="${fallbackStyle}; display:none; width:100%; height:100%; position:absolute; top:0; left:0;">
        <span style="font-family:'Cormorant Garamond',serif; font-size:1.1rem; color:#F5F5F7; line-height:1.3;">${movie.title}</span>
      </div>
    </div>
    <div class="movie-card-overlay">
      ${movie.badge ? `<span class="badge badge-gold mb-2">${movie.badge}</span>` : ''}
      <h3 class="font-medium text-sm mb-1">${movie.title}</h3>
      <div class="flex items-center gap-2 mb-3">
        <span class="stars text-xs">${'★'.repeat(Math.round(movie.rating))}${'☆'.repeat(5-Math.round(movie.rating))}</span>
        <span class="text-xs opacity-50">${movie.rating.toFixed(1)}</span>
        <span class="text-xs opacity-40">· ${movie.genre[0]}</span>
      </div>
      <button class="movie-card-btn" onclick="${clickFn}">Ver detalhes</button>
    </div>
  `;
  return el;
}

function renderMoviesGrid(movies, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';
  movies.forEach((m, i) => {
    const card = buildMovieCard(m, `openMovieModal(${m.id})`);
    card.style.transitionDelay = `${i * 0.07}s`;
    grid.appendChild(card);
  });
  setTimeout(initReveal, 50);
}

function renderAllMovies() {
  renderMoviesGrid(MOVIES, 'movies-grid');
}

function filterMovies(btn, genre) {
  document.querySelectorAll('#page-emcartaz .time-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = genre === 'all' ? MOVIES : MOVIES.filter(m => m.genre.includes(genre));
  renderMoviesGrid(filtered, 'movies-grid');
}

// ============================================================
// CATEGORIAS
// ============================================================
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'category-card reveal';
    el.innerHTML = `
      <img src="${cat.img}" alt="${cat.label}" loading="lazy"/>
      <div class="category-card-overlay">
        <span class="font-display text-xl font-light">${cat.label}</span>
      </div>
    `;
    el.onclick = () => filterByCategory(cat.id, cat.label, el);
    grid.appendChild(el);
  });
  setTimeout(initReveal, 50);
}

function filterByCategory(id, label, cardEl) {
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active-filter'));
  cardEl.classList.add('active-filter');
  const filtered = MOVIES.filter(m => m.genre.includes(id));
  document.getElementById('category-title').textContent = label;
  const cm = document.getElementById('category-movies');
  cm.classList.remove('hidden');
  renderMoviesGrid(filtered, 'category-movies-grid');
  cm.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearCategoryFilter() {
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active-filter'));
  document.getElementById('category-movies').classList.add('hidden');
}

// ============================================================
// SESSÕES / CALENDÁRIO
// ============================================================
function buildDayPicker() {
  const picker = document.getElementById('day-picker');
  if (!picker) return;
  picker.innerHTML = '';
  const days = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(now); d.setDate(now.getDate() + i);
    const btn = document.createElement('button');
    btn.className = 'day-btn flex-shrink-0' + (i === activeDay ? ' active' : '');
    btn.innerHTML = `<span class="day-num">${d.getDate()}</span><span>${days[d.getDay()]}</span>`;
    btn.onclick = () => { activeDay = i; buildDayPicker(); renderSessions(); };
    picker.appendChild(btn);
  }
}

function renderSessions() {
  const list = document.getElementById('sessions-list');
  if (!list) return;
  const timeFilter = document.getElementById('time-filter')?.value || 'all';
  const roomFilter = document.getElementById('room-filter')?.value || 'all';

  let allSessions = [];
  MOVIES.forEach(m => {
    m.sessions.forEach(s => {
      allSessions.push({ movie: m, session: s });
    });
  });

  // Filtro horário
  allSessions = allSessions.filter(({session}) => {
    const h = parseInt(session.time.split(':')[0]);
    if (timeFilter === 'manha') return h < 12;
    if (timeFilter === 'tarde') return h >= 12 && h < 18;
    if (timeFilter === 'noite') return h >= 18;
    return true;
  });

  // Filtro sala
  if (roomFilter !== 'all') {
    allSessions = allSessions.filter(({session}) => session.room.startsWith(`Sala ${roomFilter}`));
  }

  // Ordenar por horário
  allSessions.sort((a,b) => a.session.time.localeCompare(b.session.time));

  list.innerHTML = '';
  if (allSessions.length === 0) {
    list.innerHTML = '<p class="text-center py-10 opacity-40 text-sm">Nenhuma sessão encontrada com esses filtros.</p>';
    return;
  }

  allSessions.forEach(({movie, session}) => {
    const el = document.createElement('div');
    el.className = 'glass rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal';
    el.style.cursor = 'default';
    el.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" referrerpolicy="no-referrer" crossorigin="anonymous"
           class="w-14 h-20 object-cover rounded-xl flex-shrink-0"
           onerror="this.style.background='linear-gradient(135deg,${movie.color||'#1a1a2e'} 0%,#0a0a0a 100%)';this.removeAttribute('src');"/>
      <div class="flex-1 min-w-0">
        <p class="font-medium mb-0.5">${movie.title}</p>
        <p class="text-xs opacity-50 mb-2">${movie.duration} · ${movie.genre[0]}</p>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="badge badge-gold">${session.time}</span>
          <span class="text-xs opacity-50">${session.room}</span>
        </div>
      </div>
      <div class="text-right flex-shrink-0">
        <p class="text-xs opacity-40 mb-1">A partir de</p>
        <p class="font-display text-xl font-light gold-text mb-3">R$ ${movie.price}</p>
        <button class="btn-primary text-xs" style="padding:0.5rem 1.2rem;" onclick="openSeatMap(${movie.id}, '${session.time}', '${session.room}')">Escolher assentos</button>
      </div>
    `;
    list.appendChild(el);
  });
  setTimeout(initReveal, 50);
}

// ============================================================
// MODAL DO FILME
// ============================================================
function openMovieModal(movieId) {
  const m = MOVIES.find(x => x.id === movieId);
  if (!m) return;
  currentMovieForSeats = m;

  const modal = document.getElementById('movie-modal');
  const body = document.getElementById('modal-body');
  const stars = '★'.repeat(Math.round(m.rating)) + '☆'.repeat(5 - Math.round(m.rating));

  body.innerHTML = `
    <div class="relative">
      <img src="${m.backdrop}" alt="${m.title}" referrerpolicy="no-referrer" crossorigin="anonymous"
           class="w-full rounded-t-3xl object-cover" style="aspect-ratio:16/7;"
           onerror="this.style.background='linear-gradient(135deg,${m.color||'#1a1a2e'} 0%,#0a0a0a 100%)'; this.style.display='block'; this.removeAttribute('src');"/>
      <div class="absolute inset-0 rounded-t-3xl" style="background:linear-gradient(to bottom, transparent 30%, var(--card) 100%);"></div>
      <div class="absolute bottom-6 left-6">
        ${m.badge ? `<span class="badge badge-gold mb-2">${m.badge}</span>` : ''}
        <h2 class="font-display text-3xl font-light">${m.title}</h2>
      </div>
    </div>

    <div class="p-6">
      <!-- Tabs internas -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button class="modal-tab active" onclick="switchModalTab(this,'mtab-sobre')">Sobre</button>
        <button class="modal-tab" onclick="switchModalTab(this,'mtab-sessoes')">Sessões</button>
        <button class="modal-tab" onclick="switchModalTab(this,'mtab-elenco')">Elenco</button>
      </div>

      <!-- Aba: Sobre -->
      <div id="mtab-sobre" class="modal-tab-content active">
        <div class="flex flex-wrap gap-4 mb-4 text-sm opacity-60">
          <span>⭐ ${m.rating.toFixed(1)}</span>
          <span>⏱ ${m.duration}</span>
          <span>🎬 ${m.genre.join(', ')}</span>
          <span>📅 ${m.year}</span>
        </div>
        <p class="text-sm leading-relaxed mb-4" style="color:rgba(245,245,247,0.75);">${m.synopsis}</p>
        <p class="text-xs opacity-50">Direção: <span class="opacity-100">${m.director}</span></p>
      </div>

      <!-- Aba: Sessões -->
      <div id="mtab-sessoes" class="modal-tab-content">
        <p class="text-sm opacity-50 mb-4">Selecione um horário para escolher seus assentos:</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
          ${m.sessions.map(s => `
            <button class="glass rounded-2xl p-3 text-left cursor-none transition-all hover:border-lumina-gold hover:bg-lumina-gold/10 group" 
                    style="border:1px solid var(--border);"
                    onclick="openSeatMapFromModal(${m.id},'${s.time}','${s.room}')">
              <p class="font-display text-2xl font-light gold-text">${s.time}</p>
              <p class="text-xs opacity-50 mt-1">${s.room}</p>
              <p class="text-xs opacity-40 mt-1">A partir de R$ ${m.price}</p>
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Aba: Elenco -->
      <div id="mtab-elenco" class="modal-tab-content">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
          ${m.cast.map((actor,i) => `
            <div class="glass rounded-xl p-4 text-center">
              <div class="w-14 h-14 rounded-full mx-auto mb-2 flex items-center justify-center text-lg" 
                   style="background:linear-gradient(135deg, rgba(232,199,107,0.2), rgba(74,144,226,0.15));">
                ${actor.charAt(0)}
              </div>
              <p class="text-sm font-medium">${actor}</p>
              <p class="text-xs opacity-40 mt-0.5">Elenco Principal</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
  const modal = document.getElementById('movie-modal');
  const inner = document.getElementById('modal-inner');
  inner.style.transform = 'scale(0.94)'; inner.style.opacity = '0';
  setTimeout(() => {
    modal.classList.remove('open');
    inner.style.transform = ''; inner.style.opacity = '';
    document.body.style.overflow = '';
  }, 350);
}

function switchModalTab(btn, tabId) {
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');
}

// ============================================================
// MAPA DE ASSENTOS
// ============================================================
const ROWS = 10, COLS = 14;
const SEAT_PRICE = { 'Sala 1 — IMAX': 48, 'Sala 2 — 4DX': 44, 'Sala 3 — Convencional': 28, 'Sala 4 — VIP': 55 };
const MAX_SEATS = 8;

function generateOccupied(movieId, sessionTime) {
  const key = `${movieId}-${sessionTime}`;
  if (!occupiedSeats[key]) {
    const occ = new Set();
    const count = Math.floor(Math.random() * 40) + 20;
    while (occ.size < count) {
      occ.add(`${Math.floor(Math.random()*ROWS)}-${Math.floor(Math.random()*COLS)}`);
    }
    occupiedSeats[key] = occ;
  }
  return occupiedSeats[key];
}

function openSeatMap(movieId, sessionTime, room) {
  const m = MOVIES.find(x => x.id === movieId);
  if (!m) return;
  currentMovieForSeats = m;
  currentSessionForSeats = { time: sessionTime, room };
  selectedSeats = [];
  renderSeatMapUI(m, sessionTime, room);
}

function openSeatMapFromModal(movieId, sessionTime, room) {
  const modalInner = document.getElementById('modal-inner');
  modalInner.innerHTML = '';
  currentMovieForSeats = MOVIES.find(x => x.id === movieId);
  currentSessionForSeats = { time: sessionTime, room };
  selectedSeats = [];
  renderSeatMapInModal(movieId, sessionTime, room);
}

function renderSeatMapInModal(movieId, sessionTime, room) {
  const m = MOVIES.find(x => x.id === movieId);
  const occupied = generateOccupied(movieId, sessionTime);
  const price = SEAT_PRICE[room] || m.price;
  const rowLabels = 'ABCDEFGHIJ'.split('');

  const inner = document.getElementById('modal-inner');
  inner.innerHTML = `
    <div>
      <div class="sticky top-0 flex items-center gap-3 p-4" style="background:var(--card);border-bottom:1px solid var(--border);z-index:5;">
        <button onclick="closeMovieModal()" class="modal-close" style="position:static;float:none;margin:0;" aria-label="Fechar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div>
          <p class="font-medium text-sm">${m.title}</p>
          <p class="text-xs opacity-50">${sessionTime} · ${room}</p>
        </div>
      </div>

      <div class="p-6 overflow-x-auto">
        <div class="mb-8">
          <div class="screen-display mb-2 mx-auto" style="max-width:280px;"></div>
          <p class="text-center text-xs opacity-30 tracking-widest uppercase">TELA</p>
        </div>

        <div id="seat-grid" class="flex flex-col items-center gap-1.5 mb-6">
          ${rowLabels.slice(0,ROWS).map((row,r) => `
            <div class="flex items-center gap-1.5">
              <span class="text-xs opacity-30 w-4 text-right mr-1">${row}</span>
              ${Array.from({length:COLS},(_,c) => {
                const key = `${r}-${c}`;
                const isOcc = occupied.has(key);
                return `<div class="seat ${isOcc ? 'occupied' : 'available'}" 
                             id="seat-${r}-${c}"
                             data-row="${r}" data-col="${c}"
                             title="${row}${c+1}"
                             ${!isOcc ? `onclick="toggleSeat(${r},${c})"` : ''}
                             role="${!isOcc ? 'button' : 'img'}"
                             aria-label="Assento ${row}${c+1} ${isOcc ? 'ocupado' : 'disponível'}">
                         </div>`;
              }).join('')}
              <span class="text-xs opacity-30 w-4 ml-1">${row}</span>
            </div>
          `).join('')}
        </div>

        <div class="flex justify-center gap-6 text-xs opacity-60 mb-4">
          <div class="flex items-center gap-1.5"><div class="w-4 h-4 rounded seat available" style="pointer-events:none;"></div> Disponível</div>
          <div class="flex items-center gap-1.5"><div class="w-4 h-4 rounded seat selected" style="pointer-events:none;"></div> Selecionado</div>
          <div class="flex items-center gap-1.5"><div class="w-4 h-4 rounded seat occupied" style="pointer-events:none;"></div> Ocupado</div>
        </div>
      </div>

      <div id="price-bar">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs opacity-50 mb-0.5">Assentos selecionados (<span id="sel-count">0</span>/${MAX_SEATS})</p>
            <p id="sel-seats-label" class="text-xs opacity-40">Nenhum selecionado</p>
          </div>
          <div class="text-right">
            <p class="text-xs opacity-40 mb-0.5">Total</p>
            <p class="font-display text-2xl font-light gold-text" id="total-price">R$ 0</p>
          </div>
        </div>
        <button id="confirm-btn" onclick="confirmSeats()" class="btn-primary w-full mt-3" style="border-radius:12px;padding:0.75rem;opacity:0.4;" disabled>
          Confirmar Seleção
        </button>
      </div>
    </div>
  `;
  window._currentSeatPrice = price;
}

function toggleSeat(r, c) {
  const key = `${r}-${c}`;
  const el = document.getElementById(`seat-${r}-${c}`);
  const occupied = generateOccupied(currentMovieForSeats.id, currentSessionForSeats.time);
  if (occupied.has(key)) return;

  const idx = selectedSeats.indexOf(key);
  if (idx >= 0) {
    selectedSeats.splice(idx, 1);
    el.classList.remove('selected');
    el.classList.add('available');
  } else {
    if (selectedSeats.length >= MAX_SEATS) {
      showToast(`Máximo de ${MAX_SEATS} assentos selecionados.`);
      return;
    }
    selectedSeats.push(key);
    el.classList.remove('available');
    el.classList.add('selected');
  }
  updatePriceBar();
}

function updatePriceBar() {
  const count = selectedSeats.length;
  const price = window._currentSeatPrice || 30;
  const total = count * price;
  const labels = selectedSeats.map(k => {
    const [r,c] = k.split('-').map(Number);
    return `${'ABCDEFGHIJ'[r]}${c+1}`;
  });
  document.getElementById('sel-count').textContent = count;
  document.getElementById('sel-seats-label').textContent = count > 0 ? labels.join(', ') : 'Nenhum selecionado';
  document.getElementById('total-price').textContent = `R$ ${total}`;
  const btn = document.getElementById('confirm-btn');
  if (btn) {
    btn.disabled = count === 0;
    btn.style.opacity = count > 0 ? '1' : '0.4';
  }
}

function confirmSeats() {
  if (selectedSeats.length === 0) return;
  const btn = document.getElementById('confirm-btn');
  btn.innerHTML = `<svg class="spinner inline-block mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Processando...`;
  btn.disabled = true;

  setTimeout(() => {
    btn.innerHTML = `<span style="color:#0a0a0a">✓ Assentos confirmados!</span>`;
    btn.style.background = '#5cb85c';
    setTimeout(() => {
      closeMovieModal();
      showToast('🎬 Compra realizada com sucesso! Aproveite o filme.');
    }, 1200);
  }, 1500);
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(msg) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = `
    position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(20px);
    background:rgba(30,30,30,0.95);backdrop-filter:blur(20px);
    color:var(--text);padding:0.8rem 1.5rem;border-radius:100px;
    border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;
    z-index:99999;transition:all 0.4s ease;opacity:0;white-space:nowrap;
    box-shadow:0 8px 30px rgba(0,0,0,0.5);
  `;
  document.body.appendChild(t);
  requestAnimationFrame(() => { t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)'; });
  setTimeout(() => {
    t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(10px)';
    setTimeout(() => t.remove(), 400);
  }, 3500);
}

// ============================================================
// FORMULÁRIO DE CADASTRO
// ============================================================
function maskCPF(input) {
  let v = input.value.replace(/\D/g,'');
  if (v.length > 9) v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/,'$1.$2.$3-$4');
  else if (v.length > 6) v = v.replace(/(\d{3})(\d{3})(\d{0,3})/,'$1.$2.$3');
  else if (v.length > 3) v = v.replace(/(\d{3})(\d{0,3})/,'$1.$2');
  input.value = v;
  validateField(input);
}

function togglePassword(id, btn) {
  const inp = document.getElementById(id);
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

function validateField(input) {
  const id = input.id;
  let valid = true;
  let errId = 'err-' + id.replace('f-','');

  if (id === 'f-nome') valid = input.value.trim().split(' ').length >= 2;
  if (id === 'f-email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
  if (id === 'f-cpf') valid = input.value.replace(/\D/g,'').length === 11;
  if (id === 'f-nasc') { const age = (new Date() - new Date(input.value)) / 3.15576e10; valid = age >= 6 && age <= 120; }
  if (id === 'f-senha') valid = input.value.length >= 8;
  if (id === 'f-confirma') valid = input.value === document.getElementById('f-senha').value;

  input.classList.toggle('error', !valid);
  input.classList.toggle('success', valid && input.value !== '');
  const errEl = document.getElementById(errId);
  if (errEl) errEl.classList.toggle('show', !valid && input.value !== '');
  return valid;
}

// Validação em tempo real
['f-nome','f-email','f-cpf','f-nasc','f-senha','f-confirma'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => { if (el.classList.contains('error')) validateField(el); });
  }
});

function handleSubmit(e) {
  e.preventDefault();
  const fields = ['f-nome','f-email','f-cpf','f-nasc','f-senha','f-confirma'];
  let allValid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el && !validateField(el)) allValid = false;
  });
  if (!allValid) { showToast('⚠️ Por favor, corrija os campos destacados.'); return; }

  const btn = document.getElementById('submit-btn');
  document.getElementById('btn-text').classList.add('hidden');
  document.getElementById('btn-spinner').classList.remove('hidden');
  btn.disabled = true;

  setTimeout(() => {
    document.getElementById('form-wrapper').style.display = 'none';
    const sc = document.getElementById('success-screen');
    sc.style.display = 'block';
    launchConfetti();
  }, 2000);
}

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti() {
  const colors = ['#E8C76B','#F5F5F7','#4A90E2','#E8A76B','#C76BE8'];
  for (let i = 0; i < 80; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `
      left:${Math.random()*100}vw;
      top:-20px;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${2 + Math.random()*3}s;
      animation-delay:${Math.random()*1.5}s;
      width:${4+Math.random()*8}px;
      height:${4+Math.random()*8}px;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 6000);
  }
}

// ============================================================
// INTERSECTION OBSERVER (REVEAL ANIMATIONS)
// ============================================================
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderAllMovies();
  renderCategories();
  buildDayPicker();
  renderSessions();
  initReveal();

  const p = document.getElementById('page-inicio');
  if (p) { p.style.opacity = '1'; p.style.transform = 'translateY(0)'; }
});

// Atalho: ESC fecha modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMovieModal();
});
