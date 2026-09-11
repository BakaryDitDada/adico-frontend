"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "styled-components";
import ThemeToggle from "./ThemeToggle";
import {
  HeaderContainer,
  MainNav,
  NavContent,
  NavLinks,
  NavLink,
  MobileMenuButton,
  ThemeLogo,
  LogoContainer,
} from "../website/layout/Layout.styles";

export default function UiComponentsHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Back to Home" },
    { href: "/ui-components", label: "UI Components" },
  ] || [];


  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <MainNav>
        <NavContent>
          <LogoContainer>
            {/* Light Mode Logo */}
            <ThemeLogo
              src={"images/LOGO-ADICO--LIGHT.jpg"} 
              alt="ADICO Consortium Logo" 
              // $isDarkMode={isDarkMode} 
              $isDarkMode={theme.mode === "dark"} 
              $logoMode={false} 
            />
            
            {/* Dark Mode Logo */}
            <ThemeLogo 
              src={"images/LOGO-ADICO--DARK.jpg"} 
              alt="ADICO Consortium Logo" 
              $isDarkMode={theme.mode === "dark"} 
              $logoMode={true} 
            />
          </LogoContainer>

          <NavLinks $isOpen={isMenuOpen}>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                $isActive={pathname === item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            {/* <CTAButton href="/contact">Nous Contacter</CTAButton> */}
          </NavLinks>

          <ThemeToggle />

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavContent>
      </MainNav>
    </HeaderContainer>
  )
 

}
