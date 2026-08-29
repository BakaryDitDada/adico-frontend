"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "styled-components";

import homeContent from "@/core/data/homeContent";
import ThemeToggle from "../../common/ThemeToggle";
import {
  HeaderContainer,
  TopBar,
  TopBarContent,
  ContactInfo,
  ContactItem,
  MainNav,
  NavContent,
  Logo,
  LogoText,
  NavLinks,
  NavLink,
  MobileMenuButton,
  LogoImage,
  ThemeLogo,
  LogoContainer,
} from "./Layout.styles";
import { Instagram, Youtube, Twitter, Facebook } from "lucide-react";

export default function Header() {
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

  const navItems = homeContent.navItems || [];
  const contact = {
    phone: homeContent?.contacts?.phone.display,
    email: homeContent?.contacts?.email.primary,
    address: homeContent?.contacts?.address.full,
  }

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <ContactItem>
              <Phone size={16} />
              <span>{contact.phone}</span>
            </ContactItem>
            <ContactItem>
              <Mail size={16} />
              <span>{contact.email}</span>
            </ContactItem>
            <ContactItem>
              <MapPin size={16} />
              <span>{contact.address}</span>
            </ContactItem>
          </ContactInfo>
          <ContactInfo>
            <ContactItem title="Facebook">
              <Facebook size={20} style={{cursor: "pointer"}}/>
            </ContactItem>
            <ContactItem title="Twitter">
              <Twitter size={20} style={{cursor: "pointer"}}/>
            </ContactItem>
            <ContactItem title="YouTube">
              <Youtube size={20} style={{cursor: "pointer"}}/>
            </ContactItem>
            <ContactItem title="YouTube">
              <Instagram size={20} style={{cursor: "pointer"}}/>
            </ContactItem>
          </ContactInfo>
          <div style={{ display: "flex", gap: "15px" }}>
            <Link
              href="/dashboard"
              style={{
                color: "white",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              Portail <strong>ADICO-GES+</strong>
            </Link>
          </div>
        </TopBarContent>
      </TopBar>

      <MainNav>
        <NavContent>
          {/* <Logo href="/" onClick={() => setIsMenuOpen(false)}>
            <LogoImage><span className="green">A</span><span className="yellow">DI</span><span className="red">CO</span></LogoImage>
            <LogoText>
              <h1>Mali</h1>
            </LogoText>
          </Logo> */}
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
