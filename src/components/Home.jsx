import Agency from "../Pages/Agency.jsx";
import Contact from "../Pages/Contact.jsx";
import Formations from "../Pages/Formations.jsx";
import Header from "../Pages/Header.jsx";
import Products from "../Pages/Products.jsx";
import "../index.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Formations></Formations>
      <Agency></Agency>
      <Products></Products>
      <Contact></Contact>
    </>
  );
};

export default Home;
