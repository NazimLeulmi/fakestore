import axios from "axios";

export type Cart = {
  id: number;
  date: string;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
  userId: number;
};

async function fetchCart(): Promise<Cart | undefined> {
  const cart = await axios.get("https://fakestoreapi.com/carts/1");
  return cart.data;
}

export default fetchCart;
