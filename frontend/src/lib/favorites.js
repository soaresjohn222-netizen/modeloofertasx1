// Favoritos persistidos em cookie leve (frontend-managed)
const KEY = "pet_favoritos";

function readCookie(name) {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function writeCookie(name, value) {
  const maxAge = 60 * 60 * 24 * 180; // 180 dias
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; samesite=lax`;
}

export function getFavorites() {
  try {
    const raw = readCookie(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isFavorite(id) {
  return getFavorites().includes(id);
}

export function toggleFavorite(id) {
  const favs = getFavorites();
  const next = favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id];
  writeCookie(KEY, JSON.stringify(next));
  return next;
}
