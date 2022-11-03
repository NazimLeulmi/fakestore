import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const Container = styled.div`
  width: 90vw;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 15px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  outline: 0;
  padding-left: 35px;
`;

function Search(props: { onChange: any }) {
  return (
    <Container>
      <Input type="search" onChange={props.onChange} />
      <Icon path={mdiMagnify} size={1} style={{ position: "absolute" }} />
    </Container>
  );
}

export default Search;
