/**
 * ARVEN RESIDENCES — public visual system
 * Public Unsplash image URLs are used for the concept build.
 * Replace with commissioned/project renders later without touching markup.
 */
const u = (id, w = 2000, q = 82) =>
  "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + w + "&q=" + q;

export const IMAGES = {
  hero: u("photo-1751473199442-3913fc8a6de2", 2400),
  tower: u("photo-1758448511578-ec292173b70c", 2200),
  arrival: u("photo-1771888703723-01d85da1dae1", 1800),
  living: u("photo-1783581166963-62ab0930da61", 1800),
  kitchen: u("photo-1771287490583-ab03482ba338", 1800),
  suite: u("photo-1779648596385-bac45f45d1ed", 1800),
  garden: u("photo-1776363497229-616cc7a541fe", 2000),
  pool: u("photo-1773393767558-97ba4dc319f4", 2200),
  spa: u("photo-1772616748530-7cd73053f326", 1600),
  map: u("photo-1524661135-423995f22d0b", 1800),
  dusk: u("photo-1751473199442-3913fc8a6de2", 2200)
};
