import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap-reverse;
`;

const Type = styled.button<{ enabled: boolean }>`
  padding: 10px 20px;
  margin: 5px;
  border-radius: 20px;
  border: 0;
  background-color: ${(props) => (props.enabled ? props.theme.main : null)};
  color: ${(props) => (props.enabled ? "white" : "black")};
  cursor: pointer;
  :active {
    background-color: ${(props) => props.theme.lighter};
  }
`;
const Header = styled.h3`
  font-size: 20px;
  color: ${(props) => props.theme.main};
  margin-left: 20px;
`;

const sort = ["ascending", "descending"];

function SortBar(props: { current: string; setSort: any }) {
  return (
    <>
      <Header>Sort</Header>
      <Container>
        {sort?.map((type) => (
          <Type
            key={type}
            enabled={props.current === type}
            onClick={() => props.setSort(type)}
          >
            {type}
          </Type>
        ))}
      </Container>
    </>
  );
}

export default SortBar;
