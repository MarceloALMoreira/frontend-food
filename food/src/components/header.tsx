import { styled } from "styled-components";
import logo from "../assets/food.png";
import Button from "./ui/button";
const Header = () => {
  return (
    <ContainerHeader>
      <img src={logo} alt="Logo" />

      <div>
        <a href="">Histórico</a>
        <Button>Adicionar</Button>
      </div>
    </ContainerHeader>
  );
};

export default Header;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  border: 1px solid red;
  max-width: 100%;
  height: 100%;

  img {
    max-width: 100px;
    width: 10%;
  }
`;
