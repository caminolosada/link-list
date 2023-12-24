import styled from "styled-components";

const CardStyled = styled.article`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  position: relative;
  border-radius: 20px;
  padding: 40px;
`;

export default CardStyled;
