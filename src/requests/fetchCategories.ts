import axios from "axios";

type Categories = string[];

async function fetchCategories(): Promise<Categories> {
  const categories = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return categories.data;
}

export default fetchCategories;
