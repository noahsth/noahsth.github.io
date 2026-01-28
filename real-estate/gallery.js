// Scalable filter & gallery implementation
// To add filters or images: edit `filters` (below) and `images` array.

const filters = [
  { key: 'all', label: 'All Photos' },
   { key: 'georgetown', label: 'Georgetown' },
   { key: 'round-rock', label: 'Round Rock' },
   { key: 'austin', label: 'Austin' },
   { key: 'pflugerville', label: 'Pflugerville' },
   { key: 'cedar park', label: 'Cedar Park' }
];

// Placeholder images. Each item: {id, src, title, propertyId, tags: []}
const images = [
{ id: 1, src: '../wp-content/uploads/real-estate/realestate (1).jpg', title:'Exterior', propertyId:'Pro1', tags: ['2950 E Old Settlers Blvd Round Rock, TX 78665', 'Round Rock'] },
{ id: 2, src: '../wp-content/uploads/real-estate/realestate (2).jpg', title:'Interior', propertyId:'Pro1', tags: ['2950 E Old Settlers Blvd Round Rock, TX 78665', 'Round Rock'] },
{ id: 3, src: '../wp-content/uploads/real-estate/realestate (3).jpg', title:'Interior', propertyId:'Pro1', tags: ['2950 E Old Settlers Blvd Round Rock, TX 78665', 'Round Rock'] },
{ id: 4, src: '../wp-content/uploads/real-estate/realestate (4).jpg', title:'Interior', propertyId:'Pro1', tags: ['2950 E Old Settlers Blvd Round Rock, TX 78665', 'Round Rock'] },
{ id: 5, src: '../wp-content/uploads/real-estate/realestate (5).jpg', title:'Interior', propertyId:'Pro1', tags: ['2950 E Old Settlers Blvd Round Rock, TX 78665', 'Round Rock'] },
{ id: 6, src: '../wp-content/uploads/real-estate/realestate (6).jpg', title:'Interior', propertyId:'Pro1', tags: ['2950 E Old Settlers Blvd Round Rock, TX 78665', 'Round Rock'] },
{ id: 7, src: '../wp-content/uploads/real-estate/realestate (7).jpg', title:'Interior', propertyId:'Pro2', tags: ['1529 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 8, src: '../wp-content/uploads/real-estate/realestate (8).jpg', title:'Interior', propertyId:'Pro2', tags: ['1530 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 9, src: '../wp-content/uploads/real-estate/realestate (9).jpg', title:'Interior', propertyId:'Pro2', tags: ['1531 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 10, src: '../wp-content/uploads/real-estate/realestate (10).jpg', title:'Interior', propertyId:'Pro2', tags: ['1532 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 11, src: '../wp-content/uploads/real-estate/realestate (11).jpg', title:'Exterior', propertyId:'Pro2', tags: ['1533 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 12, src: '../wp-content/uploads/real-estate/realestate (12).jpg', title:'Interior', propertyId:'Pro2', tags: ['1534 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 13, src: '../wp-content/uploads/real-estate/realestate (13).jpg', title:'Interior', propertyId:'Pro2', tags: ['1535 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 14, src: '../wp-content/uploads/real-estate/realestate (14).jpg', title:'Interior', propertyId:'Pro2', tags: ['1536 Gautami Dr Austin, TX 78753', 'Austin'] },
{ id: 15, src: '../wp-content/uploads/real-estate/realestate (15).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1800 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 16, src: '../wp-content/uploads/real-estate/realestate (16).jpg', title:'Interior', propertyId:'Pro3', tags: ['1801 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 17, src: '../wp-content/uploads/real-estate/realestate (17).jpg', title:'Interior', propertyId:'Pro3', tags: ['1802 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 18, src: '../wp-content/uploads/real-estate/realestate (18).jpg', title:'Interior', propertyId:'Pro3', tags: ['1803 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 19, src: '../wp-content/uploads/real-estate/realestate (19).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1804 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 20, src: '../wp-content/uploads/real-estate/realestate (20).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1805 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 21, src: '../wp-content/uploads/real-estate/realestate (21).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1806 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 22, src: '../wp-content/uploads/real-estate/realestate (22).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1807 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 23, src: '../wp-content/uploads/real-estate/realestate (23).jpg', title:'Interior', propertyId:'Pro3', tags: ['1808 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 24, src: '../wp-content/uploads/real-estate/realestate (24).jpg', title:'Interior', propertyId:'Pro3', tags: ['1809 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 25, src: '../wp-content/uploads/real-estate/realestate (25).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1810 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 26, src: '../wp-content/uploads/real-estate/realestate (26).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1811 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 27, src: '../wp-content/uploads/real-estate/realestate (27).jpg', title:'Exterior', propertyId:'Pro3', tags: ['1812 Buffalo Gap Rd Austin, TX 78734', 'Austin'] },
{ id: 28, src: '../wp-content/uploads/real-estate/realestate (28).jpg', title:'Interior', propertyId:'Pro4', tags: ['2471 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 29, src: '../wp-content/uploads/real-estate/realestate (29).jpg', title:'Exterior', propertyId:'Pro4', tags: ['2472 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 30, src: '../wp-content/uploads/real-estate/realestate (30).jpg', title:'Exterior', propertyId:'Pro4', tags: ['2473 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 31, src: '../wp-content/uploads/real-estate/realestate (31).jpg', title:'Interior', propertyId:'Pro4', tags: ['2474 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 32, src: '../wp-content/uploads/real-estate/realestate (32).jpg', title:'Interior', propertyId:'Pro4', tags: ['2475 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 33, src: '../wp-content/uploads/real-estate/realestate (33).jpg', title:'Interior', propertyId:'Pro4', tags: ['2476 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 34, src: '../wp-content/uploads/real-estate/realestate (34).jpg', title:'Interior', propertyId:'Pro4', tags: ['2477 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 35, src: '../wp-content/uploads/real-estate/realestate (35).jpg', title:'Interior', propertyId:'Pro4', tags: ['2478 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 36, src: '../wp-content/uploads/real-estate/realestate (36).jpg', title:'Interior', propertyId:'Pro4', tags: ['2479 Sunrise Rd #35 Round Rock, TX 78664', 'Round Rock'] },
{ id: 37, src: '../wp-content/uploads/real-estate/realestate (37).jpg', title:'Interior', propertyId:'Pro5', tags: ['15224 Sarahs Creek Dr Dr Pflugerville, TX 78660', 'Pflugerville'] },
{ id: 38, src: '../wp-content/uploads/real-estate/realestate (38).jpg', title:'Exterior', propertyId:'Pro5', tags: ['15225 Sarahs Creek Dr Dr Pflugerville, TX 78660', 'Pflugerville'] },
{ id: 39, src: '../wp-content/uploads/real-estate/realestate (39).jpg', title:'Exterior', propertyId:'Pro5', tags: ['15226 Sarahs Creek Dr Dr Pflugerville, TX 78660', 'Pflugerville'] },
{ id: 40, src: '../wp-content/uploads/real-estate/realestate (40).jpg', title:'Interior', propertyId:'Pro5', tags: ['15227 Sarahs Creek Dr Dr Pflugerville, TX 78660', 'Pflugerville'] },
{ id: 41, src: '../wp-content/uploads/real-estate/realestate (41).jpg', title:'Interior', propertyId:'Pro5', tags: ['15228 Sarahs Creek Dr Dr Pflugerville, TX 78660', 'Pflugerville'] },
{ id: 42, src: '../wp-content/uploads/real-estate/realestate (42).jpg', title:'Interior', propertyId:'Pro5', tags: ['15229 Sarahs Creek Dr Dr Pflugerville, TX 78660', 'Pflugerville'] },
];




const state = {
  activeFilter: 'all',
  searchQuery: '',
  selectedTag: null, // Track if viewing a specific tag's gallery
  selectedTagImages: [] // Store images for the selected tag
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
  
  // For address/property filters, match the exact property tag (first tag)
  if (state.activeFilter.includes('Blvd') || state.activeFilter.includes('Dr')) {
    return getPropertyTag(item) === state.activeFilter;
  }
  
  // For category filters (real-estate, round-rock, austin, etc), normalize and match
  const normalize = s => String(s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const target = normalize(state.activeFilter);
  return item.tags.some(t => normalize(t) === target);
}

function matchesSearch(item) {
  if (!state.searchQuery) return true;
  const q = state.searchQuery.trim().toLowerCase();
  // match against tags and title
  const tagString = item.tags.join(' ').toLowerCase();
  const title = (item.title || '').toLowerCase();
  return tagString.includes(q) || title.includes(q);
}

// Get the primary property ID for grouping
function getPropertyId(item) {
  return item.propertyId;
}

// Get the display name for a property (first address tag in that group)
function getPropertyName(propId) {
  const img = images.find(i => i.propertyId === propId);
  return img ? img.tags[0] : propId;
}

// Group images by propertyId
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

// Get preview image for a property group
function getPropertyPreview(propId) {
  const grouped = groupImagesByProperty();
  return grouped[propId] ? grouped[propId][0] : null;
}

// Get all images for a property
function getImagesForProperty(propId) {
  const grouped = groupImagesByProperty();
  return grouped[propId] || [];
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  
  // If viewing a specific property's gallery
  if (state.selectedTag) {
    renderTagDetail();
    return;
  }
  
  // Main grouped view
  const visible = images.filter(img => matchesFilter(img) && matchesSearch(img));
  
  // Get unique property IDs from visible images
  const seenProps = new Set();
  const uniqueProps = [];
  
  visible.forEach(img => {
    const propId = getPropertyId(img);
    if (!seenProps.has(propId)) {
      seenProps.add(propId);
      uniqueProps.push(propId);
    }
  });
  
  // Create grouped preview cards
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
    
    // Click to view property detail
    card.addEventListener('click', () => {
      state.selectedTag = propId;
      state.selectedTagImages = allPropImages;
      renderGallery();
    });
    
    grid.appendChild(card);
  });
  
  attachImageLoadHandlers();
}

// Render detail view for a specific property
function renderTagDetail() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  
  const propName = getPropertyName(state.selectedTag);
  
  // Add back button ABOVE the grid (outside)
  const gridContainer = grid.parentElement;
  const existingBackBtn = gridContainer.querySelector('.back-button-wrapper');
  if (existingBackBtn) existingBackBtn.remove();
  
  const backBtnWrapper = document.createElement('div');
  backBtnWrapper.className = 'back-button-wrapper';
  backBtnWrapper.innerHTML = `
    <button id="back-to-gallery" class="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
      <i class="fas fa-arrow-left"></i> Back to Properties
    </button>
  `;
  gridContainer.insertBefore(backBtnWrapper, grid);
  
  document.getElementById('back-to-gallery').addEventListener('click', () => {
    state.selectedTag = null;
    state.selectedTagImages = [];
    renderGallery();
  });
  
  // Render all images for this property
  const filtered = state.selectedTagImages.filter(img => matchesFilter(img) && matchesSearch(img));
  
  filtered.forEach((img) => {
    const a = document.createElement('a');
    a.href = img.src;
    a.className = 'glightbox';
    a.setAttribute('data-gallery', `property-${state.selectedTag}`);
    
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
    selector: `.glightbox[data-gallery="property-${state.selectedTag}"]`
  });
  
  attachImageLoadHandlers();
}

// Attach image load hooks (simplified - no layout calculation)
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

// Simplified render wrapper - removed layoutGrid() call
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

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close menu when clicking menu links
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Initialize
createFilterButtons();
renderGallery();
setupSearch();

// Expose helpers for future edits
window.GalleryConfig = { filters, images, renderGallery };
