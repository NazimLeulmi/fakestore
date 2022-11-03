import axios from "axios";

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
};

type Products = Product[] | undefined;

async function fetchProducts(
  limit: number,
  category: string | undefined
): Promise<Products> {
  const categ = category !== "" ? "/category/" + category : "";
  const products = await axios.get(
    `https://fakestoreapi.com/products${categ}?limit=${limit}`
  );
  return products.data;
}

export default fetchProducts;
