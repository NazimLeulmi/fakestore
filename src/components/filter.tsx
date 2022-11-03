import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap-reverse;
`;

const Category = styled.button<{ enabled: boolean }>`
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

type Categories = string[] | undefined;

function FilterBar(props: {
  categories: Categories;
  setFilter: any;
  current: string;
}) {
  return (
    <>
      <Header>Filter</Header>
      <Container>
        {props.categories?.map((category) => (
          <Category
            key={category}
            enabled={props.current === category}
            onClick={() => props.setFilter(category)}
          >
            {category}
          </Category>
        ))}
      </Container>
    </>
  );
}

export default FilterBar;
