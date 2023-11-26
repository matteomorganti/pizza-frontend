import { GlobalStyle } from "../globalStyles";
import Navbar from "../components/Navbar/NavBarSection";
import Footer from "../components/Footer/FooterSection";
import Reserve from "../components/Reserve/ReserveSection";
import { Container } from "@chakra-ui/react";

function Reservation() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Container 
      h={"84vh"}
      maxW="none" 
      backgroundImage="url('https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      >
        <Reserve />
      </Container>
      <Footer />
    </div>
  );
}
export default Reservation;
