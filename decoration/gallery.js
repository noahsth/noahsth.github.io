// Scalable filter & gallery implementation for Decoration
// To add filters or images: edit `filters` (below) and `images` array.

const filters = [
  { key: 'all', label: 'All Photos' },
//   { key: 'wedding', label: 'Wedding' },
//   { key: 'event', label: 'Event' },
//   { key: 'floral', label: 'Floral' },
//   { key: 'outdoor', label: 'Outdoor' }
];

// Placeholder images. Each item: {id, src, title, propertyId, tags: []}
const images = [
{ id: 1, src: '../wp-content/uploads/decoration/decoration (1).jpg', title:'Floral Setup', propertyId: 'decor', tags: ['Wedding Floral', 'decoration', 'wedding', 'floral'] },
{ id: 2, src: '../wp-content/uploads/decoration/decoration (2).jpg', title:'Table Arrangement', propertyId: 'event-decor', tags: ['Wedding Floral', 'decoration', 'wedding', 'floral'] },
{ id: 3, src: '../wp-content/uploads/decoration/decoration (3).jpg', title:'Entrance Decor', propertyId: 'decorevent', tags: ['Wedding Floral', 'decoration', 'wedding', 'floral'] },

// { id: 1, src: '../wp-content/uploads/decoration/decoration (1).jpg', title:'Floral Setup', propertyId: 'wedding-floral-decor', tags: ['Wedding Floral', 'decoration', 'wedding', 'floral'] },
// { id: 2, src: '../wp-content/uploads/decoration/decoration (2).jpg', title:'Table Arrangement', propertyId: 'wedding-floral-decor', tags: ['Wedding Floral', 'decoration', 'wedding', 'floral'] },
// { id: 3, src: '../wp-content/uploads/decoration/decoration (3).jpg', title:'Entrance Decor', propertyId: 'wedding-floral-decor', tags: ['Wedding Floral', 'decoration', 'wedding', 'floral'] },
// { id: 4, src: '../wp-content/uploads/decoration/decoration (4).jpg', title:'Centerpiece', propertyId: 'event-decor', tags: ['Event Decor', 'decoration', 'event'] },
// { id: 5, src: '../wp-content/uploads/decoration/decoration (5).jpg', title:'Venue Setup', propertyId: 'event-decor', tags: ['Event Decor', 'decoration', 'event'] },
// { id: 6, src: '../wp-content/uploads/decoration/decoration (6).jpg', title:'Stage Design', propertyId: 'event-decor', tags: ['Event Decor', 'decoration', 'event'] },
// { id: 7, src: '../wp-content/uploads/decoration/decoration (7).jpg', title:'Outdoor Garden', propertyId: 'outdoor-wedding', tags: ['Outdoor Wedding', 'decoration', 'wedding', 'outdoor'] },
// { id: 8, src: '../wp-content/uploads/decoration/decoration (8).jpg', title:'Garden Decor', propertyId: 'outdoor-wedding', tags: ['Outdoor Wedding', 'decoration', 'wedding', 'outdoor'] },
 ];

const state = {
  activeFilter: 'all',
  searchQuery: '',
  selectedTag: null,
  selectedTagImages: []
};

function createFilterButtons() {
  const container = document.getElementById('filter-controls');
  container.innerHTML = '';
  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn px-4 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-red-600 hover:text-white';
    btn.dataset.filter = f.key;
    btn.textContent = f.label;
    if (f.key === 'all') btn.classList.add('active');
    btn.addEventListener('click', () => {
      document.querySelectorAll('#filter-controls .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = f.key;
      renderGallery();
    });
    container.appendChild(btn);
  });
}

