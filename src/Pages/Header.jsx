import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import logosarian from "../assets/img/logo_sarian.png";

const Header = () => {
  return (
    <div className="flex justify-around items-center pt-10 mr-10vh">
      <a className="mr-10">
        <img src={logosarian} alt="Logo_Sarian" />
      </a>
      <Menubar className="flex items-center border-none gap-7 p-10">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">Formations</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">Produits</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="cursor-pointer">Livres</MenubarItem>
            <MenubarItem className="cursor-pointer">Disques</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">Agences</MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="cursor-pointer">
              Siège de Kercado
            </MenubarItem>
            <MenubarItem className="cursor-pointer">
              Noyal sur Vilaine
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">Contact</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Header;
