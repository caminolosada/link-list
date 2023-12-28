import styled from "styled-components";

interface LinkListStyledProps {
  className?: string;
  children?: React.ReactNode;
}

const LinkListStyled = styled.div<LinkListStyledProps>`
  display: flex;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: ${(props) => props.theme.fontSize.extraSmall};
  margin-top: 40px;

  .list {
    display: flex;
    flex-direction: column;
    min-width: 240px;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 20px;
      padding: 12px 20px;
      border: 2px solid ${(props) => props.theme.colors.theme};
      border-radius: 15px;
      transition: transform 0.1s;
      min-height: 52px;

      &:hover {
        transform: scale(1.05);

        font-weight: ${(props) => props.theme.fontWeight.semibold};
      }
    }
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export default LinkListStyled;
