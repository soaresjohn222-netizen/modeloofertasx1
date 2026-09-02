// Pool de imagens por categoria — seleção determinística por id da receita
const POOLS = {
  cat_meal: [
    "https://images.unsplash.com/photo-1609284568429-b73c7ea66d71?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1633761971690-ee5f3aca8415?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1712603257810-9cbe9dfec9cd?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1764576504536-dbdfa4cb1d9a?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  ],
  fish: [
    "https://images.unsplash.com/photo-1634932515818-7f9292c4e149?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1772329354988-cf4ee5e0d99f?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1721542062266-942831edf74b?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  ],
  meat: [
    "https://images.unsplash.com/photo-1721542062266-942831edf74b?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1739595415308-ba632ebfbfe2?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1745252798506-29500efc5b39?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  ],
  dog: [
    "https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1608408891486-f5cade977d19?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    "https://images.unsplash.com/photo-1745252798506-29500efc5b39?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  ],
};

export const PRODUCT_IMAGES = {
  ebook: "https://images.unsplash.com/photo-1739595415308-ba632ebfbfe2?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  suplemento: "https://images.unsplash.com/photo-1781497181976-6670e358172d?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
  kit: "https://images.unsplash.com/photo-1764576504536-dbdfa4cb1d9a?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
};

function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0xffffffff;
  return Math.abs(h);
}

export function recipeImage(id, category) {
  const pool = POOLS[category] || POOLS.cat_meal;
  return pool[hash(id) % pool.length];
}
