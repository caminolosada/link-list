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
  min-width: 320px;

  @media (min-width: 400px) {
    margin: 40px;
  }
  @media (min-width: 1080px) {
    padding: 40px;
    flex-direction: row;
    gap: calc(17% - 40px);
    min-height: 580px;
    width: calc(60% - 40px);
    height: auto;
    max-width: 860px;
  }
`;

export default CardStyled;
