"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { useTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import homeContent from "@/core/data/homeContent";
import ThemeToggle from "../../common/ThemeToggle";
import AnimatedNavLink from "./AnimatedNavLink";
import {
  TOPBAR_VARIANTS,
  MOBILE_MENU_VARIANTS,
  NAV_ITEM_VARIANTS,
} from "@/core/ui/Animations/headerAnimations";

import {
  HeaderContainer,
  TopBarWrapper,
  TopBarContent,
  ContactInfo,
  ContactItem,
  MainNav,
  NavContent,
  DesktopNavLinks,
  MobileMenuOverlay,
  MobileNavLinkWrapper,
  MobileMenuButton,
  ThemeLogo,
  LogoContainer,
} from "./Layout.styles";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = homeContent.navItems || [];
  const contact = {
    phone: homeContent?.contacts?.phone?.display,
    email: homeContent?.contacts?.email?.primary,
    address: homeContent?.contacts?.address?.full,
  };

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      {/* TopBar Animated Collapse on Scroll */}
      <TopBarWrapper
        variants={TOPBAR_VARIANTS}
        animate={isScrolled ? "hidden" : "visible"}
        initial="visible"
      >
        <TopBarContent>
          <ContactInfo>
            <ContactItem whileHover={{ scale: 1.05 }}>
              <Phone size={16} />
              <span>{contact.phone}</span>
            </ContactItem>
            <ContactItem whileHover={{ scale: 1.05 }}>
              <Mail size={16} />
              <span>{contact.email}</span>
            </ContactItem>
            <ContactItem whileHover={{ scale: 1.05 }}>
              <MapPin size={16} />
              <span>{contact.address}</span>
            </ContactItem>
          </ContactInfo>

          <ContactInfo>
            {[
              { Icon: Facebook, title: "Facebook" },
              { Icon: Twitter, title: "Twitter" },
              { Icon: Youtube, title: "YouTube" },
              { Icon: Instagram, title: "Instagram" },
            ].map(({ Icon, title }, idx) => (
              <ContactItem key={idx} title={title} whileHover={{ y: -2, scale: 1.15 }}>
                <Icon size={18} style={{ cursor: "pointer" }} />
              </ContactItem>
            ))}
          </ContactInfo>

          <div>
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
      </TopBarWrapper>

      {/* Main Navigation */}
      <MainNav>
        <NavContent>
          <LogoContainer whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/">
              <ThemeLogo
                src="/images/LOGO-ADICO--LIGHT.jpg"
                alt="ADICO Consortium Logo"
                $isDarkMode={theme.mode === "dark"}
                $logoMode={false}
              />
              <ThemeLogo
                src="/images/LOGO-ADICO--DARK.jpg"
                alt="ADICO Consortium Logo"
                $isDarkMode={theme.mode === "dark"}
                $logoMode={true}
              />
            </Link>
          </LogoContainer>

          {/* Desktop Links with Sliding Active Indicator */}
          <DesktopNavLinks>
            {navItems.map((item) => (
              <AnimatedNavLink
                key={item.href}
                href={item.href}
                isActive={pathname === item.href}
              >
                {item.label}
              </AnimatedNavLink>
            ))}
          </DesktopNavLinks>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <ThemeToggle uniqueId="navbar" />

            <MobileMenuButton 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </MobileMenuButton>
          </div>
        </NavContent>
      </MainNav>

      {/* Modern Circular Clip-Path Reveal Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuOverlay
            variants={MOBILE_MENU_VARIANTS}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map((item) => (
              <MobileNavLinkWrapper key={item.href} variants={NAV_ITEM_VARIANTS}>
                <AnimatedNavLink
                  href={item.href}
                  isActive={pathname === item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </AnimatedNavLink>
              </MobileNavLinkWrapper>
            ))}
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}