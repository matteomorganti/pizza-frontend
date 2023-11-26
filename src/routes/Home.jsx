import Hero from "../components/Hero/Hero";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/FooterSection";
import About from "../components/About/AboutSection";
import Menu from "../components/Menu/MenuSection";
import NavBar from "../components/Navbar/NavBarSection";
import { GlobalStyle } from "../globalStyles";
import Contacts from "../components/Contacts/ContactsSection";
function Home() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <About />
      <Menu />
      <Feature />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Home;
