import styled from "styled-components";

const CardStyled = styled.article`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 40px;
  margin-top: 40px;
  margin-bottom: 90px;
`;

export default CardStyled;
