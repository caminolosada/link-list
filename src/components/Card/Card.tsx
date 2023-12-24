import Profile from "../Profile/Profile";
import CardStyled from "./CardStyled";

const Card = (): React.ReactElement => {
  return (
    <CardStyled>
      <Profile />
    </CardStyled>
  );
};

export default Card;
