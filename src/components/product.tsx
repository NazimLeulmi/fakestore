import { useState } from "react";
import styled from "styled-components";
import { Product as ProductType } from "../requests/fetchProducts";

const Container = styled.div`
  width: 100%;
  height: 500px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  align-self: center;
  position: relative;
  margin-bottom: 15px;
`;

const Img = styled.img`
  height: 200px;
  width: 150px;
  margin: 25px;
  align-self: center;
  margin-top: 45px;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Price = styled.h5`
  font-size: 16px;
  background-color: #ffe261;
  padding: 10px;
  border-radius: 20px;
  color: black;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 14px;
`;

const Description = styled.h4`
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
`;

const Footer = styled.footer`
  display: flex;
  margin-top: 15px;
  margin-bottom: 5px;
  align-items: center;
  position: absolute;
  bottom: 15px;
  width: 90%;
`;

const Rating = styled.h6`
  font-size: 14px;
  margin-left: 20px;
`;

const Btn = styled.button`
  width: 150px;
  height: 50px;
  align-self: center;
  border: 0;
  margin-right: auto;
  color: ${(props) => props.theme.main};
  font-weight: bold;
  cursor: pointer;
  :active {
    background-color: ${(props) => props.theme.lighter};
  }
`;

const CounterBtn = styled.button`
  border: 0;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  :active {
    background-color: ${(props) => props.theme.lighter};
  }
`;

const Quanitity = styled.div`
  display: flex;
  align-items: center;
`;

function Product(props: { product: ProductType | undefined; addToCart: any }) {
  const [quantity, setQuantity] = useState<number>(0);

  function more() {
    setQuantity((prevState) => prevState + 1);
  }
  function less() {
    setQuantity((prevState) => (prevState === 0 ? prevState : prevState - 1));
  }

  return (
    <Container>
      <Price>{props.product?.price} $</Price>
      <Img src={props.product?.image} />
      <Title>{props.product?.title}</Title>
      <Description>{props.product?.description}</Description>
      <Footer>
        <Btn
          disabled={quantity === 0}
          onClick={() =>
            props.addToCart({
              productId: props.product?.id,
              quantity: quantity,
            })
          }
        >
          ADD TO CART
        </Btn>
        <Quanitity>
          <CounterBtn onClick={more}>+</CounterBtn>
          {quantity}
          <CounterBtn onClick={less}>-</CounterBtn>
        </Quanitity>
        <Rating>{props.product?.rating.rate} / 5</Rating>
      </Footer>
    </Container>
  );
}

export default Product;
