const BASE_URL = import.meta.env.VITE_API_URL;

export const productApi = {
  getProducts: async () => {
    const res = await fetch(`${BASE_URL}/products`, {
      credentials: "include",
    });
    return res.json();
  },
};