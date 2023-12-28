import LinkList from "../LinkList/LinkList";
import Profile from "../Profile/Profile";
import CardStyled from "./CardStyled";

const Card = (): React.ReactElement => {
  return (
    <CardStyled>
      <Profile />
      <LinkList />
    </CardStyled>
  );
};

export default Card;
