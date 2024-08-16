import logosarian from "../assets/img/logo_sarian.png";
import "../global.css";

const Header = () => {
  return (
    <div className="flex justify-around items-center pt-10 pb-10 bg-blue-300">
      <a href="#home" className="mr-10 ">
        <img src={logosarian} alt="Logo_Sarian" className="bg-blue-300" />
      </a>
      <div className="flex items-center gap-7 p-10 bg-blue-300">
        <a href="#formations" className="cursor-pointer bg-blue-300">
          Formations
        </a>
        <a href="#agences" className="cursor-pointer bg-blue-300">
          Agences
        </a>
        <a href="#produits" className="cursor-pointer bg-blue-300">
          Produits
        </a>
        <a href="#contact" className="cursor-pointer bg-blue-300">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
