import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import ContainerStyled from "../shared/ContainerStyled";

const App = (): React.ReactElement => {
  return (
    <>
      <ContainerStyled />
      <Card />
      <Footer />
    </>
  );
};

export default App;
