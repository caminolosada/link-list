import styled from "styled-components";

const ContainerStyled = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, #553b98 0.5px, transparent 0.5px);
  background-color: ${(props) => props.theme.colors.social};
  background-size: 20px 20px;
`;

export default ContainerStyled;
