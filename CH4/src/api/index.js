const BASE_URL = import.meta.env.VITE_API_URL;

export const productApi = {
  getProducts: async () => {
    const res = await fetch(`${BASE_URL}/products`, {
      credentials: "include",
    });
    return res.json();
  },

  getProductDetail: async (productId) => {
    const res = await fetch(`${BASE_URL}/products/${productId}`, {
      credentials: "include",
    });
    return res.json();
  },

  addToCart: async (productId, size, quantity) => {
    const res = await fetch(`${BASE_URL}/cart/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        size,
        quantity,
      }),
      credentials: "include",
    });
    return res.json();
  },

  updateLike: async (productId) => {
    const res = await fetch(`${BASE_URL}/products/${productId}/like`, {
      method: "PATCH",
      credentials: "include",
    });
    return res.json();
  },
};