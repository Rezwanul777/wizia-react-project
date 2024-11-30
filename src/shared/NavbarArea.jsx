import {
  Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
  } from "@nextui-org/react";
  import { useState } from "react";


  import { NavLink } from "react-router-dom";
  
  import Logo from "/Logo.png";
import SharedButton from "../libs/SharedButton";

  const NavbarArea = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const navLink = [
      { href: "/about", label: "About us" },
      { href: "/pricing", label: "Pricing" },
      { href: "/customers", label: "Customers" },
      { href: "/solutions", label: "Solutions" },
    ];
  
    return (
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        shouldHideOnScroll
        className="bg-jungleGreen border-[#183A40]"
        maxWidth="xl"
      >
        <NavbarBrand>
          <NavLink to={"/"}>
            <img src={Logo} alt="" />
          </NavLink>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5" justify="start">
          {navLink.map(({ href, label }, i) => (
            <NavbarItem key={i}>
              <NavLink to={href}>
                <p className="font-workSans text-base leading-4 text-white ">
                  {label}
                </p>
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent className="sm:flex hidden" justify="end">
          <Button variant={"solid"} className="text-[16px] bg-primary">
            Book a Demo
          </Button>
          <Button
            className="bg-transparent text-white text-[16px]"
            variant={"bordered"}
          >
            Contacts us
          </Button>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white mx-4"
          />
        </NavbarContent>
  
        {/*Navbar menu */}
        <NavbarMenu className="bg-jungleGreen">
          {navLink.map(({ href, label }, i) => (
            <NavbarMenuItem key={i} href={href}>
              <NavLink to={href}>
                <p className="font-workSans text-base leading-5 text-white">
                  {label}
                </p>
              </NavLink>
            </NavbarMenuItem>
          ))}
          <NavbarItem className="flex justify-start gap-5">
            <SharedButton variant={"solid"} className="text-[16px]">
              Book a Demo
            </SharedButton>
            <SharedButton
              className="bg-transparent text-white text-[16px]"
              variant={"bordered"}
            >
              Contacts us
            </SharedButton>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    );
  };
  
  export default NavbarArea;