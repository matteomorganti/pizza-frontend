import Footer from "../components/Footer/FooterSection";
import NavBar from "../components/Navbar/AdminNavBar";
import { GlobalStyle } from "../globalStyles";
import ReservationAdmin from "../components/Admin/ReservationAdmin";
import MenuAdmin from "../components/Admin/MenuAdmin";
import { Container } from "@chakra-ui/react";
function Home() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Container maxW="none">
        <ReservationAdmin />
        <MenuAdmin />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
