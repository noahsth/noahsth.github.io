// Sample image data (replace with actual images or dynamic loading)
const images = [
    { src: '../wp-content/uploads/decoration/wedding-decor1.jpg', alt: 'Wedding Decoration 1', tags: ['wedding', 'flowers'] },
    { src: '../wp-content/uploads/decoration/birthday-decor1.jpg', alt: 'Birthday Decoration 1', tags: ['birthday', 'balloons'] },
    { src: '../wp-content/uploads/decoration/corporate-decor1.jpg', alt: 'Corporate Decoration 1', tags: ['corporate', 'banners'] },
    // Add more images as needed
];

let currentFilter = 'all';
let searchQuery = '';

// Populate filter controls
const filterControls = document.getElementById('filter-controls');
const allTags = [...new Set(images.flatMap(img => img.tags))];
filterControls.innerHTML = '<button class="filter-btn px-4 py-2 bg-gray-200 rounded hover:bg-red-500 hover:text-white" data-filter="all">All</button>' +
    allTags.map(tag => `<button class="filter-btn px-4 py-2 bg-gray-200 rounded hover:bg-red-500 hover:text-white" data-filter="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</button>`).join('');

// Populate gallery grid
const galleryGrid = document.getElementById('gallery-grid');
function renderGallery() {
    const filteredImages = images.filter(img => 
        (currentFilter === 'all' || img.tags.includes(currentFilter)) &&
        img.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    galleryGrid.innerHTML = filteredImages.map(img => `
        <div class="gallery-item">
            <a href="${img.src}" class="glightbox" data-gallery="decoration-gallery">
                <img src="${img.src}" alt="${img.alt}" class="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow">
            </a>
        </div>
    `).join('');
    // Initialize GLightbox after rendering
    const lightbox = GLightbox({ selector: '.glightbox' });
}
renderGallery();

// Filter event listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentFilter = btn.dataset.filter;
        renderGallery();
    });
});

// Search functionality
const searchInput = document.getElementById('gallery-search-input');
const searchClear = document.getElementById('gallery-search-clear');
searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    renderGallery();
});
searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    renderGallery();
});
