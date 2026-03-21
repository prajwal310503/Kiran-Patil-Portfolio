const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const get = async (path) => {
  const res = await fetch(`${BASE_URL}${path}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  const json = await res.json();
  console.log(`API [${path}]:`, json);
  return json.data;
};

export const getEvents = () => get("/public/events");
export const getEvent = (uid) => get(`/public/event/${uid}`);
export const getGalleries = () => get("/public/galleries");
export const getGallery = (uid) => get(`/public/gallery/${uid}`);
export const getGalleriesByCategory = (categoryUid) => get(`/public/${categoryUid}/galleries`);
export const getCategories = () => get("/public/categories");
export const getCategory = (uid) => get(`/public/category/${uid}`);
