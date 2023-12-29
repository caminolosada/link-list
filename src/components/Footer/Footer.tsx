import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
      <p>Built with 💜 by Camino Losada, {currentYear}</p>
    </FooterStyled>
  );
};

export default Footer;
