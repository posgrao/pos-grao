import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_pg.svg"; // Adjusted path to the assets folder
import { FaRegMoon, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Header() {
  const path = useLocation().pathname;

  const { currentUser } = useSelector((state) => state.user);

  return (
    <Navbar className="border-b-3">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Procurar..."
          rightIcon={FaSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <FaSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="user" img={currentUser.profilePicture} rounded />
            }
          >
            <DropdownHeader>
              <span className='block text-sm'>{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </DropdownHeader>
            <Link to={'/dashboard?tab=profile'}>
              <DropdownItem>
                Perfil
              </DropdownItem>
            </Link>
            <DropdownDivider />
            <DropdownItem>
                Sair
              </DropdownItem>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="greenToBlue">Entrar</Button>
          </Link>
        )}

        <NavbarToggle></NavbarToggle>
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/sobre"} as={"div"}>
          <Link to="/sobre">Sobre Nós</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Pós-colheita</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
