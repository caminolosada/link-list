import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import ContainerStyled from "../shared/ContainerStyled";
import AppStyled from "./AppStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <AppStyled>
        <ContainerStyled />
        <Card />
        <Footer />
      </AppStyled>
    </>
  );
};

export default App;
