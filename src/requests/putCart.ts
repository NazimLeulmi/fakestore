import axios from "axios";

export type CartProduct = {
  productId: number;
  quantity: number;
};

export type Cart = {
  userId: number;
  date: string;
  products: CartProduct[];
};

async function fetchCart(newCart: Cart) {
  const response = await axios.put("https://fakestoreapi.com/carts/1");
  return response.data;
}

export default fetchCart;