function matchesFilter(item) {
  if (state.activeFilter === 'all') return true;
  const normalize = s => String(s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const target = normalize(state.activeFilter);
  return item.tags.some(t => normalize(t) === target);
}

function matchesSearch(item) {
  if (!state.searchQuery) return true;
  const q = state.searchQuery.trim().toLowerCase();
  const tagString = item.tags.join(' ').toLowerCase();
  const title = (item.title || '').toLowerCase();
  return tagString.includes(q) || title.includes(q);
}

function getPropertyId(item) {
  return item.propertyId;
}

function getPropertyName(propId) {
  const img = images.find(i => i.propertyId === propId);
  return img ? img.tags[0] : propId;
}

function groupImagesByProperty() {
  const grouped = {};
  images.forEach(img => {
    const propId = getPropertyId(img);
    if (!grouped[propId]) {
      grouped[propId] = [];
    }
    grouped[propId].push(img);
  });
  return grouped;
}

function getPropertyPreview(propId) {
  const grouped = groupImagesByProperty();
  return grouped[propId] ? grouped[propId][0] : null;
}

function getImagesForProperty(propId) {
  const grouped = groupImagesByProperty();
  return grouped[propId] || [];
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  
  if (state.selectedTag) {
    renderTagDetail();
    return;
  }
  
  const visible = images.filter(img => matchesFilter(img) && matchesSearch(img));
  const seenProps = new Set();
  const uniqueProps = [];
  
  visible.forEach(img => {
    const propId = getPropertyId(img);
    if (!seenProps.has(propId)) {
      seenProps.add(propId);
      uniqueProps.push(propId);
    }
  });
  
  uniqueProps.forEach(propId => {
    const previewImg = getPropertyPreview(propId);
    if (!previewImg) return;
    
    const allPropImages = getImagesForProperty(propId);
    const propName = getPropertyName(propId);
    const imageCount = allPropImages.length;
    
    const card = document.createElement('div');
    card.className = 'portfolio-card bg-white shadow-sm cursor-pointer hover:shadow-md transition-shadow';
    
    const imageEl = document.createElement('img');
    imageEl.src = previewImg.src;
    imageEl.alt = propName;
    
    const meta = document.createElement('div');
    meta.className = 'portfolio-meta';
    meta.innerHTML = `
      <div class="text-sm font-semibold">${propName}</div>
      <div class="text-xs text-gray-200 mt-1">${imageCount} ${imageCount === 1 ? 'photo' : 'photos'}</div>
    `;
    
    card.appendChild(imageEl);
    card.appendChild(meta);
    
    card.addEventListener('click', () => {
      state.selectedTag = propId;
      state.selectedTagImages = allPropImages;
      renderGallery();
    });
    
    grid.appendChild(card);
  });
  
  attachImageLoadHandlers();
}

function renderTagDetail() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  
  const propName = getPropertyName(state.selectedTag);
  
  const gridContainer = grid.parentElement;
  const existingBackBtn = gridContainer.querySelector('.back-button-wrapper');
  if (existingBackBtn) existingBackBtn.remove();
  
  const backBtnWrapper = document.createElement('div');
  backBtnWrapper.className = 'back-button-wrapper';
  backBtnWrapper.innerHTML = `
    <button id="back-to-gallery" class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
      <i class="fas fa-arrow-left"></i> Back to Gallery
    </button>
  `;
  gridContainer.insertBefore(backBtnWrapper, grid);
  
  document.getElementById('back-to-gallery').addEventListener('click', () => {
    state.selectedTag = null;
    state.selectedTagImages = [];
    renderGallery();
  });
  
  const filtered = state.selectedTagImages.filter(img => matchesFilter(img) && matchesSearch(img));
  
  filtered.forEach((img) => {
    const a = document.createElement('a');
    a.href = img.src;
    a.className = 'glightbox';
    a.setAttribute('data-gallery', `decoration-${state.selectedTag}`);
    
    const card = document.createElement('div');
    card.className = 'portfolio-card bg-white shadow-sm';
    
    const imageEl = document.createElement('img');
    imageEl.src = img.src;
    imageEl.alt = img.title || '';
    
    const meta = document.createElement('div');
    meta.className = 'portfolio-meta';
    meta.innerHTML = `<div class="text-sm font-semibold">${img.title}</div><div class="text-xs text-gray-200 mt-1">${img.tags[0]}</div>`;
    
    card.appendChild(imageEl);
    card.appendChild(meta);
    a.appendChild(card);
    grid.appendChild(a);
  });
  
  if (window._glight) window._glight.destroy();
  window._glight = GLightbox({ 
    selector: `.glightbox[data-gallery="decoration-${state.selectedTag}"]`
  });
  
  attachImageLoadHandlers();
}

function attachImageLoadHandlers() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  const imgs = grid.querySelectorAll('img');
  let remaining = imgs.length;
  if (remaining === 0) return;
  imgs.forEach(img => {
    if (img.complete) {
      remaining -= 1;
    } else {
      img.addEventListener('load', () => {
        remaining -= 1;
      }, { once: true });
      img.addEventListener('error', () => {
        remaining -= 1;
      }, { once: true });
    }
  });
}

const originalRenderGallery = renderGallery;
renderGallery = function() {
  originalRenderGallery();
  attachImageLoadHandlers();
};

function setupSearch() {
  const input = document.getElementById('gallery-search-input');
  const clearBtn = document.getElementById('gallery-search-clear');
  input.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderGallery();
  });
  clearBtn.addEventListener('click', () => {
    input.value = '';
    state.searchQuery = '';
    renderGallery();
  });
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

createFilterButtons();
renderGallery();
setupSearch();

window.GalleryConfig = { filters, images, renderGallery };
