import styled from "styled-components";
import LogoSrc from "../assets/logo.png";
import Icon from "@mdi/react";
import { mdiHeart, mdiCartVariant } from "@mdi/js";

const Container = styled.nav`
  width: 100%;
  height: 70px;
  padding: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  font-size: 24px;
  margin-left: 15px;
  margin-right: auto;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Counter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 10px;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
`;
const LogoContainer = styled.div`
  margin-right: 15px;
  position: relative;
`;

function Navbar(props: { counter: number | undefined }) {
  return (
    <Container>
      <Logo src={LogoSrc} />
      <Header>eCommerce</Header>
      <LogoContainer>
        <Icon path={mdiCartVariant} size={1.5} color="rgba(0,0,0,.5)" />
        <Counter>{props.counter}</Counter>
      </LogoContainer>
    </Container>
  );
}

export default Navbar;
