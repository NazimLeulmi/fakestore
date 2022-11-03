import FilterBar from "../components/filter";
import Navbar from "../components/navbar";
import Search from "../components/search";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchCategories from "../requests/fetchCategories";
import fetchProducts from "../requests/fetchProducts";
import styled from "styled-components";
import fetchCart from "../requests/fetchCart";
import { useState } from "react";
import Product from "../components/product";
import SortBar from "../components/sort";
import { CartProduct } from "../requests/putCart";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const ProductsList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  box-sizing: border-box;
  padding: 15px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media (min-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;

const Btn = styled.button`
  width: 150px;
  height: 50px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
  border-radius: 5px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: ${(props) => props.theme.main};
  font-size: 16px;
  cursor: pointer;
  :active {
    background-color: ${(props) => props.theme.lighter};
  }
`;

function Products() {
  // App State
  const [limit, setLimit] = useState(6);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("descending");
  const [category, setCategory] = useState("");
  const [newProducts, setNewProducts] = useState<CartProduct[]>([]); // memik a cart

  // Fetch Categories //
  const { data: categories, isLoading } = useQuery(
    ["categories"],
    fetchCategories
  );

  // Fetch Products //
  const {
    data: products,
    isLoading: Loading,
    refetch,
  } = useQuery(
    ["products", limit, category],
    () => fetchProducts(limit, category),
    {
      keepPreviousData: true,
    }
  );

  // Fetch Cart //
  // const { data: cart } = useQuery(["carts"], fetchCart);

  function fetchMore() {
    setLimit((prevState) => prevState + 6);
  }

  function sortData(value: string) {
    setSort(value);
  }

  function filterCategory(value: string) {
    setCategory((prevState) => (prevState === value ? "" : value));
  }

  function addToCart(product: CartProduct) {
    setNewProducts((prevState) => {
      return [...prevState, product];
    });
  }

  return (
    <Container>
      <Navbar counter={newProducts?.length} />
      <Search
        onChange={(event: any) => {
          setSearch(event.target.value);
        }}
      />
      <FilterBar
        categories={categories}
        setFilter={filterCategory}
        current={category}
      />
      <SortBar current={sort} setSort={sortData} />
      <ProductsList>
        {products
          ?.sort((a, b) => {
            const value =
              sort === "descending"
                ? a.price > b.price
                  ? -1
                  : 1
                : a.price > b.price
                ? 1
                : -1;
            return value;
          })
          .filter((product) => {
            if (search === "") return product;
            if (
              product.title.toLowerCase().includes(search) ||
              product.description.toLocaleLowerCase().includes(search)
            ) {
              return product;
            }
          })
          .map((product) => (
            <Product product={product} key={product.id} addToCart={addToCart} />
          ))}
      </ProductsList>
      <Btn onClick={fetchMore}>SHOW MORE</Btn>
    </Container>
  );
}

export default Products;
