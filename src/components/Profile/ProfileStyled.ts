import styled from "styled-components";

interface ProfileStyledProps {
  className?: string;
  children?: React.ReactNode;
}

const ProfileStyled = styled.section<ProfileStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 240px;
  .profile {
    &__name {
      color: ${(props) => props.theme.colors.theme};
      font-size: ${(props) => props.theme.fontSize.large};
      font-weight: ${(props) => props.theme.fontWeight.medium};
    }

    &__photo {
      padding: 20px 0px;
    }

    &__role {
      color: ${(props) => props.theme.colors.theme};
      font-size: ${(props) => props.theme.fontSize.medium};
      font-weight: ${(props) => props.theme.fontWeight.semibold};
    }

    &__ubication {
      padding: 20px 0px;
      font-size: ${(props) => props.theme.fontSize.small};
      font-weight: ${(props) => props.theme.fontWeight.semibold};
    }

    &__about {
      font-size: ${(props) => props.theme.fontSize.extraSmall};
    }
  }
`;

export default ProfileStyled;
