const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getProductById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};
