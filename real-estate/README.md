Gallery page helper and editing instructions

Files created:
- image/index.html
- image/gallery.css
- image/gallery.js

How filters are structured
- `image/gallery.js` contains a `filters` array of objects: `{ key: 'round-rock', label: 'Round Rock' }`.
- `key` is the single-word identifier used in each image's `tags` array.
- To add a new filter: add an object to `filters`. Example:
  { key: 'commercial', label: 'Commercial' }

How images are defined
- `image/gallery.js` contains an `images` array. Each image is an object:
  { id: 1, src: 'URL-or-path', title: 'Caption', tags: ['real-estate','round-rock'] }
- `tags` must contain filter `key` values (lowercase, hyphenated). Search matches tags and title.

Adding many filters or images
- For many images, you can generate the `images` array from a JSON file or inject via server-side template.
- Keep `key` values normalized (lowercase, hyphen, no spaces) to avoid mismatches.

Search menu placement
- A search UI element is included in `index.html` inside the filter section (`#gallery-search-menu`).
- Tell me where you'd like the search menu inserted (e.g., site header, sidebar, or sticky floating button) and I will move it into that location.

Notes
- Lightbox uses GLightbox (CDN). If you prefer a local copy, replace the CDN links in `index.html`.
- Placeholder images use `picsum.photos`; replace `src` with your real image paths from `wp-content/uploads/...` when ready.

Quick dev checklist
- Open `image/index.html` in browser to verify.
- Replace placeholder `images[].src` with real paths.
- Add extra filters via `filters` and tags via `images[].tags`.
