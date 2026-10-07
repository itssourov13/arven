/**
 * Single source of truth for every photograph. Elements in index.html reference
 * these by key (data-img="..."). To go local, drop files in public/assets/images/
 * and replace a value with "/assets/images/<file>.jpg".
 */
const u = (id, w = 1600, q = 72) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const IMAGES = {
  hero: u("photo-1546412414-e1885259563a", 1900),
  tower: u("photo-1512453979798-5ea266f8880c"),
  arrival: u("photo-1600607687939-ce8a6c25118c"),
  living: u("photo-1600210492486-724fe5c67fb0"),
  kitchen: u("photo-1556909212-d5b604d0c90d"),
  suite: u("photo-1616594039964-ae9021a400a0"),
  garden: u("photo-1600566753190-17f0baa2a6c3"),
  pool: u("photo-1571003123894-1f0594d2b5d9"),
  map: u("photo-1524661135-423995f22d0b"),
};
